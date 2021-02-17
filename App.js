import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import Home from './views/Home'
import SegundaTela from './views/SegundaTela'

const Drawer = createDrawerNavigator();

function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Segunda" component={SegundaTela} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
