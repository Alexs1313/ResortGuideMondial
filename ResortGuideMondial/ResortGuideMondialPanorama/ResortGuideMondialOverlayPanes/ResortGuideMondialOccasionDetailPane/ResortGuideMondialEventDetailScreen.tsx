import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {resortGuideMondialIcons} from '../../../ResortGuideMondialReliquary';
import {ResortGuideMondialDetailSectionCornice} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialDetailSectionCornice/ResortGuideMondialDetailSectionCornice';
import {ResortGuideMondialRoundGlyphPortico} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialRoundGlyphPortico/ResortGuideMondialRoundGlyphPortico';
import {EventItem} from '../../../ResortGuideMondialCompendium/ResortGuideMondialOccasionsFolio/ResortGuideMondialEventsData';
import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type EventDetailProps = {
  item: EventItem;
  onBack: () => void;
};

export function ResortGuideMondialEventDetailScreen({
  item,
  onBack,
}: EventDetailProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.resortGuideMondialEventDetailVestibule}>
      <View
        style={[styles.resortGuideMondialEventDetailFloatingControlsEnclave, {paddingTop: insets.top + 8}]}
        pointerEvents="box-none">
        <ResortGuideMondialRoundGlyphPortico
          onPress={onBack}
          icon={resortGuideMondialIcons.back}
          size={36}
          variant="solidFacet"
          iconStyle={styles.resortGuideMondialEventDetailBackIconSigil}
          accessibilityLabel="Go back"
        />
      </View>

      <ScrollView
        style={styles.resortGuideMondialEventDetailScrollLane}
        contentContainerStyle={[
          styles.resortGuideMondialEventDetailContentVellum,
          {paddingBottom: Math.max(insets.bottom, 24) + 16},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.resortGuideMondialEventDetailHeroParapet}>
          <Image
            source={item.image}
            style={styles.resortGuideMondialEventDetailHeroImagePanel}
            resizeMode="cover"
          />
          <LinearGradient
            colors={[
              'rgba(6,12,24,0.2)',
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0.55)',
              '#060C18',
            ]}
            locations={[0, 0.35, 0.75, 1]}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.resortGuideMondialEventDetailHeroTitlesMantle}>
            <Text style={styles.resortGuideMondialEventDetailEyebrowTracery}>{item.eyebrow}</Text>
            <Text style={styles.resortGuideMondialEventDetailHeroTitleFiligree}>{item.title}</Text>
          </View>
        </View>

        <View style={styles.resortGuideMondialEventDetailBodyVellum}>
          <View style={styles.resortGuideMondialEventDetailInfoRowLattice}>
            <View style={styles.resortGuideMondialEventDetailInfoCardFacet}>
              <Text style={styles.resortGuideMondialEventDetailInfoIconEnclave}>◎</Text>
              <View style={styles.resortGuideMondialEventDetailInfoTextWrapMantle}>
                <Text style={styles.resortGuideMondialEventDetailInfoLabelTracery}>Capacity</Text>
                <Text style={styles.resortGuideMondialEventDetailInfoValueVellum}>{item.capacity}</Text>
              </View>
            </View>
            <View style={styles.resortGuideMondialEventDetailInfoCardFacet}>
              <Text style={styles.resortGuideMondialEventDetailInfoIconEnclave}>✦</Text>
              <View style={styles.resortGuideMondialEventDetailInfoTextWrapMantle}>
                <Text style={styles.resortGuideMondialEventDetailInfoLabelTracery}>Décor Style</Text>
                <Text style={styles.resortGuideMondialEventDetailInfoValueVellum}>{item.decorType}</Text>
              </View>
            </View>
          </View>

          <View style={styles.resortGuideMondialEventDetailRoomRowLintel}>
            <Image
              source={resortGuideMondialIcons.location}
              style={styles.resortGuideMondialEventDetailRoomIconSigil}
            />
            <Text style={styles.resortGuideMondialEventDetailRoomTextVellum}>{item.room}</Text>
          </View>

          <ResortGuideMondialDetailSectionCornice title="Event Concept">
            <Text style={styles.resortGuideMondialEventDetailBodyTextWeave}>{item.concept}</Text>
          </ResortGuideMondialDetailSectionCornice>

          <ResortGuideMondialDetailSectionCornice title="Decoration & Atmosphere">
            {item.decoration.map(line => (
              <View key={line} style={styles.resortGuideMondialEventDetailBulletRowLattice}>
                <View style={styles.resortGuideMondialEventDetailBulletDotSpindle} />
                <Text style={styles.resortGuideMondialEventDetailBulletTextVellum}>{line}</Text>
              </View>
            ))}
          </ResortGuideMondialDetailSectionCornice>

          <ResortGuideMondialDetailSectionCornice title="Sample Menu">
            {item.menu.map((course, index) => (
              <View
                key={course}
                style={[
                  styles.resortGuideMondialEventDetailMenuRowLintel,
                  index < item.menu.length - 1 && styles.resortGuideMondialEventDetailMenuRowBorderCordon,
                ]}>
                <Text style={styles.resortGuideMondialEventDetailMenuIndexTracery}>{index + 1}</Text>
                <Text style={styles.resortGuideMondialEventDetailMenuTextVellum}>{course}</Text>
              </View>
            ))}
          </ResortGuideMondialDetailSectionCornice>

          <ResortGuideMondialDetailSectionCornice title="Event Timeline">
            {item.timeline.map((entry, index) => (
              <View
                key={`${entry.time}-${entry.label}`}
                style={styles.resortGuideMondialEventDetailTimelineRowLattice}>
                <View style={styles.resortGuideMondialEventDetailTimelineRailCordon}>
                  <View style={styles.resortGuideMondialEventDetailTimelineDotSpindle} />
                  {index < item.timeline.length - 1 ? (
                    <View style={styles.resortGuideMondialEventDetailTimelineLineFrieze} />
                  ) : null}
                </View>
                <View style={styles.resortGuideMondialEventDetailTimelineContentVellum}>
                  <Text style={styles.resortGuideMondialEventDetailTimelineTimeTracery}>{entry.time}</Text>
                  <Text style={styles.resortGuideMondialEventDetailTimelineLabelFiligree}>{entry.label}</Text>
                </View>
              </View>
            ))}
          </ResortGuideMondialDetailSectionCornice>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialEventDetailVestibule: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  resortGuideMondialEventDetailHeroParapet: {
    height: 280,
    backgroundColor: '#0A1020',
  },
  resortGuideMondialEventDetailHeroImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortGuideMondialEventDetailFloatingControlsEnclave: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 16,
  },
  resortGuideMondialEventDetailRoundBtnPortico: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#060C18',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialEventDetailBackIconSigil: {
    width: 18,
    height: 18,
    tintColor: '#F0EAD6',
  },
  resortGuideMondialEventDetailHeroTitlesMantle: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    gap: 6,
  },
  resortGuideMondialEventDetailEyebrowTracery: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
  },
  resortGuideMondialEventDetailHeroTitleFiligree: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 30,
    color: '#F0EAD6',
  },
  resortGuideMondialEventDetailScrollLane: {
    flex: 1,
  },
  resortGuideMondialEventDetailContentVellum: {
    flexGrow: 1,
  },
  resortGuideMondialEventDetailBodyVellum: {
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 16,
  },
  resortGuideMondialEventDetailInfoRowLattice: {
    flexDirection: 'row',
    gap: 12,
  },
  resortGuideMondialEventDetailInfoCardFacet: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    minHeight: 56,
  },
  resortGuideMondialEventDetailInfoIconEnclave: {
    fontSize: 13,
    color: '#C9A020',
    marginTop: 1,
  },
  resortGuideMondialEventDetailInfoTextWrapMantle: {
    flex: 1,
    gap: 2,
  },
  resortGuideMondialEventDetailInfoLabelTracery: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: '#7A8BA8',
    textTransform: 'uppercase',
  },
  resortGuideMondialEventDetailInfoValueVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: '#F0EAD6',
  },
  resortGuideMondialEventDetailRoomRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: -4,
  },
  resortGuideMondialEventDetailRoomIconSigil: {
    width: 10,
    height: 10,
    tintColor: '#7A8BA8',
  },
  resortGuideMondialEventDetailRoomTextVellum: {
    fontSize: 12,
    color: '#7A8BA8',
  },
  resortGuideMondialEventDetailBodyTextWeave: {
    fontSize: 14,
    lineHeight: 23,
    color: '#7A8BA8',
  },
  resortGuideMondialEventDetailBulletRowLattice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  resortGuideMondialEventDetailBulletDotSpindle: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 8,
  },
  resortGuideMondialEventDetailBulletTextVellum: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    color: '#F0EAD6',
  },
  resortGuideMondialEventDetailMenuRowLintel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    paddingBottom: 10,
  },
  resortGuideMondialEventDetailMenuRowBorderCordon: {
    borderBottomWidth: 1,
    borderBottomColor: '#1E2C48',
    marginBottom: 2,
  },
  resortGuideMondialEventDetailMenuIndexTracery: {
    width: 18,
    fontSize: 12,
    fontWeight: '600',
    color: '#C9A020',
  },
  resortGuideMondialEventDetailMenuTextVellum: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    color: '#F0EAD6',
  },
  resortGuideMondialEventDetailTimelineRowLattice: {
    flexDirection: 'row',
    gap: 12,
    minHeight: 48,
  },
  resortGuideMondialEventDetailTimelineRailCordon: {
    width: 12,
    alignItems: 'center',
  },
  resortGuideMondialEventDetailTimelineDotSpindle: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 4,
  },
  resortGuideMondialEventDetailTimelineLineFrieze: {
    flex: 1,
    width: 1,
    backgroundColor: '#3A2A08',
    marginVertical: 4,
  },
  resortGuideMondialEventDetailTimelineContentVellum: {
    flex: 1,
    paddingBottom: 12,
    gap: 2,
  },
  resortGuideMondialEventDetailTimelineTimeTracery: {
    fontSize: 12,
    fontWeight: '600',
    color: '#C9A020',
  },
  resortGuideMondialEventDetailTimelineLabelFiligree: {
    fontSize: 12,
    lineHeight: 18,
    color: '#F0EAD6',
  },
});
