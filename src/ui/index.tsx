import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from 'react-native-vector-icons/Octicons';
import React from "react";
import Home from "./home";
import { AudioVideo } from "./audiovideo";
import { Magasine } from "./magasine";
import { useTheme } from "../component/themeContext";
import { Event } from "./event";

const Tab = createBottomTabNavigator();

export default function Main() {
    const theme = useTheme().theme;
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: theme.colors.bottomTab.activeColor,
                tabBarInactiveTintColor: theme.colors.bottomTab.inactiveColor,
                tabBarStyle: {
                    position: 'relative',
                    backgroundColor: theme.colors.topTab.backgroundColor,
                    paddingBottom: 4,
      paddingTop: 4,
                },
                tabBarLabelStyle: {
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    fontWeight : 'bold'
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName = 'home';

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Playlist') {
                        iconName = 'play';
                    } else if (route.name === 'Magsine') {
                        iconName = 'book';
                    } else if (route.name === 'Setting') {
                        iconName = 'gear';
                    }

                    return <Octicons name={iconName} color={color} size={20} />
                },
            })}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="Playlist"
                component={AudioVideo}
                options={{
                    tabBarLabel: 'Playlist'
                }}
            />
            <Tab.Screen
                name="Magsine"
                component={Magasine}
                options={{
                    tabBarLabel: 'Magsine',
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Event}
                options={{
                    tabBarLabel: 'Setting',
                }}
            />
        </Tab.Navigator>
    )
}