import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SavedProvider} from './src/context/SavedContext';
import {IntroScreen} from './src/screens/onboarding/IntroScreen';
import {LoaderScreen} from './src/screens/splash/LoaderScreen';
import {AppNavigator} from './src/navigation/AppNavigator';

function App(): React.JSX.Element {
  const [loaderDone, setLoaderDone] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  return (
    <SafeAreaProvider>
      {!loaderDone ? (
        <LoaderScreen onFinish={() => setLoaderDone(true)} />
      ) : introDone ? (
        <SavedProvider>
          <AppNavigator />
        </SavedProvider>
      ) : (
        <IntroScreen onFinish={() => setIntroDone(true)} />
      )}
    </SafeAreaProvider>
  );
}

export default App;
