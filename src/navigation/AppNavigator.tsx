import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {BottomTabBar} from '../components/BottomTabBar';
import {EventItem} from '../data/events';
import {GuideItem} from '../data/guide';
import {CalendarScreen} from '../screens/calendar/CalendarScreen';
import {EventsScreen} from '../screens/events/EventsScreen';
import {GuideScreen} from '../screens/guide/GuideScreen';
import {SavedScreen} from '../screens/saved/SavedScreen';
import {ServicesScreen} from '../screens/services/ServicesScreen';
import {EventDetailScreen} from '../screens/events/EventDetailScreen';
import {GuideDetailScreen} from '../screens/guide/GuideDetailScreen';
import type {MainTabId} from './types';

type GuideView = 'list' | 'detail';
type SavedView = 'list' | 'detail';
type EventsView = 'list' | 'detail';

export function AppNavigator(): React.JSX.Element {
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
          <GuideDetailScreen
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
          <GuideDetailScreen
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
      return <ServicesScreen />;
    }

    if (mainTab === 'calendar') {
      return <CalendarScreen />;
    }

    if (mainTab === 'events') {
      if (eventsView === 'detail' && eventItem) {
        return (
          <EventDetailScreen
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
    <View style={styles.RouterinoChassis}>
      <View style={styles.RouterinoBodyVellum}>
        {content}
      </View>
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
  RouterinoChassis: {
    flex: 1,
  },
  RouterinoBodyVellum: {
    flex: 1,
  },
});
