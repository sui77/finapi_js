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
    describe('BankInterface', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.BankInterface();
      });

      it('should create an instance of BankInterface', function() {
        // TODO: update the code to test BankInterface
        expect(instance).to.be.a(FinApiResTfulServices.BankInterface);
      });

      it('should have the property _interface (base name: "interface")', function() {
        // TODO: update the code to test the property _interface
        expect(instance).to.have.property('_interface');
        // expect(instance._interface).to.be(expectedValueLiteral);
      });

      it('should have the property tppAuthenticationGroup (base name: "tppAuthenticationGroup")', function() {
        // TODO: update the code to test the property tppAuthenticationGroup
        expect(instance).to.have.property('tppAuthenticationGroup');
        // expect(instance.tppAuthenticationGroup).to.be(expectedValueLiteral);
      });

      it('should have the property loginCredentials (base name: "loginCredentials")', function() {
        // TODO: update the code to test the property loginCredentials
        expect(instance).to.have.property('loginCredentials');
        // expect(instance.loginCredentials).to.be(expectedValueLiteral);
      });

      it('should have the property properties (base name: "properties")', function() {
        // TODO: update the code to test the property properties
        expect(instance).to.have.property('properties');
        // expect(instance.properties).to.be(expectedValueLiteral);
      });

      it('should have the property loginHint (base name: "loginHint")', function() {
        // TODO: update the code to test the property loginHint
        expect(instance).to.have.property('loginHint');
        // expect(instance.loginHint).to.be(expectedValueLiteral);
      });

      it('should have the property health (base name: "health")', function() {
        // TODO: update the code to test the property health
        expect(instance).to.have.property('health');
        // expect(instance.health).to.be(expectedValueLiteral);
      });

      it('should have the property lastCommunicationAttempt (base name: "lastCommunicationAttempt")', function() {
        // TODO: update the code to test the property lastCommunicationAttempt
        expect(instance).to.have.property('lastCommunicationAttempt');
        // expect(instance.lastCommunicationAttempt).to.be(expectedValueLiteral);
      });

      it('should have the property lastSuccessfulCommunication (base name: "lastSuccessfulCommunication")', function() {
        // TODO: update the code to test the property lastSuccessfulCommunication
        expect(instance).to.have.property('lastSuccessfulCommunication');
        // expect(instance.lastSuccessfulCommunication).to.be(expectedValueLiteral);
      });

    });
  });

}));
