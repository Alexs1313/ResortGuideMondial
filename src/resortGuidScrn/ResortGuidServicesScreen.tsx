import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ServiceItem, SERVICES} from '../resortGuidData/ResortGuidServicesData';
import Orientation from 'react-native-orientation-locker';

const ServiceIcon = ({size = 22}: {size?: number}) => (
  <View
    style={{
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <View
      style={{
        width: size * 0.12,
        height: size * 0.75,
        borderRadius: size * 0.06,
        backgroundColor: '#C9A020',
        transform: [{rotate: '-18deg'}],
      }}
    />
    <View
      style={{
        position: 'absolute',
        width: size * 0.55,
        height: size * 0.22,
        borderTopWidth: 1.5,
        borderRightWidth: 1.5,
        borderColor: '#C9A020',
        borderTopRightRadius: size * 0.2,
        top: size * 0.12,
        left: size * 0.28,
        transform: [{rotate: '32deg'}],
      }}
    />
  </View>
);

const ClockIcon = ({
  size = 11,
  color = '#7A8BA8',
}: {
  size?: number;
  color?: string;
}) => (
  <View
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: 1,
      borderColor: color,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <View
      style={{
        position: 'absolute',
        width: 1,
        height: size * 0.35,
        backgroundColor: color,
        top: size * 0.2,
        left: size / 2 - 0.5,
      }}
    />
    <View
      style={{
        position: 'absolute',
        width: size * 0.28,
        height: 1,
        backgroundColor: color,
        top: size * 0.48,
        left: size / 2 - 0.5,
      }}
    />
  </View>
);

type ServiceCardProps = {
  item: ServiceItem;
  onAdd: () => void;
};

const ServiceCard = ({item, onAdd}: ServiceCardProps) => (
  <View style={styles.card}>
    <View style={styles.cardTitleRow}>
      <ServiceIcon />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
    <Text style={styles.cardDescription}>{item.description}</Text>
    <View style={styles.cardFooter}>
      <View style={styles.availabilityRow}>
        <ClockIcon />
        <Text style={styles.availabilityText}>{item.availability}</Text>
      </View>
      <Pressable
        onPress={onAdd}
        style={({pressed}) => [styles.addBtn, pressed && styles.addBtnPressed]}
        accessibilityRole="button"
        accessibilityLabel={`Add ${item.title}`}>
        <Text style={styles.addBtnText}>Add Service</Text>
      </Pressable>
    </View>
  </View>
);

type OrderSheetProps = {
  service: ServiceItem;
  note: string;
  onChangeNote: (text: string) => void;
  onClose: () => void;
  onSend: () => void;
};

const OrderSheet = ({
  service,
  note,
  onChangeNote,
  onClose,
  onSend,
}: OrderSheetProps) => (
  <View style={styles.sheet}>
    <View style={styles.sheetHeader}>
      <Text style={styles.sheetTitle}>Your Order</Text>
      <Pressable
        onPress={onClose}
        hitSlop={12}
        style={styles.closeBtn}
        accessibilityRole="button"
        accessibilityLabel="Close order">
        <Text style={styles.closeBtnText}>✕</Text>
      </Pressable>
    </View>

    <View style={styles.sheetServiceRow}>
      <View>
        <Text style={styles.sheetServiceTitle}>{service.title}</Text>
        <View style={styles.availabilityRow}>
          <ClockIcon />
          <Text style={styles.availabilityText}>{service.availability}</Text>
        </View>
      </View>
    </View>

    <TextInput
      style={styles.noteInput}
      placeholder="Add note..."
      placeholderTextColor="rgba(248,245,239,0.5)"
      value={note}
      onChangeText={onChangeNote}
      multiline
      textAlignVertical="top"
    />

    <Pressable
      onPress={onSend}
      style={({pressed}) => [styles.sendBtn, pressed && styles.sendBtnPressed]}
      accessibilityRole="button"
      accessibilityLabel="Send order">
      <Text style={styles.sendBtnText}>Send Order</Text>
    </Pressable>
  </View>
);

type SuccessModalProps = {
  onDone: () => void;
};

const SuccessModal = ({onDone}: SuccessModalProps) => (
  <View style={styles.successCard}>
    <View style={styles.successIconCircle}>
      <Text style={styles.successCheck}>✓</Text>
    </View>
    <Text style={styles.successTitle}>Order Sent</Text>
    <Text style={styles.successMessage}>
      Your room service request has been added to your request history.
    </Text>
    <Pressable
      onPress={onDone}
      style={({pressed}) => [styles.doneBtn, pressed && styles.doneBtnPressed]}
      accessibilityRole="button"
      accessibilityLabel="Done">
      <Text style={styles.doneBtnText}>Done</Text>
    </Pressable>
  </View>
);

type ServicesScreenProps = {
  active?: boolean;
};

export function ResortGuidServicesScreen({active = true}: ServicesScreenProps) {
  const insets = useSafeAreaInsets();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );
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
      <View style={styles.header}>
        <Text style={styles.brand}>Exclusively Yours</Text>
        <Text style={styles.title}>Services</Text>
      </View>
    </>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={SERVICES}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={[
          styles.list,
          {paddingBottom: listBottomPadding},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ServiceCard item={item} onAdd={() => openOrder(item)} />
        )}
      />

      <Modal
        visible={selectedService !== null}
        transparent
        statusBarTranslucent={Platform.OS === 'android'}
        animationType="slide"
        onRequestClose={closeOrder}>
        <KeyboardAvoidingView
          style={styles.modalRoot}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Pressable style={styles.backdrop} onPress={closeOrder}>
            <Pressable
              style={styles.sheetWrap}
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
        <Pressable style={styles.backdropCenter} onPress={dismissSuccess}>
          <Pressable onPress={e => e.stopPropagation()}>
            <SuccessModal onDone={dismissSuccess} />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  header: {
    paddingTop: 12,
    paddingBottom: 8,
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
    paddingTop: 4,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    minHeight: 140,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  cardTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 15,
    lineHeight: 22.5,
    color: '#F0EAD6',
  },
  cardDescription: {
    fontSize: 12,
    lineHeight: 19.5,
    color: '#7A8BA8',
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  availabilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },
  availabilityText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
    flexShrink: 1,
  },
  addBtn: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 100,
    backgroundColor: '#C9A020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnPressed: {
    opacity: 0.9,
  },
  addBtnText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
    color: '#060C18',
  },
  modalRoot: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(4,13,30,0.8)',
    justifyContent: 'flex-end',
  },
  backdropCenter: {
    flex: 1,
    backgroundColor: 'rgba(4,13,30,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  sheetWrap: {
    width: '100%',
  },
  sheet: {
    backgroundColor: '#0D1527',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(248,245,239,0.12)',
    borderBottomWidth: 0,
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 28,
    minHeight: 353,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sheetTitle: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '500',
    color: '#F8F5EF',
  },
  closeBtn: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: {
    fontSize: 18,
    lineHeight: 22,
    color: '#F8F5EF',
    fontWeight: '300',
  },
  sheetServiceRow: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(248,245,239,0.08)',
    paddingBottom: 13,
    paddingTop: 12,
    marginBottom: 16,
  },
  sheetServiceTitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#F8F5EF',
    marginBottom: 4,
  },
  noteInput: {
    minHeight: 68,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(248,245,239,0.12)',
    backgroundColor: '#0D1527',
    padding: 12,
    fontSize: 14,
    lineHeight: 21,
    color: '#F8F5EF',
    marginBottom: 24,
  },
  sendBtn: {
    height: 54.5,
    borderRadius: 18,
    backgroundColor: '#C9A020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnPressed: {
    opacity: 0.92,
  },
  sendBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#080A1C',
  },
  successCard: {
    width: 342,
    backgroundColor: '#0D1527',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(248,245,239,0.15)',
    alignItems: 'center',
    paddingTop: 36,
    paddingBottom: 28,
    paddingHorizontal: 28,
  },
  successIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#C9A020',
    backgroundColor: 'rgba(201,160,32,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  successCheck: {
    fontSize: 26,
    lineHeight: 32,
    color: '#C9A020',
  },
  successTitle: {
    fontSize: 22,
    lineHeight: 33,
    fontWeight: '500',
    color: '#F8F5EF',
    textAlign: 'center',
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 14,
    lineHeight: 21,
    color: '#A9ADBE',
    textAlign: 'center',
    marginBottom: 24,
  },
  doneBtn: {
    width: '100%',
    height: 50.5,
    borderRadius: 16,
    backgroundColor: '#C9A020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneBtnPressed: {
    opacity: 0.92,
  },
  doneBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#080A1C',
  },
});
