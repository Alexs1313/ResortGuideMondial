import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import GuideStackNav from './src/routes/GuideStackNav';
import SavedStackNav from './src/routes/SavedStackNav';
import ServiceesScreen from './src/screens/ServiceesScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import EventsStackNav from './src/routes/EventsStackNav';

const Tab = createBottomTabNavigator();

const tabActive = '#C9A020';
const tabIdle = '#3A4560';

type TabItemProps = {
  label: string;
  focused: boolean;
  source: ImageSourcePropType;
};

const TabItem = ({label, focused, source}: TabItemProps) => {
  const tabColor = focused ? tabActive : tabIdle;
  return (
    <View style={[styles.tabItem]}>
      <View style={styles.tabIconImageWrap}>
        <Image
          source={source}
          style={styles.tabIconImg}
          resizeMode="contain"
          tintColor={tabColor}
        />
      </View>
      <Text style={[styles.tabLabel, {color: tabColor}]}>{label}</Text>
    </View>
  );
};

const TabIconExplore = ({focused}: {focused: boolean}) => (
  <TabItem
    label="Guide"
    focused={focused}
    source={require('./elements/i/tab_services.png')}
  />
);

const TabIconMap = ({focused}: {focused: boolean}) => (
  <TabItem
    label="Saved"
    focused={focused}
    source={require('./elements/i/tab_saved.png')}
  />
);

const TabIconTactics = ({focused}: {focused: boolean}) => (
  <TabItem
    label="Services"
    focused={focused}
    source={require('./elements/i/tab_services.png')}
  />
);

const TabIconStudytasks = ({focused}: {focused: boolean}) => (
  <TabItem
    label="Calendar"
    focused={focused}
    source={require('./elements/i/tab_events.png')}
  />
);

const TabIconGridTrial = ({focused}: {focused: boolean}) => (
  <TabItem
    label="Events"
    focused={focused}
    source={require('./elements/i/tab_events.png')}
  />
);

const TabBarBg = () => <View pointerEvents="none" style={styles.tabBarFill} />;

const TabNav = () => {
  const tabInsets = useSafeAreaInsets();
  const tabBarHeight = 54 + Math.max(tabInsets.bottom, 6);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tabActive,
        tabBarInactiveTintColor: tabIdle,
        tabBarStyle: [
          styles.tabBar,
          {
            height: tabBarHeight,
            paddingBottom: Math.max(tabInsets.bottom, 10),
          },
        ],
        tabBarBackground: TabBarBg,
      }}>
      <Tab.Screen
        name="GuiddeScrn"
        component={GuideStackNav}
        options={({route}) => {
          const focusedRoute =
            getFocusedRouteNameFromRoute(route) ?? 'GuiddeList';
          const hideTabBar = focusedRoute === 'GuideDetail';
          return {
            tabBarIcon: TabIconExplore,
            tabBarStyle: hideTabBar
              ? {display: 'none'}
              : [
                  styles.tabBar,
                  {
                    height: tabBarHeight,
                    paddingBottom: Math.max(tabInsets.bottom, 10),
                  },
                ],
          };
        }}
      />
      <Tab.Screen
        name="SavedScrn"
        component={SavedStackNav}
        options={({route}) => {
          const focusedRoute =
            getFocusedRouteNameFromRoute(route) ?? 'SavedList';
          const hideTabBar = focusedRoute === 'GuideDetail';
          return {
            tabBarIcon: TabIconMap,
            tabBarStyle: hideTabBar
              ? {display: 'none'}
              : [
                  styles.tabBar,
                  {
                    height: tabBarHeight,
                    paddingBottom: Math.max(tabInsets.bottom, 10),
                  },
                ],
          };
        }}
      />
      <Tab.Screen
        name="ServiceesScreen"
        component={ServiceesScreen}
        options={{
          tabBarIcon: TabIconTactics,
        }}
      />
      <Tab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          tabBarIcon: TabIconStudytasks,
        }}
      />
      <Tab.Screen
        name="EventsScreen"
        component={EventsStackNav}
        options={({route}) => {
          const focusedRoute =
            getFocusedRouteNameFromRoute(route) ?? 'EventsList';
          const hideTabBar = focusedRoute === 'EventDetail';
          return {
            tabBarIcon: TabIconGridTrial,
            tabBarStyle: hideTabBar
              ? {display: 'none'}
              : [
                  styles.tabBar,
                  {
                    height: tabBarHeight,
                    paddingBottom: Math.max(tabInsets.bottom, 10),
                  },
                ],
          };
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    paddingTop: 18,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: '#1E2C48',
    borderTopColor: '#1E2C48',
  },
  tabBarFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#060C18',
  },
  tabIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
    height: 28,
  },

  tabItem: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 2,
    borderRadius: 14,
    paddingVertical: 4,
    minWidth: 72,
    minHeight: 53,
  },
  tabLabel: {
    marginTop: 2,
    fontSize: 9,
    fontFamily: 'Cinzel-Regular',
    textAlign: 'center',
  },
  tabDotRow: {
    marginTop: 4,
    height: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: tabActive,
  },
  tabDotGhost: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    opacity: 0,
  },
});

export default TabNav;
