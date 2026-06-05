import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {resortGuideMondialIcons} from '../../../ResortGuideMondialReliquary';
import {ResortGuideMondialFilterCrest} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialFilterCrest/ResortGuideMondialFilterCrest';
import {ResortGuideMondialRoundGlyphPortico} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialRoundGlyphPortico/ResortGuideMondialRoundGlyphPortico';
import {ResortGuideMondialScreenCornice} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialScreenCornice/ResortGuideMondialScreenCornice';
import {ResortGuideMondialVenueCardFacet} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialVenueCardFacet/ResortGuideMondialVenueCardFacet';
import {useResortGuideMondialSaved} from '../../../ResortGuideMondialTethers/useResortGuideMondialSaved';
import {
  GuideFilter,
  GuideItem,
  getFilteredGuideItems,
} from '../../../ResortGuideMondialCompendium/ResortGuideMondialVenueFolio/ResortGuideMondialGuideData';
import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

const FILTERS: {key: GuideFilter; label: string; icon?: string}[] = [
  {key: 'All', label: 'All'},
  {key: 'Restaurant', label: 'Restaurant', icon: '◆'},
  {key: 'Rooms', label: 'Rooms', icon: '▣'},
];

type GuideScreenProps = {
  onOpenGuide: (item: GuideItem) => void;
};

export function ResortGuideMondialGuideScreen({
  onOpenGuide,
}: GuideScreenProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<GuideFilter>('All');
  const {isSaved, toggleSave} = useResortGuideMondialSaved();
  const items = useMemo(() => getFilteredGuideItems(filter), [filter]);

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ResortGuideMondialScreenCornice
        eyebrow="Mondial"
        title="Resort Guide"
        trailing={
          <ResortGuideMondialRoundGlyphPortico
            onPress={() => {}}
            icon={resortGuideMondialIcons.search}
            size={40}
            variant="rimmedFacet"
            accessibilityLabel="Search guide"
          />
        }
      />
      <View style={styles.resortGuideMondialGuideFiltersLattice}>
        {FILTERS.map(({key, label, icon}) => (
          <ResortGuideMondialFilterCrest
            key={key}
            label={label}
            icon={icon}
            active={filter === key}
            onPress={() => setFilter(key)}
          />
        ))}
      </View>
    </>
  );

  return (
    <View style={styles.resortGuideMondialGuideVestibule}>
      <FlatList
        data={items}
        keyExtractor={entry => entry.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.resortGuideMondialGuideListTapestry,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ResortGuideMondialVenueCardFacet
            item={item}
            saved={isSaved(item.id)}
            onPress={() => onOpenGuide(item)}
            onToggleSave={() => toggleSave(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialGuideVestibule: {
    flex: 1,
    backgroundColor: resortGuideMondialColors.bg,
  },
  resortGuideMondialGuideFiltersLattice: {
    flexDirection: 'row',
    gap: 8,
    paddingBottom: 12,
  },
  resortGuideMondialGuideListTapestry: {
    paddingHorizontal: 20,
    gap: 16,
  },
});
