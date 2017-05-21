'use strict';

import  {CatAdopter} from '../src/CatAdopter'

var chai = require('chai');
var assert = chai.assert;

describe('CatAdopter', () => {

    describe('Adoption Fees', () => {

        var catAdopter;

        beforeEach(() => {
            catAdopter = new CatAdopter();
        });

        it('should deduct a $100 one-time fee from the savings', () => {
            let result = catAdopter.adopt({currentSavings: 100});
            assert.equal(0, result.currentSavings);
        });

        it('should not deduct a $100 one-time fee for more than 20 cats', () => {
            let result = catAdopter.adopt({currentSavings: 100, currentCatCount: 21});

            assert.equal(100, result.currentSavings);
        });
    });
});
