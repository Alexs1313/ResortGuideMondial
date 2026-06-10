import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ResortMondialGuideCasinoChronicleEmptyWrap} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoChronicleEmptyWrap/ResortMondialGuideCasinoChronicleEmptyWrap';
import {ResortMondialGuideCasinoChronicleEventCardFacet} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoChronicleEventCardFacet/ResortMondialGuideCasinoChronicleEventCardFacet';
import {ResortMondialGuideCasinoMonthDateLattice} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoMonthDateLattice/ResortMondialGuideCasinoMonthDateLattice';
import {ResortMondialGuideCasinoScreenCornice} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoScreenCornice/ResortMondialGuideCasinoScreenCornice';
import {
  getDaysInMonth,
  getEventsForDate,
  hasEventsOnDate,
} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoChronicleFolio/ResortMondialGuideCasinoCalendarData';

const INITIAL_YEAR = 2026;
const INITIAL_MONTH = 4;
const INITIAL_SELECTED = '2026-05-25';

export function ResortMondialGuideCasinoCalendarScreen(): React.JSX.Element {
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
      <ResortMondialGuideCasinoScreenCornice eyebrow="What's On" title="Event Calendar" />
      <ResortMondialGuideCasinoMonthDateLattice
        viewYear={viewYear}
        viewMonth={viewMonth}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        onShiftMonth={shiftMonth}
      />
      {events.length > 0 ? (
        <Text
          style={[
            styles.resortMondialGuideCasinoCalendarEventsCountTracery,
            styles.resortMondialGuideCasinoCalendarEventsCountHeaderEmblem,
          ]}>
          {events.length} event{events.length === 1 ? '' : 's'} scheduled
        </Text>
      ) : null}
    </>
  );

  return (
    <View style={styles.resortMondialGuideCasinoCalendarVestibule}>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        ListEmptyComponent={ResortMondialGuideCasinoChronicleEmptyWrap}
        contentContainerStyle={[
          styles.resortMondialGuideCasinoCalendarListTapestry,
          events.length === 0 && styles.resortMondialGuideCasinoCalendarListEmptyHollow,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ResortMondialGuideCasinoChronicleEventCardFacet event={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoCalendarVestibule: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  resortMondialGuideCasinoCalendarListTapestry: {
    paddingHorizontal: 20,
    gap: 16,
  },
  resortMondialGuideCasinoCalendarListEmptyHollow: {
    flexGrow: 1,
  },
  resortMondialGuideCasinoCalendarEventsCountTracery: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
    marginBottom: 16,
  },
  resortMondialGuideCasinoCalendarEventsCountHeaderEmblem: {
    paddingHorizontal: 20,
  },
});
