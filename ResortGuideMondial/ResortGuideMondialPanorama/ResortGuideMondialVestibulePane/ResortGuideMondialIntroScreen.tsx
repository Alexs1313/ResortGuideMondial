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

import ResortGuideMondialGoldRule from '../../ResortGuideMondialAtelier/ResortGuideMondialGiltFiligree/ResortGuideMondialGoldRule';
import ResortGuideMondialLayout from '../../ResortGuideMondialAtelier/ResortGuideMondialChassisFrame/ResortGuideMondialLayout';
import {ResortGuideMondialStepLattice} from '../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialStepLattice/ResortGuideMondialStepLattice';
import {ResortGuideMondialGoldCtaPortico} from '../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialGoldCtaPortico/ResortGuideMondialGoldCtaPortico';
import {resortGuideMondialIntroSlides} from '../../ResortGuideMondialScriptum/ResortGuideMondialIntroSlides';
import {
  resortGuideMondialColors,
  resortGuideMondialFontSize,
  resortGuideMondialGradient,
  resortGuideMondialSpacing,
} from '../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialIntroScreenProps = {
  onFinish: () => void;
};

export function ResortGuideMondialIntroScreen({
  onFinish,
}: ResortGuideMondialIntroScreenProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {height: screenHeight} = useWindowDimensions();
  const [step, setStep] = useState(0);
  const fade = useRef(new Animated.Value(1)).current;

  const imageHeight = Math.round(screenHeight * 0.59);
  const current = resortGuideMondialIntroSlides[step];
  const isLast = step === resortGuideMondialIntroSlides.length - 1;

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
    <ResortGuideMondialLayout bounce={false}>
      <View
        style={[
          styles.resortGuideMondialIntroHeroParapet,
          {height: imageHeight},
        ]}>
        <Animated.Image
          source={current.image}
          style={[
            styles.resortGuideMondialIntroHeroImagePanel,
            {opacity: fade},
          ]}
          resizeMode="cover"
        />
        <LinearGradient
          colors={resortGuideMondialGradient.hero}
          locations={[0, 0.18, 0.55, 0.88]}
          style={StyleSheet.absoluteFill}
        />
      </View>

      <Animated.View
        style={[
          styles.resortGuideMondialIntroContentVellum,
          {paddingBottom: Math.max(insets.bottom, resortGuideMondialSpacing.l)},
          {opacity: fade},
        ]}>
        <Text style={styles.resortGuideMondialIntroTitleFiligree}>
          {current.title}
        </Text>
        <ResortGuideMondialGoldRule />
        <Text style={styles.resortGuideMondialIntroDescriptionWeave}>
          {current.description}
        </Text>

        <View style={styles.resortGuideMondialIntroFooterPlinth}>
          <ResortGuideMondialStepLattice
            count={resortGuideMondialIntroSlides.length}
            activeIndex={step}
          />
          <ResortGuideMondialGoldCtaPortico
            label={current.cta}
            onPress={handleCta}
            variant="introAtelier"
            showChevron
            style={isLast ? styles.resortGuideMondialIntroCtaWideAtelier : undefined}
          />
        </View>
      </Animated.View>
    </ResortGuideMondialLayout>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialIntroHeroParapet: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: resortGuideMondialColors.bg,
  },
  resortGuideMondialIntroHeroImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortGuideMondialIntroContentVellum: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
    backgroundColor: resortGuideMondialColors.bg,
  },
  resortGuideMondialIntroTitleFiligree: {
    fontFamily: 'Cinzel-Bold',
    fontSize: resortGuideMondialFontSize.hero,
    lineHeight: 38,
    color: resortGuideMondialColors.text,
  },
  resortGuideMondialIntroDescriptionWeave: {
    marginTop: resortGuideMondialSpacing.l,
    fontSize: resortGuideMondialFontSize.body,
    lineHeight: 23,
    color: resortGuideMondialColors.muted,
  },
  resortGuideMondialIntroFooterPlinth: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: resortGuideMondialSpacing.xl,
  },
  resortGuideMondialIntroCtaWideAtelier: {
    minWidth: 126,
  },
});
