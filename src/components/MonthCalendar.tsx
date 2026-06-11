import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  CALENDAR_TODAY,
  formatMonthLabel,
  getDaysInMonth,
  hasEventsOnDate,
} from '../data/calendar';
import {fonts} from '../constants/theme';
import {RoundIconButton} from './RoundIconButton';

type MonthCalendarProps = {
  viewYear: number;
  viewMonth: number;
  selectedDate: string;
  onSelectDate: (iso: string) => void;
  onShiftMonth: (delta: number) => void;
};

export function MonthCalendar({
  viewYear,
  viewMonth,
  selectedDate,
  onSelectDate,
  onShiftMonth,
}: MonthCalendarProps): React.JSX.Element {
  const monthDays = getDaysInMonth(viewYear, viewMonth);
  const monthLabel = formatMonthLabel(viewYear, viewMonth);

  return (
    <>
      <View style={styles.MonthDateLatticeRowLintel}>
        <RoundIconButton
          onPress={() => onShiftMonth(-1)}
          glyph="‹"
          size={32}
          variant="rimmedFacet"
          accessibilityLabel="Previous month"
        />
        <Text style={styles.MonthDateLatticeLabelVellum}>{monthLabel}</Text>
        <RoundIconButton
          onPress={() => onShiftMonth(1)}
          glyph="›"
          size={32}
          variant="rimmedFacet"
          accessibilityLabel="Next month"
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.MonthDateLatticeStripTapestry}
        style={styles.MonthDateLatticeStripLane}
        nestedScrollEnabled>
        {monthDays.map(({day, iso, weekday}) => {
          const selected = iso === selectedDate;
          const today = iso === CALENDAR_TODAY;
          const hasEvents = hasEventsOnDate(iso);

          return (
            <Pressable
              key={iso}
              onPress={() => onSelectDate(iso)}
              style={[
                styles.MonthDateLatticeCellBerth,
                selected && !today && styles.MonthDateLatticeCellGleam,
                today && styles.MonthDateLatticeCellTodayCrest,
              ]}>
              <Text
                style={[
                  styles.MonthDateLatticeWeekdayWeave,
                  today && styles.MonthDateLatticeWeekdayTodayGilding,
                ]}>
                {weekday}
              </Text>
              <Text
                style={[
                  styles.MonthDateLatticeNumberFiligree,
                  selected && !today && styles.MonthDateLatticeNumberSelectedGleam,
                  today && styles.MonthDateLatticeNumberTodayCrest,
                ]}>
                {day}
              </Text>
              {hasEvents && !today ? (
                <View
                  style={[
                    styles.MonthDateLatticeDotSpindle,
                    selected && styles.MonthDateLatticeDotSelectedGleam,
                  ]}
                />
              ) : null}
            </Pressable>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  MonthDateLatticeRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  MonthDateLatticeLabelVellum: {
    fontFamily: fonts.bold,
    fontSize: 14,
    letterSpacing: 0.7,
    color: '#F0EAD6',
  },
  MonthDateLatticeStripLane: {
    flexGrow: 0,
    marginBottom: 16,
  },
  MonthDateLatticeStripTapestry: {
    gap: 8,
  },
  MonthDateLatticeCellBerth: {
    width: 47,
    height: 62,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    alignItems: 'center',
    paddingTop: 8,
  },
  MonthDateLatticeCellGleam: {
    borderColor: '#C9A020',
  },
  MonthDateLatticeCellTodayCrest: {
    borderColor: '#C9A020',
    backgroundColor: '#C9A020',
  },
  MonthDateLatticeWeekdayWeave: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: '#7A8BA8',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  MonthDateLatticeWeekdayTodayGilding: {
    color: '#060C18',
  },
  MonthDateLatticeNumberFiligree: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#F0EAD6',
  },
  MonthDateLatticeNumberSelectedGleam: {
    color: '#C9A020',
  },
  MonthDateLatticeNumberTodayCrest: {
    color: '#060C18',
  },
  MonthDateLatticeDotSpindle: {
    width: 4,
    height: 4,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 6,
  },
  MonthDateLatticeDotSelectedGleam: {
    backgroundColor: '#C9A020',
  },
});
