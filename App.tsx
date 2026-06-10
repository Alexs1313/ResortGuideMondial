import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ResortMondialGuideCasinoSavedProvider} from './ResortMondialGuideCasino/ResortMondialGuideCasinoEssenceVessel/ResortMondialGuideCasinoSavedContext';
import {ResortMondialGuideCasinoIntroScreen} from './ResortMondialGuideCasino/ResortMondialGuideCasinoPanorama/ResortMondialGuideCasinoVestibulePane/ResortMondialGuideCasinoIntroScreen';
import {ResortMondialGuideCasinoLoaderScreen} from './ResortMondialGuideCasino/ResortMondialGuideCasinoPanorama/ResortMondialGuideCasinoThresholdPane/ResortMondialGuideCasinoLoaderScreen';
import {ResortMondialGuideCasinoRouterino} from './ResortMondialGuideCasino/ResortMondialGuideCasinoRouterino/ResortMondialGuideCasinoRouterino';

function App(): React.JSX.Element {
  const [loaderDone, setLoaderDone] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  return (
    <SafeAreaProvider>
      {!loaderDone ? (
        <ResortMondialGuideCasinoLoaderScreen onFinish={() => setLoaderDone(true)} />
      ) : introDone ? (
        <ResortMondialGuideCasinoSavedProvider>
          <ResortMondialGuideCasinoRouterino />
        </ResortMondialGuideCasinoSavedProvider>
      ) : (
        <ResortMondialGuideCasinoIntroScreen onFinish={() => setIntroDone(true)} />
      )}
    </SafeAreaProvider>
  );
}

export default App;
