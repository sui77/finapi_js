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
    describe('BankConnectionOwner', function() {
      beforeEach(function() {
        instance = new FinApiResTfulServices.BankConnectionOwner();
      });

      it('should create an instance of BankConnectionOwner', function() {
        // TODO: update the code to test BankConnectionOwner
        expect(instance).to.be.a(FinApiResTfulServices.BankConnectionOwner);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property salutation (base name: "salutation")', function() {
        // TODO: update the code to test the property salutation
        expect(instance).to.have.property('salutation');
        // expect(instance.salutation).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property dateOfBirth (base name: "dateOfBirth")', function() {
        // TODO: update the code to test the property dateOfBirth
        expect(instance).to.have.property('dateOfBirth');
        // expect(instance.dateOfBirth).to.be(expectedValueLiteral);
      });

      it('should have the property postCode (base name: "postCode")', function() {
        // TODO: update the code to test the property postCode
        expect(instance).to.have.property('postCode');
        // expect(instance.postCode).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property street (base name: "street")', function() {
        // TODO: update the code to test the property street
        expect(instance).to.have.property('street');
        // expect(instance.street).to.be(expectedValueLiteral);
      });

      it('should have the property houseNumber (base name: "houseNumber")', function() {
        // TODO: update the code to test the property houseNumber
        expect(instance).to.have.property('houseNumber');
        // expect(instance.houseNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));