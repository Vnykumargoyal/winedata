import { calculateMean, calculateMedian, calculateMode } from "../utils/default";
import wineData from "../utils/wineData";

const calculateFlavanoidsStats = () => {
  const classFlavanoids = {};

  wineData.forEach((entry) => {
    const className = entry.Alcohol;
    const flavanoidValue = entry.Flavanoids;

    if (!classFlavanoids[className]) {
      classFlavanoids[className] = [];
    }

    classFlavanoids[className].push(flavanoidValue);
  });

  const statsTable = [];

  Object.entries(classFlavanoids).forEach(([className, flavanoidValues]) => {
    const mean = calculateMean(flavanoidValues);
    const median = calculateMedian(flavanoidValues);
    const mode = calculateMode(flavanoidValues);
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

export default calculateFlavanoidsStats;
