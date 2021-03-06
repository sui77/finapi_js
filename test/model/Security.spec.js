/*
 * finAPI RESTful Services
 * finAPI RESTful Services
 *
 * OpenAPI spec version: v1.92.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FinApiResTfulServices);
  }
}(this, function(expect, FinApiResTfulServices) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Security', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.Security();
      });

      it('should create an instance of Security', function() {
        // TODO: update the code to test Security
        expect(instance).to.be.a(FinApiResTfulServices.Security);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property isin (base name: "isin")', function() {
        // TODO: update the code to test the property isin
        expect(instance).to.have.property('isin');
        // expect(instance.isin).to.be(expectedValueLiteral);
      });

      it('should have the property wkn (base name: "wkn")', function() {
        // TODO: update the code to test the property wkn
        expect(instance).to.have.property('wkn');
        // expect(instance.wkn).to.be(expectedValueLiteral);
      });

      it('should have the property quote (base name: "quote")', function() {
        // TODO: update the code to test the property quote
        expect(instance).to.have.property('quote');
        // expect(instance.quote).to.be(expectedValueLiteral);
      });

      it('should have the property quoteCurrency (base name: "quoteCurrency")', function() {
        // TODO: update the code to test the property quoteCurrency
        expect(instance).to.have.property('quoteCurrency');
        // expect(instance.quoteCurrency).to.be(expectedValueLiteral);
      });

      it('should have the property quoteType (base name: "quoteType")', function() {
        // TODO: update the code to test the property quoteType
        expect(instance).to.have.property('quoteType');
        // expect(instance.quoteType).to.be(expectedValueLiteral);
      });

      it('should have the property quoteDate (base name: "quoteDate")', function() {
        // TODO: update the code to test the property quoteDate
        expect(instance).to.have.property('quoteDate');
        // expect(instance.quoteDate).to.be(expectedValueLiteral);
      });

      it('should have the property quantityNominal (base name: "quantityNominal")', function() {
        // TODO: update the code to test the property quantityNominal
        expect(instance).to.have.property('quantityNominal');
        // expect(instance.quantityNominal).to.be(expectedValueLiteral);
      });

      it('should have the property quantityNominalType (base name: "quantityNominalType")', function() {
        // TODO: update the code to test the property quantityNominalType
        expect(instance).to.have.property('quantityNominalType');
        // expect(instance.quantityNominalType).to.be(expectedValueLiteral);
      });

      it('should have the property marketValue (base name: "marketValue")', function() {
        // TODO: update the code to test the property marketValue
        expect(instance).to.have.property('marketValue');
        // expect(instance.marketValue).to.be(expectedValueLiteral);
      });

      it('should have the property marketValueCurrency (base name: "marketValueCurrency")', function() {
        // TODO: update the code to test the property marketValueCurrency
        expect(instance).to.have.property('marketValueCurrency');
        // expect(instance.marketValueCurrency).to.be(expectedValueLiteral);
      });

      it('should have the property entryQuote (base name: "entryQuote")', function() {
        // TODO: update the code to test the property entryQuote
        expect(instance).to.have.property('entryQuote');
        // expect(instance.entryQuote).to.be(expectedValueLiteral);
      });

      it('should have the property entryQuoteCurrency (base name: "entryQuoteCurrency")', function() {
        // TODO: update the code to test the property entryQuoteCurrency
        expect(instance).to.have.property('entryQuoteCurrency');
        // expect(instance.entryQuoteCurrency).to.be(expectedValueLiteral);
      });

      it('should have the property profitOrLoss (base name: "profitOrLoss")', function() {
        // TODO: update the code to test the property profitOrLoss
        expect(instance).to.have.property('profitOrLoss');
        // expect(instance.profitOrLoss).to.be(expectedValueLiteral);
      });

    });
  });

}));
