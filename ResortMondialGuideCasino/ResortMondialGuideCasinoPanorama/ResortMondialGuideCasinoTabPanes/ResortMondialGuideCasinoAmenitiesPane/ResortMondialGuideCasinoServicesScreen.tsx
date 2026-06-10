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

import {ResortMondialGuideCasinoAmenityCardFacet} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoAmenityCardFacet/ResortMondialGuideCasinoAmenityCardFacet';
import {ResortMondialGuideCasinoOrderSentAtelier} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoOrderSentAtelier/ResortMondialGuideCasinoOrderSentAtelier';
import {ResortMondialGuideCasinoOrderSheetPortico} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoOrderSheetPortico/ResortMondialGuideCasinoOrderSheetPortico';
import {ResortMondialGuideCasinoScreenCornice} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoScreenCornice/ResortMondialGuideCasinoScreenCornice';
import {ServiceItem, SERVICES} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoAmenitiesFolio/ResortMondialGuideCasinoServicesData';

type ServicesScreenProps = {
  active?: boolean;
};

export function ResortMondialGuideCasinoServicesScreen({active = true}: ServicesScreenProps) {
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
      <ResortMondialGuideCasinoScreenCornice eyebrow="Exclusively Yours" title="Services" />
    </>
  );

  return (
    <View style={styles.resortMondialGuideCasinoServicesVestibule}>
      <FlatList
        data={SERVICES}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.resortMondialGuideCasinoServicesListTapestry,
          {paddingBottom: listBottomPadding},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ResortMondialGuideCasinoAmenityCardFacet item={item} onAdd={() => openOrder(item)} />
        )}
      />

      <Modal
        visible={selectedService !== null}
        transparent
        statusBarTranslucent={Platform.OS === 'android'}
        animationType="slide"
        onRequestClose={closeOrder}>
        <KeyboardAvoidingView
          style={styles.resortMondialGuideCasinoServicesModalRootChassis}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Pressable style={styles.resortMondialGuideCasinoServicesBackdropVeil} onPress={closeOrder}>
            <Pressable
              style={styles.resortMondialGuideCasinoServicesSheetWrapMantle}
              onPress={e => e.stopPropagation()}>
              {selectedService ? (
                <ResortMondialGuideCasinoOrderSheetPortico
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
          style={styles.resortMondialGuideCasinoServicesBackdropCenterNexus}
          onPress={dismissSuccess}>
          <Pressable onPress={e => e.stopPropagation()}>
            <ResortMondialGuideCasinoOrderSentAtelier onDone={dismissSuccess} />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoServicesVestibule: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  resortMondialGuideCasinoServicesListTapestry: {
    paddingHorizontal: 20,
    gap: 16,
    paddingTop: 4,
  },
  resortMondialGuideCasinoServicesModalRootChassis: {
    flex: 1,
  },
  resortMondialGuideCasinoServicesBackdropVeil: {
    flex: 1,
    backgroundColor: 'rgba(4,13,30,0.8)',
    justifyContent: 'flex-end',
  },
  resortMondialGuideCasinoServicesBackdropCenterNexus: {
    flex: 1,
    backgroundColor: 'rgba(4,13,30,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  resortMondialGuideCasinoServicesSheetWrapMantle: {
    width: '100%',
  },
});
