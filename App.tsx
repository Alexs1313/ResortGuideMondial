import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {SavedProvider} from './src/context/SavedContext';
import {MainApp} from './src/navigation/MainApp';
import {Intro} from './src/screens/Intro';
import {Loader} from './src/screens/Loader';

function App(): React.JSX.Element {
  const [loaderDone, setLoaderDone] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  return (
    <SafeAreaProvider>
      {!loaderDone ? (
        <Loader onFinish={() => setLoaderDone(true)} />
      ) : introDone ? (
        <SavedProvider>
          <MainApp />
        </SavedProvider>
      ) : (
        <Intro onFinish={() => setIntroDone(true)} />
      )}
    </SafeAreaProvider>
  );
}

export default App;
