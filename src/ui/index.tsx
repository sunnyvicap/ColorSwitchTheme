import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from 'react-native-vector-icons/Octicons';
import React from "react";
import Home from "./home";
import { AudioVideo } from "./audiovideo";
import { Magasine } from "./magasine";
import { useTheme } from "react-native-paper";

const Tab = createBottomTabNavigator();

export default function Main() {
    const theme = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarActiveTintColor : theme.colors.onPrimary,
                tabBarStyle : {
                    height : 50,
                    backgroundColor : theme.colors.primary
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color }) => (
                       <Octicons name="home" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Playlist"
                component={AudioVideo}
                options={{
                    tabBarLabel: 'Playlist',
                    tabBarIcon: ({ color }) => (
                        <Octicons name="play" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Magsine"
                component={Magasine}
                options={{
                    tabBarLabel: 'Magsine',
                    tabBarIcon: ({ color }) => (
                        <Octicons name="book" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Event"
                component={Magasine}
                options={{
                    tabBarLabel: 'Event',
                    tabBarIcon: ({ color }) => (
                        <Octicons name="star" color={color} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}