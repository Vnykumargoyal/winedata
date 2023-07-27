import { calculateMean, calculateMedian, calculateMode } from "../utils/default";
import wineData from "../utils/wineData";

const calculateGammaStats = () => {
  const classGamma = {};

  wineData.forEach((entry) => {
    const className = entry.Alcohol;
    const ash = entry.Ash;
    const hue = entry.Hue;
    const magnesium = entry.Magnesium;
    const gamma = (ash * hue) / magnesium;

    if (!classGamma[className]) {
      classGamma[className] = [];
    }

    classGamma[className].push(gamma);
  });

  const statsTable = [];

  Object.entries(classGamma).forEach(([className, gammaValues]) => {
    const mean = calculateMean(gammaValues);
    const median = calculateMedian(gammaValues);
    const mode = calculateMode(gammaValues);
    console.log('@@@', median);
    statsTable.push({
      className,
      mean: parseFloat(mean).toFixed(2),
      median: parseFloat(median).toFixed(2),
      mode: parseFloat(mode).toFixed(2)
    });
  });

  return statsTable;
};

export default calculateGammaStats;
