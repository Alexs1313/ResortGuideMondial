import React, {useCallback, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import GoldRule from '../../components/GoldRule';
import AppLayout from '../../components/AppLayout';
import {StepIndicator} from '../../components/StepIndicator';
import {GoldButton} from '../../components/GoldButton';
import {introSlides} from '../../data/introSlides';
import {
  colors,
  fontSize,
  fonts,
  gradient,
  spacing,
} from '../../constants/theme';
import {useAdaptive} from '../../hooks/useAdaptive';

type IntroScreenProps = {
  onFinish: () => void;
};

export function IntroScreen({onFinish}: IntroScreenProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const [step, setStep] = useState(0);
  const fade = useRef(new Animated.Value(1)).current;
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
    <AppLayout bounce={false}>
      <View
        style={[styles.IntroHeroParapet, {height: adaptive.introHeroHeight}]}>
        <Animated.Image
          source={current.image}
          style={[styles.IntroHeroImagePanel, {opacity: fade}]}
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
          styles.IntroContentVellum,
          {paddingBottom: Math.max(insets.bottom, spacing.l)},
          {opacity: fade},
        ]}>
        <Text style={styles.IntroTitleFiligree}>{current.title}</Text>
        <GoldRule />
        <Text style={styles.IntroDescriptionWeave}>{current.description}</Text>

        <View style={styles.IntroFooterPlinth}>
          <StepIndicator count={introSlides.length} activeIndex={step} />
          <GoldButton
            label={current.cta}
            onPress={handleCta}
            variant="introAtelier"
            showChevron
            style={isLast ? styles.IntroCtaWideAtelier : undefined}
          />
        </View>
      </Animated.View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  IntroHeroParapet: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.bg,
  },
  IntroHeroImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  IntroContentVellum: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
    backgroundColor: colors.bg,
  },
  IntroTitleFiligree: {
    fontFamily: fonts.bold,
    fontSize: fontSize.hero,
    lineHeight: 38,
    color: colors.text,
  },
  IntroDescriptionWeave: {
    marginTop: spacing.l,
    fontSize: fontSize.body,
    lineHeight: 23,
    color: colors.muted,
  },
  IntroFooterPlinth: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.xl,
  },
  IntroCtaWideAtelier: {
    minWidth: 126,
  },
});
