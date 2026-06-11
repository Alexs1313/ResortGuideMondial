import React from 'react';

import {icons} from '../data/assets';
import {EmptyState} from './EmptyState';

export function SavedEmptyState(): React.JSX.Element {
  return (
    <EmptyState
      icon={icons.noSaved}
      title="No Saved Items"
      message="Browse the Resort Mondial Guide and tap the bookmark icon to save your favorites here."
    />
  );
}
