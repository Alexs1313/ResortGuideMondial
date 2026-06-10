import {useContext} from 'react';

import {ResortMondialGuideCasinoSavedContext} from '../ResortMondialGuideCasinoEssenceVessel/ResortMondialGuideCasinoSavedContext';

export function useResortMondialGuideCasinoSaved() {
  const ctx = useContext(ResortMondialGuideCasinoSavedContext);
  if (!ctx) {
    throw new Error('error');
  }
  return ctx;
}
