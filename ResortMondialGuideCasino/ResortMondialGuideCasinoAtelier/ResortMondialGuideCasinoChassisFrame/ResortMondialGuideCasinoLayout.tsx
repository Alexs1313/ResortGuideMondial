import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {resortMondialGuideCasinoColors} from '../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoLayoutProps = {
  children: React.ReactNode;
  scroll?: boolean;
  bounce?: boolean;
};

const ResortMondialGuideCasinoLayout = ({
  children,
  bounce = true,
  scroll = true,
}: ResortMondialGuideCasinoLayoutProps): React.JSX.Element => {
  return (
    <View style={styles.resortMondialGuideCasinoLayoutChassis}>
      {scroll ? (
        <ScrollView
          bounces={bounce}
          contentContainerStyle={styles.resortMondialGuideCasinoLayoutScrollTapestry}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.resortMondialGuideCasinoLayoutFillEnclave}>
          {children}
        </View>
      )}
    </View>
  );
};

export default ResortMondialGuideCasinoLayout;

const styles = StyleSheet.create({
  resortMondialGuideCasinoLayoutChassis: {
    flex: 1,
    backgroundColor: resortMondialGuideCasinoColors.bg,
  },
  resortMondialGuideCasinoLayoutScrollTapestry: {
    flexGrow: 1,
  },
  resortMondialGuideCasinoLayoutFillEnclave: {
    flex: 1,
  },
});
