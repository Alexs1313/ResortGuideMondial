import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import TabNav from '../../TabNav';
import Onboard from '../screens/Onboard';
import Loadder from '../components/Loadder';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#030807'},
      }}>
      <Stack.Screen name="Loadder" component={Loadder} />
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="TabNav" component={TabNav} />
    </Stack.Navigator>
  );
};

export default StackNav;
