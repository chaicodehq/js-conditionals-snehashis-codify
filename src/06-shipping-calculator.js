/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
  let baggagePrice;
  if (weight === 0 || weight === -1||orderTotal<0) {
    return -1;
  } else {
    if (country === "US") {
      if (weight > 0 && weight <= 1) {
        baggagePrice= 5;
      } else if (weight > 1 && weight <= 5) {
        baggagePrice= 10;
      } else if (weight > 5) {
        baggagePrice= 15;
      } else {
        baggagePrice = -1;
      }
      return orderTotal > 50 ? 0 : baggagePrice;
    } else {
      if (weight > 0 && weight <= 1) {
        baggagePrice= 15;
      } else if (weight > 1 && weight <= 5) {
        baggagePrice= 25;
      }else {
          baggagePrice= 40;
      }
      return orderTotal > 100 ? 0 : baggagePrice;
    }
  }

  // Your code here
}
