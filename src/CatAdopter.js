'use strict';
class CatAdopter {
    adopt(adoptionParams) {
        if (adoptionParams.currentCatCount >= 21) {
            return {currentSavings: adoptionParams.currentSavings}
        } else {
            return {currentSavings: adoptionParams.currentSavings - 100};
        }
    }
}
export {CatAdopter}
