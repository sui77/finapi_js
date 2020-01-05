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
    describe('NewTransaction', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.NewTransaction();
      });

      it('should create an instance of NewTransaction', function() {
        // TODO: update the code to test NewTransaction
        expect(instance).to.be.a(FinApiResTfulServices.NewTransaction);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property purpose (base name: "purpose")', function() {
        // TODO: update the code to test the property purpose
        expect(instance).to.have.property('purpose');
        // expect(instance.purpose).to.be(expectedValueLiteral);
      });

      it('should have the property counterpart (base name: "counterpart")', function() {
        // TODO: update the code to test the property counterpart
        expect(instance).to.have.property('counterpart');
        // expect(instance.counterpart).to.be(expectedValueLiteral);
      });

      it('should have the property counterpartIban (base name: "counterpartIban")', function() {
        // TODO: update the code to test the property counterpartIban
        expect(instance).to.have.property('counterpartIban');
        // expect(instance.counterpartIban).to.be(expectedValueLiteral);
      });

      it('should have the property counterpartBlz (base name: "counterpartBlz")', function() {
        // TODO: update the code to test the property counterpartBlz
        expect(instance).to.have.property('counterpartBlz');
        // expect(instance.counterpartBlz).to.be(expectedValueLiteral);
      });

      it('should have the property counterpartBic (base name: "counterpartBic")', function() {
        // TODO: update the code to test the property counterpartBic
        expect(instance).to.have.property('counterpartBic');
        // expect(instance.counterpartBic).to.be(expectedValueLiteral);
      });

      it('should have the property counterpartAccountNumber (base name: "counterpartAccountNumber")', function() {
        // TODO: update the code to test the property counterpartAccountNumber
        expect(instance).to.have.property('counterpartAccountNumber');
        // expect(instance.counterpartAccountNumber).to.be(expectedValueLiteral);
      });

      it('should have the property bookingDate (base name: "bookingDate")', function() {
        // TODO: update the code to test the property bookingDate
        expect(instance).to.have.property('bookingDate');
        // expect(instance.bookingDate).to.be(expectedValueLiteral);
      });

      it('should have the property valueDate (base name: "valueDate")', function() {
        // TODO: update the code to test the property valueDate
        expect(instance).to.have.property('valueDate');
        // expect(instance.valueDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
