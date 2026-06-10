import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  CALENDAR_TODAY,
  formatMonthLabel,
  getDaysInMonth,
  hasEventsOnDate,
} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoChronicleFolio/ResortMondialGuideCasinoCalendarData';
import {ResortMondialGuideCasinoRoundGlyphPortico} from '../ResortMondialGuideCasinoRoundGlyphPortico/ResortMondialGuideCasinoRoundGlyphPortico';

type ResortMondialGuideCasinoMonthDateLatticeProps = {
  viewYear: number;
  viewMonth: number;
  selectedDate: string;
  onSelectDate: (iso: string) => void;
  onShiftMonth: (delta: number) => void;
};

export function ResortMondialGuideCasinoMonthDateLattice({
  viewYear,
  viewMonth,
  selectedDate,
  onSelectDate,
  onShiftMonth,
}: ResortMondialGuideCasinoMonthDateLatticeProps): React.JSX.Element {
  const monthDays = getDaysInMonth(viewYear, viewMonth);
  const monthLabel = formatMonthLabel(viewYear, viewMonth);

  return (
    <>
      <View style={styles.resortMondialGuideCasinoMonthDateLatticeRowLintel}>
        <ResortMondialGuideCasinoRoundGlyphPortico
          onPress={() => onShiftMonth(-1)}
          glyph="‹"
          size={32}
          variant="rimmedFacet"
          accessibilityLabel="Previous month"
        />
        <Text style={styles.resortMondialGuideCasinoMonthDateLatticeLabelVellum}>{monthLabel}</Text>
        <ResortMondialGuideCasinoRoundGlyphPortico
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
        contentContainerStyle={styles.resortMondialGuideCasinoMonthDateLatticeStripTapestry}
        style={styles.resortMondialGuideCasinoMonthDateLatticeStripLane}
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
                styles.resortMondialGuideCasinoMonthDateLatticeCellBerth,
                selected && !today && styles.resortMondialGuideCasinoMonthDateLatticeCellGleam,
                today && styles.resortMondialGuideCasinoMonthDateLatticeCellTodayCrest,
              ]}>
              <Text
                style={[
                  styles.resortMondialGuideCasinoMonthDateLatticeWeekdayWeave,
                  today && styles.resortMondialGuideCasinoMonthDateLatticeWeekdayTodayGilding,
                ]}>
                {weekday}
              </Text>
              <Text
                style={[
                  styles.resortMondialGuideCasinoMonthDateLatticeNumberFiligree,
                  selected && !today && styles.resortMondialGuideCasinoMonthDateLatticeNumberSelectedGleam,
                  today && styles.resortMondialGuideCasinoMonthDateLatticeNumberTodayCrest,
                ]}>
                {day}
              </Text>
              {hasEvents && !today ? (
                <View
                  style={[
                    styles.resortMondialGuideCasinoMonthDateLatticeDotSpindle,
                    selected && styles.resortMondialGuideCasinoMonthDateLatticeDotSelectedGleam,
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
  resortMondialGuideCasinoMonthDateLatticeRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  resortMondialGuideCasinoMonthDateLatticeLabelVellum: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    letterSpacing: 0.7,
    color: '#F0EAD6',
  },
  resortMondialGuideCasinoMonthDateLatticeStripLane: {
    flexGrow: 0,
    marginBottom: 16,
  },
  resortMondialGuideCasinoMonthDateLatticeStripTapestry: {
    gap: 8,
  },
  resortMondialGuideCasinoMonthDateLatticeCellBerth: {
    width: 47,
    height: 62,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    alignItems: 'center',
    paddingTop: 8,
  },
  resortMondialGuideCasinoMonthDateLatticeCellGleam: {
    borderColor: '#C9A020',
  },
  resortMondialGuideCasinoMonthDateLatticeCellTodayCrest: {
    borderColor: '#C9A020',
    backgroundColor: '#C9A020',
  },
  resortMondialGuideCasinoMonthDateLatticeWeekdayWeave: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: '#7A8BA8',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  resortMondialGuideCasinoMonthDateLatticeWeekdayTodayGilding: {
    color: '#060C18',
  },
  resortMondialGuideCasinoMonthDateLatticeNumberFiligree: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#F0EAD6',
  },
  resortMondialGuideCasinoMonthDateLatticeNumberSelectedGleam: {
    color: '#C9A020',
  },
  resortMondialGuideCasinoMonthDateLatticeNumberTodayCrest: {
    color: '#060C18',
  },
  resortMondialGuideCasinoMonthDateLatticeDotSpindle: {
    width: 4,
    height: 4,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 6,
  },
  resortMondialGuideCasinoMonthDateLatticeDotSelectedGleam: {
    backgroundColor: '#C9A020',
  },
});
