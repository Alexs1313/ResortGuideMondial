import type {ImageSourcePropType} from 'react-native';

import type {ResortGuideMondialMainTabId} from '../../../ResortGuideMondialSigilRegistry/ResortGuideMondialMainTabLattice/ResortGuideMondialMainTabLattice';

export const resortGuideMondialTabIcons: Record<
  ResortGuideMondialMainTabId,
  ImageSourcePropType
> = {
  guide: require('../ResortGuideMondialImagery/resort_guide_mondial_tab_guide.png'),
  saved: require('../ResortGuideMondialImagery/resort_guide_mondial_tab_saved.png'),
  services: require('../ResortGuideMondialImagery/resort_guide_mondial_tab_services.png'),
  calendar: require('../ResortGuideMondialImagery/resort_guide_mondial_tab_calendar.png'),
  events: require('../ResortGuideMondialImagery/resort_guide_mondial_tab_events.png'),
};
