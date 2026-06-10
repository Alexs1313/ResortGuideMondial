import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

import {resortMondialGuideCasinoIcons} from '../../ResortMondialGuideCasinoReliquary';
import {resortMondialGuideCasinoColors} from '../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

const LOADER_DURATION_MS = 6000;

const htmlLoader = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
  body {
    margin: 0;
    padding: 0;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }
  .loader {
    display: block;
    --height-of-loader: 4px;
    --loader-color: #C9A020;
    width: 130px;
    height: var(--height-of-loader);
    border-radius: 30px;
    background-color: rgba(0,0,0,0.2);
    position: relative;
  }
  .loader::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
  }
  @keyframes moving {
    50% { width: 100%; }
    100% { width: 0; right: 0; left: unset; }
  }
</style>
</head>
<body>
  <div class="loader"></div>
</body>
</html>`;

type LoaderProps = {
  onFinish: () => void;
};

export function ResortMondialGuideCasinoLoaderScreen({
  onFinish,
}: LoaderProps): React.JSX.Element {
  useEffect(() => {
    const timer = setTimeout(onFinish, LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <ImageBackground
      source={resortMondialGuideCasinoIcons.loaderBg}
      style={styles.resortMondialGuideCasinoLoaderImageParapet}>
      <ScrollView
        contentContainerStyle={
          styles.resortMondialGuideCasinoLoaderScrollTapestry
        }
        showsVerticalScrollIndicator={false}>
        <View style={styles.resortMondialGuideCasinoLoaderCenterNexus}>
          <Image
            source={
              Platform.OS === 'ios'
                ? resortMondialGuideCasinoIcons.loaderLogo
                : resortMondialGuideCasinoIcons.loaderLogoAndroid
            }
            style={styles.resortMondialGuideCasinoLoaderEmblem}
          />
          {Platform.OS === 'ios' ? (
            <>
              <Text style={styles.resortMondialGuideCasinoLoaderTitleFiligree}>
                Mondial Casino
              </Text>
              <Text style={styles.resortMondialGuideCasinoLoaderSubtitleWeave}>
                Resort & Collection
              </Text>
            </>
          ) : (
            <Text style={styles.resortMondialGuideCasinoLoaderTitleFiligree}>
              Resort Guide Mondial
            </Text>
          )}
        </View>
        <View style={styles.resortMondialGuideCasinoLoaderBottomMantle}>
          <WebView
            source={{html: htmlLoader}}
            scrollEnabled={false}
            originWhitelist={['*']}
            style={styles.resortMondialGuideCasinoLoaderWebViewPanel}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoLoaderImageParapet: {
    flex: 1,
  },
  resortMondialGuideCasinoLoaderScrollTapestry: {
    flexGrow: 1,
  },
  resortMondialGuideCasinoLoaderCenterNexus: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoLoaderEmblem: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  resortMondialGuideCasinoLoaderBottomMantle: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingBottom: 40,
  },
  resortMondialGuideCasinoLoaderWebViewPanel: {
    width: 260,
    height: 190,
    backgroundColor: 'transparent',
  },
  resortMondialGuideCasinoLoaderTitleFiligree: {
    fontSize: 24,
    fontFamily: 'Cinzel-Bold',
    color: resortMondialGuideCasinoColors.text,
    marginBottom: 14,
    marginTop: 20,
    letterSpacing: 0.9,
  },
  resortMondialGuideCasinoLoaderSubtitleWeave: {
    fontSize: 10,
    color: resortMondialGuideCasinoColors.muted,
  },
});
