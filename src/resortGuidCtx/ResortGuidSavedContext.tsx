import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {GUIDE_ITEMS, GuideItem} from '../resortGuidData/ResortGuidGuideData';

const RESORT_GUID_STORAGE_KEY = '@resortGuid_saved_ids';

export type ResortGuidSavedContextValue = {
  ready: boolean;
  savedIds: Set<string>;
  savedItems: GuideItem[];
  isSaved: (id: string) => boolean;
  toggleSave: (id: string) => void;
};

export const ResortGuidSavedContext =
  createContext<ResortGuidSavedContextValue | null>(null);

export function ResortGuidSavedProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const [ready, setReady] = useState(false);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const load = async () => {
      try {
        const raw = await AsyncStorage.getItem(RESORT_GUID_STORAGE_KEY);
        if (raw) {
          const ids: string[] = JSON.parse(raw);
          setSavedIds(new Set(ids));
        }
      } catch {
        setSavedIds(new Set());
      } finally {
        setReady(true);
      }
    };
    load();
  }, []);

  const persist = useCallback(async (ids: Set<string>) => {
    try {
      await AsyncStorage.setItem(
        RESORT_GUID_STORAGE_KEY,
        JSON.stringify([...ids]),
      );
    } catch {
      // ignore persistence errors
    }
  }, []);

  const toggleSave = useCallback(
    (id: string) => {
      setSavedIds(prev => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const isSaved = useCallback((id: string) => savedIds.has(id), [savedIds]);

  const savedItems = useMemo(
    () => GUIDE_ITEMS.filter(item => savedIds.has(item.id)),
    [savedIds],
  );

  const value = useMemo(
    () => ({
      ready,
      savedIds,
      savedItems,
      isSaved,
      toggleSave,
    }),
    [ready, savedIds, savedItems, isSaved, toggleSave],
  );

  return (
    <ResortGuidSavedContext.Provider value={value}>
      {children}
    </ResortGuidSavedContext.Provider>
  );
}
