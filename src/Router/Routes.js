import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabScreens from "./TabScreens/TabScreens";


const Stack = createStackNavigator();

export default RouterComponent = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName="tabScreens"
                screenOptions={{
                    headerShown: false
                }}
                presentation={'card'}
            >


                <Stack.Screen
                    name="tabScreens"
                    component={TabScreens}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}