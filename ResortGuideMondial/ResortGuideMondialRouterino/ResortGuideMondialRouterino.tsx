import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {ResortGuideMondialBottomTabBar} from '../ResortGuideMondialAtelier/ResortGuideMondialTabMarquee/ResortGuideMondialBottomTabBar';
import {EventItem} from '../ResortGuideMondialCompendium/ResortGuideMondialOccasionsFolio/ResortGuideMondialEventsData';
import {GuideItem} from '../ResortGuideMondialCompendium/ResortGuideMondialVenueFolio/ResortGuideMondialGuideData';
import {ResortGuideMondialCalendarScreen} from '../ResortGuideMondialPanorama/ResortGuideMondialTabPanes/ResortGuideMondialChroniclePane/ResortGuideMondialCalendarScreen';
import {ResortGuideMondialEventsScreen} from '../ResortGuideMondialPanorama/ResortGuideMondialTabPanes/ResortGuideMondialOccasionsPane/ResortGuideMondialEventsScreen';
import {ResortGuideMondialGuideScreen} from '../ResortGuideMondialPanorama/ResortGuideMondialTabPanes/ResortGuideMondialVenuePane/ResortGuideMondialGuideScreen';
import {ResortGuideMondialSavedScreen} from '../ResortGuideMondialPanorama/ResortGuideMondialTabPanes/ResortGuideMondialKeepsakesPane/ResortGuideMondialSavedScreen';
import {ResortGuideMondialServicesScreen} from '../ResortGuideMondialPanorama/ResortGuideMondialTabPanes/ResortGuideMondialAmenitiesPane/ResortGuideMondialServicesScreen';
import {ResortGuideMondialEventDetailScreen} from '../ResortGuideMondialPanorama/ResortGuideMondialOverlayPanes/ResortGuideMondialOccasionDetailPane/ResortGuideMondialEventDetailScreen';
import {ResortGuideMondialGuideDetailScreen} from '../ResortGuideMondialPanorama/ResortGuideMondialOverlayPanes/ResortGuideMondialVenueDetailPane/ResortGuideMondialGuideDetailScreen';
import type {ResortGuideMondialMainTabId} from '../../ResortGuideMondialSigilRegistry/ResortGuideMondialMainTabLattice/ResortGuideMondialMainTabLattice';

type GuideView = 'list' | 'detail';
type SavedView = 'list' | 'detail';
type EventsView = 'list' | 'detail';

export function ResortGuideMondialRouterino(): React.JSX.Element {
  const [mainTab, setMainTab] = useState<ResortGuideMondialMainTabId>('guide');
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
          <ResortGuideMondialGuideDetailScreen
            item={guideItem}
            onBack={() => {
              setGuideView('list');
              setGuideItem(null);
            }}
          />
        );
      }
      return (
        <ResortGuideMondialGuideScreen
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
          <ResortGuideMondialGuideDetailScreen
            item={savedGuideItem}
            onBack={() => {
              setSavedView('list');
              setSavedGuideItem(null);
            }}
          />
        );
      }
      return (
        <ResortGuideMondialSavedScreen
          onOpenGuide={item => {
            setSavedGuideItem(item);
            setSavedView('detail');
          }}
        />
      );
    }

    if (mainTab === 'services') {
      return <ResortGuideMondialServicesScreen active />;
    }

    if (mainTab === 'calendar') {
      return <ResortGuideMondialCalendarScreen />;
    }

    if (mainTab === 'events') {
      if (eventsView === 'detail' && eventItem) {
        return (
          <ResortGuideMondialEventDetailScreen
            item={eventItem}
            onBack={() => {
              setEventsView('list');
              setEventItem(null);
            }}
          />
        );
      }
      return (
        <ResortGuideMondialEventsScreen
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
    <View style={styles.resortGuideMondialRouterinoChassis}>
      <View style={styles.resortGuideMondialRouterinoBodyVellum}>
        {content}
      </View>
      {showTabBar ? (
        <ResortGuideMondialBottomTabBar
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
  resortGuideMondialRouterinoChassis: {
    flex: 1,
  },
  resortGuideMondialRouterinoBodyVellum: {
    flex: 1,
  },
});
