import React from 'react';

import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import TelaDuCarai from './views/TelaDuCarai'
import SegundaTela from './views/SegundaTela'

const Drawer = createDrawerNavigator();

function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TelaDuCarai} />
        <Drawer.Screen name="Segunda" component={SegundaTela} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
