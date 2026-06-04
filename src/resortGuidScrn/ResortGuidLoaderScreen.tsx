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

import {resortGuidIcons} from '../resortGuidAssts';
import {resortGuidColors} from '../resortGuidThm/ResortGuidColors';

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

export function ResortGuidLoaderScreen({
  onFinish,
}: LoaderProps): React.JSX.Element {
  useEffect(() => {
    const timer = setTimeout(onFinish, LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <ImageBackground source={resortGuidIcons.loaderBg} style={styles.imageBg}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          {Platform.OS === 'ios' ? (
            <Image source={resortGuidIcons.loaderLogo} />
          ) : (
            <Image
              source={resortGuidIcons.loaderLogoAndroid}
              style={styles.androidLogo}
            />
          )}
          {Platform.OS === 'ios' ? (
            <>
              <Text style={styles.title}>Mondial Resort</Text>
              <Text style={styles.subtitle}>Resort & Collection</Text>
            </>
          ) : (
            <Text style={styles.title}>Resort Guide Mondial</Text>
          )}
        </View>
        <View style={styles.bottomWrap}>
          <WebView
            source={{html: htmlLoader}}
            scrollEnabled={false}
            originWhitelist={['*']}
            style={styles.webView}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidLogo: {
    width: 150,
    height: 150,
  },
  bottomWrap: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingBottom: 40,
  },
  webView: {
    width: 260,
    height: 190,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Cinzel-Bold',
    color: resortGuidColors.text,
    marginBottom: 14,
    marginTop: 20,
    letterSpacing: 0.9,
  },
  subtitle: {
    fontSize: 10,
    color: resortGuidColors.muted,
  },
});
