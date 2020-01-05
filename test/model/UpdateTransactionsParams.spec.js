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
    describe('UpdateTransactionsParams', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.UpdateTransactionsParams();
      });

      it('should create an instance of UpdateTransactionsParams', function() {
        // TODO: update the code to test UpdateTransactionsParams
        expect(instance).to.be.a(FinApiResTfulServices.UpdateTransactionsParams);
      });

      it('should have the property isNew (base name: "isNew")', function() {
        // TODO: update the code to test the property isNew
        expect(instance).to.have.property('isNew');
        // expect(instance.isNew).to.be(expectedValueLiteral);
      });

      it('should have the property isPotentialDuplicate (base name: "isPotentialDuplicate")', function() {
        // TODO: update the code to test the property isPotentialDuplicate
        expect(instance).to.have.property('isPotentialDuplicate');
        // expect(instance.isPotentialDuplicate).to.be(expectedValueLiteral);
      });

      it('should have the property categoryId (base name: "categoryId")', function() {
        // TODO: update the code to test the property categoryId
        expect(instance).to.have.property('categoryId');
        // expect(instance.categoryId).to.be(expectedValueLiteral);
      });

      it('should have the property trainCategorization (base name: "trainCategorization")', function() {
        // TODO: update the code to test the property trainCategorization
        expect(instance).to.have.property('trainCategorization');
        // expect(instance.trainCategorization).to.be(expectedValueLiteral);
      });

      it('should have the property labelIds (base name: "labelIds")', function() {
        // TODO: update the code to test the property labelIds
        expect(instance).to.have.property('labelIds');
        // expect(instance.labelIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
