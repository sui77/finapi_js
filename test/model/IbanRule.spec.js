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
    describe('IbanRule', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.IbanRule();
      });

      it('should create an instance of IbanRule', function() {
        // TODO: update the code to test IbanRule
        expect(instance).to.be.a(FinApiResTfulServices.IbanRule);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property direction (base name: "direction")', function() {
        // TODO: update the code to test the property direction
        expect(instance).to.have.property('direction');
        // expect(instance.direction).to.be(expectedValueLiteral);
      });

      it('should have the property creationDate (base name: "creationDate")', function() {
        // TODO: update the code to test the property creationDate
        expect(instance).to.have.property('creationDate');
        // expect(instance.creationDate).to.be(expectedValueLiteral);
      });

      it('should have the property iban (base name: "iban")', function() {
        // TODO: update the code to test the property iban
        expect(instance).to.have.property('iban');
        // expect(instance.iban).to.be(expectedValueLiteral);
      });

    });
  });

}));
