import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {tabIcons} from '../../assets';
import {colors} from '../../theme/colors';
import type {MainTabId} from '../../types/navigation';

type TabItem = {
  id: MainTabId;
  label: string;
};

const TABS: TabItem[] = [
  {id: 'guide', label: 'Guide'},
  {id: 'saved', label: 'Saved'},
  {id: 'services', label: 'Services'},
  {id: 'calendar', label: 'Calendar'},
  {id: 'events', label: 'Events'},
];

type BottomTabBarProps = {
  active: MainTabId;
  onChange: (tab: MainTabId) => void;
};

export function BottomTabBar({
  active,
  onChange,
}: BottomTabBarProps): React.JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        {paddingBottom: Math.max(insets.bottom, 10)},
      ]}>
      {TABS.map(tab => {
        const isActive = tab.id === active;
        return (
          <Pressable
            key={tab.id}
            onPress={() => onChange(tab.id)}
            style={styles.item}>
            <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
              <Image
                source={tabIcons[tab.id]}
                style={[
                  styles.icon,
                  {tintColor: isActive ? colors.tabActive : colors.tabInactive},
                ]}
                resizeMode="contain"
              />
            </View>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.tabBarBg,
    borderTopWidth: 1,
    borderTopColor: colors.tabBarBorder,
    paddingTop: 18,
    paddingHorizontal: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingVertical: 4,
    minWidth: 56,
  },
  iconWrap: {
    width: 54,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {},
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 9,
    fontFamily: 'Cinzel-Regular',
    color: colors.tabInactive,
    textAlign: 'center',
  },
  labelActive: {
    color: colors.tabActive,
  },
});
