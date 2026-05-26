import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import GuiddeScrn from '../screens/GuiddeScrn';
import GuideDetailScrn from '../screens/GuideDetailScrn';
import {GuideItem} from '../data/guideData';

export type GuideStackParamList = {
  GuiddeList: undefined;
  GuideDetail: {item: GuideItem};
};

const Stack = createStackNavigator<GuideStackParamList>();

const GuideStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#060C18'},
      }}>
      <Stack.Screen name="GuiddeList" component={GuiddeScrn} />
      <Stack.Screen name="GuideDetail" component={GuideDetailScrn} />
    </Stack.Navigator>
  );
};

export default GuideStackNav;
