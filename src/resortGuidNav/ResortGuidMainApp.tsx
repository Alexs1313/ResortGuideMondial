import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {ResortGuidBottomTabBar} from '../resortGuidCpnnts/ResortGuidBottomTabBar';
import {EventItem} from '../resortGuidData/ResortGuidEventsData';
import {GuideItem} from '../resortGuidData/ResortGuidGuideData';
import {ResortGuidCalendarScreen} from '../resortGuidScrn/ResortGuidCalendarScreen';
import {ResortGuidEventDetailScreen} from '../resortGuidScrn/ResortGuidEventDetailScreen';
import {ResortGuidEventsScreen} from '../resortGuidScrn/ResortGuidEventsScreen';
import {ResortGuidGuideDetailScreen} from '../resortGuidScrn/ResortGuidGuideDetailScreen';
import {ResortGuidGuideScreen} from '../resortGuidScrn/ResortGuidGuideScreen';
import {ResortGuidSavedScreen} from '../resortGuidScrn/ResortGuidSavedScreen';
import {ResortGuidServicesScreen} from '../resortGuidScrn/ResortGuidServicesScreen';
import type {ResortGuidMainTabId} from '../resortGuidTypes/ResortGuidNavigationTypes';

type GuideView = 'list' | 'detail';
type SavedView = 'list' | 'detail';
type EventsView = 'list' | 'detail';

export function ResortGuidMainApp(): React.JSX.Element {
  const [mainTab, setMainTab] = useState<ResortGuidMainTabId>('guide');
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
          <ResortGuidGuideDetailScreen
            item={guideItem}
            onBack={() => {
              setGuideView('list');
              setGuideItem(null);
            }}
          />
        );
      }
      return (
        <ResortGuidGuideScreen
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
          <ResortGuidGuideDetailScreen
            item={savedGuideItem}
            onBack={() => {
              setSavedView('list');
              setSavedGuideItem(null);
            }}
          />
        );
      }
      return (
        <ResortGuidSavedScreen
          onOpenGuide={item => {
            setSavedGuideItem(item);
            setSavedView('detail');
          }}
        />
      );
    }

    if (mainTab === 'services') {
      return <ResortGuidServicesScreen active />;
    }

    if (mainTab === 'calendar') {
      return <ResortGuidCalendarScreen />;
    }

    if (mainTab === 'events') {
      if (eventsView === 'detail' && eventItem) {
        return (
          <ResortGuidEventDetailScreen
            item={eventItem}
            onBack={() => {
              setEventsView('list');
              setEventItem(null);
            }}
          />
        );
      }
      return (
        <ResortGuidEventsScreen
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
        <ResortGuidBottomTabBar
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
