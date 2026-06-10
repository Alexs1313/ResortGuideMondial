import type {ImageSourcePropType} from 'react-native';

import type {ResortMondialGuideCasinoMainTabId} from '../../../ResortMondialGuideCasinoSigilRegistry/ResortMondialGuideCasinoMainTabLattice/ResortMondialGuideCasinoMainTabLattice';

export const resortMondialGuideCasinoTabIcons: Record<
  ResortMondialGuideCasinoMainTabId,
  ImageSourcePropType
> = {
  guide: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_tab_guide.png'),
  saved: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_tab_saved.png'),
  services: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_tab_services.png'),
  calendar: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_tab_calendar.png'),
  events: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_tab_events.png'),
};
