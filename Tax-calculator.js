/*
4 *** Tax Calculator ***
 Define a function taxCalculator that accepts the price of an item
 and a country code.
 taxCalculator should return the after-tax cost of the item,
 assuming JOR's tax is 4% and UAE's sales tax is 6.625%.

 Example:
 --------
 taxCalculator(100, 'JOR'); // => 104
 taxCalculator(100, 'UAE'); // => 106.625
*/
function TaxCalculator(nub, tax) {
    if (tax === "JOR") {
        return nub + nub * 0.04;
    }
    else {
        return nub + nub * 0.06625;
    }

}
console.log(TaxCalculator(100, 'UAE'));
