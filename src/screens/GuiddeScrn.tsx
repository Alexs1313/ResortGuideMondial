import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useMemo, useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useSaved} from '../context/SavedContext';
import {GuideFilter, GuideItem, getFilteredGuideItems} from '../data/guideData';
import {GuideStackParamList} from '../routes/GuideStackNav';

type GuideNav = StackNavigationProp<GuideStackParamList, 'GuiddeList'>;

const FILTERS: {key: GuideFilter; label: string; icon?: string}[] = [
  {key: 'All', label: 'All'},
  {key: 'Restaurant', label: 'Restaurant', icon: '◆'},
  {key: 'Rooms', label: 'Rooms', icon: '▣'},
];

type GuideCardProps = {
  item: GuideItem;
  saved: boolean;
  onPress: () => void;
  onToggleSave: () => void;
};

const GuideCard = ({item, saved, onPress, onToggleSave}: GuideCardProps) => (
  <Pressable
    onPress={onPress}
    style={({pressed}) => [styles.card, pressed && styles.cardPressed]}>
    <View style={styles.cardImageWrap}>
      <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
      <LinearGradient
        colors={['rgba(6,12,24,0)', '#060C18']}
        style={styles.cardGradient}
      />
      <Pressable
        onPress={onToggleSave}
        hitSlop={8}
        style={[styles.saveBtn, saved && {backgroundColor: '#C9A020'}]}
        accessibilityRole="button"
        accessibilityLabel={saved ? 'Remove from saved' : 'Save'}>
        <Image
          source={
            saved
              ? require('../../elements/i/savediconn.png')
              : require('../../elements/i/savedicon.png')
          }
        />
      </Pressable>

      <View style={styles.cardTextOverlay}>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        <View style={styles.cardTitleRow}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardChevron}>›</Text>
        </View>
      </View>
    </View>
  </Pressable>
);

const GuiddeScrn = () => {
  const navigation = useNavigation<GuideNav>();
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<GuideFilter>('All');
  const {isSaved, toggleSave} = useSaved();

  const items = useMemo(() => getFilteredGuideItems(filter), [filter]);

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>Mondial</Text>
          <Text style={styles.title}>Resort Guide</Text>
        </View>
        <Pressable style={styles.searchBtn} accessibilityRole="button">
          <Image
            source={require('../../elements/i/searchicon.png')}
            style={styles.searchIcon}
          />
        </Pressable>
      </View>
      <View style={styles.filters}>
        {FILTERS.map(({key, label, icon}) => {
          const active = filter === key;
          return (
            <Pressable
              key={key}
              onPress={() => setFilter(key)}
              style={[styles.filterChip, active && styles.filterChipActive]}>
              {icon ? (
                <Text
                  style={[
                    styles.filterIcon,
                    active && styles.filterIconActive,
                  ]}>
                  {icon}
                </Text>
              ) : null}
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
      </View>
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
          <GuideCard
            item={item}
            saved={isSaved(item.id)}
            onPress={() => navigation.navigate('GuideDetail', {item})}
            onToggleSave={() => toggleSave(item.id)}
          />
        )}
      />
    </View>
  );
};

export default GuiddeScrn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 8,
  },
  brand: {
    fontFamily: 'Cinzel-Regular',
    fontSize: 9,
    letterSpacing: 2.7,
    color: '#C9A020',
    textTransform: 'uppercase',
  },
  title: {
    marginTop: 2,
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 33,
    color: '#F0EAD6',
  },
  searchBtn: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    fontSize: 18,
    color: '#C9A020',
    marginTop: -1,
  },
  filters: {
    flexDirection: 'row',
    gap: 8,
    paddingBottom: 12,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    gap: 6,
  },
  filterChipActive: {
    borderColor: '#C9A020',
    backgroundColor: '#C9A020',
  },
  filterIcon: {
    fontSize: 10,
    color: '#7A8BA8',
  },
  filterIconActive: {
    color: '#060C18',
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
    height: 184,
    backgroundColor: '#0A1020',
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  cardGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  saveBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: '#060C18',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveIcon: {
    fontSize: 14,
    color: '#7A8BA8',
  },
  saveIconActive: {
    color: '#C9A020',
  },
  cardTextOverlay: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 14,
  },
  cardSubtitle: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 28,
    color: '#F0EAD6',
  },
  cardChevron: {
    fontSize: 22,
    color: '#F0EAD6',
    marginLeft: 8,
  },
});
