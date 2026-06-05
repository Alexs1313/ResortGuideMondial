import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ResortGuideMondialSavedProvider} from './ResortGuideMondial/ResortGuideMondialEssenceVessel/ResortGuideMondialSavedContext';
import {ResortGuideMondialIntroScreen} from './ResortGuideMondial/ResortGuideMondialPanorama/ResortGuideMondialVestibulePane/ResortGuideMondialIntroScreen';
import {ResortGuideMondialLoaderScreen} from './ResortGuideMondial/ResortGuideMondialPanorama/ResortGuideMondialThresholdPane/ResortGuideMondialLoaderScreen';
import {ResortGuideMondialRouterino} from './ResortGuideMondial/ResortGuideMondialRouterino/ResortGuideMondialRouterino';

function App(): React.JSX.Element {
  const [loaderDone, setLoaderDone] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  return (
    <SafeAreaProvider>
      {!loaderDone ? (
        <ResortGuideMondialLoaderScreen onFinish={() => setLoaderDone(true)} />
      ) : introDone ? (
        <ResortGuideMondialSavedProvider>
          <ResortGuideMondialRouterino />
        </ResortGuideMondialSavedProvider>
      ) : (
        <ResortGuideMondialIntroScreen onFinish={() => setIntroDone(true)} />
      )}
    </SafeAreaProvider>
  );
}

export default App;
