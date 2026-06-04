import {useContext} from 'react';

import {ResortGuidSavedContext} from '../resortGuidCtx/ResortGuidSavedContext';

export function useResortGuidSaved() {
  const ctx = useContext(ResortGuidSavedContext);
  if (!ctx) {
    throw new Error('err');
  }
  return ctx;
}
