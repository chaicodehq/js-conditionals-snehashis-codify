/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let price = 0;
  const sizeList = ["small", "medium", "large"];
  const typeList = ["regular", "latte", "cappuccino", "mocha"];
  if (!(sizeList.includes(size) && typeList.includes(type))) {
    return -1;
  } else {
    if (size === "small") {
      price = handlePriceByType(type, 3, extras);
    } else if (size === "medium") {
      price = handlePriceByType(type, 4, extras);
    } else {
      price = handlePriceByType(type, 5, extras);
    }
    return price;
  }
  // Your code here
}
function handlePriceByType(type, priceBySize, extras) {
  if (type === "regular") {
    priceBySize = priceBySize + 0 + handlExtras(extras);
  } else if (type === "latte") {
    priceBySize = priceBySize + 1 + handlExtras(extras);
  } else if (type === "cappuccino") {
    priceBySize = priceBySize + 1.5 + handlExtras(extras);
  } else {
    priceBySize = priceBySize + 2 + handlExtras(extras);
  }
  return Number(Number(priceBySize).toFixed(2));
  // not done
}
function handlExtras(extras) {
  if (Object.keys(extras).length <= 0) {
    return 0;
  } else {
    if (extras.whippedCream && extras.extraShot) {
      return 0.5 + 0.75;
    } else if (extras.whippedCream) {
      return 0.5;
    } else if (extras.extraShot) {
      return 0.75;
    } else {
      return 0;
    }
  }
}
