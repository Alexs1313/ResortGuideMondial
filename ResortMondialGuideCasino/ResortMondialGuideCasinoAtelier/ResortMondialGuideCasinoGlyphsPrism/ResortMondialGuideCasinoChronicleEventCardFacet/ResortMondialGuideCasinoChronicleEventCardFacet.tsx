import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import type {CalendarEvent} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoChronicleFolio/ResortMondialGuideCasinoCalendarData';
import {getTagStyle} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoChronicleFolio/ResortMondialGuideCasinoCalendarData';
import {resortMondialGuideCasinoIcons} from '../../../ResortMondialGuideCasinoReliquary';
import {ResortMondialGuideCasinoLabelCordon} from '../ResortMondialGuideCasinoLabelCordon/ResortMondialGuideCasinoLabelCordon';

type ResortMondialGuideCasinoChronicleEventCardFacetProps = {
  event: CalendarEvent;
};

export function ResortMondialGuideCasinoChronicleEventCardFacet({
  event,
}: ResortMondialGuideCasinoChronicleEventCardFacetProps): React.JSX.Element {
  const tagStyle = getTagStyle(event.tag);

  return (
    <View style={styles.resortMondialGuideCasinoChronicleEventCardFacetChassis}>
      <View style={styles.resortMondialGuideCasinoChronicleEventTimeColPlinth}>
        <View style={styles.resortMondialGuideCasinoChronicleClockCircleEnclave}>
          <Image
            source={resortMondialGuideCasinoIcons.clock}
            style={styles.resortMondialGuideCasinoChronicleClockIconSigil}
          />
        </View>
        <Text style={styles.resortMondialGuideCasinoChronicleEventTimeVellum}>{event.time}</Text>
      </View>
      <View style={styles.resortMondialGuideCasinoChronicleEventBodyVellum}>
        <View style={styles.resortMondialGuideCasinoChronicleEventTitleRowLintel}>
          <Text
            style={styles.resortMondialGuideCasinoChronicleEventTitleFiligree}
            numberOfLines={2}>
            {event.title}
          </Text>
          <ResortMondialGuideCasinoLabelCordon
            label={event.tag}
            backgroundColor={tagStyle.backgroundColor}
            textColor={tagStyle.color}
          />
        </View>
        <Text style={styles.resortMondialGuideCasinoChronicleEventDescriptionWeave}>
          {event.description}
        </Text>
        <View style={styles.resortMondialGuideCasinoChronicleLocationRowLattice}>
          <Image
            source={resortMondialGuideCasinoIcons.location}
            style={styles.resortMondialGuideCasinoChronicleLocationIconSigil}
          />
          <Text style={styles.resortMondialGuideCasinoChronicleLocationTextVellum}>
            {event.location}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoChronicleEventCardFacetChassis: {
    flexDirection: 'row',
    gap: 12,
    padding: 17,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
  },
  resortMondialGuideCasinoChronicleEventTimeColPlinth: {
    width: 48,
    alignItems: 'center',
    gap: 4,
  },
  resortMondialGuideCasinoChronicleClockCircleEnclave: {
    width: 48,
    height: 48,
    borderRadius: 20,
    backgroundColor: '#1A2840',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoChronicleClockIconSigil: {
    width: 15,
    height: 15,
    tintColor: '#C9A020',
  },
  resortMondialGuideCasinoChronicleEventTimeVellum: {
    fontSize: 9,
    fontWeight: '500',
    color: '#C9A020',
    textAlign: 'center',
  },
  resortMondialGuideCasinoChronicleEventBodyVellum: {
    flex: 1,
    gap: 8,
  },
  resortMondialGuideCasinoChronicleEventTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  resortMondialGuideCasinoChronicleEventTitleFiligree: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#F0EAD6',
  },
  resortMondialGuideCasinoChronicleEventDescriptionWeave: {
    fontSize: 12,
    lineHeight: 20,
    color: '#7A8BA8',
  },
  resortMondialGuideCasinoChronicleLocationRowLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  resortMondialGuideCasinoChronicleLocationIconSigil: {
    width: 9,
    height: 9,
    tintColor: '#7A8BA8',
  },
  resortMondialGuideCasinoChronicleLocationTextVellum: {
    fontSize: 10,
    lineHeight: 15,
    color: '#7A8BA8',
  },
});
