import React, {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {FilterChips} from '../../components/FilterChips';
import {EventCard} from '../../components/EventCard';
import {ScreenShell} from '../../components/ScreenShell';
import {
  EventFilter,
  EventItem,
  getFilteredEvents,
} from '../../data/events';
import {colors} from '../../constants/theme';
import {useAdaptive} from '../../hooks/useAdaptive';

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

export function EventsScreen({onOpenEvent}: EventsScreenProps) {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const [filter, setFilter] = useState<EventFilter>('All');
  const items = useMemo(() => getFilteredEvents(filter), [filter]);

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ScreenShell eyebrow="Plan Your Event" title="Event Ideas" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.EventsFiltersLattice}>
        {FILTERS.map(({key, label}) => (
          <FilterChips
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
    <View style={styles.EventsVestibule}>
      <ScrollView
        contentContainerStyle={[
          styles.EventsListTapestry,
          {
            paddingHorizontal: adaptive.horizontalPadding,
            paddingBottom: Math.max(insets.bottom, 16) + 80,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        {listHeader}
        {items.map(item => (
          <EventCard
            key={item.id}
            item={item}
            onPress={() => onOpenEvent(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  EventsVestibule: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  EventsFiltersLattice: {
    paddingBottom: 22,
    gap: 8,
  },
  EventsListTapestry: {
    gap: 16,
  },
});
