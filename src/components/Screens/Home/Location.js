import React from 'react';
import { StyleSheet, View, Platform, Text } from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import mapStyle from '../../../assets/json/customMapStyle.json';

import Icon from 'react-native-vector-icons/Entypo'

const Location = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <MapView
                provider={Platform.OS === 'ios' ? null : PROVIDER_GOOGLE}
                style={styles.map}
                customMapStyle={mapStyle}
                region={{
                    latitude: 35.7870708,
                    longitude: 51.4664278,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                }}
            >
            </MapView>

            <Icon
                name={'location-pin'}
                size={100}
                color={'red'}
                style={styles.gpsStyle}
                onPress={() => navigation.navigate('OrderScreens')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    gpsStyle: {
        position: 'absolute',
        zIndex: 1,
        top: '40%',
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Location;