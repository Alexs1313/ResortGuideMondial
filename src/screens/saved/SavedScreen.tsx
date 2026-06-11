import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SavedCard} from '../../components/SavedCard';
import {SavedEmptyState} from '../../components/SavedEmptyState';
import {ScreenShell} from '../../components/ScreenShell';
import {GuideItem} from '../../data/guide';
import {useSaved} from '../../hooks/useSaved';
import {colors} from '../../constants/theme';
import {useAdaptive} from '../../hooks/useAdaptive';

type SavedScreenProps = {
  onOpenGuide: (item: GuideItem) => void;
};

export function SavedScreen({
  onOpenGuide,
}: SavedScreenProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const {savedItems, toggleSave} = useSaved();
  const hasItems = savedItems.length > 0;

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ScreenShell
        eyebrow="Your Collection"
        title="Saved Cards"
        style={[
          styles.SavedHeaderCornice,
          {paddingHorizontal: adaptive.horizontalPadding},
        ]}
      />
    </>
  );

  if (!hasItems) {
    return (
      <View style={styles.SavedVestibule}>
        <ScrollView
          contentContainerStyle={[
            styles.SavedEmptyScrollLane,
            {
              paddingHorizontal: adaptive.horizontalPadding,
              paddingBottom: Math.max(insets.bottom, 16) + 80,
            },
          ]}
          showsVerticalScrollIndicator={false}>
          {listHeader}
          <SavedEmptyState />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.SavedVestibule}>
      <ScrollView
        contentContainerStyle={[
          styles.SavedListTapestry,
          {
            paddingHorizontal: adaptive.horizontalPadding,
            paddingBottom: Math.max(insets.bottom, 16) + 80,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        {listHeader}
        {savedItems.map(item => (
          <SavedCard
            key={item.id}
            item={item}
            onPress={() => onOpenGuide(item)}
            onToggleSave={() => toggleSave(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  SavedVestibule: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  SavedHeaderCornice: {
    paddingBottom: 16,
  },
  SavedListTapestry: {
    gap: 16,
  },
  SavedEmptyScrollLane: {
    flexGrow: 1,
  },
});
