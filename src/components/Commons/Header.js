import React from 'react';
import { View, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export const Header = ({
    title,
    backOnclick,
    likeOnclick,
    liked,
}) => {
    return (
        <View style={styles.container}>
            <Icon
                name={'arrowleft'}
                size={20}
                color={'gray'}
                onPress={backOnclick}
            />

            <Text style={styles.title}>{title}</Text>

            <Icon
                name={liked ? 'heart' : 'hearto'}
                size={20}
                color={liked ? 'red' : 'gray'}
                onPress={likeOnclick}
            />
        </View>
    );
};

const styles = {
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2d2d2d',
    },
    container: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        height: Platform.OS === 'android' ? 45 : 40,
    },
};
