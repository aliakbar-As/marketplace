import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreens from './HomeScreens';

import MyTabBar from './MyTabBar'

const Tab = createBottomTabNavigator();

export default TabScreens = () => {
    return (
        <Tab.Navigator
            initialRouteName='homeScreens'
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen
                name='homeScreens'
                component={HomeScreens}
                options={{
                    tabBarLabel: 'Home',
                    iconName: 'home',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='OrderScreens'
                component={HomeScreens}
                options={{
                    tabBarLabel: 'Cart',
                    iconName: 'shoppingcart',
                    headerShown: false
                }}
            />


        </Tab.Navigator>
    )
}