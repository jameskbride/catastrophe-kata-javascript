'use strict';

const ZERO_ADOPTION_FEE_COUNT = 21;
const ADOPTION_FEE = 100;
const SPAY_FEE = 150;
const NEUTER_FEE = 75;

class CatAdopter {

    adopt(adoptionParams, adoptionFee = ADOPTION_FEE, spayFee = SPAY_FEE, neuterFee = NEUTER_FEE ) {
        let adoptionResults = this.applyAdoptionRules(adoptionParams, adoptionFee);
        if (this.isFemaleCat(adoptionParams.currentCatCount)) {
            return {currentSavings: adoptionResults.currentSavings - spayFee};
        } else {
            return {currentSavings: adoptionResults.currentSavings - neuterFee};
        }
    }

    isFemaleCat(currentCatCount) {
        return this.isFirstCat(currentCatCount) || currentCatCount % 2 === 0;
    }

    isFirstCat(currentCatCount) {
        return currentCatCount == 0;
    }

    applyAdoptionRules(adoptionParams, adoptionFee) {
        if (adoptionParams.currentCatCount >= ZERO_ADOPTION_FEE_COUNT) {
            return {currentSavings: adoptionParams.currentSavings}
        } else {
            return {currentSavings: adoptionParams.currentSavings - adoptionFee};
        }
    }
}
export {CatAdopter, ADOPTION_FEE, SPAY_FEE, NEUTER_FEE}
