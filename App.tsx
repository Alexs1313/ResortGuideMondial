import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ResortGuidSavedProvider} from './src/resortGuidCtx/ResortGuidSavedContext';
import {ResortGuidMainApp} from './src/resortGuidNav/ResortGuidMainApp';
import {ResortGuidIntroScreen} from './src/resortGuidScrn/ResortGuidIntroScreen';
import {ResortGuidLoaderScreen} from './src/resortGuidScrn/ResortGuidLoaderScreen';

function App(): React.JSX.Element {
  const [loaderDone, setLoaderDone] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  return (
    <SafeAreaProvider>
      {!loaderDone ? (
        <ResortGuidLoaderScreen onFinish={() => setLoaderDone(true)} />
      ) : introDone ? (
        <ResortGuidSavedProvider>
          <ResortGuidMainApp />
        </ResortGuidSavedProvider>
      ) : (
        <ResortGuidIntroScreen onFinish={() => setIntroDone(true)} />
      )}
    </SafeAreaProvider>
  );
}

export default App;
