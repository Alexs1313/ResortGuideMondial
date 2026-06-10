import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {resortMondialGuideCasinoTabIcons} from '../../ResortMondialGuideCasinoReliquary';
import {resortMondialGuideCasinoColors} from '../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';
import type {ResortMondialGuideCasinoMainTabId} from '../../../ResortMondialGuideCasinoSigilRegistry/ResortMondialGuideCasinoMainTabLattice/ResortMondialGuideCasinoMainTabLattice';

type TabItem = {
  id: ResortMondialGuideCasinoMainTabId;
  resortMondialGuideCasinoTabBarCaptionVellum: string;
};

const RESORT_MONDIAL_GUIDE_CASINO_TABS: TabItem[] = [
  {id: 'guide', label: 'Guide'},
  {id: 'saved', label: 'Saved'},
  {id: 'services', label: 'Services'},
  {id: 'calendar', label: 'Calendar'},
  {id: 'events', label: 'Events'},
];

type ResortMondialGuideCasinoBottomTabBarProps = {
  active: ResortMondialGuideCasinoMainTabId;
  onChange: (tab: ResortMondialGuideCasinoMainTabId) => void;
};

export function ResortMondialGuideCasinoBottomTabBar({
  active,
  onChange,
}: ResortMondialGuideCasinoBottomTabBarProps): React.JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.resortMondialGuideCasinoTabBarChassis,
        {paddingBottom: Math.max(insets.bottom, 10)},
      ]}>
      {RESORT_MONDIAL_GUIDE_CASINO_TABS.map(tab => {
        const isActive = tab.id === active;
        return (
          <Pressable
            key={tab.id}
            onPress={() => onChange(tab.id)}
            style={styles.resortMondialGuideCasinoTabBarBerthPlinth}>
            <View
              style={[
                styles.resortMondialGuideCasinoTabBarSigilEnclave,
                isActive && styles.resortMondialGuideCasinoTabBarSigilGleam,
              ]}>
              <Image
                source={resortMondialGuideCasinoTabIcons[tab.id]}
                style={[
                  styles.resortMondialGuideCasinoTabBarGlyphSigil,
                  {
                    tintColor: isActive
                      ? resortMondialGuideCasinoColors.tabActive
                      : resortMondialGuideCasinoColors.tabInactive,
                  },
                ]}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                styles.resortMondialGuideCasinoTabBarCaptionVellum,
                isActive && styles.resortMondialGuideCasinoTabBarCaptionGilding,
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
  resortMondialGuideCasinoTabBarChassis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: resortMondialGuideCasinoColors.tabBarBg,
    borderTopWidth: 1,
    borderTopColor: resortMondialGuideCasinoColors.tabBarBorder,
    paddingTop: 18,
    paddingHorizontal: 10,
  },
  resortMondialGuideCasinoTabBarBerthPlinth: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingVertical: 4,
    minWidth: 56,
  },
  resortMondialGuideCasinoTabBarSigilEnclave: {
    width: 54,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoTabBarSigilGleam: {},
  resortMondialGuideCasinoTabBarGlyphSigil: {
    width: 24,
    height: 24,
  },
  resortMondialGuideCasinoTabBarCaptionVellum: {
    fontSize: 9,
    fontFamily: 'Cinzel-Regular',
    color: resortMondialGuideCasinoColors.tabInactive,
    textAlign: 'center',
  },
  resortMondialGuideCasinoTabBarCaptionGilding: {
    color: resortMondialGuideCasinoColors.tabActive,
  },
});
