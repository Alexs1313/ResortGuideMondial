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

import {resortGuidIcons} from '../resortGuidAssts';
import ResortGuidGoldRule from '../resortGuidCpnnts/ResortGuidGoldRule';
import {GuideItem} from '../resortGuidData/ResortGuidGuideData';
import {useResortGuidSaved} from '../resortGuidHooks/useResortGuidSaved';
import {resortGuidColors} from '../resortGuidThm/ResortGuidColors';

type GuideDetailProps = {
  item: GuideItem;
  onBack: () => void;
};

const HighlightItem = ({text}: {text: string}) => (
  <View style={styles.highlightRow}>
    <View style={styles.checkCircle}>
      <Text style={styles.checkMark}>✓</Text>
    </View>
    <Text style={styles.highlightText}>{text}</Text>
  </View>
);

export function ResortGuidGuideDetailScreen({
  item,
  onBack,
}: GuideDetailProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {isSaved, toggleSave} = useResortGuidSaved();
  const saved = isSaved(item.id);

  const highlightPairs: string[][] = [];
  for (let i = 0; i < item.highlights.length; i += 2) {
    highlightPairs.push(item.highlights.slice(i, i + 2));
  }

  return (
    <View style={styles.screen}>
      <View
        style={[styles.floatingControls, {paddingTop: insets.top + 8}]}
        pointerEvents="box-none">
        <Pressable
          onPress={onBack}
          style={styles.roundBtn}
          accessibilityRole="button"
          accessibilityLabel="Go back">
          <Image source={resortGuidIcons.back} style={styles.backIcon} />
        </Pressable>
        <Pressable
          onPress={() => toggleSave(item.id)}
          style={[styles.roundBtn, saved && styles.roundBtnSaved]}
          accessibilityRole="button"
          accessibilityLabel={saved ? 'Remove from saved' : 'Save'}>
          <Image source={saved ? resortGuidIcons.savedActive : resortGuidIcons.saved} />
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
            colors={['rgba(0,0,0,0)', resortGuidColors.bg]}
            style={styles.heroGradient}
          />
        </View>

        <View style={styles.body}>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <ResortGuidGoldRule />

          <View style={styles.infoRow}>
            <View style={styles.infoCard}>
              <Image source={resortGuidIcons.location} style={styles.infoIconImage} />
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: resortGuidColors.bg,
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
  floatingControls: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  roundBtn: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: resortGuidColors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundBtnSaved: {
    backgroundColor: resortGuidColors.accent,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: resortGuidColors.text,
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 16,
  },
  subtitle: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: resortGuidColors.accent,
    textTransform: 'uppercase',
  },
  name: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 33,
    color: resortGuidColors.text,
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
    borderColor: resortGuidColors.outline,
    backgroundColor: resortGuidColors.cardBg,
    minHeight: 56,
  },
  infoIcon: {
    fontSize: 13,
    color: resortGuidColors.accent,
    marginTop: 1,
  },
  infoIconImage: {
    width: 13,
    height: 13,
    tintColor: resortGuidColors.accent,
    marginTop: 1,
  },
  infoTextWrap: {
    flex: 1,
    gap: 2,
  },
  infoLabel: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: resortGuidColors.muted,
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 12,
    lineHeight: 16,
    color: resortGuidColors.text,
  },
  description: {
    fontSize: 14,
    lineHeight: 23,
    color: resortGuidColors.muted,
  },
  highlightsTitle: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: resortGuidColors.accent,
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
    color: resortGuidColors.muted,
    fontWeight: '700',
  },
  highlightText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    color: resortGuidColors.text,
  },
});
