import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

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
    --loader-color:#C9A020;

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
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }
</style>
</head>

<body>
  <div class="loader"></div>
</body>
</html>`;

const Loadder = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboard' as never);
    }, 6001);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../elements/i/loader_bg.png')}
      style={styles.imageBg}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {Platform.OS === 'ios' ? (
            <Image source={require('../../elements/i/loaderlogo.png')} />
          ) : (
            <Image
              source={require('../../elements/i/loaderlogoand.png')}
              style={{width: 150, height: 150}}
            />
          )}
          {Platform.OS === 'ios' ? (
            <>
              <Text style={styles.title}>Mondial Casino</Text>
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
            style={{width: 260, height: 190, backgroundColor: 'transparent'}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Loadder;

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },

  bottomWrap: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Cinzel-Bold',
    color: '#F0EAD6',
    marginBottom: 14,
    marginTop: 20,
    letterSpacing: 0.9,
  },
  subtitle: {
    fontSize: 10,
    fontweight: '500',
    color: '#7A8BA8',
  },
});
