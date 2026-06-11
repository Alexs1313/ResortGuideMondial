import React, {useCallback, useState} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {AmenityCard} from '../../components/AmenityCard';
import {OrderSentSheet} from '../../components/OrderSentSheet';
import {OrderSheet} from '../../components/OrderSheet';
import {ScreenShell} from '../../components/ScreenShell';
import {ServiceItem, SERVICES} from '../../data/services';
import {useAdaptive} from '../../hooks/useAdaptive';

export function ServicesScreen() {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [orderNote, setOrderNote] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const openOrder = useCallback((service: ServiceItem) => {
    setOrderNote('');
    setSelectedService(service);
  }, []);

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
      <ScreenShell eyebrow="Exclusively Yours" title="Services" />
    </>
  );

  return (
    <View style={styles.ServicesVestibule}>
      <ScrollView
        contentContainerStyle={[
          styles.ServicesListTapestry,
          {
            paddingHorizontal: adaptive.horizontalPadding,
            paddingBottom: listBottomPadding,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        {listHeader}
        {SERVICES.map(item => (
          <AmenityCard
            key={item.id}
            item={item}
            onAdd={() => openOrder(item)}
          />
        ))}
      </ScrollView>

      <Modal
        visible={selectedService !== null}
        transparent
        statusBarTranslucent={Platform.OS === 'android'}
        animationType="slide"
        onRequestClose={closeOrder}>
        <KeyboardAvoidingView
          style={styles.ServicesModalRootChassis}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Pressable style={styles.ServicesBackdropVeil} onPress={closeOrder}>
            <Pressable
              style={styles.ServicesSheetWrapMantle}
              onPress={e => e.stopPropagation()}>
              {selectedService ? (
                <OrderSheet
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
          style={styles.ServicesBackdropCenterNexus}
          onPress={dismissSuccess}>
          <Pressable onPress={e => e.stopPropagation()}>
            <OrderSentSheet onDone={dismissSuccess} />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  ServicesVestibule: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  ServicesListTapestry: {
    gap: 16,
    paddingTop: 4,
  },
  ServicesModalRootChassis: {
    flex: 1,
  },
  ServicesBackdropVeil: {
    flex: 1,
    backgroundColor: 'rgba(4,13,30,0.8)',
    justifyContent: 'flex-end',
  },
  ServicesBackdropCenterNexus: {
    flex: 1,
    backgroundColor: 'rgba(4,13,30,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  ServicesSheetWrapMantle: {
    width: '100%',
  },
});
