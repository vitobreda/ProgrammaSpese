import React from 'react';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './src/Home';
import Schedule from './src/Schedule';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {

  const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'purple',
      background: '#cccc',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)'
    }
  }

  function home() {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{title: "Home"}} name="Home" component={Home} />
      </Stack.Navigator>
    )
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : MyTheme}>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={home} />
          <Drawer.Screen name="Schedule" component={Schedule} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}