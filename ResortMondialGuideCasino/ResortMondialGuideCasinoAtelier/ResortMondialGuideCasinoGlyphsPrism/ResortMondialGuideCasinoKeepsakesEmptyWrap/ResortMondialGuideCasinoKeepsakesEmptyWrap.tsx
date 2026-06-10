import React from 'react';

import {resortMondialGuideCasinoIcons} from '../../../ResortMondialGuideCasinoReliquary';
import {ResortMondialGuideCasinoEmptyHollow} from '../ResortMondialGuideCasinoEmptyHollow/ResortMondialGuideCasinoEmptyHollow';

export function ResortMondialGuideCasinoKeepsakesEmptyWrap(): React.JSX.Element {
  return (
    <ResortMondialGuideCasinoEmptyHollow
      icon={resortMondialGuideCasinoIcons.noSaved}
      title="No Saved Items"
      message="Browse the Resort Mondial Guide and tap the bookmark icon to save your favorites here."
    />
  );
}
