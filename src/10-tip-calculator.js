/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (billAmount <= 0 || !Number.isInteger(serviceRating)) {
    return null;
  } else {
    let baseObj = null;
    switch (serviceRating) {
      case 1:
        baseObj = {
          tipPercentage: 5,
          tipAmount: Number(calculateTipAmount(billAmount, 0.05)),
          totalAmount: calculateTotalAmount(
            billAmount,
            Number(calculateTipAmount(billAmount, 0.05)),
          ),
        };
        break;
case 2:
   baseObj = {
          tipPercentage: 10,
          tipAmount: Number(calculateTipAmount(billAmount, 0.1)),
          totalAmount: calculateTotalAmount(
            billAmount,
            Number(calculateTipAmount(billAmount, 0.1)),
          ),
        };
  break;
  case 3:
       baseObj = {
          tipPercentage: 15,
          tipAmount: Number(calculateTipAmount(billAmount, 0.15)),
          totalAmount: calculateTotalAmount(
            billAmount,
            Number(calculateTipAmount(billAmount, 0.15)),
          ),
        };
    break;
    case 4:
      baseObj = {
          tipPercentage: 20,
          tipAmount: Number(calculateTipAmount(billAmount, 0.2)),
          totalAmount: calculateTotalAmount(
            billAmount,
            Number(calculateTipAmount(billAmount, 0.2)),
          ),
        };
      break;
      case 5:
         baseObj = {
          tipPercentage: 25,
          tipAmount: Number(calculateTipAmount(billAmount, 0.25)),
          totalAmount: calculateTotalAmount(
            billAmount,
            Number(calculateTipAmount(billAmount, 0.25)),
          ),
        };
        break;
      default:
        baseObj=null
        break;
    }
    return baseObj
  }
  // Your code here
}
function calculateTipAmount(billAmount, tipPercentage) {
  return (billAmount * tipPercentage).toFixed(2);
}
function calculateTotalAmount(billAmount, tipAmount) {
  return Number(Number(billAmount + tipAmount).toFixed(2));
}
