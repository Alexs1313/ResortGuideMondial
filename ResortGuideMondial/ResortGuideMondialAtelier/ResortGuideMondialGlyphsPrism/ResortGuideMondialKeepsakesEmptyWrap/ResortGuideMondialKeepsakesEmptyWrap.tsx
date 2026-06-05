import React from 'react';

import {resortGuideMondialIcons} from '../../../ResortGuideMondialReliquary';
import {ResortGuideMondialEmptyHollow} from '../ResortGuideMondialEmptyHollow/ResortGuideMondialEmptyHollow';

export function ResortGuideMondialKeepsakesEmptyWrap(): React.JSX.Element {
  return (
    <ResortGuideMondialEmptyHollow
      icon={resortGuideMondialIcons.noSaved}
      title="No Saved Items"
      message="Browse the Resort Mondial Guide and tap the bookmark icon to save your favorites here."
    />
  );
}
