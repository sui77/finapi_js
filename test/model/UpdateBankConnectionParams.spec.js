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
    describe('UpdateBankConnectionParams', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.UpdateBankConnectionParams();
      });

      it('should create an instance of UpdateBankConnectionParams', function() {
        // TODO: update the code to test UpdateBankConnectionParams
        expect(instance).to.be.a(FinApiResTfulServices.UpdateBankConnectionParams);
      });

      it('should have the property bankConnectionId (base name: "bankConnectionId")', function() {
        // TODO: update the code to test the property bankConnectionId
        expect(instance).to.have.property('bankConnectionId');
        // expect(instance.bankConnectionId).to.be(expectedValueLiteral);
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

      it('should have the property importNewAccounts (base name: "importNewAccounts")', function() {
        // TODO: update the code to test the property importNewAccounts
        expect(instance).to.have.property('importNewAccounts');
        // expect(instance.importNewAccounts).to.be(expectedValueLiteral);
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
