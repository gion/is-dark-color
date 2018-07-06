var assert = require('assert');
var expect = require('chai').expect;
var isDarkColor = require('../src/isDarkColor').isDarkColor

describe('isDarkColor', function() {
  describe('testing dark colors', function() {
    it('should return true for black', function() {
      var color = '#000000';
      var result = isDarkColor(color);
      var expectedResult = true

      expect(result).to.equal(expectedResult)
    });

    it('should return false for green', function() {
      var color = '#00ff00';
      var result = isDarkColor(color);
      var expectedResult = false

      expect(result).to.equal(expectedResult)
    });

    it('should return false for white', function() {
      var color = '#ffffff';
      var result = isDarkColor(color);
      var expectedResult = false

      expect(result).to.equal(expectedResult)
    });

    it('should return true for #872929 - edge case', function() {
      var color = '#872929';
      var result = isDarkColor(color);
      var expectedResult = true

      expect(result).to.equal(expectedResult)
    });

  });

  describe('testing overrides', function() {
    it('should return true for overriden white', function() {
      var color = '#ffffff'
      var result = isDarkColor(color, {override: {[color]: true}});
      var expectedResult = true

      expect(result).to.equal(expectedResult)
    })

    it('should return false for overriden black', function() {
      var color = '#000000'
      var result = isDarkColor(color, {override: {[color]: false}});
      var expectedResult = false

      expect(result).to.equal(expectedResult)
    })
  })
});