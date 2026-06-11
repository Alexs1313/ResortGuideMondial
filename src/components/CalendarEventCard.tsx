import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import type {CalendarEvent} from '../data/calendar';
import {getTagStyle} from '../data/calendar';
import {icons} from '../data/assets';
import {fonts} from '../constants/theme';
import {LabelBadge} from './LabelBadge';

type CalendarEventCardProps = {
  event: CalendarEvent;
};

export function CalendarEventCard({
  event,
}: CalendarEventCardProps): React.JSX.Element {
  const tagStyle = getTagStyle(event.tag);

  return (
    <View style={styles.ChronicleEventCardFacetChassis}>
      <View style={styles.ChronicleEventTimeColPlinth}>
        <View style={styles.ChronicleClockCircleEnclave}>
          <Image
            source={icons.clock}
            style={styles.ChronicleClockIconSigil}
          />
        </View>
        <Text style={styles.ChronicleEventTimeVellum}>{event.time}</Text>
      </View>
      <View style={styles.ChronicleEventBodyVellum}>
        <View style={styles.ChronicleEventTitleRowLintel}>
          <Text
            style={styles.ChronicleEventTitleFiligree}
            numberOfLines={2}>
            {event.title}
          </Text>
          <LabelBadge
            label={event.tag}
            backgroundColor={tagStyle.backgroundColor}
            textColor={tagStyle.color}
          />
        </View>
        <Text style={styles.ChronicleEventDescriptionWeave}>
          {event.description}
        </Text>
        <View style={styles.ChronicleLocationRowLattice}>
          <Image
            source={icons.location}
            style={styles.ChronicleLocationIconSigil}
          />
          <Text style={styles.ChronicleLocationTextVellum}>
            {event.location}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ChronicleEventCardFacetChassis: {
    flexDirection: 'row',
    gap: 12,
    padding: 17,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
  },
  ChronicleEventTimeColPlinth: {
    width: 48,
    alignItems: 'center',
    gap: 4,
  },
  ChronicleClockCircleEnclave: {
    width: 48,
    height: 48,
    borderRadius: 20,
    backgroundColor: '#1A2840',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ChronicleClockIconSigil: {
    width: 15,
    height: 15,
    tintColor: '#C9A020',
  },
  ChronicleEventTimeVellum: {
    fontSize: 9,
    fontWeight: '500',
    color: '#C9A020',
    textAlign: 'center',
  },
  ChronicleEventBodyVellum: {
    flex: 1,
    gap: 8,
  },
  ChronicleEventTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  ChronicleEventTitleFiligree: {
    flex: 1,
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
    color: '#F0EAD6',
  },
  ChronicleEventDescriptionWeave: {
    fontSize: 12,
    lineHeight: 20,
    color: '#7A8BA8',
  },
  ChronicleLocationRowLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ChronicleLocationIconSigil: {
    width: 9,
    height: 9,
    tintColor: '#7A8BA8',
  },
  ChronicleLocationTextVellum: {
    fontSize: 10,
    lineHeight: 15,
    color: '#7A8BA8',
  },
});
