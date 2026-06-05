import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {resortGuideMondialColors} from '../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialLayoutProps = {
  children: React.ReactNode;
  scroll?: boolean;
  bounce?: boolean;
};

const ResortGuideMondialLayout = ({
  children,
  bounce = true,
  scroll = true,
}: ResortGuideMondialLayoutProps): React.JSX.Element => {
  return (
    <View style={styles.resortGuideMondialLayoutChassis}>
      {scroll ? (
        <ScrollView
          bounces={bounce}
          contentContainerStyle={styles.resortGuideMondialLayoutScrollTapestry}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.resortGuideMondialLayoutFillEnclave}>
          {children}
        </View>
      )}
    </View>
  );
};

export default ResortGuideMondialLayout;

const styles = StyleSheet.create({
  resortGuideMondialLayoutChassis: {
    flex: 1,
    backgroundColor: resortGuideMondialColors.bg,
  },
  resortGuideMondialLayoutScrollTapestry: {
    flexGrow: 1,
  },
  resortGuideMondialLayoutFillEnclave: {
    flex: 1,
  },
});
