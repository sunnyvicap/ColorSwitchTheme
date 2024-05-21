import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Latest from './home/latest';
import Notification from './home/notification';
import Disscussion from './home/disscussion';
import Jobs from './home/jobs';
import { useTheme } from '../component/themeContext';

const Tab = createMaterialTopTabNavigator();

export default function Home({}) {
    const theme = useTheme().theme;

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
                    backgroundColor : theme.colors.appBar,
                },
                tabBarLabelStyle: {
                    fontWeight: "bold",
                    textTransform: 'capitalize',
                    fontSize: 18,
                    fontFamily: 'OpenSans-Regular',
                    color : theme.colors.topTab.activeColor
                },
                tabBarIndicatorStyle: {
                    height: 5,
                    borderRadius: 4,
                    flexDirection: 'row',
                    backgroundColor: theme.colors.topTab.activeColor,
                },

            }}>
            <Tab.Screen name="Latest" component={Latest}
                options={{
                    tabBarLabel: 'Latest'
                }} />
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarLabel: 'Govt. Release'
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