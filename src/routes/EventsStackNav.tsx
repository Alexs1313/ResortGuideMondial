import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {EventItem} from '../data/eventsData';
import EventDetailScrn from '../screens/EventDetailScrn';
import EventsScreen from '../screens/EventsScreen';

export type EventsStackParamList = {
  EventsList: undefined;
  EventDetail: {item: EventItem};
};

const Stack = createStackNavigator<EventsStackParamList>();

const EventsStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#060C18'},
      }}>
      <Stack.Screen name="EventsList" component={EventsScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailScrn} />
    </Stack.Navigator>
  );
};

export default EventsStackNav;
