import React, {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CalendarEmptyState} from '../../components/CalendarEmptyState';
import {CalendarEventCard} from '../../components/CalendarEventCard';
import {MonthCalendar} from '../../components/MonthCalendar';
import {ScreenShell} from '../../components/ScreenShell';
import {
  getDaysInMonth,
  getEventsForDate,
  hasEventsOnDate,
} from '../../data/calendar';
import {useAdaptive} from '../../hooks/useAdaptive';

const INITIAL_YEAR = 2026;
const INITIAL_MONTH = 4;
const INITIAL_SELECTED = '2026-05-25';

export function CalendarScreen(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
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
      <ScreenShell eyebrow="What's On" title="Event Calendar" />
      <MonthCalendar
        viewYear={viewYear}
        viewMonth={viewMonth}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        onShiftMonth={shiftMonth}
      />
      {events.length > 0 ? (
        <Text
          style={[
            styles.CalendarEventsCountTracery,
            styles.CalendarEventsCountHeaderEmblem,
            {paddingHorizontal: adaptive.horizontalPadding},
          ]}>
          {events.length} event{events.length === 1 ? '' : 's'} scheduled
        </Text>
      ) : null}
    </>
  );

  return (
    <View style={styles.CalendarVestibule}>
      <ScrollView
        contentContainerStyle={[
          styles.CalendarListTapestry,
          events.length === 0 && styles.CalendarListEmptyHollow,
          {
            paddingHorizontal: adaptive.horizontalPadding,
            paddingBottom: Math.max(insets.bottom, 16) + 80,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        {listHeader}
        {events.length === 0 ? (
          <CalendarEmptyState />
        ) : (
          events.map(event => (
            <CalendarEventCard key={event.id} event={event} />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  CalendarVestibule: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  CalendarListTapestry: {
    gap: 16,
  },
  CalendarListEmptyHollow: {
    flexGrow: 1,
  },
  CalendarEventsCountTracery: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
    marginBottom: 16,
  },
  CalendarEventsCountHeaderEmblem: {},
});
