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
    describe('DailyBalance', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.DailyBalance();
      });

      it('should create an instance of DailyBalance', function() {
        // TODO: update the code to test DailyBalance
        expect(instance).to.be.a(FinApiResTfulServices.DailyBalance);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property balance (base name: "balance")', function() {
        // TODO: update the code to test the property balance
        expect(instance).to.have.property('balance');
        // expect(instance.balance).to.be(expectedValueLiteral);
      });

      it('should have the property income (base name: "income")', function() {
        // TODO: update the code to test the property income
        expect(instance).to.have.property('income');
        // expect(instance.income).to.be(expectedValueLiteral);
      });

      it('should have the property spending (base name: "spending")', function() {
        // TODO: update the code to test the property spending
        expect(instance).to.have.property('spending');
        // expect(instance.spending).to.be(expectedValueLiteral);
      });

      it('should have the property transactions (base name: "transactions")', function() {
        // TODO: update the code to test the property transactions
        expect(instance).to.have.property('transactions');
        // expect(instance.transactions).to.be(expectedValueLiteral);
      });

    });
  });

}));
