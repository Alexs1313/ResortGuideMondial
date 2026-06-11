import React, {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {icons} from '../../data/assets';
import {FilterChips} from '../../components/FilterChips';
import {RoundIconButton} from '../../components/RoundIconButton';
import {ScreenShell} from '../../components/ScreenShell';
import {VenueCard} from '../../components/VenueCard';
import {useSaved} from '../../hooks/useSaved';
import {
  GuideFilter,
  GuideItem,
  getFilteredGuideItems,
} from '../../data/guide';
import {colors} from '../../constants/theme';
import {useAdaptive} from '../../hooks/useAdaptive';

const FILTERS: {key: GuideFilter; label: string; icon?: string}[] = [
  {key: 'All', label: 'All'},
  {key: 'Restaurant', label: 'Restaurant', icon: '◆'},
  {key: 'Rooms', label: 'Rooms', icon: '▣'},
];

type GuideScreenProps = {
  onOpenGuide: (item: GuideItem) => void;
};

export function GuideScreen({
  onOpenGuide,
}: GuideScreenProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const [filter, setFilter] = useState<GuideFilter>('All');
  const {isSaved, toggleSave} = useSaved();
  const items = useMemo(() => getFilteredGuideItems(filter), [filter]);

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ScreenShell
        eyebrow="Mondial"
        title="Resort Guide"
        trailing={
          <RoundIconButton
            onPress={() => {}}
            icon={icons.search}
            size={40}
            variant="rimmedFacet"
            accessibilityLabel="Search guide"
          />
        }
      />
      <View style={styles.GuideFiltersLattice}>
        {FILTERS.map(({key, label, icon}) => (
          <FilterChips
            key={key}
            label={label}
            icon={icon}
            active={filter === key}
            onPress={() => setFilter(key)}
          />
        ))}
      </View>
    </>
  );

  return (
    <View style={styles.GuideVestibule}>
      <ScrollView
        contentContainerStyle={[
          styles.GuideListTapestry,
          {
            paddingHorizontal: adaptive.horizontalPadding,
            paddingBottom: Math.max(insets.bottom, 16) + 80,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        {listHeader}
        {items.map(item => (
          <VenueCard
            key={item.id}
            item={item}
            saved={isSaved(item.id)}
            onPress={() => onOpenGuide(item)}
            onToggleSave={() => toggleSave(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  GuideVestibule: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  GuideFiltersLattice: {
    flexDirection: 'row',
    gap: 8,
    paddingBottom: 12,
  },
  GuideListTapestry: {
    gap: 16,
  },
});
