import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {GuideItem} from '../data/guideData';
import GuideDetailScrn from '../screens/GuideDetailScrn';
import SavedScrn from '../screens/SavedScrn';

export type SavedStackParamList = {
  SavedList: undefined;
  GuideDetail: {item: GuideItem};
};

const Stack = createStackNavigator<SavedStackParamList>();

const SavedStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#060C18'},
      }}>
      <Stack.Screen name="SavedList" component={SavedScrn} />
      <Stack.Screen name="GuideDetail" component={GuideDetailScrn} />
    </Stack.Navigator>
  );
};

export default SavedStackNav;
