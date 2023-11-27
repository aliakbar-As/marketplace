import React, { useEffect } from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const widthScreens = Dimensions.get('window').width;


export default MyTabBar = ({ state, descriptors, navigation }) => {
    
    const focused = descriptors[state.routes[state.index].key].options;

    if (focused.tabBarVisible === false) {
        return null;
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((item, index) => {
                const { options } = descriptors[item.key];
                const label = options.tabBarLabel !== undefined ? options.tabBarLabel : item.name;


                const isfocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: item.key,
                        canPreventDefault: true,
                    });

                    if(!isfocused && !event.canPreventDefault) {
                        navigation.navigate(item.name)
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: item.key,
                    });
                };

                return (
                    <TouchableWithoutFeedback
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isfocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessiBilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >

                        <View style={styles.tabContainer}>
                            <Icon
                                name={options.iconName}
                                size={20}
                                style={{ alignSelf: 'center' }}
                                color={isfocused ? 'red' : 'grey'}
                            />

                            <Text style={[styles.tabTitles, { color: isfocused ? 'red' : 'grey' }]}>
                                {label}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })}
        </View>
    );
};

const styles = {
    tabTitles: {
        fontSize: 12,
        textAlign: 'center',

    },
    tabContainer: {
        paddingVertical: 3,
        width: widthScreens / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderTopWidth: 1,
        borderColor: '#ccc'
    }
}