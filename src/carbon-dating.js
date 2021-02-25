const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (isNaN(sampleActivity) || typeof sampleActivity !== 'string' || sampleActivity.trim() === '') {
    return false
  }
  if (parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) >= 15) {
    return false
  }
  return(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD)
};
