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

import GoldRule from '../components/GoldRule';
import {useSaved} from '../context/SavedContext';
import {GuideStackParamList} from '../routes/GuideStackNav';
import {SavedStackParamList} from '../routes/SavedStackNav';

type DetailRoute = RouteProp<
  GuideStackParamList & SavedStackParamList,
  'GuideDetail'
>;

const HighlightItem = ({text}: {text: string}) => (
  <View style={styles.highlightRow}>
    <View style={styles.checkCircle}>
      <Text style={styles.checkMark}>✓</Text>
    </View>
    <Text style={styles.highlightText}>{text}</Text>
  </View>
);

const GuideDetailScrn = () => {
  const navigation = useNavigation();
  const {params} = useRoute<DetailRoute>();
  const insets = useSafeAreaInsets();
  const {item} = params;
  const {isSaved, toggleSave} = useSaved();
  const saved = isSaved(item.id);

  const highlightPairs: string[][] = [];
  for (let i = 0; i < item.highlights.length; i += 2) {
    highlightPairs.push(item.highlights.slice(i, i + 2));
  }

  return (
    <View style={styles.screen}>
      <View style={styles.hero}>
        <Image
          source={item.image}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(0,0,0,0)', '#060C18']}
          style={styles.heroGradient}
        />
        <View style={[styles.heroControls, {paddingTop: insets.top + 8}]}>
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
          <Pressable
            onPress={() => toggleSave(item.id)}
            style={[styles.roundBtn, saved && {backgroundColor: '#C9A020'}]}
            accessibilityRole="button"
            accessibilityLabel={saved ? 'Remove from saved' : 'Save'}>
            <Image
              source={
                saved
                  ? require('../../elements/i/savediconn.png')
                  : require('../../elements/i/savedicon.png')
              }
            />
          </Pressable>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          {paddingBottom: Math.max(insets.bottom, 24) + 16},
        ]}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <GoldRule />

        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <Image
              source={require('../../elements/i/locationicon.png')}
              style={styles.infoIcon}
            />
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoLabel}>Location</Text>
              <Text style={styles.infoValue}>{item.location}</Text>
            </View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>◷</Text>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoLabel}>Hours</Text>
              <Text style={styles.infoValue}>{item.hours}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.description}>{item.description}</Text>

        <Text style={styles.highlightsTitle}>Highlights</Text>
        <View style={styles.highlightsGrid}>
          {highlightPairs.map((pair, rowIndex) => (
            <View key={rowIndex} style={styles.highlightRowWrap}>
              {pair.map(highlight => (
                <View key={highlight} style={styles.highlightCol}>
                  <HighlightItem text={highlight} />
                </View>
              ))}
              {pair.length === 1 ? <View style={styles.highlightCol} /> : null}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GuideDetailScrn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  hero: {
    height: 256,
    backgroundColor: '#0A1020',
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  heroGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
  },
  heroControls: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 28,
    lineHeight: 30,
    color: '#F0EAD6',
    marginTop: -2,
    marginLeft: -2,
  },
  bookmarkIcon: {
    fontSize: 16,
    color: '#7A8BA8',
  },
  bookmarkActive: {
    color: '#C9A020',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 16,
  },
  subtitle: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
  },
  name: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 33,
    color: '#F0EAD6',
    marginTop: -8,
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
  description: {
    fontSize: 14,
    lineHeight: 23,
    color: '#7A8BA8',
  },
  highlightsTitle: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  highlightsGrid: {
    gap: 8,
  },
  highlightRowWrap: {
    flexDirection: 'row',
    gap: 8,
  },
  highlightCol: {
    flex: 1,
  },
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minHeight: 32,
  },
  checkCircle: {
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: '#1A2840',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    fontSize: 9,
    color: '#7A8BA8',
    fontWeight: '700',
  },
  highlightText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    color: '#F0EAD6',
  },
});
