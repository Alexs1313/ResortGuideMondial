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

import Layout from '../components/Layout';
import GoldRule from '../components/GoldRule';
import {introSlides} from '../content/introSlides';
import {colors, fontSize, gradient, spacing} from '../theme/colors';

type IntroProps = {
  onFinish: () => void;
};

export function Intro({onFinish}: IntroProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {height: screenHeight} = useWindowDimensions();
  const [step, setStep] = useState(0);
  const fade = useRef(new Animated.Value(1)).current;

  const imageHeight = Math.round(screenHeight * 0.59);
  const current = introSlides[step];
  const isLast = step === introSlides.length - 1;

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
    <Layout bounce={false}>
      <View style={[styles.hero, {height: imageHeight}]}>
        <Animated.Image
          source={current.image}
          style={[styles.heroImage, {opacity: fade}]}
          resizeMode="cover"
        />
        <LinearGradient
          colors={gradient.hero}
          locations={[0, 0.18, 0.55, 0.88]}
          style={StyleSheet.absoluteFill}
        />
      </View>

      <Animated.View
        style={[
          styles.content,
          {paddingBottom: Math.max(insets.bottom, spacing.l)},
          {opacity: fade},
        ]}>
        <Text style={styles.title}>{current.title}</Text>
        <GoldRule />
        <Text style={styles.description}>{current.description}</Text>

        <View style={styles.footer}>
          <View style={styles.pagination}>
            {introSlides.map((_, index) =>
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
    </Layout>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.bg,
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
    backgroundColor: colors.bg,
  },
  title: {
    fontFamily: 'Cinzel-Bold',
    fontSize: fontSize.hero,
    lineHeight: 38,
    color: colors.text,
  },
  description: {
    marginTop: spacing.l,
    fontSize: fontSize.body,
    lineHeight: 23,
    color: colors.muted,
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.xl,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s,
    width: 56,
  },
  paginationActive: {
    flex: 1,
    height: 8,
    borderRadius: 100,
    backgroundColor: colors.accent,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: colors.outline,
  },
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    minWidth: 120,
    paddingHorizontal: 24,
    borderRadius: 100,
    backgroundColor: colors.accent,
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
    color: colors.bg,
    textTransform: 'uppercase',
  },
  ctaChevron: {
    marginLeft: 6,
    marginTop: -2,
    fontSize: 18,
    lineHeight: 20,
    color: colors.bg,
    fontWeight: '700',
  },
});
