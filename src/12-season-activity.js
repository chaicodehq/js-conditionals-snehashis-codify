/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temperature < 0     → "skiing"
 *   - Winter + temperature >= 0    → "ice skating"
 *   - Spring + temperature > 20    → "hiking"
 *   - Spring + temperature <= 20   → "museum visit"
 *   - Summer + temperature > 35    → "swimming"
 *   - Summer + temperature <= 35   → "cycling"
 *   - Autumn + temperature > 15    → "nature walk"
 *   - Autumn + temperature <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  if (!(month >= 1 && month <= 12)) {
    return null;
  } else {
    let baseObj = null;
    switch (getMonthWiseSeason(month)) {
      case "Winter":
        baseObj = {
          season: getMonthWiseSeason(month),
          activity: temperature < 0 ? "skiing" : "ice skating",
        };
        break;
      case "Spring":
        baseObj = {
          season: getMonthWiseSeason(month),
          activity: temperature > 20 ? "hiking" : "museum visit",
        };
        break;
      case "Summer":
        baseObj = {
          season: getMonthWiseSeason(month),
          activity: temperature > 35 ? "swimming" : "cycling",
        };
        break;
      case "Autumn":
        baseObj = {
          season: getMonthWiseSeason(month),
          activity: temperature > 15 ? "nature walk" : "reading at a cafe",
        };
        break;
      default:
        baseObj = null;
        break;
    }
    return baseObj;
  }
  // Your code here
}
function getMonthWiseSeason(month) {
  if (month === 1 || month === 2 || month === 12) {
    return "Winter";
  } else if (month === 3 || month === 4 || month == 5) {
    return "Spring";
  } else if (month === 6 || month === 7 || month === 8) {
    return "Summer";
  } else {
    return "Autumn";
  }
}
