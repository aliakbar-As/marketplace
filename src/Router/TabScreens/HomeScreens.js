import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../../components/Screens/Home/Home";
import Location from "../../components/Screens/Home/Location";


const Stack = createStackNavigator();

export default HomeScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen
                name="home"
                component={Home}
            />

            <Stack.Screen
                name="map"
                component={Location}
            />
        </Stack.Navigator>
    )
}