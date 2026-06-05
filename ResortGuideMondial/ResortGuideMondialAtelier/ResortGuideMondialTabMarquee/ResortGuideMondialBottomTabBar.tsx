import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {resortGuideMondialTabIcons} from '../../ResortGuideMondialReliquary';
import {resortGuideMondialColors} from '../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';
import type {ResortGuideMondialMainTabId} from '../../../ResortGuideMondialSigilRegistry/ResortGuideMondialMainTabLattice/ResortGuideMondialMainTabLattice';

type TabItem = {
  id: ResortGuideMondialMainTabId;
  resortGuideMondialTabBarCaptionVellum: string;
};

const RESORT_GUIDE_MONDIAL_TABS: TabItem[] = [
  {id: 'guide', label: 'Guide'},
  {id: 'saved', label: 'Saved'},
  {id: 'services', label: 'Services'},
  {id: 'calendar', label: 'Calendar'},
  {id: 'events', label: 'Events'},
];

type ResortGuideMondialBottomTabBarProps = {
  active: ResortGuideMondialMainTabId;
  onChange: (tab: ResortGuideMondialMainTabId) => void;
};

export function ResortGuideMondialBottomTabBar({
  active,
  onChange,
}: ResortGuideMondialBottomTabBarProps): React.JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.resortGuideMondialTabBarChassis,
        {paddingBottom: Math.max(insets.bottom, 10)},
      ]}>
      {RESORT_GUIDE_MONDIAL_TABS.map(tab => {
        const isActive = tab.id === active;
        return (
          <Pressable
            key={tab.id}
            onPress={() => onChange(tab.id)}
            style={styles.resortGuideMondialTabBarBerthPlinth}>
            <View
              style={[
                styles.resortGuideMondialTabBarSigilEnclave,
                isActive && styles.resortGuideMondialTabBarSigilGleam,
              ]}>
              <Image
                source={resortGuideMondialTabIcons[tab.id]}
                style={[
                  styles.resortGuideMondialTabBarGlyphSigil,
                  {
                    tintColor: isActive
                      ? resortGuideMondialColors.tabActive
                      : resortGuideMondialColors.tabInactive,
                  },
                ]}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                styles.resortGuideMondialTabBarCaptionVellum,
                isActive && styles.resortGuideMondialTabBarCaptionGilding,
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
  resortGuideMondialTabBarChassis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: resortGuideMondialColors.tabBarBg,
    borderTopWidth: 1,
    borderTopColor: resortGuideMondialColors.tabBarBorder,
    paddingTop: 18,
    paddingHorizontal: 10,
  },
  resortGuideMondialTabBarBerthPlinth: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingVertical: 4,
    minWidth: 56,
  },
  resortGuideMondialTabBarSigilEnclave: {
    width: 54,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialTabBarSigilGleam: {},
  resortGuideMondialTabBarGlyphSigil: {
    width: 24,
    height: 24,
  },
  resortGuideMondialTabBarCaptionVellum: {
    fontSize: 9,
    fontFamily: 'Cinzel-Regular',
    color: resortGuideMondialColors.tabInactive,
    textAlign: 'center',
  },
  resortGuideMondialTabBarCaptionGilding: {
    color: resortGuideMondialColors.tabActive,
  },
});
