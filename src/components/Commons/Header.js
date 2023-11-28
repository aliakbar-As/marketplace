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
            

            <Text style={styles.title}>{title}</Text>

           
        </View>
    );
};

const styles = {
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2d2d2d',
        flex: 1,
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
