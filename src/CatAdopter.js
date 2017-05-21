'use strict';

const ZERO_ADOPTION_FEE_COUNT = 21;
const ADOPTION_FEE = 100;

class CatAdopter {

    adopt(adoptionParams) {
        if (adoptionParams.currentCatCount >= ZERO_ADOPTION_FEE_COUNT) {
            return {currentSavings: adoptionParams.currentSavings}
        } else {
            return {currentSavings: adoptionParams.currentSavings - ADOPTION_FEE};
        }
    }
}
export {CatAdopter}
