import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import type {CalendarEvent} from '../../../ResortGuideMondialCompendium/ResortGuideMondialChronicleFolio/ResortGuideMondialCalendarData';
import {getTagStyle} from '../../../ResortGuideMondialCompendium/ResortGuideMondialChronicleFolio/ResortGuideMondialCalendarData';
import {resortGuideMondialIcons} from '../../../ResortGuideMondialReliquary';
import {ResortGuideMondialLabelCordon} from '../ResortGuideMondialLabelCordon/ResortGuideMondialLabelCordon';

type ResortGuideMondialChronicleEventCardFacetProps = {
  event: CalendarEvent;
};

export function ResortGuideMondialChronicleEventCardFacet({
  event,
}: ResortGuideMondialChronicleEventCardFacetProps): React.JSX.Element {
  const tagStyle = getTagStyle(event.tag);

  return (
    <View style={styles.resortGuideMondialChronicleEventCardFacetChassis}>
      <View style={styles.resortGuideMondialChronicleEventTimeColPlinth}>
        <View style={styles.resortGuideMondialChronicleClockCircleEnclave}>
          <Image
            source={resortGuideMondialIcons.clock}
            style={styles.resortGuideMondialChronicleClockIconSigil}
          />
        </View>
        <Text style={styles.resortGuideMondialChronicleEventTimeVellum}>{event.time}</Text>
      </View>
      <View style={styles.resortGuideMondialChronicleEventBodyVellum}>
        <View style={styles.resortGuideMondialChronicleEventTitleRowLintel}>
          <Text
            style={styles.resortGuideMondialChronicleEventTitleFiligree}
            numberOfLines={2}>
            {event.title}
          </Text>
          <ResortGuideMondialLabelCordon
            label={event.tag}
            backgroundColor={tagStyle.backgroundColor}
            textColor={tagStyle.color}
          />
        </View>
        <Text style={styles.resortGuideMondialChronicleEventDescriptionWeave}>
          {event.description}
        </Text>
        <View style={styles.resortGuideMondialChronicleLocationRowLattice}>
          <Image
            source={resortGuideMondialIcons.location}
            style={styles.resortGuideMondialChronicleLocationIconSigil}
          />
          <Text style={styles.resortGuideMondialChronicleLocationTextVellum}>
            {event.location}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialChronicleEventCardFacetChassis: {
    flexDirection: 'row',
    gap: 12,
    padding: 17,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
  },
  resortGuideMondialChronicleEventTimeColPlinth: {
    width: 48,
    alignItems: 'center',
    gap: 4,
  },
  resortGuideMondialChronicleClockCircleEnclave: {
    width: 48,
    height: 48,
    borderRadius: 20,
    backgroundColor: '#1A2840',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialChronicleClockIconSigil: {
    width: 15,
    height: 15,
    tintColor: '#C9A020',
  },
  resortGuideMondialChronicleEventTimeVellum: {
    fontSize: 9,
    fontWeight: '500',
    color: '#C9A020',
    textAlign: 'center',
  },
  resortGuideMondialChronicleEventBodyVellum: {
    flex: 1,
    gap: 8,
  },
  resortGuideMondialChronicleEventTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  resortGuideMondialChronicleEventTitleFiligree: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#F0EAD6',
  },
  resortGuideMondialChronicleEventDescriptionWeave: {
    fontSize: 12,
    lineHeight: 20,
    color: '#7A8BA8',
  },
  resortGuideMondialChronicleLocationRowLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  resortGuideMondialChronicleLocationIconSigil: {
    width: 9,
    height: 9,
    tintColor: '#7A8BA8',
  },
  resortGuideMondialChronicleLocationTextVellum: {
    fontSize: 10,
    lineHeight: 15,
    color: '#7A8BA8',
  },
});
