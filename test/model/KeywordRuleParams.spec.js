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
    describe('KeywordRuleParams', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.KeywordRuleParams();
      });

      it('should create an instance of KeywordRuleParams', function() {
        // TODO: update the code to test KeywordRuleParams
        expect(instance).to.be.a(FinApiResTfulServices.KeywordRuleParams);
      });

      it('should have the property categoryId (base name: "categoryId")', function() {
        // TODO: update the code to test the property categoryId
        expect(instance).to.have.property('categoryId');
        // expect(instance.categoryId).to.be(expectedValueLiteral);
      });

      it('should have the property direction (base name: "direction")', function() {
        // TODO: update the code to test the property direction
        expect(instance).to.have.property('direction');
        // expect(instance.direction).to.be(expectedValueLiteral);
      });

      it('should have the property keywords (base name: "keywords")', function() {
        // TODO: update the code to test the property keywords
        expect(instance).to.have.property('keywords');
        // expect(instance.keywords).to.be(expectedValueLiteral);
      });

    });
  });

}));
