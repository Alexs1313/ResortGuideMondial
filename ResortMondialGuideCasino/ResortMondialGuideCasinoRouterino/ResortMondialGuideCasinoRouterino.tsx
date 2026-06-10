import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {ResortMondialGuideCasinoBottomTabBar} from '../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoTabMarquee/ResortMondialGuideCasinoBottomTabBar';
import {EventItem} from '../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoOccasionsFolio/ResortMondialGuideCasinoEventsData';
import {GuideItem} from '../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoVenueFolio/ResortMondialGuideCasinoGuideData';
import {ResortMondialGuideCasinoCalendarScreen} from '../ResortMondialGuideCasinoPanorama/ResortMondialGuideCasinoTabPanes/ResortMondialGuideCasinoChroniclePane/ResortMondialGuideCasinoCalendarScreen';
import {ResortMondialGuideCasinoEventsScreen} from '../ResortMondialGuideCasinoPanorama/ResortMondialGuideCasinoTabPanes/ResortMondialGuideCasinoOccasionsPane/ResortMondialGuideCasinoEventsScreen';
import {ResortMondialGuideCasinoGuideScreen} from '../ResortMondialGuideCasinoPanorama/ResortMondialGuideCasinoTabPanes/ResortMondialGuideCasinoVenuePane/ResortMondialGuideCasinoGuideScreen';
import {ResortMondialGuideCasinoSavedScreen} from '../ResortMondialGuideCasinoPanorama/ResortMondialGuideCasinoTabPanes/ResortMondialGuideCasinoKeepsakesPane/ResortMondialGuideCasinoSavedScreen';
import {ResortMondialGuideCasinoServicesScreen} from '../ResortMondialGuideCasinoPanorama/ResortMondialGuideCasinoTabPanes/ResortMondialGuideCasinoAmenitiesPane/ResortMondialGuideCasinoServicesScreen';
import {ResortMondialGuideCasinoEventDetailScreen} from '../ResortMondialGuideCasinoPanorama/ResortMondialGuideCasinoOverlayPanes/ResortMondialGuideCasinoOccasionDetailPane/ResortMondialGuideCasinoEventDetailScreen';
import {ResortMondialGuideCasinoGuideDetailScreen} from '../ResortMondialGuideCasinoPanorama/ResortMondialGuideCasinoOverlayPanes/ResortMondialGuideCasinoVenueDetailPane/ResortMondialGuideCasinoGuideDetailScreen';
import type {ResortMondialGuideCasinoMainTabId} from '../../ResortMondialGuideCasinoSigilRegistry/ResortMondialGuideCasinoMainTabLattice/ResortMondialGuideCasinoMainTabLattice';

type GuideView = 'list' | 'detail';
type SavedView = 'list' | 'detail';
type EventsView = 'list' | 'detail';

export function ResortMondialGuideCasinoRouterino(): React.JSX.Element {
  const [mainTab, setMainTab] = useState<ResortMondialGuideCasinoMainTabId>('guide');
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
          <ResortMondialGuideCasinoGuideDetailScreen
            item={guideItem}
            onBack={() => {
              setGuideView('list');
              setGuideItem(null);
            }}
          />
        );
      }
      return (
        <ResortMondialGuideCasinoGuideScreen
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
          <ResortMondialGuideCasinoGuideDetailScreen
            item={savedGuideItem}
            onBack={() => {
              setSavedView('list');
              setSavedGuideItem(null);
            }}
          />
        );
      }
      return (
        <ResortMondialGuideCasinoSavedScreen
          onOpenGuide={item => {
            setSavedGuideItem(item);
            setSavedView('detail');
          }}
        />
      );
    }

    if (mainTab === 'services') {
      return <ResortMondialGuideCasinoServicesScreen active />;
    }

    if (mainTab === 'calendar') {
      return <ResortMondialGuideCasinoCalendarScreen />;
    }

    if (mainTab === 'events') {
      if (eventsView === 'detail' && eventItem) {
        return (
          <ResortMondialGuideCasinoEventDetailScreen
            item={eventItem}
            onBack={() => {
              setEventsView('list');
              setEventItem(null);
            }}
          />
        );
      }
      return (
        <ResortMondialGuideCasinoEventsScreen
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
    <View style={styles.resortMondialGuideCasinoRouterinoChassis}>
      <View style={styles.resortMondialGuideCasinoRouterinoBodyVellum}>
        {content}
      </View>
      {showTabBar ? (
        <ResortMondialGuideCasinoBottomTabBar
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
  resortMondialGuideCasinoRouterinoChassis: {
    flex: 1,
  },
  resortMondialGuideCasinoRouterinoBodyVellum: {
    flex: 1,
  },
});
