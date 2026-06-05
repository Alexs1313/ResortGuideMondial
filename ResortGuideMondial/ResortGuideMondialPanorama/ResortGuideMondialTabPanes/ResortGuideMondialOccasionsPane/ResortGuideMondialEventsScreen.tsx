import React, {useMemo, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ResortGuideMondialFilterCrest} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialFilterCrest/ResortGuideMondialFilterCrest';
import {ResortGuideMondialOccasionCardFacet} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialOccasionCardFacet/ResortGuideMondialOccasionCardFacet';
import {ResortGuideMondialScreenCornice} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialScreenCornice/ResortGuideMondialScreenCornice';
import {
  EventFilter,
  EventItem,
  getFilteredEvents,
} from '../../../ResortGuideMondialCompendium/ResortGuideMondialOccasionsFolio/ResortGuideMondialEventsData';
import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

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

export function ResortGuideMondialEventsScreen({onOpenEvent}: EventsScreenProps) {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<EventFilter>('All');
  const items = useMemo(() => getFilteredEvents(filter), [filter]);

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ResortGuideMondialScreenCornice eyebrow="Plan Your Event" title="Event Ideas" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.resortGuideMondialEventsFiltersLattice}>
        {FILTERS.map(({key, label}) => (
          <ResortGuideMondialFilterCrest
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
    <View style={styles.resortGuideMondialEventsVestibule}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.resortGuideMondialEventsListTapestry,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ResortGuideMondialOccasionCardFacet item={item} onPress={() => onOpenEvent(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialEventsVestibule: {
    flex: 1,
    backgroundColor: resortGuideMondialColors.bg,
  },
  resortGuideMondialEventsFiltersLattice: {
    paddingBottom: 22,
    gap: 8,
  },
  resortGuideMondialEventsListTapestry: {
    paddingHorizontal: 20,
    gap: 16,
  },
});
