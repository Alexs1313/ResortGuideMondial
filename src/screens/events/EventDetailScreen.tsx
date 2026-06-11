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

import {icons} from '../../data/assets';
import {DetailSection} from '../../components/DetailSection';
import {RoundIconButton} from '../../components/RoundIconButton';
import {EventItem} from '../../data/events';
import {colors, fonts} from '../../constants/theme';

type EventDetailProps = {
  item: EventItem;
  onBack: () => void;
};

export function EventDetailScreen({
  item,
  onBack,
}: EventDetailProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.EventDetailVestibule}>
      <View
        style={[styles.EventDetailFloatingControlsEnclave, {paddingTop: insets.top + 8}]}
        pointerEvents="box-none">
        <RoundIconButton
          onPress={onBack}
          icon={icons.back}
          size={36}
          variant="solidFacet"
          iconStyle={styles.EventDetailBackIconSigil}
          accessibilityLabel="Go back"
        />
      </View>

      <ScrollView
        style={styles.EventDetailScrollLane}
        contentContainerStyle={[
          styles.EventDetailContentVellum,
          {paddingBottom: Math.max(insets.bottom, 24) + 16},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.EventDetailHeroParapet}>
          <Image
            source={item.image}
            style={styles.EventDetailHeroImagePanel}
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
          <View style={styles.EventDetailHeroTitlesMantle}>
            <Text style={styles.EventDetailEyebrowTracery}>{item.eyebrow}</Text>
            <Text style={styles.EventDetailHeroTitleFiligree}>{item.title}</Text>
          </View>
        </View>

        <View style={styles.EventDetailBodyVellum}>
          <View style={styles.EventDetailInfoRowLattice}>
            <View style={styles.EventDetailInfoCardFacet}>
              <Text style={styles.EventDetailInfoIconEnclave}>◎</Text>
              <View style={styles.EventDetailInfoTextWrapMantle}>
                <Text style={styles.EventDetailInfoLabelTracery}>Capacity</Text>
                <Text style={styles.EventDetailInfoValueVellum}>{item.capacity}</Text>
              </View>
            </View>
            <View style={styles.EventDetailInfoCardFacet}>
              <Text style={styles.EventDetailInfoIconEnclave}>✦</Text>
              <View style={styles.EventDetailInfoTextWrapMantle}>
                <Text style={styles.EventDetailInfoLabelTracery}>Décor Style</Text>
                <Text style={styles.EventDetailInfoValueVellum}>{item.decorType}</Text>
              </View>
            </View>
          </View>

          <View style={styles.EventDetailRoomRowLintel}>
            <Image
              source={icons.location}
              style={styles.EventDetailRoomIconSigil}
            />
            <Text style={styles.EventDetailRoomTextVellum}>{item.room}</Text>
          </View>

          <DetailSection title="Event Concept">
            <Text style={styles.EventDetailBodyTextWeave}>{item.concept}</Text>
          </DetailSection>

          <DetailSection title="Decoration & Atmosphere">
            {item.decoration.map(line => (
              <View key={line} style={styles.EventDetailBulletRowLattice}>
                <View style={styles.EventDetailBulletDotSpindle} />
                <Text style={styles.EventDetailBulletTextVellum}>{line}</Text>
              </View>
            ))}
          </DetailSection>

          <DetailSection title="Menu">
            {item.menu.map((course, index) => (
              <View
                key={course}
                style={[
                  styles.EventDetailMenuRowLintel,
                  index < item.menu.length - 1 && styles.EventDetailMenuRowBorderCordon,
                ]}>
                <Text style={styles.EventDetailMenuIndexTracery}>{index + 1}</Text>
                <Text style={styles.EventDetailMenuTextVellum}>{course}</Text>
              </View>
            ))}
          </DetailSection>

          <DetailSection title="Event Timeline">
            {item.timeline.map((entry, index) => (
              <View
                key={`${entry.time}-${entry.label}`}
                style={styles.EventDetailTimelineRowLattice}>
                <View style={styles.EventDetailTimelineRailCordon}>
                  <View style={styles.EventDetailTimelineDotSpindle} />
                  {index < item.timeline.length - 1 ? (
                    <View style={styles.EventDetailTimelineLineFrieze} />
                  ) : null}
                </View>
                <View style={styles.EventDetailTimelineContentVellum}>
                  <Text style={styles.EventDetailTimelineTimeTracery}>{entry.time}</Text>
                  <Text style={styles.EventDetailTimelineLabelFiligree}>{entry.label}</Text>
                </View>
              </View>
            ))}
          </DetailSection>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  EventDetailVestibule: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  EventDetailHeroParapet: {
    height: 280,
    backgroundColor: '#0A1020',
  },
  EventDetailHeroImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  EventDetailFloatingControlsEnclave: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 16,
  },
  EventDetailRoundBtnPortico: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#060C18',
    alignItems: 'center',
    justifyContent: 'center',
  },
  EventDetailBackIconSigil: {
    width: 18,
    height: 18,
    tintColor: '#F0EAD6',
  },
  EventDetailHeroTitlesMantle: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    gap: 6,
  },
  EventDetailEyebrowTracery: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
  },
  EventDetailHeroTitleFiligree: {
    fontFamily: fonts.bold,
    fontSize: 22,
    lineHeight: 30,
    color: '#F0EAD6',
  },
  EventDetailScrollLane: {
    flex: 1,
  },
  EventDetailContentVellum: {
    flexGrow: 1,
  },
  EventDetailBodyVellum: {
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 16,
  },
  EventDetailInfoRowLattice: {
    flexDirection: 'row',
    gap: 12,
  },
  EventDetailInfoCardFacet: {
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
  EventDetailInfoIconEnclave: {
    fontSize: 13,
    color: '#C9A020',
    marginTop: 1,
  },
  EventDetailInfoTextWrapMantle: {
    flex: 1,
    gap: 2,
  },
  EventDetailInfoLabelTracery: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: '#7A8BA8',
    textTransform: 'uppercase',
  },
  EventDetailInfoValueVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: '#F0EAD6',
  },
  EventDetailRoomRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: -4,
  },
  EventDetailRoomIconSigil: {
    width: 10,
    height: 10,
    tintColor: '#7A8BA8',
  },
  EventDetailRoomTextVellum: {
    fontSize: 12,
    color: '#7A8BA8',
  },
  EventDetailBodyTextWeave: {
    fontSize: 14,
    lineHeight: 23,
    color: '#7A8BA8',
  },
  EventDetailBulletRowLattice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  EventDetailBulletDotSpindle: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 8,
  },
  EventDetailBulletTextVellum: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    color: '#F0EAD6',
  },
  EventDetailMenuRowLintel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    paddingBottom: 10,
  },
  EventDetailMenuRowBorderCordon: {
    borderBottomWidth: 1,
    borderBottomColor: '#1E2C48',
    marginBottom: 2,
  },
  EventDetailMenuIndexTracery: {
    width: 18,
    fontSize: 12,
    fontWeight: '600',
    color: '#C9A020',
  },
  EventDetailMenuTextVellum: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    color: '#F0EAD6',
  },
  EventDetailTimelineRowLattice: {
    flexDirection: 'row',
    gap: 12,
    minHeight: 48,
  },
  EventDetailTimelineRailCordon: {
    width: 12,
    alignItems: 'center',
  },
  EventDetailTimelineDotSpindle: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 4,
  },
  EventDetailTimelineLineFrieze: {
    flex: 1,
    width: 1,
    backgroundColor: '#3A2A08',
    marginVertical: 4,
  },
  EventDetailTimelineContentVellum: {
    flex: 1,
    paddingBottom: 12,
    gap: 2,
  },
  EventDetailTimelineTimeTracery: {
    fontSize: 12,
    fontWeight: '600',
    color: '#C9A020',
  },
  EventDetailTimelineLabelFiligree: {
    fontSize: 12,
    lineHeight: 18,
    color: '#F0EAD6',
  },
});
