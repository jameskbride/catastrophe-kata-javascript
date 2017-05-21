'use strict';

import {CatAdopter, ADOPTION_FEE, SPAY_FEE} from '../src/CatAdopter'

var chai = require('chai');
var assert = chai.assert;

describe('CatAdopter', () => {

    describe('Adoption Fees', () => {

        var catAdopter;
        let SPAY_FEE_OVERRIDE = 0;
        let ADOPTION_FEE_OVERRIDE = 0;

        beforeEach(() => {
            catAdopter = new CatAdopter();
        });

        it('should deduct a $100 one-time fee from the savings', () => {
            let result = catAdopter.adopt({currentSavings: 100}, ADOPTION_FEE, SPAY_FEE_OVERRIDE);
            assert.equal(0, result.currentSavings);
        });

        it('should not deduct a $100 one-time fee for more than 20 cats', () => {
            let result = catAdopter.adopt({currentSavings: 100, currentCatCount: 21}, ADOPTION_FEE, SPAY_FEE_OVERRIDE);

            assert.equal(100, result.currentSavings);
        });

        it('should adopt female cats first with an applied spaying fee of $150', () => {
            let result = catAdopter.adopt({currentSavings: 250, currentCatCount:0}, ADOPTION_FEE_OVERRIDE, SPAY_FEE);

            assert.equal(100, result.currentSavings);
        });
    });
});
