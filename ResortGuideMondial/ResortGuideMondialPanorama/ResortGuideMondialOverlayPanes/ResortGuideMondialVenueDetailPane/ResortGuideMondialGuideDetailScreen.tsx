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

import {resortGuideMondialIcons} from '../../../ResortGuideMondialReliquary';
import ResortGuideMondialGoldRule from '../../../ResortGuideMondialAtelier/ResortGuideMondialGiltFiligree/ResortGuideMondialGoldRule';
import {ResortGuideMondialRoundGlyphPortico} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialRoundGlyphPortico/ResortGuideMondialRoundGlyphPortico';
import {ResortGuideMondialBookmarkLatch} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialBookmarkLatch/ResortGuideMondialBookmarkLatch';
import {ResortGuideMondialHighlightLatch} from '../../../ResortGuideMondialAtelier/ResortGuideMondialGlyphsPrism/ResortGuideMondialHighlightLatch/ResortGuideMondialHighlightLatch';
import {GuideItem} from '../../../ResortGuideMondialCompendium/ResortGuideMondialVenueFolio/ResortGuideMondialGuideData';
import {useResortGuideMondialSaved} from '../../../ResortGuideMondialTethers/useResortGuideMondialSaved';
import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type GuideDetailProps = {
  item: GuideItem;
  onBack: () => void;
};

const HighlightItem = ({text}: {text: string}) => (
  <View style={styles.resortGuideMondialGuideDetailHighlightRowLintel}>
    <View style={styles.resortGuideMondialGuideDetailCheckCircleEnclave}>
      <Text style={styles.resortGuideMondialGuideDetailCheckMarkSigil}>✓</Text>
    </View>
    <Text style={styles.resortGuideMondialGuideDetailHighlightTextVellum}>
      {text}
    </Text>
  </View>
);

export function ResortGuideMondialGuideDetailScreen({
  item,
  onBack,
}: GuideDetailProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {isSaved, toggleSave} = useResortGuideMondialSaved();
  const saved = isSaved(item.id);

  const highlightPairs: string[][] = [];
  for (let i = 0; i < item.highlights.length; i += 2) {
    highlightPairs.push(item.highlights.slice(i, i + 2));
  }

  return (
    <View style={styles.resortGuideMondialGuideDetailVestibule}>
      <View
        style={[
          styles.resortGuideMondialGuideDetailFloatingControlsEnclave,
          {paddingTop: insets.top + 8},
        ]}
        pointerEvents="box-none">
        <ResortGuideMondialRoundGlyphPortico
          onPress={onBack}
          icon={resortGuideMondialIcons.back}
          size={36}
          variant="solidFacet"
          iconStyle={styles.resortGuideMondialGuideDetailBackIconSigil}
          accessibilityLabel="Go back"
        />
        <ResortGuideMondialBookmarkLatch
          saved={saved}
          onPress={() => toggleSave(item.id)}
          style={styles.resortGuideMondialGuideDetailRoundBtnPortico}
        />
      </View>

      <ScrollView
        style={styles.resortGuideMondialGuideDetailScrollLane}
        contentContainerStyle={[
          styles.resortGuideMondialGuideDetailContentVellum,
          {paddingBottom: Math.max(insets.bottom, 24) + 16},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.resortGuideMondialGuideDetailHeroParapet}>
          <Image
            source={item.image}
            style={styles.resortGuideMondialGuideDetailHeroImagePanel}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['rgba(0,0,0,0)', resortGuideMondialColors.bg]}
            style={styles.resortGuideMondialGuideDetailHeroGradientVeil}
          />
        </View>

        <View style={styles.resortGuideMondialGuideDetailBodyVellum}>
          <Text style={styles.resortGuideMondialGuideDetailSubtitleWeave}>
            {item.subtitle}
          </Text>
          <Text style={styles.resortGuideMondialGuideDetailNameFiligree}>
            {item.name}
          </Text>
          <ResortGuideMondialGoldRule />

          <View style={styles.resortGuideMondialGuideDetailInfoRowLattice}>
            <View style={styles.resortGuideMondialGuideDetailInfoCardFacet}>
              <Image
                source={resortGuideMondialIcons.location}
                style={styles.resortGuideMondialGuideDetailInfoIconImageSigil}
              />
              <View
                style={styles.resortGuideMondialGuideDetailInfoTextWrapMantle}>
                <Text
                  style={styles.resortGuideMondialGuideDetailInfoLabelTracery}>
                  Location
                </Text>
                <Text
                  style={styles.resortGuideMondialGuideDetailInfoValueVellum}>
                  {item.location}
                </Text>
              </View>
            </View>
            <View style={styles.resortGuideMondialGuideDetailInfoCardFacet}>
              <Text style={styles.resortGuideMondialGuideDetailInfoIconEnclave}>
                ◷
              </Text>
              <View
                style={styles.resortGuideMondialGuideDetailInfoTextWrapMantle}>
                <Text
                  style={styles.resortGuideMondialGuideDetailInfoLabelTracery}>
                  Hours
                </Text>
                <Text
                  style={styles.resortGuideMondialGuideDetailInfoValueVellum}>
                  {item.hours}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.resortGuideMondialGuideDetailDescriptionWeave}>
            {item.description}
          </Text>

          <Text
            style={styles.resortGuideMondialGuideDetailHighlightsTitleFiligree}>
            Highlights
          </Text>
          <View
            style={styles.resortGuideMondialGuideDetailHighlightsGridLattice}>
            {highlightPairs.map((pair, rowIndex) => (
              <View
                key={rowIndex}
                style={
                  styles.resortGuideMondialGuideDetailHighlightRowWrapMantle
                }>
                {pair.map(highlight => (
                  <View
                    key={highlight}
                    style={
                      styles.resortGuideMondialGuideDetailHighlightColPlinth
                    }>
                    <ResortGuideMondialHighlightLatch text={highlight} />
                  </View>
                ))}
                {pair.length === 1 ? (
                  <View
                    style={
                      styles.resortGuideMondialGuideDetailHighlightColPlinth
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
  resortGuideMondialGuideDetailVestibule: {
    flex: 1,
    backgroundColor: resortGuideMondialColors.bg,
  },
  resortGuideMondialGuideDetailHeroParapet: {
    height: 256,
    backgroundColor: '#0A1020',
  },
  resortGuideMondialGuideDetailHeroImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortGuideMondialGuideDetailHeroGradientVeil: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
  },
  resortGuideMondialGuideDetailFloatingControlsEnclave: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  resortGuideMondialGuideDetailRoundBtnPortico: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: resortGuideMondialColors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialGuideDetailRoundBtnSavedGleam: {
    backgroundColor: resortGuideMondialColors.accent,
  },
  resortGuideMondialGuideDetailBackIconSigil: {
    width: 20,
    height: 20,
    tintColor: resortGuideMondialColors.text,
  },
  resortGuideMondialGuideDetailScrollLane: {
    flex: 1,
  },
  resortGuideMondialGuideDetailContentVellum: {
    flexGrow: 1,
  },
  resortGuideMondialGuideDetailBodyVellum: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 16,
  },
  resortGuideMondialGuideDetailSubtitleWeave: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: resortGuideMondialColors.accent,
    textTransform: 'uppercase',
  },
  resortGuideMondialGuideDetailNameFiligree: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 33,
    color: resortGuideMondialColors.text,
    marginTop: -8,
  },
  resortGuideMondialGuideDetailInfoRowLattice: {
    flexDirection: 'row',
    gap: 12,
  },
  resortGuideMondialGuideDetailInfoCardFacet: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: resortGuideMondialColors.outline,
    backgroundColor: resortGuideMondialColors.cardBg,
    minHeight: 56,
  },
  resortGuideMondialGuideDetailInfoIconEnclave: {
    fontSize: 13,
    color: resortGuideMondialColors.accent,
    marginTop: 1,
  },
  resortGuideMondialGuideDetailInfoIconImageSigil: {
    width: 13,
    height: 13,
    tintColor: resortGuideMondialColors.accent,
    marginTop: 1,
  },
  resortGuideMondialGuideDetailInfoTextWrapMantle: {
    flex: 1,
    gap: 2,
  },
  resortGuideMondialGuideDetailInfoLabelTracery: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: resortGuideMondialColors.muted,
    textTransform: 'uppercase',
  },
  resortGuideMondialGuideDetailInfoValueVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: resortGuideMondialColors.text,
  },
  resortGuideMondialGuideDetailDescriptionWeave: {
    fontSize: 14,
    lineHeight: 23,
    color: resortGuideMondialColors.muted,
  },
  resortGuideMondialGuideDetailHighlightsTitleFiligree: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: resortGuideMondialColors.accent,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  resortGuideMondialGuideDetailHighlightsGridLattice: {
    gap: 8,
  },
  resortGuideMondialGuideDetailHighlightRowWrapMantle: {
    flexDirection: 'row',
    gap: 8,
  },
  resortGuideMondialGuideDetailHighlightColPlinth: {
    flex: 1,
  },
});
