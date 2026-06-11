import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {icons} from '../../data/assets';
import {colors, fonts} from '../../constants/theme';
import {useAdaptive} from '../../hooks/useAdaptive';

const LOADER_DURATION_MS = 6000;
const TRACK_WIDTH = 130;
const TRACK_HEIGHT = 4;
const LOADER_COLOR = '#C9A020';

type LoaderProps = {
  onFinish: () => void;
};

function LoaderBar(): React.JSX.Element {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }),
    );

    animation.start();
    return () => animation.stop();
  }, [progress]);

  const barWidth = progress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, TRACK_WIDTH, 0],
  });

  const barLeft = progress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, TRACK_WIDTH],
  });

  return (
    <View style={styles.LoaderTrack}>
      <Animated.View
        style={[
          styles.LoaderBarFill,
          {
            width: barWidth,
            left: barLeft,
          },
        ]}
      />
    </View>
  );
}

export function LoaderScreen({
  onFinish,
}: LoaderProps): React.JSX.Element {
  const adaptive = useAdaptive();

  useEffect(() => {
    const timer = setTimeout(onFinish, LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <ImageBackground
      source={icons.loaderBg}
      style={styles.LoaderImageParapet}>
      <ScrollView
        contentContainerStyle={styles.LoaderScrollTapestry}
        showsVerticalScrollIndicator={false}>
        <View style={styles.LoaderCenterNexus}>
          <Image
            source={
              Platform.OS === 'ios'
                ? icons.loaderLogo
                : icons.loaderLogoAndroid
            }
            style={[
              styles.LoaderEmblem,
              {
                width: adaptive.loaderLogoSize,
                height: adaptive.loaderLogoSize,
              },
            ]}
          />
          {Platform.OS === 'ios' ? (
            <>
              <Text style={styles.LoaderTitleFiligree}>
                Mondial Casino
              </Text>
              <Text style={styles.LoaderSubtitleWeave}>
                Resort & Collection
              </Text>
            </>
          ) : (
            <Text style={styles.LoaderTitleFiligree}>
              Resort Guide Mondial
            </Text>
          )}
        </View>
        <View style={styles.LoaderBottomMantle}>
          <LoaderBar />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  LoaderImageParapet: {
    flex: 1,
  },
  LoaderScrollTapestry: {
    flexGrow: 1,
  },
  LoaderCenterNexus: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoaderEmblem: {
    resizeMode: 'contain',
  },
  LoaderBottomMantle: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingBottom: 40,
  },
  LoaderTrack: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.2)',
    overflow: 'hidden',
  },
  LoaderBarFill: {
    position: 'absolute',
    top: 0,
    height: TRACK_HEIGHT,
    borderRadius: 30,
    backgroundColor: LOADER_COLOR,
  },
  LoaderTitleFiligree: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.text,
    marginBottom: 14,
    marginTop: 20,
    letterSpacing: 0.9,
  },
  LoaderSubtitleWeave: {
    fontSize: 10,
    color: colors.muted,
  },
});
