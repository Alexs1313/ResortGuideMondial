import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

const Layoutt = ({
  children,
  bounce = true,
  scroll = true,
}: {
  children: React.ReactNode;
  scroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <View style={styles.background}>
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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#060C18',
  },
  scrollContent: {
    flexGrow: 1,
  },
  fill: {
    flex: 1,
  },
});

export default Layoutt;
