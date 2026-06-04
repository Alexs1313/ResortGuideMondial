import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {resortGuidTabIcons} from '../resortGuidAssts';
import {resortGuidColors} from '../resortGuidThm/ResortGuidColors';
import type {ResortGuidMainTabId} from '../resortGuidTypes/ResortGuidNavigationTypes';

type TabItem = {
  id: ResortGuidMainTabId;
  label: string;
};

const RESORT_GUID_TABS: TabItem[] = [
  {id: 'guide', label: 'Guide'},
  {id: 'saved', label: 'Saved'},
  {id: 'services', label: 'Services'},
  {id: 'calendar', label: 'Calendar'},
  {id: 'events', label: 'Events'},
];

type ResortGuidBottomTabBarProps = {
  active: ResortGuidMainTabId;
  onChange: (tab: ResortGuidMainTabId) => void;
};

export function ResortGuidBottomTabBar({
  active,
  onChange,
}: ResortGuidBottomTabBarProps): React.JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        {paddingBottom: Math.max(insets.bottom, 10)},
      ]}>
      {RESORT_GUID_TABS.map(tab => {
        const isActive = tab.id === active;
        return (
          <Pressable
            key={tab.id}
            onPress={() => onChange(tab.id)}
            style={styles.item}>
            <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
              <Image
                source={resortGuidTabIcons[tab.id]}
                style={[
                  styles.icon,
                  {
                    tintColor: isActive
                      ? resortGuidColors.tabActive
                      : resortGuidColors.tabInactive,
                  },
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
    backgroundColor: resortGuidColors.tabBarBg,
    borderTopWidth: 1,
    borderTopColor: resortGuidColors.tabBarBorder,
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
    color: resortGuidColors.tabInactive,
    textAlign: 'center',
  },
  labelActive: {
    color: resortGuidColors.tabActive,
  },
});
