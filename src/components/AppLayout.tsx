import React from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  bottomInset,
  colors,
  tabBottomGap,
  topInset,
} from '../constants/theme';
import {useAdaptive} from '../hooks/useAdaptive';

type AppLayoutProps = {
  children: React.ReactNode;
  scroll?: boolean;
  bounce?: boolean;
  withTabs?: boolean;
  compactTop?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  bottomExtra?: number;
};

const AppLayout = ({
  children,
  bounce = true,
  scroll = true,
  withTabs,
  compactTop,
  style,
  contentStyle,
  bottomExtra = 0,
}: AppLayoutProps): React.JSX.Element => {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const topGap = adaptive.isTinyHeight ? 6 : compactTop ? 8 : 18;
  const paddingTop = topInset(insets.top) + topGap;
  const paddingBottom = withTabs
    ? adaptive.tabHeight +
      tabBottomGap() +
      (adaptive.isTinyHeight ? 86 : adaptive.isSmallHeight ? 72 : 40)
    : bottomInset(insets.bottom) +
      (adaptive.isTinyHeight ? 58 : adaptive.isSmallHeight ? 48 : 24) +
      bottomExtra;

  if (!scroll) {
    return (
      <View style={[styles.LayoutChassis, style]}>
        <View
          style={[
            styles.LayoutFillEnclave,
            {
              paddingTop,
              paddingBottom,
              paddingHorizontal: adaptive.horizontalPadding,
            },
            contentStyle,
          ]}>
          {children}
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.LayoutChassis, style]}>
      <ScrollView
        bounces={bounce}
        contentContainerStyle={[
          styles.LayoutScrollTapestry,
          {
            paddingTop,
            paddingBottom,
            paddingHorizontal: adaptive.horizontalPadding,
          },
          contentStyle,
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  LayoutChassis: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  LayoutScrollTapestry: {
    flexGrow: 1,
  },
  LayoutFillEnclave: {
    flex: 1,
  },
});
