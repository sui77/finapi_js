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
    describe('DirectDebitOrderingResponse', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.DirectDebitOrderingResponse();
      });

      it('should create an instance of DirectDebitOrderingResponse', function() {
        // TODO: update the code to test DirectDebitOrderingResponse
        expect(instance).to.be.a(FinApiResTfulServices.DirectDebitOrderingResponse);
      });

      it('should have the property successMessage (base name: "successMessage")', function() {
        // TODO: update the code to test the property successMessage
        expect(instance).to.have.property('successMessage');
        // expect(instance.successMessage).to.be(expectedValueLiteral);
      });

      it('should have the property warnMessage (base name: "warnMessage")', function() {
        // TODO: update the code to test the property warnMessage
        expect(instance).to.have.property('warnMessage');
        // expect(instance.warnMessage).to.be(expectedValueLiteral);
      });

      it('should have the property paymentId (base name: "paymentId")', function() {
        // TODO: update the code to test the property paymentId
        expect(instance).to.have.property('paymentId');
        // expect(instance.paymentId).to.be(expectedValueLiteral);
      });

      it('should have the property challengeMessage (base name: "challengeMessage")', function() {
        // TODO: update the code to test the property challengeMessage
        expect(instance).to.have.property('challengeMessage');
        // expect(instance.challengeMessage).to.be(expectedValueLiteral);
      });

      it('should have the property answerFieldLabel (base name: "answerFieldLabel")', function() {
        // TODO: update the code to test the property answerFieldLabel
        expect(instance).to.have.property('answerFieldLabel');
        // expect(instance.answerFieldLabel).to.be(expectedValueLiteral);
      });

      it('should have the property tanListNumber (base name: "tanListNumber")', function() {
        // TODO: update the code to test the property tanListNumber
        expect(instance).to.have.property('tanListNumber');
        // expect(instance.tanListNumber).to.be(expectedValueLiteral);
      });

      it('should have the property opticalData (base name: "opticalData")', function() {
        // TODO: update the code to test the property opticalData
        expect(instance).to.have.property('opticalData');
        // expect(instance.opticalData).to.be(expectedValueLiteral);
      });

      it('should have the property photoTanMimeType (base name: "photoTanMimeType")', function() {
        // TODO: update the code to test the property photoTanMimeType
        expect(instance).to.have.property('photoTanMimeType');
        // expect(instance.photoTanMimeType).to.be(expectedValueLiteral);
      });

      it('should have the property photoTanData (base name: "photoTanData")', function() {
        // TODO: update the code to test the property photoTanData
        expect(instance).to.have.property('photoTanData');
        // expect(instance.photoTanData).to.be(expectedValueLiteral);
      });

    });
  });

}));
