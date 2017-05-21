'use strict';

import  {CatAdopter} from '../src/CatAdopter'

var chai = require('chai');
var assert = chai.assert;

describe('CatAdopter', function() {
  describe('Adoption Fees', function() {
    it('should deduct a $100 one-time fee from the savings', function() {
      let catAdopter = new CatAdopter();
      let result = catAdopter.adopt({currentSavings: 100});
      assert.equal(0, result.currentSavings);
    });
  });
});
