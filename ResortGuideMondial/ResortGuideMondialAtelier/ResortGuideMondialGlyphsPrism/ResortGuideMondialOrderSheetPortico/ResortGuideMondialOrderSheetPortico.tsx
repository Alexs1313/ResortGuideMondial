import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import type {ServiceItem} from '../../../ResortGuideMondialCompendium/ResortGuideMondialAmenitiesFolio/ResortGuideMondialServicesData';
import {ResortGuideMondialChronoMiniSigil} from '../ResortGuideMondialChronoMiniSigil/ResortGuideMondialChronoMiniSigil';
import {ResortGuideMondialGoldCtaPortico} from '../ResortGuideMondialGoldCtaPortico/ResortGuideMondialGoldCtaPortico';
import {ResortGuideMondialRoundGlyphPortico} from '../ResortGuideMondialRoundGlyphPortico/ResortGuideMondialRoundGlyphPortico';

type ResortGuideMondialOrderSheetPorticoProps = {
  service: ServiceItem;
  note: string;
  onChangeNote: (text: string) => void;
  onClose: () => void;
  onSend: () => void;
};

export function ResortGuideMondialOrderSheetPortico({
  service,
  note,
  onChangeNote,
  onClose,
  onSend,
}: ResortGuideMondialOrderSheetPorticoProps): React.JSX.Element {
  return (
    <View style={styles.resortGuideMondialOrderSheetPorticoPanel}>
      <View style={styles.resortGuideMondialOrderSheetHeaderCornice}>
        <Text style={styles.resortGuideMondialOrderSheetTitleFiligree}>Your Order</Text>
        <ResortGuideMondialRoundGlyphPortico
          onPress={onClose}
          glyph="✕"
          size={22}
          variant="veiledFacet"
          hitSlop={12}
          accessibilityLabel="Close order"
        />
      </View>

      <View style={styles.resortGuideMondialOrderSheetServiceRowLintel}>
        <View>
          <Text style={styles.resortGuideMondialOrderSheetServiceTitleTracery}>
            {service.title}
          </Text>
          <View style={styles.resortGuideMondialOrderSheetAvailabilityRowLattice}>
            <ResortGuideMondialChronoMiniSigil />
            <Text style={styles.resortGuideMondialOrderSheetAvailabilityTextVellum}>
              {service.availability}
            </Text>
          </View>
        </View>
      </View>

      <TextInput
        style={styles.resortGuideMondialOrderSheetNoteInputEnclave}
        placeholder="Add note..."
        placeholderTextColor="rgba(248,245,239,0.5)"
        value={note}
        onChangeText={onChangeNote}
        multiline
        textAlignVertical="top"
      />

      <ResortGuideMondialGoldCtaPortico
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
  resortGuideMondialOrderSheetPorticoPanel: {
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
  resortGuideMondialOrderSheetHeaderCornice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resortGuideMondialOrderSheetTitleFiligree: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '500',
    color: '#F8F5EF',
  },
  resortGuideMondialOrderSheetServiceRowLintel: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(248,245,239,0.08)',
    paddingBottom: 13,
    paddingTop: 12,
    marginBottom: 16,
  },
  resortGuideMondialOrderSheetServiceTitleTracery: {
    fontSize: 14,
    lineHeight: 21,
    color: '#F8F5EF',
    marginBottom: 4,
  },
  resortGuideMondialOrderSheetAvailabilityRowLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  resortGuideMondialOrderSheetAvailabilityTextVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
  },
  resortGuideMondialOrderSheetNoteInputEnclave: {
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
