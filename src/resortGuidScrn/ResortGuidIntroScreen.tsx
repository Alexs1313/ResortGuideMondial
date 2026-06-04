import React, {useCallback, useRef, useState} from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import ResortGuidGoldRule from '../resortGuidCpnnts/ResortGuidGoldRule';
import ResortGuidLayout from '../resortGuidCpnnts/ResortGuidLayout';
import {resortGuidIntroSlides} from '../resortGuidCntnt/ResortGuidIntroSlides';
import {
  resortGuidColors,
  resortGuidFontSize,
  resortGuidGradient,
  resortGuidSpacing,
} from '../resortGuidThm/ResortGuidColors';

type ResortGuidIntroScreenProps = {
  onFinish: () => void;
};

export function ResortGuidIntroScreen({
  onFinish,
}: ResortGuidIntroScreenProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {height: screenHeight} = useWindowDimensions();
  const [step, setStep] = useState(0);
  const fade = useRef(new Animated.Value(1)).current;

  const imageHeight = Math.round(screenHeight * 0.59);
  const current = resortGuidIntroSlides[step];
  const isLast = step === resortGuidIntroSlides.length - 1;

  const animateStep = useCallback(
    (nextStep: number) => {
      Animated.sequence([
        Animated.timing(fade, {
          toValue: 0,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.timing(fade, {
          toValue: 1,
          duration: 180,
          useNativeDriver: true,
        }),
      ]).start();
      setTimeout(() => setStep(nextStep), 120);
    },
    [fade],
  );

  const handleCta = () => {
    if (isLast) {
      onFinish();
      return;
    }
    animateStep(step + 1);
  };

  return (
    <ResortGuidLayout bounce={false}>
      <View style={[styles.hero, {height: imageHeight}]}>
        <Animated.Image
          source={current.image}
          style={[styles.heroImage, {opacity: fade}]}
          resizeMode="cover"
        />
        <LinearGradient
          colors={resortGuidGradient.hero}
          locations={[0, 0.18, 0.55, 0.88]}
          style={StyleSheet.absoluteFill}
        />
      </View>

      <Animated.View
        style={[
          styles.content,
          {paddingBottom: Math.max(insets.bottom, resortGuidSpacing.l)},
          {opacity: fade},
        ]}>
        <Text style={styles.title}>{current.title}</Text>
        <ResortGuidGoldRule />
        <Text style={styles.description}>{current.description}</Text>

        <View style={styles.footer}>
          <View style={styles.pagination}>
            {resortGuidIntroSlides.map((_, index) =>
              index === step ? (
                <View key={index} style={styles.paginationActive} />
              ) : (
                <View key={index} style={styles.paginationDot} />
              ),
            )}
          </View>
          <Pressable
            onPress={handleCta}
            style={({pressed}) => [
              styles.cta,
              isLast && styles.ctaWide,
              pressed && styles.ctaPressed,
            ]}>
            <Text style={styles.ctaText}>{current.cta}</Text>
            <Text style={styles.ctaChevron}>›</Text>
          </Pressable>
        </View>
      </Animated.View>
    </ResortGuidLayout>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: resortGuidColors.bg,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
    backgroundColor: resortGuidColors.bg,
  },
  title: {
    fontFamily: 'Cinzel-Bold',
    fontSize: resortGuidFontSize.hero,
    lineHeight: 38,
    color: resortGuidColors.text,
  },
  description: {
    marginTop: resortGuidSpacing.l,
    fontSize: resortGuidFontSize.body,
    lineHeight: 23,
    color: resortGuidColors.muted,
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: resortGuidSpacing.xl,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: resortGuidSpacing.s,
    width: 56,
  },
  paginationActive: {
    flex: 1,
    height: 8,
    borderRadius: 100,
    backgroundColor: resortGuidColors.accent,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: resortGuidColors.outline,
  },
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    minWidth: 120,
    paddingHorizontal: 24,
    borderRadius: 100,
    backgroundColor: resortGuidColors.accent,
  },
  ctaWide: {
    minWidth: 126,
  },
  ctaPressed: {
    opacity: 0.88,
  },
  ctaText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.7,
    color: resortGuidColors.bg,
    textTransform: 'uppercase',
  },
  ctaChevron: {
    marginLeft: 6,
    marginTop: -2,
    fontSize: 18,
    lineHeight: 20,
    color: resortGuidColors.bg,
    fontWeight: '700',
  },
});
