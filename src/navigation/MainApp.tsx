import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {BottomTabBar} from '../components/guide/BottomTabBar';
import {EventItem} from '../data/eventsData';
import {GuideItem} from '../data/guideData';
import {CalendarScreen} from '../screens/CalendarScreen';
import {EventDetail} from '../screens/EventDetail';
import {EventsScreen} from '../screens/EventsScreen';
import {GuideDetail} from '../screens/GuideDetail';
import {GuideScreen} from '../screens/GuideScreen';
import {SavedScreen} from '../screens/SavedScreen';
import {ServicesScreen} from '../screens/ServicesScreen';
import type {MainTabId} from '../types/navigation';

type GuideView = 'list' | 'detail';
type SavedView = 'list' | 'detail';
type EventsView = 'list' | 'detail';

export function MainApp(): React.JSX.Element {
  const [mainTab, setMainTab] = useState<MainTabId>('guide');
  const [guideView, setGuideView] = useState<GuideView>('list');
  const [guideItem, setGuideItem] = useState<GuideItem | null>(null);
  const [savedView, setSavedView] = useState<SavedView>('list');
  const [savedGuideItem, setSavedGuideItem] = useState<GuideItem | null>(null);
  const [eventsView, setEventsView] = useState<EventsView>('list');
  const [eventItem, setEventItem] = useState<EventItem | null>(null);

  useEffect(() => {
    if (mainTab !== 'guide') {
      setGuideView('list');
      setGuideItem(null);
    }
    if (mainTab !== 'saved') {
      setSavedView('list');
      setSavedGuideItem(null);
    }
    if (mainTab !== 'events') {
      setEventsView('list');
      setEventItem(null);
    }
  }, [mainTab]);

  const resetSubViews = () => {
    setGuideView('list');
    setGuideItem(null);
    setSavedView('list');
    setSavedGuideItem(null);
    setEventsView('list');
    setEventItem(null);
  };

  const showTabBar =
    (mainTab !== 'guide' || guideView === 'list') &&
    (mainTab !== 'saved' || savedView === 'list') &&
    (mainTab !== 'events' || eventsView === 'list');

  const content = (() => {
    if (mainTab === 'guide') {
      if (guideView === 'detail' && guideItem) {
        return (
          <GuideDetail
            item={guideItem}
            onBack={() => {
              setGuideView('list');
              setGuideItem(null);
            }}
          />
        );
      }
      return (
        <GuideScreen
          onOpenGuide={item => {
            setGuideItem(item);
            setGuideView('detail');
          }}
        />
      );
    }

    if (mainTab === 'saved') {
      if (savedView === 'detail' && savedGuideItem) {
        return (
          <GuideDetail
            item={savedGuideItem}
            onBack={() => {
              setSavedView('list');
              setSavedGuideItem(null);
            }}
          />
        );
      }
      return (
        <SavedScreen
          onOpenGuide={item => {
            setSavedGuideItem(item);
            setSavedView('detail');
          }}
        />
      );
    }

    if (mainTab === 'services') {
      return <ServicesScreen active />;
    }

    if (mainTab === 'calendar') {
      return <CalendarScreen />;
    }

    if (mainTab === 'events') {
      if (eventsView === 'detail' && eventItem) {
        return (
          <EventDetail
            item={eventItem}
            onBack={() => {
              setEventsView('list');
              setEventItem(null);
            }}
          />
        );
      }
      return (
        <EventsScreen
          onOpenEvent={item => {
            setEventItem(item);
            setEventsView('detail');
          }}
        />
      );
    }

    return null;
  })();

  return (
    <View style={styles.root}>
      <View style={styles.body}>{content}</View>
      {showTabBar ? (
        <BottomTabBar
          active={mainTab}
          onChange={tab => {
            setMainTab(tab);
            resetSubViews();
          }}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
});
