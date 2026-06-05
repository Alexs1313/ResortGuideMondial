import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ResortGuideMondialKeepsakeCardFacet} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialKeepsakeCardFacet/ResortGuideMondialKeepsakeCardFacet';
import {ResortGuideMondialKeepsakesEmptyWrap} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialKeepsakesEmptyWrap/ResortGuideMondialKeepsakesEmptyWrap';
import {ResortGuideMondialScreenCornice} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialScreenCornice/ResortGuideMondialScreenCornice';
import {GuideItem} from '../../../ResortGuideMondialCompendium/ResortGuideMondialVenueFolio/ResortGuideMondialGuideData';
import {useResortGuideMondialSaved} from '../../../ResortGuideMondialTethers/useResortGuideMondialSaved';
import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type SavedScreenProps = {
  onOpenGuide: (item: GuideItem) => void;
};

export function ResortGuideMondialSavedScreen({
  onOpenGuide,
}: SavedScreenProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {savedItems, toggleSave} = useResortGuideMondialSaved();
  const hasItems = savedItems.length > 0;

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ResortGuideMondialScreenCornice
        eyebrow="Your Collection"
        title="Saved Cards"
        style={styles.resortGuideMondialSavedHeaderCornice}
      />
    </>
  );

  if (!hasItems) {
    return (
      <View style={styles.resortGuideMondialSavedVestibule}>
        <ScrollView
          contentContainerStyle={[
            styles.resortGuideMondialSavedEmptyScrollLane,
            {paddingBottom: Math.max(insets.bottom, 16) + 80},
          ]}
          showsVerticalScrollIndicator={false}>
          {listHeader}
          <ResortGuideMondialKeepsakesEmptyWrap />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.resortGuideMondialSavedVestibule}>
      <FlatList
        data={savedItems}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.resortGuideMondialSavedListTapestry,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ResortGuideMondialKeepsakeCardFacet
            item={item}
            onPress={() => onOpenGuide(item)}
            onToggleSave={() => toggleSave(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialSavedVestibule: {
    flex: 1,
    backgroundColor: resortGuideMondialColors.bg,
  },
  resortGuideMondialSavedHeaderCornice: {
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  resortGuideMondialSavedListTapestry: {
    paddingHorizontal: 20,
    gap: 16,
  },
  resortGuideMondialSavedEmptyScrollLane: {
    flexGrow: 1,
  },
});
