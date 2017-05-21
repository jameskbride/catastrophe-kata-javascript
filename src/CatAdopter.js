'use strict';

const ZERO_ADOPTION_FEE_COUNT = 21;
const ADOPTION_FEE = 100;
const SPAY_FEE = 150;

class CatAdopter {

    adopt(adoptionParams, adoptionFee = ADOPTION_FEE, spayFee = SPAY_FEE ) {
        let adoptionResults = this.applyAdoptionRules(adoptionParams, adoptionFee);
        return {currentSavings: adoptionResults.currentSavings - spayFee};
    }

    applyAdoptionRules(adoptionParams, adoptionFee) {
        if (adoptionParams.currentCatCount >= ZERO_ADOPTION_FEE_COUNT) {
            return {currentSavings: adoptionParams.currentSavings}
        } else {
            return {currentSavings: adoptionParams.currentSavings - adoptionFee};
        }
    }
}
export {CatAdopter, ADOPTION_FEE, SPAY_FEE}
