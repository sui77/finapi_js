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
    describe('ImportBankConnectionParams', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.ImportBankConnectionParams();
      });

      it('should create an instance of ImportBankConnectionParams', function() {
        // TODO: update the code to test ImportBankConnectionParams
        expect(instance).to.be.a(FinApiResTfulServices.ImportBankConnectionParams);
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

      it('should have the property storePin (base name: "storePin")', function() {
        // TODO: update the code to test the property storePin
        expect(instance).to.have.property('storePin');
        // expect(instance.storePin).to.be(expectedValueLiteral);
      });

      it('should have the property _interface (base name: "interface")', function() {
        // TODO: update the code to test the property _interface
        expect(instance).to.have.property('_interface');
        // expect(instance._interface).to.be(expectedValueLiteral);
      });

      it('should have the property loginCredentials (base name: "loginCredentials")', function() {
        // TODO: update the code to test the property loginCredentials
        expect(instance).to.have.property('loginCredentials');
        // expect(instance.loginCredentials).to.be(expectedValueLiteral);
      });

      it('should have the property storeSecrets (base name: "storeSecrets")', function() {
        // TODO: update the code to test the property storeSecrets
        expect(instance).to.have.property('storeSecrets');
        // expect(instance.storeSecrets).to.be(expectedValueLiteral);
      });

      it('should have the property skipPositionsDownload (base name: "skipPositionsDownload")', function() {
        // TODO: update the code to test the property skipPositionsDownload
        expect(instance).to.have.property('skipPositionsDownload');
        // expect(instance.skipPositionsDownload).to.be(expectedValueLiteral);
      });

      it('should have the property loadOwnerData (base name: "loadOwnerData")', function() {
        // TODO: update the code to test the property loadOwnerData
        expect(instance).to.have.property('loadOwnerData');
        // expect(instance.loadOwnerData).to.be(expectedValueLiteral);
      });

      it('should have the property maxDaysForDownload (base name: "maxDaysForDownload")', function() {
        // TODO: update the code to test the property maxDaysForDownload
        expect(instance).to.have.property('maxDaysForDownload');
        // expect(instance.maxDaysForDownload).to.be(expectedValueLiteral);
      });

      it('should have the property accountTypes (base name: "accountTypes")', function() {
        // TODO: update the code to test the property accountTypes
        expect(instance).to.have.property('accountTypes');
        // expect(instance.accountTypes).to.be(expectedValueLiteral);
      });

      it('should have the property accountTypeIds (base name: "accountTypeIds")', function() {
        // TODO: update the code to test the property accountTypeIds
        expect(instance).to.have.property('accountTypeIds');
        // expect(instance.accountTypeIds).to.be(expectedValueLiteral);
      });

      it('should have the property accountReferences (base name: "accountReferences")', function() {
        // TODO: update the code to test the property accountReferences
        expect(instance).to.have.property('accountReferences');
        // expect(instance.accountReferences).to.be(expectedValueLiteral);
      });

      it('should have the property challengeResponse (base name: "challengeResponse")', function() {
        // TODO: update the code to test the property challengeResponse
        expect(instance).to.have.property('challengeResponse');
        // expect(instance.challengeResponse).to.be(expectedValueLiteral);
      });

      it('should have the property multiStepAuthentication (base name: "multiStepAuthentication")', function() {
        // TODO: update the code to test the property multiStepAuthentication
        expect(instance).to.have.property('multiStepAuthentication');
        // expect(instance.multiStepAuthentication).to.be(expectedValueLiteral);
      });

      it('should have the property redirectUrl (base name: "redirectUrl")', function() {
        // TODO: update the code to test the property redirectUrl
        expect(instance).to.have.property('redirectUrl');
        // expect(instance.redirectUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
