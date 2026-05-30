import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
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

import {useSaved} from '../context/SavedContext';
import {GuideItem} from '../data/guideData';
import {SavedStackParamList} from '../routes/SavedStackNav';
import Layoutt from '../components/Layoutt';

type SavedNav = StackNavigationProp<SavedStackParamList, 'SavedList'>;

type SavedCardProps = {
  item: GuideItem;
  onPress: () => void;
  onToggleSave: () => void;
};

const SavedCard = ({item, onPress, onToggleSave}: SavedCardProps) => (
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
        style={styles.saveBtn}
        accessibilityRole="button"
        accessibilityLabel="Remove from saved">
        <Image source={require('../../elements/i/savediconn.png')} />
      </Pressable>
      <Text style={styles.cardTitle}>{item.name}</Text>
    </View>
  </Pressable>
);

const SavedEmpty = () => (
  <View style={styles.emptyWrap}>
    <View style={styles.emptyIconCircle}>
      <Image
        source={require('../../elements/i/nosaved.png')}
        style={styles.emptyIcon}
      />
    </View>
    <Text style={styles.emptyTitle}>No Saved Items</Text>
    <Text style={styles.emptyText}>
      Browse the Resort Explorer and tap the bookmark icon to save your
      favorites here.
    </Text>
  </View>
);

const SavedScrn = () => {
  const navigation = useNavigation<SavedNav>();
  const insets = useSafeAreaInsets();
  const {savedItems, toggleSave} = useSaved();

  const hasItems = savedItems.length > 0;

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <View style={styles.header}>
        <Text style={styles.brand}>Your Collection</Text>
        <Text style={styles.title}>Saved Cards</Text>
      </View>
    </>
  );

  if (!hasItems) {
    return (
      <Layoutt>
        <ScrollView
          contentContainerStyle={[
            styles.emptyScroll,
            {paddingBottom: Math.max(insets.bottom, 16) + 80},
          ]}
          showsVerticalScrollIndicator={false}>
          {listHeader}
          <SavedEmpty />
        </ScrollView>
      </Layoutt>
    );
  }

  return (
    <Layoutt>
      <FlatList
        scrollEnabled={false}
        data={savedItems}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.list,
          {paddingBottom: Math.max(insets.bottom, 16) + 80},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SavedCard
            item={item}
            onPress={() => navigation.navigate('GuideDetail', {item})}
            onToggleSave={() => toggleSave(item.id)}
          />
        )}
      />
    </Layoutt>
  );
};

export default SavedScrn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
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
    justifyContent: 'flex-end',
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
    backgroundColor: '#C9A020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    marginLeft: 14,
    marginBottom: 14,
    marginRight: 14,
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 28,
    color: '#F0EAD6',
  },
  emptyScroll: {
    flexGrow: 1,
  },
  emptyWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 80,
  },
  emptyIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emptyIcon: {
    width: 24,
    height: 24,
    tintColor: '#7A8BA8',
  },
  emptyTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#F0EAD6',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    lineHeight: 23,
    color: '#7A8BA8',
    textAlign: 'center',
  },
});
