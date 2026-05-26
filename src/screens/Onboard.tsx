import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {
  Animated,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Layoutt from '../components/Layoutt';

type OnboardStep = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  cta: string;
};

const STEPS: OnboardStep[] = [
  {
    image: require('../../elements/i/onboard_hero_1.png'),
    title: 'Discover the Resort',
    description:
      'Explore dining, entertainment, rooms, and guest spaces in one elegant resort guide.',
    cta: 'Next',
  },
  {
    image: require('../../elements/i/onboard_hero_2.png'),
    title: 'Dine in Magnificence',
    description:
      'From the signature Le Grand Salon to intimate cocktail lounges — every meal becomes a memory worth preserving forever.',
    cta: 'Next',
  },
  {
    image: require('../../elements/i/onboard_hero_3.png'),
    title: 'Rest in Grandeur',
    description:
      'Sumptuous suites designed for those who demand the finest, from elegant Deluxe rooms to the incomparable Presidential Suite.',
    cta: 'Begin',
  },
];

const STEP_COUNT = STEPS.length;

const GoldRule = () => (
  <View style={styles.goldRule}>
    <View style={styles.goldRuleLine} />
    <View style={styles.goldRuleDiamond} />
    <View style={styles.goldRuleLine} />
  </View>
);

type PaginationProps = {
  activeIndex: number;
};

const Pagination = ({activeIndex}: PaginationProps) => (
  <View style={styles.pagination}>
    {Array.from({length: STEP_COUNT}, (_, index) => (
      <View
        key={index}
        style={[
          index === activeIndex
            ? styles.paginationActive
            : styles.paginationDot,
        ]}
      />
    ))}
  </View>
);

const Onboard = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {height: screenHeight} = useWindowDimensions();
  const [step, setStep] = useState(0);
  const fade = useRef(new Animated.Value(1)).current;

  const imageHeight = Math.round(screenHeight * 0.59);
  const current = STEPS[step];
  const isLast = step === STEP_COUNT - 1;

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
      navigation.navigate('TabNav' as never);
      return;
    }
    animateStep(step + 1);
  };

  return (
    <Layoutt bounce={false}>
      <View style={[styles.hero, {height: imageHeight}]}>
        <Animated.Image
          source={current.image}
          style={[styles.heroImage, {opacity: fade}]}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['#060C18', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', '#060C18']}
          locations={[0, 0.18, 0.55, 0.88]}
          style={StyleSheet.absoluteFill}
        />
      </View>

      <Animated.View
        style={[
          styles.content,
          {paddingBottom: Math.max(insets.bottom, 16)},
          {opacity: fade},
        ]}>
        <Text style={styles.title}>{current.title}</Text>
        <GoldRule />
        <Text style={styles.description}>{current.description}</Text>

        <View style={styles.footer}>
          <Pagination activeIndex={step} />
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
    </Layoutt>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  hero: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#060C18',
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
    backgroundColor: '#060C18',
  },
  title: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 30,
    lineHeight: 38,
    color: '#F0EAD6',
  },
  goldRule: {
    marginTop: 16,
    height: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldRuleLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#3A2A08',
  },
  goldRuleDiamond: {
    width: 6,
    height: 6,
    marginHorizontal: 8,
    backgroundColor: '#C9A020',
    transform: [{rotate: '45deg'}],
  },
  description: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 23,
    color: '#7A8BA8',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 56,
  },
  paginationActive: {
    flex: 1,
    height: 8,
    borderRadius: 100,
    backgroundColor: '#C9A020',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: '#1E2C48',
  },
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    minWidth: 120,
    paddingHorizontal: 24,
    borderRadius: 100,
    backgroundColor: '#C9A020',
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
    color: '#060C18',
    textTransform: 'uppercase',
  },
  ctaChevron: {
    marginLeft: 6,
    marginTop: -2,
    fontSize: 18,
    lineHeight: 20,
    color: '#060C18',
    fontWeight: '700',
  },
});
