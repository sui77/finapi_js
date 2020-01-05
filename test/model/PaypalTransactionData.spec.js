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
    describe('PaypalTransactionData', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.PaypalTransactionData();
      });

      it('should create an instance of PaypalTransactionData', function() {
        // TODO: update the code to test PaypalTransactionData
        expect(instance).to.be.a(FinApiResTfulServices.PaypalTransactionData);
      });

      it('should have the property invoiceNumber (base name: "invoiceNumber")', function() {
        // TODO: update the code to test the property invoiceNumber
        expect(instance).to.have.property('invoiceNumber');
        // expect(instance.invoiceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property fee (base name: "fee")', function() {
        // TODO: update the code to test the property fee
        expect(instance).to.have.property('fee');
        // expect(instance.fee).to.be(expectedValueLiteral);
      });

      it('should have the property net (base name: "net")', function() {
        // TODO: update the code to test the property net
        expect(instance).to.have.property('net');
        // expect(instance.net).to.be(expectedValueLiteral);
      });

      it('should have the property auctionSite (base name: "auctionSite")', function() {
        // TODO: update the code to test the property auctionSite
        expect(instance).to.have.property('auctionSite');
        // expect(instance.auctionSite).to.be(expectedValueLiteral);
      });

    });
  });

}));