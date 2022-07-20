import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from '../routes/app.routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
        transluscent={false}
      />
      <AppRoutes />
    </NavigationContainer>
  );
}
