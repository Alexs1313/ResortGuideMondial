import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ResortGuideMondialGoldCtaPortico} from '../ResortGuideMondialGoldCtaPortico/ResortGuideMondialGoldCtaPortico';

type ResortGuideMondialOrderSentAtelierProps = {
  onDone: () => void;
};

export function ResortGuideMondialOrderSentAtelier({
  onDone,
}: ResortGuideMondialOrderSentAtelierProps): React.JSX.Element {
  return (
    <View style={styles.resortGuideMondialOrderSentAtelierCardFacet}>
      <View style={styles.resortGuideMondialOrderSentAtelierIconEnclave}>
        <Text style={styles.resortGuideMondialOrderSentAtelierCheckSigil}>✓</Text>
      </View>
      <Text style={styles.resortGuideMondialOrderSentAtelierTitleFiligree}>Order Sent</Text>
      <Text style={styles.resortGuideMondialOrderSentAtelierMessageWeave}>
        Your room service request has been added to your request history.
      </Text>
      <ResortGuideMondialGoldCtaPortico
        label="Done"
        onPress={onDone}
        variant="dialogPortico"
        fullWidth
        accessibilityLabel="Done"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialOrderSentAtelierCardFacet: {
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
  resortGuideMondialOrderSentAtelierIconEnclave: {
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
  resortGuideMondialOrderSentAtelierCheckSigil: {
    fontSize: 26,
    lineHeight: 32,
    color: '#C9A020',
  },
  resortGuideMondialOrderSentAtelierTitleFiligree: {
    fontSize: 22,
    lineHeight: 33,
    fontWeight: '500',
    color: '#F8F5EF',
    textAlign: 'center',
    marginBottom: 10,
  },
  resortGuideMondialOrderSentAtelierMessageWeave: {
    fontSize: 14,
    lineHeight: 21,
    color: '#A9ADBE',
    textAlign: 'center',
    marginBottom: 24,
  },
});
