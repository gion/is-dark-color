var assert = require('assert');
var expect = require('chai').expect;
var hexToRgb = require('../src/hexToRgb').hexToRgb

describe('hexToRgb', function() {
  describe('converting valid colors', function() {
    it('should convert black', function() {
      var color = '#000000';
      var result = hexToRgb(color);
      var expectedResult = {
        r: 0,
        g: 0,
        b: 0
      };

      expect(result).to.deep.equal(expectedResult)
    });

    it('should convert white', function() {
      var color = '#ffffff';
      var result = hexToRgb(color);
      var expectedResult = {
        r: 255,
        g: 255,
        b: 255
      };

      expect(result).to.deep.equal(expectedResult)
    });

    it('should convert red', function() {
      var color = '#ff0000';
      var result = hexToRgb(color);
      var expectedResult = {
        r: 255,
        g: 0,
        b: 0
      };

      expect(result).to.deep.equal(expectedResult)
    });

    it('should ignore case', function() {
      var color = '#FffFFf';
      var result = hexToRgb(color);
      var expectedResult = {
        r: 255,
        g: 255,
        b: 255
      };

      expect(result).to.deep.equal(expectedResult)
    });

    it('should handle color without #', function() {
      var color = 'ffffff';
      var result = hexToRgb(color);
      var expectedResult = {
        r: 255,
        g: 255,
        b: 255
      };

      expect(result).to.deep.equal(expectedResult)
    });
  });

  describe('converting valid shorthand colors', function() {
    it('should convert black', function() {
      var color = '#000';
      var result = hexToRgb(color);
      var expectedResult = {
        r: 0,
        g: 0,
        b: 0
      };

      expect(result).to.deep.equal(expectedResult)
    });

    it('should convert white', function() {
      var color = '#fff';
      var result = hexToRgb(color);
      var expectedResult = {
        r: 255,
        g: 255,
        b: 255
      };

      expect(result).to.deep.equal(expectedResult)
    });

    it('should convert red', function() {
      var color = '#f00';
      var result = hexToRgb(color);
      var expectedResult = {
        r: 255,
        g: 0,
        b: 0
      };

      expect(result).to.deep.equal(expectedResult)
    });

    it('should ignore case', function() {
      var color = '#FfF';
      var result = hexToRgb(color);
      var expectedResult = {
        r: 255,
        g: 255,
        b: 255
      };

      expect(result).to.deep.equal(expectedResult)
    });

    it('should handle color without #', function() {
      var color = 'fff';
      var result = hexToRgb(color);
      var expectedResult = {
        r: 255,
        g: 255,
        b: 255
      };

      expect(result).to.deep.equal(expectedResult)
    });
  })

  describe('converting invalid colors', function() {
    it('should return null for invalid hex characters', function() {
      var color = '#gahsrg';
      var result = hexToRgb(color);
      var expectedResult = null

      expect(result).to.equal(expectedResult)
    });

    it('should return null for invalid length', function() {
      for (const length of [0, 1, 2, 4, 5, 7]) {
        var color = 'f'.repeat(length);
        var result = hexToRgb(color);
        var expectedResult = null

        expect(result).to.equal(expectedResult)
      }
    });
  });

});