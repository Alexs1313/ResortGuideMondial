import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
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

import {EventsStackParamList} from '../routes/EventsStackNav';
import Layoutt from '../components/Layoutt';

type DetailRoute = RouteProp<EventsStackParamList, 'EventDetail'>;

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionCard}>{children}</View>
  </View>
);

const EventDetailScrn = () => {
  const navigation = useNavigation();
  const {params} = useRoute<DetailRoute>();
  const insets = useSafeAreaInsets();
  const {item} = params;

  return (
    <Layoutt>
      <View
        style={[styles.floatingControls, {paddingTop: insets.top + 8}]}
        pointerEvents="box-none">
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.roundBtn}
          accessibilityRole="button"
          accessibilityLabel="Go back">
          <Image
            source={require('../../elements/i/backicon.png')}
            style={styles.backIcon}
          />
        </Pressable>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          {paddingBottom: Math.max(insets.bottom, 24) + 16},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Image
            source={item.image}
            style={styles.heroImage}
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
          <View style={styles.heroTitles}>
            <Text style={styles.eyebrow}>{item.eyebrow}</Text>
            <Text style={styles.heroTitle}>{item.title}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.infoRow}>
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>◎</Text>
              <View style={styles.infoTextWrap}>
                <Text style={styles.infoLabel}>Capacity</Text>
                <Text style={styles.infoValue}>{item.capacity}</Text>
              </View>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>✦</Text>
              <View style={styles.infoTextWrap}>
                <Text style={styles.infoLabel}>Décor Style</Text>
                <Text style={styles.infoValue}>{item.decorType}</Text>
              </View>
            </View>
          </View>

          <View style={styles.roomRow}>
            <Image
              source={require('../../elements/i/locationicon.png')}
              style={styles.roomIcon}
            />
            <Text style={styles.roomText}>{item.room}</Text>
          </View>

          <Section title="Event Concept">
            <Text style={styles.bodyText}>{item.concept}</Text>
          </Section>

          <Section title="Decoration & Atmosphere">
            {item.decoration.map(line => (
              <View key={line} style={styles.bulletRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>{line}</Text>
              </View>
            ))}
          </Section>

          <Section title="Sample Menu">
            {item.menu.map((course, index) => (
              <View
                key={course}
                style={[
                  styles.menuRow,
                  index < item.menu.length - 1 && styles.menuRowBorder,
                ]}>
                <Text style={styles.menuIndex}>{index + 1}</Text>
                <Text style={styles.menuText}>{course}</Text>
              </View>
            ))}
          </Section>

          <Section title="Event Timeline">
            {item.timeline.map((entry, index) => (
              <View
                key={`${entry.time}-${entry.label}`}
                style={styles.timelineRow}>
                <View style={styles.timelineRail}>
                  <View style={styles.timelineDot} />
                  {index < item.timeline.length - 1 ? (
                    <View style={styles.timelineLine} />
                  ) : null}
                </View>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTime}>{entry.time}</Text>
                  <Text style={styles.timelineLabel}>{entry.label}</Text>
                </View>
              </View>
            ))}
          </Section>
        </View>
      </ScrollView>
    </Layoutt>
  );
};

export default EventDetailScrn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  hero: {
    height: 280,
    backgroundColor: '#0A1020',
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  floatingControls: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 16,
  },
  roundBtn: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#060C18',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
    tintColor: '#F0EAD6',
  },
  heroTitles: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    gap: 6,
  },
  eyebrow: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 30,
    color: '#F0EAD6',
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 12,
  },
  infoCard: {
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
  infoIcon: {
    fontSize: 13,
    color: '#C9A020',
    marginTop: 1,
  },
  infoTextWrap: {
    flex: 1,
    gap: 2,
  },
  infoLabel: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: '#7A8BA8',
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 12,
    lineHeight: 16,
    color: '#F0EAD6',
  },
  roomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: -4,
  },
  roomIcon: {
    width: 10,
    height: 10,
    tintColor: '#7A8BA8',
  },
  roomText: {
    fontSize: 12,
    color: '#7A8BA8',
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  sectionCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    gap: 10,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 23,
    color: '#7A8BA8',
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  bulletDot: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    color: '#F0EAD6',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    paddingBottom: 10,
  },
  menuRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#1E2C48',
    marginBottom: 2,
  },
  menuIndex: {
    width: 18,
    fontSize: 12,
    fontWeight: '600',
    color: '#C9A020',
  },
  menuText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    color: '#F0EAD6',
  },
  timelineRow: {
    flexDirection: 'row',
    gap: 12,
    minHeight: 48,
  },
  timelineRail: {
    width: 12,
    alignItems: 'center',
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    marginTop: 4,
  },
  timelineLine: {
    flex: 1,
    width: 1,
    backgroundColor: '#3A2A08',
    marginVertical: 4,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 12,
    gap: 2,
  },
  timelineTime: {
    fontSize: 12,
    fontWeight: '600',
    color: '#C9A020',
  },
  timelineLabel: {
    fontSize: 12,
    lineHeight: 18,
    color: '#F0EAD6',
  },
});
