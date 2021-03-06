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
    describe('PageablePaymentResources', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.PageablePaymentResources();
      });

      it('should create an instance of PageablePaymentResources', function() {
        // TODO: update the code to test PageablePaymentResources
        expect(instance).to.be.a(FinApiResTfulServices.PageablePaymentResources);
      });

      it('should have the property payments (base name: "payments")', function() {
        // TODO: update the code to test the property payments
        expect(instance).to.have.property('payments');
        // expect(instance.payments).to.be(expectedValueLiteral);
      });

      it('should have the property paging (base name: "paging")', function() {
        // TODO: update the code to test the property paging
        expect(instance).to.have.property('paging');
        // expect(instance.paging).to.be(expectedValueLiteral);
      });

    });
  });

}));
