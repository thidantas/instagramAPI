import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Timeline from '../../features/home/screens/Timeline';
import Saved from '../../features/home/screens/Saved';
import Comments from '../../features/home/screens/Comments';

const Tab = createBottomTabNavigator();

function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
}

export default AppRoutes;
