import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Orientation from 'react-native-orientation-locker';

import {ResortGuideMondialAmenityCardFacet} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialAmenityCardFacet/ResortGuideMondialAmenityCardFacet';
import {ResortGuideMondialOrderSentAtelier} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialOrderSentAtelier/ResortGuideMondialOrderSentAtelier';
import {ResortGuideMondialOrderSheetPortico} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialOrderSheetPortico/ResortGuideMondialOrderSheetPortico';
import {ResortGuideMondialScreenCornice} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialScreenCornice/ResortGuideMondialScreenCornice';
import {ServiceItem, SERVICES} from '../../../ResortGuideMondialCompendium/ResortGuideMondialAmenitiesFolio/ResortGuideMondialServicesData';

type ServicesScreenProps = {
  active?: boolean;
};

export function ResortGuideMondialServicesScreen({active = true}: ServicesScreenProps) {
  const insets = useSafeAreaInsets();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [orderNote, setOrderNote] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const openOrder = useCallback((service: ServiceItem) => {
    setOrderNote('');
    setSelectedService(service);
  }, []);

  useEffect(() => {
    if (!active) {
      return;
    }
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, [active]);

  const closeOrder = useCallback(() => {
    setSelectedService(null);
    setOrderNote('');
  }, []);

  const sendOrder = useCallback(() => {
    setSelectedService(null);
    setOrderNote('');
    setShowSuccess(true);
  }, []);

  const dismissSuccess = useCallback(() => {
    setShowSuccess(false);
  }, []);

  const listBottomPadding = Math.max(insets.bottom, 16) + 80;

  const listHeader = (
    <>
      <View style={{height: insets.top}} />
      <ResortGuideMondialScreenCornice eyebrow="Exclusively Yours" title="Services" />
    </>
  );

  return (
    <View style={styles.resortGuideMondialServicesVestibule}>
      <FlatList
        data={SERVICES}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.resortGuideMondialServicesListTapestry,
          {paddingBottom: listBottomPadding},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ResortGuideMondialAmenityCardFacet item={item} onAdd={() => openOrder(item)} />
        )}
      />

      <Modal
        visible={selectedService !== null}
        transparent
        statusBarTranslucent={Platform.OS === 'android'}
        animationType="slide"
        onRequestClose={closeOrder}>
        <KeyboardAvoidingView
          style={styles.resortGuideMondialServicesModalRootChassis}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Pressable style={styles.resortGuideMondialServicesBackdropVeil} onPress={closeOrder}>
            <Pressable
              style={styles.resortGuideMondialServicesSheetWrapMantle}
              onPress={e => e.stopPropagation()}>
              {selectedService ? (
                <ResortGuideMondialOrderSheetPortico
                  service={selectedService}
                  note={orderNote}
                  onChangeNote={setOrderNote}
                  onClose={closeOrder}
                  onSend={sendOrder}
                />
              ) : null}
            </Pressable>
          </Pressable>
        </KeyboardAvoidingView>
      </Modal>

      <Modal
        visible={showSuccess}
        statusBarTranslucent={Platform.OS === 'android'}
        transparent
        animationType="fade"
        onRequestClose={dismissSuccess}>
        <Pressable
          style={styles.resortGuideMondialServicesBackdropCenterNexus}
          onPress={dismissSuccess}>
          <Pressable onPress={e => e.stopPropagation()}>
            <ResortGuideMondialOrderSentAtelier onDone={dismissSuccess} />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialServicesVestibule: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  resortGuideMondialServicesListTapestry: {
    paddingHorizontal: 20,
    gap: 16,
    paddingTop: 4,
  },
  resortGuideMondialServicesModalRootChassis: {
    flex: 1,
  },
  resortGuideMondialServicesBackdropVeil: {
    flex: 1,
    backgroundColor: 'rgba(4,13,30,0.8)',
    justifyContent: 'flex-end',
  },
  resortGuideMondialServicesBackdropCenterNexus: {
    flex: 1,
    backgroundColor: 'rgba(4,13,30,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  resortGuideMondialServicesSheetWrapMantle: {
    width: '100%',
  },
});
