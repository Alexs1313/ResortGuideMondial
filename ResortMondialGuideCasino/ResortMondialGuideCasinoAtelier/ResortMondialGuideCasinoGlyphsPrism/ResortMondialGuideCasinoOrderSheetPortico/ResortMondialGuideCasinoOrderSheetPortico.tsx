import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import type {ServiceItem} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoAmenitiesFolio/ResortMondialGuideCasinoServicesData';
import {ResortMondialGuideCasinoChronoMiniSigil} from '../ResortMondialGuideCasinoChronoMiniSigil/ResortMondialGuideCasinoChronoMiniSigil';
import {ResortMondialGuideCasinoGoldCtaPortico} from '../ResortMondialGuideCasinoGoldCtaPortico/ResortMondialGuideCasinoGoldCtaPortico';
import {ResortMondialGuideCasinoRoundGlyphPortico} from '../ResortMondialGuideCasinoRoundGlyphPortico/ResortMondialGuideCasinoRoundGlyphPortico';

type ResortMondialGuideCasinoOrderSheetPorticoProps = {
  service: ServiceItem;
  note: string;
  onChangeNote: (text: string) => void;
  onClose: () => void;
  onSend: () => void;
};

export function ResortMondialGuideCasinoOrderSheetPortico({
  service,
  note,
  onChangeNote,
  onClose,
  onSend,
}: ResortMondialGuideCasinoOrderSheetPorticoProps): React.JSX.Element {
  return (
    <View style={styles.resortMondialGuideCasinoOrderSheetPorticoPanel}>
      <View style={styles.resortMondialGuideCasinoOrderSheetHeaderCornice}>
        <Text style={styles.resortMondialGuideCasinoOrderSheetTitleFiligree}>Your Order</Text>
        <ResortMondialGuideCasinoRoundGlyphPortico
          onPress={onClose}
          glyph="✕"
          size={22}
          variant="veiledFacet"
          hitSlop={12}
          accessibilityLabel="Close order"
        />
      </View>

      <View style={styles.resortMondialGuideCasinoOrderSheetServiceRowLintel}>
        <View>
          <Text style={styles.resortMondialGuideCasinoOrderSheetServiceTitleTracery}>
            {service.title}
          </Text>
          <View style={styles.resortMondialGuideCasinoOrderSheetAvailabilityRowLattice}>
            <ResortMondialGuideCasinoChronoMiniSigil />
            <Text style={styles.resortMondialGuideCasinoOrderSheetAvailabilityTextVellum}>
              {service.availability}
            </Text>
          </View>
        </View>
      </View>

      <TextInput
        style={styles.resortMondialGuideCasinoOrderSheetNoteInputEnclave}
        placeholder="Add note..."
        placeholderTextColor="rgba(248,245,239,0.5)"
        value={note}
        onChangeText={onChangeNote}
        multiline
        textAlignVertical="top"
      />

      <ResortMondialGuideCasinoGoldCtaPortico
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
  resortMondialGuideCasinoOrderSheetPorticoPanel: {
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
  resortMondialGuideCasinoOrderSheetHeaderCornice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resortMondialGuideCasinoOrderSheetTitleFiligree: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '500',
    color: '#F8F5EF',
  },
  resortMondialGuideCasinoOrderSheetServiceRowLintel: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(248,245,239,0.08)',
    paddingBottom: 13,
    paddingTop: 12,
    marginBottom: 16,
  },
  resortMondialGuideCasinoOrderSheetServiceTitleTracery: {
    fontSize: 14,
    lineHeight: 21,
    color: '#F8F5EF',
    marginBottom: 4,
  },
  resortMondialGuideCasinoOrderSheetAvailabilityRowLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  resortMondialGuideCasinoOrderSheetAvailabilityTextVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
  },
  resortMondialGuideCasinoOrderSheetNoteInputEnclave: {
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
