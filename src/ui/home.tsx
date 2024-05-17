import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Latest from './home/latest';
import Notification from './home/notification';
import Disscussion from './home/disscussion';
import Jobs from './home/jobs';
import { useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { useTheme } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
    const theme = useTheme();
    return (
        <Tab.Navigator
            initialRouteName='Latest'
            screenListeners={({ route }) => ({ // listener receives navigation, route
                tabPress: () => {
                    console.log(route);
                },
            })}
            screenOptions={{
                swipeEnabled: true,
                tabBarScrollEnabled: true,
                tabBarAllowFontScaling: true,
                tabBarGap: 1,
                tabBarStyle: {
                    backgroundColor : theme.colors.primary,
                },
                tabBarLabelStyle: {
                    fontWeight: "bold",
                    textTransform: 'capitalize',
                    fontSize: 16,
                },
                tabBarIndicatorStyle: {
                    height: 5,
                    borderRadius: 4,
                    flexDirection: 'row',
                    marginHorizontal : 10,
                    backgroundColor: theme.colors.surface,
                },

            }}>
            <Tab.Screen name="Latest" component={Latest}
                options={{
                    tabBarLabel: 'Latest'
                }} />
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarLabel: 'Notification'
            }} />
            <Tab.Screen name="Jobs" component={Jobs} options={{
                tabBarLabel: 'Jobs'
            }} />
            <Tab.Screen name="Disscusion" component={Disscussion} options={{
                tabBarLabel: 'Disscusion'
            }} />
        </Tab.Navigator>
    )

}