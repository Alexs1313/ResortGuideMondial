import {useContext} from 'react';

import {SavedContext} from '../context/SavedContext';

export function useSaved() {
  const ctx = useContext(SavedContext);
  if (!ctx) {
    throw new Error('error');
  }
  return ctx;
}
