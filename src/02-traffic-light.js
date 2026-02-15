/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  let colorInLowerCase=color.toLowerCase()
  // Your code here
  if(colorInLowerCase==="green") {
    return "GO"
  } else if(colorInLowerCase==="yellow") {
    return "SLOW DOWN"
  } else if(colorInLowerCase==="red") {
    return "STOP"
  } else if(colorInLowerCase==="flashing red") {
    return "STOP AND PROCEED WITH CAUTION"
  } else {
    return "INVALID SIGNAL"
  }
}
