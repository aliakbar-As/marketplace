import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Orders from "../../components/Screens/Orders/Orders";


const Stack = createStackNavigator();

export default OrderScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen
                name="orders"
                component={Orders}
            />

        </Stack.Navigator>
    )
}