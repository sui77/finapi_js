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
    describe('BankConnection', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.BankConnection();
      });

      it('should create an instance of BankConnection', function() {
        // TODO: update the code to test BankConnection
        expect(instance).to.be.a(FinApiResTfulServices.BankConnection);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property bankId (base name: "bankId")', function() {
        // TODO: update the code to test the property bankId
        expect(instance).to.have.property('bankId');
        // expect(instance.bankId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property bankingUserId (base name: "bankingUserId")', function() {
        // TODO: update the code to test the property bankingUserId
        expect(instance).to.have.property('bankingUserId');
        // expect(instance.bankingUserId).to.be(expectedValueLiteral);
      });

      it('should have the property bankingCustomerId (base name: "bankingCustomerId")', function() {
        // TODO: update the code to test the property bankingCustomerId
        expect(instance).to.have.property('bankingCustomerId');
        // expect(instance.bankingCustomerId).to.be(expectedValueLiteral);
      });

      it('should have the property bankingPin (base name: "bankingPin")', function() {
        // TODO: update the code to test the property bankingPin
        expect(instance).to.have.property('bankingPin');
        // expect(instance.bankingPin).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property updateStatus (base name: "updateStatus")', function() {
        // TODO: update the code to test the property updateStatus
        expect(instance).to.have.property('updateStatus');
        // expect(instance.updateStatus).to.be(expectedValueLiteral);
      });

      it('should have the property categorizationStatus (base name: "categorizationStatus")', function() {
        // TODO: update the code to test the property categorizationStatus
        expect(instance).to.have.property('categorizationStatus');
        // expect(instance.categorizationStatus).to.be(expectedValueLiteral);
      });

      it('should have the property lastManualUpdate (base name: "lastManualUpdate")', function() {
        // TODO: update the code to test the property lastManualUpdate
        expect(instance).to.have.property('lastManualUpdate');
        // expect(instance.lastManualUpdate).to.be(expectedValueLiteral);
      });

      it('should have the property lastAutoUpdate (base name: "lastAutoUpdate")', function() {
        // TODO: update the code to test the property lastAutoUpdate
        expect(instance).to.have.property('lastAutoUpdate');
        // expect(instance.lastAutoUpdate).to.be(expectedValueLiteral);
      });

      it('should have the property ibanOnlyMoneyTransferSupported (base name: "ibanOnlyMoneyTransferSupported")', function() {
        // TODO: update the code to test the property ibanOnlyMoneyTransferSupported
        expect(instance).to.have.property('ibanOnlyMoneyTransferSupported');
        // expect(instance.ibanOnlyMoneyTransferSupported).to.be(expectedValueLiteral);
      });

      it('should have the property ibanOnlyDirectDebitSupported (base name: "ibanOnlyDirectDebitSupported")', function() {
        // TODO: update the code to test the property ibanOnlyDirectDebitSupported
        expect(instance).to.have.property('ibanOnlyDirectDebitSupported');
        // expect(instance.ibanOnlyDirectDebitSupported).to.be(expectedValueLiteral);
      });

      it('should have the property collectiveMoneyTransferSupported (base name: "collectiveMoneyTransferSupported")', function() {
        // TODO: update the code to test the property collectiveMoneyTransferSupported
        expect(instance).to.have.property('collectiveMoneyTransferSupported');
        // expect(instance.collectiveMoneyTransferSupported).to.be(expectedValueLiteral);
      });

      it('should have the property defaultTwoStepProcedureId (base name: "defaultTwoStepProcedureId")', function() {
        // TODO: update the code to test the property defaultTwoStepProcedureId
        expect(instance).to.have.property('defaultTwoStepProcedureId');
        // expect(instance.defaultTwoStepProcedureId).to.be(expectedValueLiteral);
      });

      it('should have the property twoStepProcedures (base name: "twoStepProcedures")', function() {
        // TODO: update the code to test the property twoStepProcedures
        expect(instance).to.have.property('twoStepProcedures');
        // expect(instance.twoStepProcedures).to.be(expectedValueLiteral);
      });

      it('should have the property interfaces (base name: "interfaces")', function() {
        // TODO: update the code to test the property interfaces
        expect(instance).to.have.property('interfaces');
        // expect(instance.interfaces).to.be(expectedValueLiteral);
      });

      it('should have the property accountIds (base name: "accountIds")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property owners (base name: "owners")', function() {
        // TODO: update the code to test the property owners
        expect(instance).to.have.property('owners');
        // expect(instance.owners).to.be(expectedValueLiteral);
      });

      it('should have the property bank (base name: "bank")', function() {
        // TODO: update the code to test the property bank
        expect(instance).to.have.property('bank');
        // expect(instance.bank).to.be(expectedValueLiteral);
      });

      it('should have the property furtherLoginNotRecommended (base name: "furtherLoginNotRecommended")', function() {
        // TODO: update the code to test the property furtherLoginNotRecommended
        expect(instance).to.have.property('furtherLoginNotRecommended');
        // expect(instance.furtherLoginNotRecommended).to.be(expectedValueLiteral);
      });

    });
  });

}));
