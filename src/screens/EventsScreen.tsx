import React, {useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  EventFilter,
  EventItem,
  getEventHighlights,
  getFilteredEvents,
} from '../data/eventsData';
import {colors} from '../theme/colors';

const FILTERS: {key: EventFilter; label: string}[] = [
  {key: 'All', label: 'All'},
  {key: 'Wedding', label: 'Wedding'},
  {key: 'Birthday', label: 'Birthday'},
  {key: 'Corporate', label: 'Corporate'},
  {key: 'Gala', label: 'Gala'},
];

type EventCardProps = {
  item: EventItem;
  onPress: () => void;
};

const EventCard = ({item, onPress}: EventCardProps) => {
  const highlights = getEventHighlights(item);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.card, pressed && styles.cardPressed]}>
      <View style={styles.cardImageWrap}>
        <Image
          source={item.image}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(6,12,24,0.35)', 'rgba(6,12,24,0)']}
          style={styles.cardGradientTop}
        />
        <View style={styles.badgeLeft}>
          <Text style={styles.badgeText}>{item.tabType.toUpperCase()}</Text>
        </View>
        <View style={styles.badgeRight}>
          <Text style={styles.badgeText}>{item.capacity}</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardTitleRow}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.decorLabel}>{item.decorType}</Text>
        </View>
        <Text style={styles.cardDescription} numberOfLines={3}>
          {item.concept}
        </Text>
        <View style={styles.tagsRow}>
          {highlights.map(tag => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
};

type EventsScreenProps = {
  onOpenEvent: (item: EventItem) => void;
};

export function EventsScreen({onOpenEvent}: EventsScreenProps) {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<EventFilter>('All');

  const items = useMemo(() => getFilteredEvents(filter), [filter]);

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <View style={styles.header}>
        <Text style={styles.brand}>Plan Your Event</Text>
        <Text style={styles.title}>Event Ideas</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filters}>
        {FILTERS.map(({key, label}) => {
          const active = filter === key;
          return (
            <Pressable
              key={key}
              onPress={() => setFilter(key)}
              style={[styles.filterChip, active && styles.filterChipActive]}>
              <Text
                style={[
                  styles.filterLabel,
                  active && styles.filterLabelActive,
                ]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.list,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <EventCard
            item={item}
            onPress={() => onOpenEvent(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    paddingTop: 12,
    paddingBottom: 8,
    gap: 2,
  },
  brand: {
    fontFamily: 'Cinzel-Regular',
    fontSize: 9,
    letterSpacing: 2.7,
    color: '#C9A020',
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 33,
    color: '#F0EAD6',
  },
  filters: {
    paddingBottom: 22,
    gap: 8,
  },
  filterChip: {
    height: 34,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterChipActive: {
    borderColor: '#C9A020',
    backgroundColor: '#C9A020',
  },
  filterLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#7A8BA8',
  },
  filterLabelActive: {
    color: '#060C18',
  },
  list: {
    paddingHorizontal: 20,
    gap: 16,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    overflow: 'hidden',
  },
  cardPressed: {
    opacity: 0.92,
  },
  cardImageWrap: {
    height: 160,
    backgroundColor: '#0A1020',
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  cardGradientTop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 56,
  },
  badgeLeft: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: 'rgba(6,12,24,0.85)',
  },
  badgeRight: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: 'rgba(6,12,24,0.85)',
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '500',
    letterSpacing: 0.4,
    color: '#C9A020',
    textTransform: 'uppercase',
  },
  cardBody: {
    padding: 16,
    gap: 10,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 15,
    lineHeight: 22,
    color: '#F0EAD6',
  },
  decorLabel: {
    fontSize: 10,
    color: '#7A8BA8',
    marginTop: 2,
  },
  cardDescription: {
    fontSize: 12,
    lineHeight: 20,
    color: '#7A8BA8',
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: '#1A2840',
  },
  tagText: {
    fontSize: 10,
    color: '#7A8BA8',
  },
});
