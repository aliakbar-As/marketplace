import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../../components/Screens/Home/Home";


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


        </Stack.Navigator>
    )
}