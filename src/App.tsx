/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './ui';
import OptionMenu from './component/optionMenu';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider, useTheme } from './component/themeContext';

const Stack = createNativeStackNavigator();

function AppContent(){
  const { theme, switchColorTheme } = useTheme();

  return (
    <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName='Main' screenOptions={{
        headerTitle: 'What-Next',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.appBar,
        },
        headerTitleStyle: {
          fontFamily: 'OpenSans-Regular',
          fontWeight: 'bold',
          fontSize: 20,
          color: theme.colors.topTab.activeColor
        }
      }}>
        <Stack.Screen name='Main' component={Main}
          options={{
            headerRight: () => (
              <OptionMenu onSelectTheme={(name) => {
                console.log(name)
                switchColorTheme(name);
              }} />
            ),
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
  )
}

function App() {
 
  // const switchColorTheme = (name: String) => {
  //   switch (name) {
  //     // case 'Dark':
  //     //   setMyTheme(AppDarkTheme);
  //     //   break;
  //     // case 'Indigo':
  //     //   setMyTheme(ThemeIndigo);
  //     //   break;
  //     // case 'Green':
  //     //   setMyTheme(ThemeGreen);
  //     //   break;
  //     // case 'Red':
  //     //   setMyTheme(ThemeRed);
  //     //   break;
  //     // case 'Pink':
  //     //   setMyTheme(ThemePink);
  //     //   break;
  //     // case 'Purple':
  //     //   setMyTheme(ThemePurple);
  //     //   break;
  //     // case 'Cyan':
  //     //   setMyTheme(ThemeCyan);
  //     //   break;
  //     // case 'Amber':
  //     //   setMyTheme(ThemeAmber);
  //     //   break;
  //     // case 'Orange':
  //     //   setMyTheme(ThemeOrange);
  //     //   break;
  //     // case 'Deep Orange':
  //     //   setMyTheme(ThemeDeepOrange);
  //     //   break;
  //     // case 'Brown':
  //     //   setMyTheme(ThemeBrown);
  //     //   break;

  //     default:
  //       setMyTheme(AppLightTheme)
  //       break;
  //   }
  // }

  return (
    <ThemeProvider>
       <AppContent/>
    </ThemeProvider>
  );
}

export default App;

