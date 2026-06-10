import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {resortMondialGuideCasinoIcons} from '../../../ResortMondialGuideCasinoReliquary';
import {ResortMondialGuideCasinoFilterCrest} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoFilterCrest/ResortMondialGuideCasinoFilterCrest';
import {ResortMondialGuideCasinoRoundGlyphPortico} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoRoundGlyphPortico/ResortMondialGuideCasinoRoundGlyphPortico';
import {ResortMondialGuideCasinoScreenCornice} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoScreenCornice/ResortMondialGuideCasinoScreenCornice';
import {ResortMondialGuideCasinoVenueCardFacet} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoVenueCardFacet/ResortMondialGuideCasinoVenueCardFacet';
import {useResortMondialGuideCasinoSaved} from '../../../ResortMondialGuideCasinoTethers/useResortMondialGuideCasinoSaved';
import {
  GuideFilter,
  GuideItem,
  getFilteredGuideItems,
} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoVenueFolio/ResortMondialGuideCasinoGuideData';
import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

const FILTERS: {key: GuideFilter; label: string; icon?: string}[] = [
  {key: 'All', label: 'All'},
  {key: 'Restaurant', label: 'Restaurant', icon: '◆'},
  {key: 'Rooms', label: 'Rooms', icon: '▣'},
];

type GuideScreenProps = {
  onOpenGuide: (item: GuideItem) => void;
};

export function ResortMondialGuideCasinoGuideScreen({
  onOpenGuide,
}: GuideScreenProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<GuideFilter>('All');
  const {isSaved, toggleSave} = useResortMondialGuideCasinoSaved();
  const items = useMemo(() => getFilteredGuideItems(filter), [filter]);

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ResortMondialGuideCasinoScreenCornice
        eyebrow="Mondial"
        title="Resort Guide"
        trailing={
          <ResortMondialGuideCasinoRoundGlyphPortico
            onPress={() => {}}
            icon={resortMondialGuideCasinoIcons.search}
            size={40}
            variant="rimmedFacet"
            accessibilityLabel="Search guide"
          />
        }
      />
      <View style={styles.resortMondialGuideCasinoGuideFiltersLattice}>
        {FILTERS.map(({key, label, icon}) => (
          <ResortMondialGuideCasinoFilterCrest
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
    <View style={styles.resortMondialGuideCasinoGuideVestibule}>
      <FlatList
        data={items}
        keyExtractor={entry => entry.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.resortMondialGuideCasinoGuideListTapestry,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ResortMondialGuideCasinoVenueCardFacet
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
  resortMondialGuideCasinoGuideVestibule: {
    flex: 1,
    backgroundColor: resortMondialGuideCasinoColors.bg,
  },
  resortMondialGuideCasinoGuideFiltersLattice: {
    flexDirection: 'row',
    gap: 8,
    paddingBottom: 12,
  },
  resortMondialGuideCasinoGuideListTapestry: {
    paddingHorizontal: 20,
    gap: 16,
  },
});
