import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {icons} from '../../data/assets';
import GoldRule from '../../components/GoldRule';
import {RoundIconButton} from '../../components/RoundIconButton';
import {BookmarkButton} from '../../components/BookmarkButton';
import {HighlightChip} from '../../components/HighlightChip';
import {GuideItem} from '../../data/guide';
import {useSaved} from '../../hooks/useSaved';
import {colors, fonts} from '../../constants/theme';
import {useAdaptive} from '../../hooks/useAdaptive';

type GuideDetailProps = {
  item: GuideItem;
  onBack: () => void;
};

const HighlightItem = ({text}: {text: string}) => (
  <View style={styles.GuideDetailHighlightRowLintel}>
    <View style={styles.GuideDetailCheckCircleEnclave}>
      <Text style={styles.GuideDetailCheckMarkSigil}>✓</Text>
    </View>
    <Text style={styles.GuideDetailHighlightTextVellum}>
      {text}
    </Text>
  </View>
);

export function GuideDetailScreen({
  item,
  onBack,
}: GuideDetailProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const {isSaved, toggleSave} = useSaved();
  const saved = isSaved(item.id);

  const highlightPairs: string[][] = [];
  for (let i = 0; i < item.highlights.length; i += 2) {
    highlightPairs.push(item.highlights.slice(i, i + 2));
  }

  return (
    <View style={styles.GuideDetailVestibule}>
      <View
        style={[
          styles.GuideDetailFloatingControlsEnclave,
          {paddingTop: insets.top + 8},
        ]}
        pointerEvents="box-none">
        <RoundIconButton
          onPress={onBack}
          icon={icons.back}
          size={36}
          variant="solidFacet"
          iconStyle={styles.GuideDetailBackIconSigil}
          accessibilityLabel="Go back"
        />
        <BookmarkButton
          saved={saved}
          onPress={() => toggleSave(item.id)}
          style={styles.GuideDetailRoundBtnPortico}
        />
      </View>

      <ScrollView
        style={styles.GuideDetailScrollLane}
        contentContainerStyle={[
          styles.GuideDetailContentVellum,
          {paddingBottom: Math.max(insets.bottom, 24) + 16},
        ]}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.GuideDetailHeroParapet,
            {height: adaptive.detailHeroHeight},
          ]}>
          <Image
            source={item.image}
            style={styles.GuideDetailHeroImagePanel}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['rgba(0,0,0,0)', colors.bg]}
            style={styles.GuideDetailHeroGradientVeil}
          />
        </View>

        <View style={styles.GuideDetailBodyVellum}>
          <Text style={styles.GuideDetailSubtitleWeave}>
            {item.subtitle}
          </Text>
          <Text style={styles.GuideDetailNameFiligree}>
            {item.name}
          </Text>
          <GoldRule />

          <View style={styles.GuideDetailInfoRowLattice}>
            <View style={styles.GuideDetailInfoCardFacet}>
              <Image
                source={icons.location}
                style={styles.GuideDetailInfoIconImageSigil}
              />
              <View
                style={styles.GuideDetailInfoTextWrapMantle}>
                <Text
                  style={styles.GuideDetailInfoLabelTracery}>
                  Location
                </Text>
                <Text
                  style={styles.GuideDetailInfoValueVellum}>
                  {item.location}
                </Text>
              </View>
            </View>
            <View style={styles.GuideDetailInfoCardFacet}>
              <Text style={styles.GuideDetailInfoIconEnclave}>
                ◷
              </Text>
              <View
                style={styles.GuideDetailInfoTextWrapMantle}>
                <Text
                  style={styles.GuideDetailInfoLabelTracery}>
                  Hours
                </Text>
                <Text
                  style={styles.GuideDetailInfoValueVellum}>
                  {item.hours}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.GuideDetailDescriptionWeave}>
            {item.description}
          </Text>

          <Text
            style={styles.GuideDetailHighlightsTitleFiligree}>
            Highlights
          </Text>
          <View
            style={styles.GuideDetailHighlightsGridLattice}>
            {highlightPairs.map((pair, rowIndex) => (
              <View
                key={rowIndex}
                style={
                  styles.GuideDetailHighlightRowWrapMantle
                }>
                {pair.map(highlight => (
                  <View
                    key={highlight}
                    style={
                      styles.GuideDetailHighlightColPlinth
                    }>
                    <HighlightChip text={highlight} />
                  </View>
                ))}
                {pair.length === 1 ? (
                  <View
                    style={
                      styles.GuideDetailHighlightColPlinth
                    }
                  />
                ) : null}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  GuideDetailVestibule: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  GuideDetailHeroParapet: {
    backgroundColor: '#0A1020',
  },
  GuideDetailHeroImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  GuideDetailHeroGradientVeil: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
  },
  GuideDetailFloatingControlsEnclave: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  GuideDetailRoundBtnPortico: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  GuideDetailRoundBtnSavedGleam: {
    backgroundColor: colors.accent,
  },
  GuideDetailBackIconSigil: {
    width: 20,
    height: 20,
    tintColor: colors.text,
  },
  GuideDetailScrollLane: {
    flex: 1,
  },
  GuideDetailContentVellum: {
    flexGrow: 1,
  },
  GuideDetailBodyVellum: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 16,
  },
  GuideDetailSubtitleWeave: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: colors.accent,
    textTransform: 'uppercase',
  },
  GuideDetailNameFiligree: {
    fontFamily: fonts.bold,
    fontSize: 22,
    lineHeight: 33,
    color: colors.text,
    marginTop: -8,
  },
  GuideDetailInfoRowLattice: {
    flexDirection: 'row',
    gap: 12,
  },
  GuideDetailInfoCardFacet: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.outline,
    backgroundColor: colors.cardBg,
    minHeight: 56,
  },
  GuideDetailInfoIconEnclave: {
    fontSize: 13,
    color: colors.accent,
    marginTop: 1,
  },
  GuideDetailInfoIconImageSigil: {
    width: 13,
    height: 13,
    tintColor: colors.accent,
    marginTop: 1,
  },
  GuideDetailInfoTextWrapMantle: {
    flex: 1,
    gap: 2,
  },
  GuideDetailInfoLabelTracery: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: colors.muted,
    textTransform: 'uppercase',
  },
  GuideDetailInfoValueVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.text,
  },
  GuideDetailDescriptionWeave: {
    fontSize: 14,
    lineHeight: 23,
    color: colors.muted,
  },
  GuideDetailHighlightsTitleFiligree: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: colors.accent,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  GuideDetailHighlightsGridLattice: {
    gap: 8,
  },
  GuideDetailHighlightRowWrapMantle: {
    flexDirection: 'row',
    gap: 8,
  },
  GuideDetailHighlightColPlinth: {
    flex: 1,
  },
  GuideDetailHighlightRowLintel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  GuideDetailCheckCircleEnclave: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  GuideDetailCheckMarkSigil: {
    fontSize: 10,
    color: colors.accent,
  },
  GuideDetailHighlightTextVellum: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    color: colors.text,
  },
});
