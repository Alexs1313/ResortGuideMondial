import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ResortMondialGuideCasinoKeepsakeCardFacet} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoKeepsakeCardFacet/ResortMondialGuideCasinoKeepsakeCardFacet';
import {ResortMondialGuideCasinoKeepsakesEmptyWrap} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoKeepsakesEmptyWrap/ResortMondialGuideCasinoKeepsakesEmptyWrap';
import {ResortMondialGuideCasinoScreenCornice} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoScreenCornice/ResortMondialGuideCasinoScreenCornice';
import {GuideItem} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoVenueFolio/ResortMondialGuideCasinoGuideData';
import {useResortMondialGuideCasinoSaved} from '../../../ResortMondialGuideCasinoTethers/useResortMondialGuideCasinoSaved';
import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type SavedScreenProps = {
  onOpenGuide: (item: GuideItem) => void;
};

export function ResortMondialGuideCasinoSavedScreen({
  onOpenGuide,
}: SavedScreenProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {savedItems, toggleSave} = useResortMondialGuideCasinoSaved();
  const hasItems = savedItems.length > 0;

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ResortMondialGuideCasinoScreenCornice
        eyebrow="Your Collection"
        title="Saved Cards"
        style={styles.resortMondialGuideCasinoSavedHeaderCornice}
      />
    </>
  );

  if (!hasItems) {
    return (
      <View style={styles.resortMondialGuideCasinoSavedVestibule}>
        <ScrollView
          contentContainerStyle={[
            styles.resortMondialGuideCasinoSavedEmptyScrollLane,
            {paddingBottom: Math.max(insets.bottom, 16) + 80},
          ]}
          showsVerticalScrollIndicator={false}>
          {listHeader}
          <ResortMondialGuideCasinoKeepsakesEmptyWrap />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.resortMondialGuideCasinoSavedVestibule}>
      <FlatList
        data={savedItems}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.resortMondialGuideCasinoSavedListTapestry,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ResortMondialGuideCasinoKeepsakeCardFacet
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
  resortMondialGuideCasinoSavedVestibule: {
    flex: 1,
    backgroundColor: resortMondialGuideCasinoColors.bg,
  },
  resortMondialGuideCasinoSavedHeaderCornice: {
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  resortMondialGuideCasinoSavedListTapestry: {
    paddingHorizontal: 20,
    gap: 16,
  },
  resortMondialGuideCasinoSavedEmptyScrollLane: {
    flexGrow: 1,
  },
});
