import React, {useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {icons} from '../assets';
import {
  CALENDAR_TODAY,
  CalendarEvent,
  formatMonthLabel,
  getDaysInMonth,
  getEventsForDate,
  getTagStyle,
  hasEventsOnDate,
} from '../data/calendarData';

const INITIAL_YEAR = 2026;
const INITIAL_MONTH = 4;
const INITIAL_SELECTED = '2026-05-25';

type EventCardProps = {
  event: CalendarEvent;
};

const EventCard = ({event}: EventCardProps) => {
  const tagStyle = getTagStyle(event.tag);

  return (
    <View style={styles.eventCard}>
      <View style={styles.eventTimeCol}>
        <View style={styles.clockCircle}>
          <Image
            source={icons.clock}
            style={styles.clockIcon}
          />
        </View>
        <Text style={styles.eventTime}>{event.time}</Text>
      </View>
      <View style={styles.eventBody}>
        <View style={styles.eventTitleRow}>
          <Text style={styles.eventTitle} numberOfLines={2}>
            {event.title}
          </Text>
          <View
            style={[
              styles.tagPill,
              {backgroundColor: tagStyle.backgroundColor},
            ]}>
            <Text style={[styles.tagText, {color: tagStyle.color}]}>
              {event.tag}
            </Text>
          </View>
        </View>
        <Text style={styles.eventDescription}>{event.description}</Text>
        <View style={styles.locationRow}>
          <Image
            source={icons.location}
            style={styles.locationIcon}
          />
          <Text style={styles.locationText}>{event.location}</Text>
        </View>
      </View>
    </View>
  );
};

const CalendarEmpty = () => (
  <View style={styles.emptyWrap}>
    <View style={styles.emptyIconCircle}>
      <Image
        source={require('../assets/images/tab_calendar.png')}
        style={styles.emptyIcon}
      />
    </View>
    <Text style={styles.emptyTitle}>No Events Today</Text>
    <Text style={styles.emptyText}>
      No activities planned for this date. Select another day to explore
      upcoming events.
    </Text>
  </View>
);

export function CalendarScreen(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const [viewYear, setViewYear] = useState(INITIAL_YEAR);
  const [viewMonth, setViewMonth] = useState(INITIAL_MONTH);
  const [selectedDate, setSelectedDate] = useState(INITIAL_SELECTED);

  const monthDays = useMemo(
    () => getDaysInMonth(viewYear, viewMonth),
    [viewYear, viewMonth],
  );

  const events = useMemo(() => getEventsForDate(selectedDate), [selectedDate]);

  const monthLabel = formatMonthLabel(viewYear, viewMonth);

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
      <View style={styles.header}>
        <Text style={styles.brand}>What's On</Text>
        <Text style={styles.title}>Event Calendar</Text>
      </View>
      <View style={styles.monthRow}>
        <Pressable
          onPress={() => shiftMonth(-1)}
          style={styles.monthBtn}
          accessibilityRole="button"
          accessibilityLabel="Previous month">
          <Text style={styles.monthBtnIcon}>‹</Text>
        </Pressable>
        <Text style={styles.monthLabel}>{monthLabel}</Text>
        <Pressable
          onPress={() => shiftMonth(1)}
          style={styles.monthBtn}
          accessibilityRole="button"
          accessibilityLabel="Next month">
          <Text style={styles.monthBtnIcon}>›</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateStrip}
        style={styles.dateStripScroll}
        nestedScrollEnabled>
        {monthDays.map(({day, iso, weekday}) => {
          const selected = iso === selectedDate;
          const today = iso === CALENDAR_TODAY;
          const hasEvents = hasEventsOnDate(iso);

          return (
            <Pressable
              key={iso}
              onPress={() => setSelectedDate(iso)}
              style={[
                styles.dateCell,
                selected && !today && styles.dateCellSelected,
                today && styles.dateCellToday,
              ]}>
              <Text
                style={[styles.dateWeekday, today && styles.dateWeekdayToday]}>
                {weekday}
              </Text>
              <Text
                style={[
                  styles.dateNumber,
                  selected && !today && styles.dateNumberSelected,
                  today && styles.dateNumberToday,
                ]}>
                {day}
              </Text>
              {hasEvents && !today ? (
                <View
                  style={[styles.dateDot, selected && styles.dateDotSelected]}
                />
              ) : null}
            </Pressable>
          );
        })}
      </ScrollView>
      {events.length > 0 ? (
        <Text style={[styles.eventsCount, styles.eventsCountInHeader]}>
          {events.length} event{events.length === 1 ? '' : 's'} scheduled
        </Text>
      ) : null}
    </>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        ListEmptyComponent={CalendarEmpty}
        contentContainerStyle={[
          styles.list,
          events.length === 0 && styles.listEmpty,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <EventCard event={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  header: {
    paddingTop: 12,
    paddingBottom: 8,
    gap: 2,
  },
  brand: {
    fontFamily: 'Cinzel-Regular',
    fontSize: 9,
    letterSpacing: 2.7,
    color: '#C9A020',
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 33,
    color: '#F0EAD6',
  },
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  monthBtn: {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthBtnIcon: {
    fontSize: 20,
    lineHeight: 22,
    color: '#F0EAD6',
    marginTop: -2,
  },
  monthLabel: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    letterSpacing: 0.7,
    color: '#F0EAD6',
  },
  dateStripScroll: {
    flexGrow: 0,
    marginBottom: 16,
  },
  dateStrip: {
    gap: 8,
  },
  dateCell: {
    width: 47,
    height: 62,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    alignItems: 'center',
    paddingTop: 8,
  },
  dateCellSelected: {
    borderColor: '#C9A020',
  },
  dateCellToday: {
    borderColor: '#C9A020',
    backgroundColor: '#C9A020',
  },
  dateWeekday: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: '#7A8BA8',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  dateWeekdayToday: {
    color: '#060C18',
  },
  dateNumber: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#F0EAD6',
  },
  dateNumberSelected: {
    color: '#C9A020',
  },
  dateNumberToday: {
    color: '#060C18',
  },
  dateDot: {
    width: 4,
    height: 4,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 6,
  },
  dateDotSelected: {
    backgroundColor: '#C9A020',
  },
  list: {
    paddingHorizontal: 20,
    gap: 16,
  },
  listEmpty: {
    flexGrow: 1,
  },
  eventsCount: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
    marginBottom: 16,
  },
  eventsCountInHeader: {
    paddingHorizontal: 20,
  },
  eventCard: {
    flexDirection: 'row',
    gap: 12,
    padding: 17,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
  },
  eventTimeCol: {
    width: 48,
    alignItems: 'center',
    gap: 4,
  },
  clockCircle: {
    width: 48,
    height: 48,
    borderRadius: 20,
    backgroundColor: '#1A2840',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockIcon: {
    width: 15,
    height: 15,
    tintColor: '#C9A020',
  },
  eventTime: {
    fontSize: 9,
    fontWeight: '500',
    color: '#C9A020',
    textAlign: 'center',
  },
  eventBody: {
    flex: 1,
    gap: 8,
  },
  eventTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  eventTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#F0EAD6',
  },
  tagPill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 100,
    minHeight: 19,
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  eventDescription: {
    fontSize: 12,
    lineHeight: 20,
    color: '#7A8BA8',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationIcon: {
    width: 9,
    height: 9,
    tintColor: '#7A8BA8',
  },
  locationText: {
    fontSize: 10,
    lineHeight: 15,
    color: '#7A8BA8',
  },
  emptyWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  emptyIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emptyIcon: {
    width: 22,
    height: 22,
    tintColor: '#7A8BA8',
  },
  emptyTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#F0EAD6',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    lineHeight: 23,
    color: '#7A8BA8',
    textAlign: 'center',
  },
});
