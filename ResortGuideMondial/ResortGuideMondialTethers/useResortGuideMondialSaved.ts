import {useContext} from 'react';

import {ResortGuideMondialSavedContext} from '../ResortGuideMondialEssenceVessel/ResortGuideMondialSavedContext';

export function useResortGuideMondialSaved() {
  const ctx = useContext(ResortGuideMondialSavedContext);
  if (!ctx) {
    throw new Error('error');
  }
  return ctx;
}
