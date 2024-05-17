/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import Main from './ui';
import OptionMenu from './component/colorMenu';
import { PaperProvider } from 'react-native-paper';
import { AppDarkTheme, ThemeAmber, ThemeBlue, ThemeBrown, ThemeCyan, ThemeDeepOrange, ThemeGreen, ThemeIndigo, ThemeOrange, ThemePink, ThemePurple, ThemeRed } from './component/themeContext';

const Stack = createNativeStackNavigator();

function App() {
  const [myTheme, setMyTheme] = useState(ThemeBlue);

  const switchColorTheme = (name: String) => {
    switch (name) {
      case 'Dark':
        setMyTheme(AppDarkTheme);
        break;
      case 'Indigo':
        setMyTheme(ThemeIndigo);
        break;
      case 'Green':
        setMyTheme(ThemeGreen);
        break;
      case 'Red':
        setMyTheme(ThemeRed);
        break;
      case 'Pink':
        setMyTheme(ThemePink);
        break;
      case 'Purple':
        setMyTheme(ThemePurple);
        break;
      case 'Cyan':
        setMyTheme(ThemeCyan);
        break;
      case 'Amber':
        setMyTheme(ThemeAmber);
        break;
      case 'Orange':
        setMyTheme(ThemeOrange);
        break;
      case 'Deep Orange':
        setMyTheme(ThemeDeepOrange);
        break;
      case 'Brown':
        setMyTheme(ThemeBrown);
        break;

      default:
        setMyTheme(ThemeBlue)
        break;
    }
  }


  return (
    <PaperProvider theme={myTheme}>
      <NavigationContainer theme={myTheme}>
        <Stack.Navigator initialRouteName='Main' screenOptions={{
          headerTitle: 'What-Next',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          statusBarColor: myTheme.colors.primary,
          headerStyle: {
            backgroundColor: myTheme.colors.primary,
          },
          headerTitleStyle: {
            fontFamily: 'OpenSans-Regular',
            fontWeight: 'bold',
            fontSize: 20
          }
        }}>
          <Stack.Screen name='Main' component={Main}
            options={{
              headerRight: () => (
                <OptionMenu onSelectTheme={(name) => {
                  switchColorTheme(name);
                }} />
              ),
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

