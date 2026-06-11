import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import type {ServiceItem} from '../data/services';
import {TimeIcon} from './TimeIcon';
import {GoldButton} from './GoldButton';
import {RoundIconButton} from './RoundIconButton';

type OrderSheetProps = {
  service: ServiceItem;
  note: string;
  onChangeNote: (text: string) => void;
  onClose: () => void;
  onSend: () => void;
};

export function OrderSheet({
  service,
  note,
  onChangeNote,
  onClose,
  onSend,
}: OrderSheetProps): React.JSX.Element {
  return (
    <View style={styles.OrderSheetPorticoPanel}>
      <View style={styles.OrderSheetHeaderCornice}>
        <Text style={styles.OrderSheetTitleFiligree}>Your Order</Text>
        <RoundIconButton
          onPress={onClose}
          glyph="✕"
          size={22}
          variant="veiledFacet"
          hitSlop={12}
          accessibilityLabel="Close order"
        />
      </View>

      <View style={styles.OrderSheetServiceRowLintel}>
        <View>
          <Text style={styles.OrderSheetServiceTitleTracery}>
            {service.title}
          </Text>
          <View style={styles.OrderSheetAvailabilityRowLattice}>
            <TimeIcon />
            <Text style={styles.OrderSheetAvailabilityTextVellum}>
              {service.availability}
            </Text>
          </View>
        </View>
      </View>

      <TextInput
        style={styles.OrderSheetNoteInputEnclave}
        placeholder="Add note..."
        placeholderTextColor="rgba(248,245,239,0.5)"
        value={note}
        onChangeText={onChangeNote}
        multiline
        textAlignVertical="top"
      />

      <GoldButton
        label="Send Order"
        onPress={onSend}
        variant="sheetPortico"
        fullWidth
        accessibilityLabel="Send order"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  OrderSheetPorticoPanel: {
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
  OrderSheetHeaderCornice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  OrderSheetTitleFiligree: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '500',
    color: '#F8F5EF',
  },
  OrderSheetServiceRowLintel: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(248,245,239,0.08)',
    paddingBottom: 13,
    paddingTop: 12,
    marginBottom: 16,
  },
  OrderSheetServiceTitleTracery: {
    fontSize: 14,
    lineHeight: 21,
    color: '#F8F5EF',
    marginBottom: 4,
  },
  OrderSheetAvailabilityRowLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  OrderSheetAvailabilityTextVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
  },
  OrderSheetNoteInputEnclave: {
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
});
