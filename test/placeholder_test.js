import  {helloWorld} from '../src/placeholder'

var chai = require('chai');
var assert = chai.assert;

describe('Hello world!', function() {
  describe('a failing test', function() {
    it('should return Hello world!', function() {
      assert.equal('Hello world!', helloWorld());
    });
  });
});
