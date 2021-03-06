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
    describe('RequestSepaDirectDebitParams', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.RequestSepaDirectDebitParams();
      });

      it('should create an instance of RequestSepaDirectDebitParams', function() {
        // TODO: update the code to test RequestSepaDirectDebitParams
        expect(instance).to.be.a(FinApiResTfulServices.RequestSepaDirectDebitParams);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property bankingPin (base name: "bankingPin")', function() {
        // TODO: update the code to test the property bankingPin
        expect(instance).to.have.property('bankingPin');
        // expect(instance.bankingPin).to.be(expectedValueLiteral);
      });

      it('should have the property storeSecrets (base name: "storeSecrets")', function() {
        // TODO: update the code to test the property storeSecrets
        expect(instance).to.have.property('storeSecrets');
        // expect(instance.storeSecrets).to.be(expectedValueLiteral);
      });

      it('should have the property twoStepProcedureId (base name: "twoStepProcedureId")', function() {
        // TODO: update the code to test the property twoStepProcedureId
        expect(instance).to.have.property('twoStepProcedureId');
        // expect(instance.twoStepProcedureId).to.be(expectedValueLiteral);
      });

      it('should have the property directDebitType (base name: "directDebitType")', function() {
        // TODO: update the code to test the property directDebitType
        expect(instance).to.have.property('directDebitType');
        // expect(instance.directDebitType).to.be(expectedValueLiteral);
      });

      it('should have the property sequenceType (base name: "sequenceType")', function() {
        // TODO: update the code to test the property sequenceType
        expect(instance).to.have.property('sequenceType');
        // expect(instance.sequenceType).to.be(expectedValueLiteral);
      });

      it('should have the property executionDate (base name: "executionDate")', function() {
        // TODO: update the code to test the property executionDate
        expect(instance).to.have.property('executionDate');
        // expect(instance.executionDate).to.be(expectedValueLiteral);
      });

      it('should have the property singleBooking (base name: "singleBooking")', function() {
        // TODO: update the code to test the property singleBooking
        expect(instance).to.have.property('singleBooking');
        // expect(instance.singleBooking).to.be(expectedValueLiteral);
      });

      it('should have the property directDebits (base name: "directDebits")', function() {
        // TODO: update the code to test the property directDebits
        expect(instance).to.have.property('directDebits');
        // expect(instance.directDebits).to.be(expectedValueLiteral);
      });

      it('should have the property hideTransactionDetailsInWebForm (base name: "hideTransactionDetailsInWebForm")', function() {
        // TODO: update the code to test the property hideTransactionDetailsInWebForm
        expect(instance).to.have.property('hideTransactionDetailsInWebForm');
        // expect(instance.hideTransactionDetailsInWebForm).to.be(expectedValueLiteral);
      });

      it('should have the property multiStepAuthentication (base name: "multiStepAuthentication")', function() {
        // TODO: update the code to test the property multiStepAuthentication
        expect(instance).to.have.property('multiStepAuthentication');
        // expect(instance.multiStepAuthentication).to.be(expectedValueLiteral);
      });

      it('should have the property storePin (base name: "storePin")', function() {
        // TODO: update the code to test the property storePin
        expect(instance).to.have.property('storePin');
        // expect(instance.storePin).to.be(expectedValueLiteral);
      });

    });
  });

}));
