import React, {useCallback, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import ResortMondialGuideCasinoGoldRule from '../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGiltFiligree/ResortMondialGuideCasinoGoldRule';
import ResortMondialGuideCasinoLayout from '../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoChassisFrame/ResortMondialGuideCasinoLayout';
import {ResortMondialGuideCasinoStepLattice} from '../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoStepLattice/ResortMondialGuideCasinoStepLattice';
import {ResortMondialGuideCasinoGoldCtaPortico} from '../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoGoldCtaPortico/ResortMondialGuideCasinoGoldCtaPortico';
import {resortMondialGuideCasinoIntroSlides} from '../../ResortMondialGuideCasinoScriptum/ResortMondialGuideCasinoIntroSlides';
import {
  resortMondialGuideCasinoColors,
  resortMondialGuideCasinoFontSize,
  resortMondialGuideCasinoGradient,
  resortMondialGuideCasinoSpacing,
} from '../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoIntroScreenProps = {
  onFinish: () => void;
};

export function ResortMondialGuideCasinoIntroScreen({
  onFinish,
}: ResortMondialGuideCasinoIntroScreenProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {height: screenHeight} = useWindowDimensions();
  const [step, setStep] = useState(0);
  const fade = useRef(new Animated.Value(1)).current;

  const imageHeight = Math.round(screenHeight * 0.59);
  const current = resortMondialGuideCasinoIntroSlides[step];
  const isLast = step === resortMondialGuideCasinoIntroSlides.length - 1;

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
    <ResortMondialGuideCasinoLayout bounce={false}>
      <View
        style={[
          styles.resortMondialGuideCasinoIntroHeroParapet,
          {height: imageHeight},
        ]}>
        <Animated.Image
          source={current.image}
          style={[
            styles.resortMondialGuideCasinoIntroHeroImagePanel,
            {opacity: fade},
          ]}
          resizeMode="cover"
        />
        <LinearGradient
          colors={resortMondialGuideCasinoGradient.hero}
          locations={[0, 0.18, 0.55, 0.88]}
          style={StyleSheet.absoluteFill}
        />
      </View>

      <Animated.View
        style={[
          styles.resortMondialGuideCasinoIntroContentVellum,
          {paddingBottom: Math.max(insets.bottom, resortMondialGuideCasinoSpacing.l)},
          {opacity: fade},
        ]}>
        <Text style={styles.resortMondialGuideCasinoIntroTitleFiligree}>
          {current.title}
        </Text>
        <ResortMondialGuideCasinoGoldRule />
        <Text style={styles.resortMondialGuideCasinoIntroDescriptionWeave}>
          {current.description}
        </Text>

        <View style={styles.resortMondialGuideCasinoIntroFooterPlinth}>
          <ResortMondialGuideCasinoStepLattice
            count={resortMondialGuideCasinoIntroSlides.length}
            activeIndex={step}
          />
          <ResortMondialGuideCasinoGoldCtaPortico
            label={current.cta}
            onPress={handleCta}
            variant="introAtelier"
            showChevron
            style={isLast ? styles.resortMondialGuideCasinoIntroCtaWideAtelier : undefined}
          />
        </View>
      </Animated.View>
    </ResortMondialGuideCasinoLayout>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoIntroHeroParapet: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: resortMondialGuideCasinoColors.bg,
  },
  resortMondialGuideCasinoIntroHeroImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortMondialGuideCasinoIntroContentVellum: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
    backgroundColor: resortMondialGuideCasinoColors.bg,
  },
  resortMondialGuideCasinoIntroTitleFiligree: {
    fontFamily: 'Cinzel-Bold',
    fontSize: resortMondialGuideCasinoFontSize.hero,
    lineHeight: 38,
    color: resortMondialGuideCasinoColors.text,
  },
  resortMondialGuideCasinoIntroDescriptionWeave: {
    marginTop: resortMondialGuideCasinoSpacing.l,
    fontSize: resortMondialGuideCasinoFontSize.body,
    lineHeight: 23,
    color: resortMondialGuideCasinoColors.muted,
  },
  resortMondialGuideCasinoIntroFooterPlinth: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: resortMondialGuideCasinoSpacing.xl,
  },
  resortMondialGuideCasinoIntroCtaWideAtelier: {
    minWidth: 126,
  },
});
