import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {resortGuidColors} from '../resortGuidThm/ResortGuidColors';

type ResortGuidLayoutProps = {
  children: React.ReactNode;
  scroll?: boolean;
  bounce?: boolean;
};

const ResortGuidLayout = ({
  children,
  bounce = true,
  scroll = true,
}: ResortGuidLayoutProps): React.JSX.Element => {
  return (
    <View style={styles.root}>
      {scroll ? (
        <ScrollView
          bounces={bounce}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.fill}>{children}</View>
      )}
    </View>
  );
};

export default ResortGuidLayout;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: resortGuidColors.bg,
  },
  scrollContent: {
    flexGrow: 1,
  },
  fill: {
    flex: 1,
  },
});
