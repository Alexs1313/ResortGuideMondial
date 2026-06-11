import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {tabIcons} from '../data/assets';
import {colors, fonts} from '../constants/theme';
import {useAdaptive} from '../hooks/useAdaptive';
import type {MainTabId} from '../navigation/types';

type TabItem = {
  id: MainTabId;
  label: string;
};

const MAIN_TABS: TabItem[] = [
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
  const adaptive = useAdaptive();

  return (
    <View
      style={[
        styles.TabBarChassis,
        adaptive.isTinyHeight && styles.TabBarChassisTiny,
        {paddingBottom: Math.max(insets.bottom, 10)},
      ]}>
      {MAIN_TABS.map(tab => {
        const isActive = tab.id === active;
        return (
          <Pressable
            key={tab.id}
            onPress={() => onChange(tab.id)}
            style={styles.TabBarBerthPlinth}>
            <View
              style={[
                styles.TabBarSigilEnclave,
                {height: adaptive.tabIconWrapHeight},
                isActive && styles.TabBarSigilGleam,
              ]}>
              <Image
                source={tabIcons[tab.id]}
                style={[
                  styles.TabBarGlyphSigil,
                  {
                    width: adaptive.tabIconSize,
                    height: adaptive.tabIconSize,
                    tintColor: isActive
                      ? colors.tabActive
                      : colors.tabInactive,
                  },
                ]}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                styles.TabBarCaptionVellum,
                isActive && styles.TabBarCaptionGilding,
              ]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarChassis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.tabBarBg,
    borderTopWidth: 1,
    borderTopColor: colors.tabBarBorder,
    paddingTop: 18,
    paddingHorizontal: 10,
  },
  TabBarChassisTiny: {
    paddingTop: 12,
  },
  TabBarBerthPlinth: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingVertical: 4,
    minWidth: 56,
  },
  TabBarSigilEnclave: {
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabBarSigilGleam: {},
  TabBarGlyphSigil: {},
  TabBarCaptionVellum: {
    fontSize: 9,
    fontFamily: fonts.regular,
    color: colors.tabInactive,
    textAlign: 'center',
  },
  TabBarCaptionGilding: {
    color: colors.tabActive,
  },
});
