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

import {resortMondialGuideCasinoIcons} from '../../../ResortMondialGuideCasinoReliquary';
import {ResortMondialGuideCasinoDetailSectionCornice} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoDetailSectionCornice/ResortMondialGuideCasinoDetailSectionCornice';
import {ResortMondialGuideCasinoRoundGlyphPortico} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoRoundGlyphPortico/ResortMondialGuideCasinoRoundGlyphPortico';
import {EventItem} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoOccasionsFolio/ResortMondialGuideCasinoEventsData';
import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type EventDetailProps = {
  item: EventItem;
  onBack: () => void;
};

export function ResortMondialGuideCasinoEventDetailScreen({
  item,
  onBack,
}: EventDetailProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.resortMondialGuideCasinoEventDetailVestibule}>
      <View
        style={[styles.resortMondialGuideCasinoEventDetailFloatingControlsEnclave, {paddingTop: insets.top + 8}]}
        pointerEvents="box-none">
        <ResortMondialGuideCasinoRoundGlyphPortico
          onPress={onBack}
          icon={resortMondialGuideCasinoIcons.back}
          size={36}
          variant="solidFacet"
          iconStyle={styles.resortMondialGuideCasinoEventDetailBackIconSigil}
          accessibilityLabel="Go back"
        />
      </View>

      <ScrollView
        style={styles.resortMondialGuideCasinoEventDetailScrollLane}
        contentContainerStyle={[
          styles.resortMondialGuideCasinoEventDetailContentVellum,
          {paddingBottom: Math.max(insets.bottom, 24) + 16},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.resortMondialGuideCasinoEventDetailHeroParapet}>
          <Image
            source={item.image}
            style={styles.resortMondialGuideCasinoEventDetailHeroImagePanel}
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
          <View style={styles.resortMondialGuideCasinoEventDetailHeroTitlesMantle}>
            <Text style={styles.resortMondialGuideCasinoEventDetailEyebrowTracery}>{item.eyebrow}</Text>
            <Text style={styles.resortMondialGuideCasinoEventDetailHeroTitleFiligree}>{item.title}</Text>
          </View>
        </View>

        <View style={styles.resortMondialGuideCasinoEventDetailBodyVellum}>
          <View style={styles.resortMondialGuideCasinoEventDetailInfoRowLattice}>
            <View style={styles.resortMondialGuideCasinoEventDetailInfoCardFacet}>
              <Text style={styles.resortMondialGuideCasinoEventDetailInfoIconEnclave}>◎</Text>
              <View style={styles.resortMondialGuideCasinoEventDetailInfoTextWrapMantle}>
                <Text style={styles.resortMondialGuideCasinoEventDetailInfoLabelTracery}>Capacity</Text>
                <Text style={styles.resortMondialGuideCasinoEventDetailInfoValueVellum}>{item.capacity}</Text>
              </View>
            </View>
            <View style={styles.resortMondialGuideCasinoEventDetailInfoCardFacet}>
              <Text style={styles.resortMondialGuideCasinoEventDetailInfoIconEnclave}>✦</Text>
              <View style={styles.resortMondialGuideCasinoEventDetailInfoTextWrapMantle}>
                <Text style={styles.resortMondialGuideCasinoEventDetailInfoLabelTracery}>Décor Style</Text>
                <Text style={styles.resortMondialGuideCasinoEventDetailInfoValueVellum}>{item.decorType}</Text>
              </View>
            </View>
          </View>

          <View style={styles.resortMondialGuideCasinoEventDetailRoomRowLintel}>
            <Image
              source={resortMondialGuideCasinoIcons.location}
              style={styles.resortMondialGuideCasinoEventDetailRoomIconSigil}
            />
            <Text style={styles.resortMondialGuideCasinoEventDetailRoomTextVellum}>{item.room}</Text>
          </View>

          <ResortMondialGuideCasinoDetailSectionCornice title="Event Concept">
            <Text style={styles.resortMondialGuideCasinoEventDetailBodyTextWeave}>{item.concept}</Text>
          </ResortMondialGuideCasinoDetailSectionCornice>

          <ResortMondialGuideCasinoDetailSectionCornice title="Decoration & Atmosphere">
            {item.decoration.map(line => (
              <View key={line} style={styles.resortMondialGuideCasinoEventDetailBulletRowLattice}>
                <View style={styles.resortMondialGuideCasinoEventDetailBulletDotSpindle} />
                <Text style={styles.resortMondialGuideCasinoEventDetailBulletTextVellum}>{line}</Text>
              </View>
            ))}
          </ResortMondialGuideCasinoDetailSectionCornice>

          <ResortMondialGuideCasinoDetailSectionCornice title="Sample Menu">
            {item.menu.map((course, index) => (
              <View
                key={course}
                style={[
                  styles.resortMondialGuideCasinoEventDetailMenuRowLintel,
                  index < item.menu.length - 1 && styles.resortMondialGuideCasinoEventDetailMenuRowBorderCordon,
                ]}>
                <Text style={styles.resortMondialGuideCasinoEventDetailMenuIndexTracery}>{index + 1}</Text>
                <Text style={styles.resortMondialGuideCasinoEventDetailMenuTextVellum}>{course}</Text>
              </View>
            ))}
          </ResortMondialGuideCasinoDetailSectionCornice>

          <ResortMondialGuideCasinoDetailSectionCornice title="Event Timeline">
            {item.timeline.map((entry, index) => (
              <View
                key={`${entry.time}-${entry.label}`}
                style={styles.resortMondialGuideCasinoEventDetailTimelineRowLattice}>
                <View style={styles.resortMondialGuideCasinoEventDetailTimelineRailCordon}>
                  <View style={styles.resortMondialGuideCasinoEventDetailTimelineDotSpindle} />
                  {index < item.timeline.length - 1 ? (
                    <View style={styles.resortMondialGuideCasinoEventDetailTimelineLineFrieze} />
                  ) : null}
                </View>
                <View style={styles.resortMondialGuideCasinoEventDetailTimelineContentVellum}>
                  <Text style={styles.resortMondialGuideCasinoEventDetailTimelineTimeTracery}>{entry.time}</Text>
                  <Text style={styles.resortMondialGuideCasinoEventDetailTimelineLabelFiligree}>{entry.label}</Text>
                </View>
              </View>
            ))}
          </ResortMondialGuideCasinoDetailSectionCornice>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoEventDetailVestibule: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  resortMondialGuideCasinoEventDetailHeroParapet: {
    height: 280,
    backgroundColor: '#0A1020',
  },
  resortMondialGuideCasinoEventDetailHeroImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortMondialGuideCasinoEventDetailFloatingControlsEnclave: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 16,
  },
  resortMondialGuideCasinoEventDetailRoundBtnPortico: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#060C18',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoEventDetailBackIconSigil: {
    width: 18,
    height: 18,
    tintColor: '#F0EAD6',
  },
  resortMondialGuideCasinoEventDetailHeroTitlesMantle: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    gap: 6,
  },
  resortMondialGuideCasinoEventDetailEyebrowTracery: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
  },
  resortMondialGuideCasinoEventDetailHeroTitleFiligree: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 30,
    color: '#F0EAD6',
  },
  resortMondialGuideCasinoEventDetailScrollLane: {
    flex: 1,
  },
  resortMondialGuideCasinoEventDetailContentVellum: {
    flexGrow: 1,
  },
  resortMondialGuideCasinoEventDetailBodyVellum: {
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 16,
  },
  resortMondialGuideCasinoEventDetailInfoRowLattice: {
    flexDirection: 'row',
    gap: 12,
  },
  resortMondialGuideCasinoEventDetailInfoCardFacet: {
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
  resortMondialGuideCasinoEventDetailInfoIconEnclave: {
    fontSize: 13,
    color: '#C9A020',
    marginTop: 1,
  },
  resortMondialGuideCasinoEventDetailInfoTextWrapMantle: {
    flex: 1,
    gap: 2,
  },
  resortMondialGuideCasinoEventDetailInfoLabelTracery: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: '#7A8BA8',
    textTransform: 'uppercase',
  },
  resortMondialGuideCasinoEventDetailInfoValueVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: '#F0EAD6',
  },
  resortMondialGuideCasinoEventDetailRoomRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: -4,
  },
  resortMondialGuideCasinoEventDetailRoomIconSigil: {
    width: 10,
    height: 10,
    tintColor: '#7A8BA8',
  },
  resortMondialGuideCasinoEventDetailRoomTextVellum: {
    fontSize: 12,
    color: '#7A8BA8',
  },
  resortMondialGuideCasinoEventDetailBodyTextWeave: {
    fontSize: 14,
    lineHeight: 23,
    color: '#7A8BA8',
  },
  resortMondialGuideCasinoEventDetailBulletRowLattice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  resortMondialGuideCasinoEventDetailBulletDotSpindle: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 8,
  },
  resortMondialGuideCasinoEventDetailBulletTextVellum: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    color: '#F0EAD6',
  },
  resortMondialGuideCasinoEventDetailMenuRowLintel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    paddingBottom: 10,
  },
  resortMondialGuideCasinoEventDetailMenuRowBorderCordon: {
    borderBottomWidth: 1,
    borderBottomColor: '#1E2C48',
    marginBottom: 2,
  },
  resortMondialGuideCasinoEventDetailMenuIndexTracery: {
    width: 18,
    fontSize: 12,
    fontWeight: '600',
    color: '#C9A020',
  },
  resortMondialGuideCasinoEventDetailMenuTextVellum: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    color: '#F0EAD6',
  },
  resortMondialGuideCasinoEventDetailTimelineRowLattice: {
    flexDirection: 'row',
    gap: 12,
    minHeight: 48,
  },
  resortMondialGuideCasinoEventDetailTimelineRailCordon: {
    width: 12,
    alignItems: 'center',
  },
  resortMondialGuideCasinoEventDetailTimelineDotSpindle: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 4,
  },
  resortMondialGuideCasinoEventDetailTimelineLineFrieze: {
    flex: 1,
    width: 1,
    backgroundColor: '#3A2A08',
    marginVertical: 4,
  },
  resortMondialGuideCasinoEventDetailTimelineContentVellum: {
    flex: 1,
    paddingBottom: 12,
    gap: 2,
  },
  resortMondialGuideCasinoEventDetailTimelineTimeTracery: {
    fontSize: 12,
    fontWeight: '600',
    color: '#C9A020',
  },
  resortMondialGuideCasinoEventDetailTimelineLabelFiligree: {
    fontSize: 12,
    lineHeight: 18,
    color: '#F0EAD6',
  },
});
