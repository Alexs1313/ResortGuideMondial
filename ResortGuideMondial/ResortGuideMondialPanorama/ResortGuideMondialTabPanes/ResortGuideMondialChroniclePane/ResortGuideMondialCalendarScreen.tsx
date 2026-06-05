import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ResortGuideMondialChronicleEmptyWrap} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialChronicleEmptyWrap/ResortGuideMondialChronicleEmptyWrap';
import {ResortGuideMondialChronicleEventCardFacet} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialChronicleEventCardFacet/ResortGuideMondialChronicleEventCardFacet';
import {ResortGuideMondialMonthDateLattice} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialMonthDateLattice/ResortGuideMondialMonthDateLattice';
import {ResortGuideMondialScreenCornice} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialScreenCornice/ResortGuideMondialScreenCornice';
import {
  getDaysInMonth,
  getEventsForDate,
  hasEventsOnDate,
} from '../../../ResortGuideMondialCompendium/ResortGuideMondialChronicleFolio/ResortGuideMondialCalendarData';

const INITIAL_YEAR = 2026;
const INITIAL_MONTH = 4;
const INITIAL_SELECTED = '2026-05-25';

export function ResortGuideMondialCalendarScreen(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const [viewYear, setViewYear] = useState(INITIAL_YEAR);
  const [viewMonth, setViewMonth] = useState(INITIAL_MONTH);
  const [selectedDate, setSelectedDate] = useState(INITIAL_SELECTED);

  const events = useMemo(() => getEventsForDate(selectedDate), [selectedDate]);

  const shiftMonth = (delta: number) => {
    const next = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
    const days = getDaysInMonth(next.getFullYear(), next.getMonth());
    const firstWithEvents = days.find(d => hasEventsOnDate(d.iso));
    if (firstWithEvents) {
      setSelectedDate(firstWithEvents.iso);
    } else if (days[0]) {
      setSelectedDate(days[0].iso);
    }
  };

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ResortGuideMondialScreenCornice eyebrow="What's On" title="Event Calendar" />
      <ResortGuideMondialMonthDateLattice
        viewYear={viewYear}
        viewMonth={viewMonth}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        onShiftMonth={shiftMonth}
      />
      {events.length > 0 ? (
        <Text
          style={[
            styles.resortGuideMondialCalendarEventsCountTracery,
            styles.resortGuideMondialCalendarEventsCountHeaderEmblem,
          ]}>
          {events.length} event{events.length === 1 ? '' : 's'} scheduled
        </Text>
      ) : null}
    </>
  );

  return (
    <View style={styles.resortGuideMondialCalendarVestibule}>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        ListEmptyComponent={ResortGuideMondialChronicleEmptyWrap}
        contentContainerStyle={[
          styles.resortGuideMondialCalendarListTapestry,
          events.length === 0 && styles.resortGuideMondialCalendarListEmptyHollow,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ResortGuideMondialChronicleEventCardFacet event={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialCalendarVestibule: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  resortGuideMondialCalendarListTapestry: {
    paddingHorizontal: 20,
    gap: 16,
  },
  resortGuideMondialCalendarListEmptyHollow: {
    flexGrow: 1,
  },
  resortGuideMondialCalendarEventsCountTracery: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
    marginBottom: 16,
  },
  resortGuideMondialCalendarEventsCountHeaderEmblem: {
    paddingHorizontal: 20,
  },
});
