import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {colors} from '../theme/colors';

type LayoutProps = {
  children: React.ReactNode;
  scroll?: boolean;
  bounce?: boolean;
};

const Layout = ({
  children,
  bounce = true,
  scroll = true,
}: LayoutProps): React.JSX.Element => {
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

export default Layout;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    flexGrow: 1,
  },
  fill: {
    flex: 1,
  },
});
