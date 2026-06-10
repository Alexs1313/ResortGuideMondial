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

import {resortMondialGuideCasinoIcons} from '../../../ResortMondialGuideCasinoReliquary';
import ResortMondialGuideCasinoGoldRule from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGiltFiligree/ResortMondialGuideCasinoGoldRule';
import {ResortMondialGuideCasinoRoundGlyphPortico} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoRoundGlyphPortico/ResortMondialGuideCasinoRoundGlyphPortico';
import {ResortMondialGuideCasinoBookmarkLatch} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoBookmarkLatch/ResortMondialGuideCasinoBookmarkLatch';
import {ResortMondialGuideCasinoHighlightLatch} from '../../../ResortMondialGuideCasinoAtelier/ResortMondialGuideCasinoGlyphsPrism/ResortMondialGuideCasinoHighlightLatch/ResortMondialGuideCasinoHighlightLatch';
import {GuideItem} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoVenueFolio/ResortMondialGuideCasinoGuideData';
import {useResortMondialGuideCasinoSaved} from '../../../ResortMondialGuideCasinoTethers/useResortMondialGuideCasinoSaved';
import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type GuideDetailProps = {
  item: GuideItem;
  onBack: () => void;
};

const HighlightItem = ({text}: {text: string}) => (
  <View style={styles.resortMondialGuideCasinoGuideDetailHighlightRowLintel}>
    <View style={styles.resortMondialGuideCasinoGuideDetailCheckCircleEnclave}>
      <Text style={styles.resortMondialGuideCasinoGuideDetailCheckMarkSigil}>✓</Text>
    </View>
    <Text style={styles.resortMondialGuideCasinoGuideDetailHighlightTextVellum}>
      {text}
    </Text>
  </View>
);

export function ResortMondialGuideCasinoGuideDetailScreen({
  item,
  onBack,
}: GuideDetailProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {isSaved, toggleSave} = useResortMondialGuideCasinoSaved();
  const saved = isSaved(item.id);

  const highlightPairs: string[][] = [];
  for (let i = 0; i < item.highlights.length; i += 2) {
    highlightPairs.push(item.highlights.slice(i, i + 2));
  }

  return (
    <View style={styles.resortMondialGuideCasinoGuideDetailVestibule}>
      <View
        style={[
          styles.resortMondialGuideCasinoGuideDetailFloatingControlsEnclave,
          {paddingTop: insets.top + 8},
        ]}
        pointerEvents="box-none">
        <ResortMondialGuideCasinoRoundGlyphPortico
          onPress={onBack}
          icon={resortMondialGuideCasinoIcons.back}
          size={36}
          variant="solidFacet"
          iconStyle={styles.resortMondialGuideCasinoGuideDetailBackIconSigil}
          accessibilityLabel="Go back"
        />
        <ResortMondialGuideCasinoBookmarkLatch
          saved={saved}
          onPress={() => toggleSave(item.id)}
          style={styles.resortMondialGuideCasinoGuideDetailRoundBtnPortico}
        />
      </View>

      <ScrollView
        style={styles.resortMondialGuideCasinoGuideDetailScrollLane}
        contentContainerStyle={[
          styles.resortMondialGuideCasinoGuideDetailContentVellum,
          {paddingBottom: Math.max(insets.bottom, 24) + 16},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.resortMondialGuideCasinoGuideDetailHeroParapet}>
          <Image
            source={item.image}
            style={styles.resortMondialGuideCasinoGuideDetailHeroImagePanel}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['rgba(0,0,0,0)', resortMondialGuideCasinoColors.bg]}
            style={styles.resortMondialGuideCasinoGuideDetailHeroGradientVeil}
          />
        </View>

        <View style={styles.resortMondialGuideCasinoGuideDetailBodyVellum}>
          <Text style={styles.resortMondialGuideCasinoGuideDetailSubtitleWeave}>
            {item.subtitle}
          </Text>
          <Text style={styles.resortMondialGuideCasinoGuideDetailNameFiligree}>
            {item.name}
          </Text>
          <ResortMondialGuideCasinoGoldRule />

          <View style={styles.resortMondialGuideCasinoGuideDetailInfoRowLattice}>
            <View style={styles.resortMondialGuideCasinoGuideDetailInfoCardFacet}>
              <Image
                source={resortMondialGuideCasinoIcons.location}
                style={styles.resortMondialGuideCasinoGuideDetailInfoIconImageSigil}
              />
              <View
                style={styles.resortMondialGuideCasinoGuideDetailInfoTextWrapMantle}>
                <Text
                  style={styles.resortMondialGuideCasinoGuideDetailInfoLabelTracery}>
                  Location
                </Text>
                <Text
                  style={styles.resortMondialGuideCasinoGuideDetailInfoValueVellum}>
                  {item.location}
                </Text>
              </View>
            </View>
            <View style={styles.resortMondialGuideCasinoGuideDetailInfoCardFacet}>
              <Text style={styles.resortMondialGuideCasinoGuideDetailInfoIconEnclave}>
                ◷
              </Text>
              <View
                style={styles.resortMondialGuideCasinoGuideDetailInfoTextWrapMantle}>
                <Text
                  style={styles.resortMondialGuideCasinoGuideDetailInfoLabelTracery}>
                  Hours
                </Text>
                <Text
                  style={styles.resortMondialGuideCasinoGuideDetailInfoValueVellum}>
                  {item.hours}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.resortMondialGuideCasinoGuideDetailDescriptionWeave}>
            {item.description}
          </Text>

          <Text
            style={styles.resortMondialGuideCasinoGuideDetailHighlightsTitleFiligree}>
            Highlights
          </Text>
          <View
            style={styles.resortMondialGuideCasinoGuideDetailHighlightsGridLattice}>
            {highlightPairs.map((pair, rowIndex) => (
              <View
                key={rowIndex}
                style={
                  styles.resortMondialGuideCasinoGuideDetailHighlightRowWrapMantle
                }>
                {pair.map(highlight => (
                  <View
                    key={highlight}
                    style={
                      styles.resortMondialGuideCasinoGuideDetailHighlightColPlinth
                    }>
                    <ResortMondialGuideCasinoHighlightLatch text={highlight} />
                  </View>
                ))}
                {pair.length === 1 ? (
                  <View
                    style={
                      styles.resortMondialGuideCasinoGuideDetailHighlightColPlinth
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
  resortMondialGuideCasinoGuideDetailVestibule: {
    flex: 1,
    backgroundColor: resortMondialGuideCasinoColors.bg,
  },
  resortMondialGuideCasinoGuideDetailHeroParapet: {
    height: 256,
    backgroundColor: '#0A1020',
  },
  resortMondialGuideCasinoGuideDetailHeroImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortMondialGuideCasinoGuideDetailHeroGradientVeil: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
  },
  resortMondialGuideCasinoGuideDetailFloatingControlsEnclave: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  resortMondialGuideCasinoGuideDetailRoundBtnPortico: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: resortMondialGuideCasinoColors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoGuideDetailRoundBtnSavedGleam: {
    backgroundColor: resortMondialGuideCasinoColors.accent,
  },
  resortMondialGuideCasinoGuideDetailBackIconSigil: {
    width: 20,
    height: 20,
    tintColor: resortMondialGuideCasinoColors.text,
  },
  resortMondialGuideCasinoGuideDetailScrollLane: {
    flex: 1,
  },
  resortMondialGuideCasinoGuideDetailContentVellum: {
    flexGrow: 1,
  },
  resortMondialGuideCasinoGuideDetailBodyVellum: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 16,
  },
  resortMondialGuideCasinoGuideDetailSubtitleWeave: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: resortMondialGuideCasinoColors.accent,
    textTransform: 'uppercase',
  },
  resortMondialGuideCasinoGuideDetailNameFiligree: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 33,
    color: resortMondialGuideCasinoColors.text,
    marginTop: -8,
  },
  resortMondialGuideCasinoGuideDetailInfoRowLattice: {
    flexDirection: 'row',
    gap: 12,
  },
  resortMondialGuideCasinoGuideDetailInfoCardFacet: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: resortMondialGuideCasinoColors.outline,
    backgroundColor: resortMondialGuideCasinoColors.cardBg,
    minHeight: 56,
  },
  resortMondialGuideCasinoGuideDetailInfoIconEnclave: {
    fontSize: 13,
    color: resortMondialGuideCasinoColors.accent,
    marginTop: 1,
  },
  resortMondialGuideCasinoGuideDetailInfoIconImageSigil: {
    width: 13,
    height: 13,
    tintColor: resortMondialGuideCasinoColors.accent,
    marginTop: 1,
  },
  resortMondialGuideCasinoGuideDetailInfoTextWrapMantle: {
    flex: 1,
    gap: 2,
  },
  resortMondialGuideCasinoGuideDetailInfoLabelTracery: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: resortMondialGuideCasinoColors.muted,
    textTransform: 'uppercase',
  },
  resortMondialGuideCasinoGuideDetailInfoValueVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: resortMondialGuideCasinoColors.text,
  },
  resortMondialGuideCasinoGuideDetailDescriptionWeave: {
    fontSize: 14,
    lineHeight: 23,
    color: resortMondialGuideCasinoColors.muted,
  },
  resortMondialGuideCasinoGuideDetailHighlightsTitleFiligree: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: resortMondialGuideCasinoColors.accent,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  resortMondialGuideCasinoGuideDetailHighlightsGridLattice: {
    gap: 8,
  },
  resortMondialGuideCasinoGuideDetailHighlightRowWrapMantle: {
    flexDirection: 'row',
    gap: 8,
  },
  resortMondialGuideCasinoGuideDetailHighlightColPlinth: {
    flex: 1,
  },
});
