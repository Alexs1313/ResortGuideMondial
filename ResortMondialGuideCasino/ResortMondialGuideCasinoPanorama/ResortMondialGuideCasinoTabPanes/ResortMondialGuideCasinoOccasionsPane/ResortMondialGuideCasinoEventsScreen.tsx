import React, {useMemo, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ResortMondialGuideCasinoFilterCrest} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoFilterCrest/ResortMondialGuideCasinoFilterCrest';
import {ResortMondialGuideCasinoOccasionCardFacet} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoOccasionCardFacet/ResortMondialGuideCasinoOccasionCardFacet';
import {ResortMondialGuideCasinoScreenCornice} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoScreenCornice/ResortMondialGuideCasinoScreenCornice';
import {
  EventFilter,
  EventItem,
  getFilteredEvents,
} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoOccasionsFolio/ResortMondialGuideCasinoEventsData';
import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

const FILTERS: {key: EventFilter; label: string}[] = [
  {key: 'All', label: 'All'},
  {key: 'Wedding', label: 'Wedding'},
  {key: 'Birthday', label: 'Birthday'},
  {key: 'Corporate', label: 'Corporate'},
  {key: 'Gala', label: 'Gala'},
];

type EventsScreenProps = {
  onOpenEvent: (item: EventItem) => void;
};

export function ResortMondialGuideCasinoEventsScreen({onOpenEvent}: EventsScreenProps) {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<EventFilter>('All');
  const items = useMemo(() => getFilteredEvents(filter), [filter]);

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ResortMondialGuideCasinoScreenCornice eyebrow="Plan Your Event" title="Event Ideas" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.resortMondialGuideCasinoEventsFiltersLattice}>
        {FILTERS.map(({key, label}) => (
          <ResortMondialGuideCasinoFilterCrest
            key={key}
            label={label}
            active={filter === key}
            onPress={() => setFilter(key)}
          />
        ))}
      </ScrollView>
    </>
  );

  return (
    <View style={styles.resortMondialGuideCasinoEventsVestibule}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.resortMondialGuideCasinoEventsListTapestry,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ResortMondialGuideCasinoOccasionCardFacet item={item} onPress={() => onOpenEvent(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoEventsVestibule: {
    flex: 1,
    backgroundColor: resortMondialGuideCasinoColors.bg,
  },
  resortMondialGuideCasinoEventsFiltersLattice: {
    paddingBottom: 22,
    gap: 8,
  },
  resortMondialGuideCasinoEventsListTapestry: {
    paddingHorizontal: 20,
    gap: 16,
  },
});
