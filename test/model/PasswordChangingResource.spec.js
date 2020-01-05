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
    describe('PasswordChangingResource', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.PasswordChangingResource();
      });

      it('should create an instance of PasswordChangingResource', function() {
        // TODO: update the code to test PasswordChangingResource
        expect(instance).to.be.a(FinApiResTfulServices.PasswordChangingResource);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property userEmail (base name: "userEmail")', function() {
        // TODO: update the code to test the property userEmail
        expect(instance).to.have.property('userEmail');
        // expect(instance.userEmail).to.be(expectedValueLiteral);
      });

      it('should have the property passwordChangeToken (base name: "passwordChangeToken")', function() {
        // TODO: update the code to test the property passwordChangeToken
        expect(instance).to.have.property('passwordChangeToken');
        // expect(instance.passwordChangeToken).to.be(expectedValueLiteral);
      });

    });
  });

}));
