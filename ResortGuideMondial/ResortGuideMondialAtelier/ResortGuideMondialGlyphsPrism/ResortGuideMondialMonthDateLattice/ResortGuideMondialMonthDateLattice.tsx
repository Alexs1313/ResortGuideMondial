import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  CALENDAR_TODAY,
  formatMonthLabel,
  getDaysInMonth,
  hasEventsOnDate,
} from '../../../ResortGuideMondialCompendium/ResortGuideMondialChronicleFolio/ResortGuideMondialCalendarData';
import {ResortGuideMondialRoundGlyphPortico} from '../ResortGuideMondialRoundGlyphPortico/ResortGuideMondialRoundGlyphPortico';

type ResortGuideMondialMonthDateLatticeProps = {
  viewYear: number;
  viewMonth: number;
  selectedDate: string;
  onSelectDate: (iso: string) => void;
  onShiftMonth: (delta: number) => void;
};

export function ResortGuideMondialMonthDateLattice({
  viewYear,
  viewMonth,
  selectedDate,
  onSelectDate,
  onShiftMonth,
}: ResortGuideMondialMonthDateLatticeProps): React.JSX.Element {
  const monthDays = getDaysInMonth(viewYear, viewMonth);
  const monthLabel = formatMonthLabel(viewYear, viewMonth);

  return (
    <>
      <View style={styles.resortGuideMondialMonthDateLatticeRowLintel}>
        <ResortGuideMondialRoundGlyphPortico
          onPress={() => onShiftMonth(-1)}
          glyph="‹"
          size={32}
          variant="rimmedFacet"
          accessibilityLabel="Previous month"
        />
        <Text style={styles.resortGuideMondialMonthDateLatticeLabelVellum}>{monthLabel}</Text>
        <ResortGuideMondialRoundGlyphPortico
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
        contentContainerStyle={styles.resortGuideMondialMonthDateLatticeStripTapestry}
        style={styles.resortGuideMondialMonthDateLatticeStripLane}
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
                styles.resortGuideMondialMonthDateLatticeCellBerth,
                selected && !today && styles.resortGuideMondialMonthDateLatticeCellGleam,
                today && styles.resortGuideMondialMonthDateLatticeCellTodayCrest,
              ]}>
              <Text
                style={[
                  styles.resortGuideMondialMonthDateLatticeWeekdayWeave,
                  today && styles.resortGuideMondialMonthDateLatticeWeekdayTodayGilding,
                ]}>
                {weekday}
              </Text>
              <Text
                style={[
                  styles.resortGuideMondialMonthDateLatticeNumberFiligree,
                  selected && !today && styles.resortGuideMondialMonthDateLatticeNumberSelectedGleam,
                  today && styles.resortGuideMondialMonthDateLatticeNumberTodayCrest,
                ]}>
                {day}
              </Text>
              {hasEvents && !today ? (
                <View
                  style={[
                    styles.resortGuideMondialMonthDateLatticeDotSpindle,
                    selected && styles.resortGuideMondialMonthDateLatticeDotSelectedGleam,
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
  resortGuideMondialMonthDateLatticeRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  resortGuideMondialMonthDateLatticeLabelVellum: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    letterSpacing: 0.7,
    color: '#F0EAD6',
  },
  resortGuideMondialMonthDateLatticeStripLane: {
    flexGrow: 0,
    marginBottom: 16,
  },
  resortGuideMondialMonthDateLatticeStripTapestry: {
    gap: 8,
  },
  resortGuideMondialMonthDateLatticeCellBerth: {
    width: 47,
    height: 62,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    alignItems: 'center',
    paddingTop: 8,
  },
  resortGuideMondialMonthDateLatticeCellGleam: {
    borderColor: '#C9A020',
  },
  resortGuideMondialMonthDateLatticeCellTodayCrest: {
    borderColor: '#C9A020',
    backgroundColor: '#C9A020',
  },
  resortGuideMondialMonthDateLatticeWeekdayWeave: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: '#7A8BA8',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  resortGuideMondialMonthDateLatticeWeekdayTodayGilding: {
    color: '#060C18',
  },
  resortGuideMondialMonthDateLatticeNumberFiligree: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#F0EAD6',
  },
  resortGuideMondialMonthDateLatticeNumberSelectedGleam: {
    color: '#C9A020',
  },
  resortGuideMondialMonthDateLatticeNumberTodayCrest: {
    color: '#060C18',
  },
  resortGuideMondialMonthDateLatticeDotSpindle: {
    width: 4,
    height: 4,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 6,
  },
  resortGuideMondialMonthDateLatticeDotSelectedGleam: {
    backgroundColor: '#C9A020',
  },
});
