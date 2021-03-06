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
    describe('RemoveInterfaceParams', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.RemoveInterfaceParams();
      });

      it('should create an instance of RemoveInterfaceParams', function() {
        // TODO: update the code to test RemoveInterfaceParams
        expect(instance).to.be.a(FinApiResTfulServices.RemoveInterfaceParams);
      });

      it('should have the property bankConnectionId (base name: "bankConnectionId")', function() {
        // TODO: update the code to test the property bankConnectionId
        expect(instance).to.have.property('bankConnectionId');
        // expect(instance.bankConnectionId).to.be(expectedValueLiteral);
      });

      it('should have the property _interface (base name: "interface")', function() {
        // TODO: update the code to test the property _interface
        expect(instance).to.have.property('_interface');
        // expect(instance._interface).to.be(expectedValueLiteral);
      });

    });
  });

}));
