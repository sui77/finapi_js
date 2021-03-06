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

  beforeEach(function() {
    instance = new FinApiResTfulServices.TPPCertificatesApi();
  });

  describe('(package)', function() {
    describe('TPPCertificatesApi', function() {
      describe('createNewCertificate', function() {
        it('should call createNewCertificate successfully', function(done) {
          // TODO: uncomment, update parameter values for createNewCertificate call and complete the assertions
          /*
          var body = new FinApiResTfulServices.TppCertificateParams();
          body.type = "QWAC";
          body.publicKey = "";
          body.privateKey = "";
          body.passphrase = "";
          body.label = "";
          body.validFromDate = "2019-04-23";
          body.validUntilDate = "2022-04-23";

          instance.createNewCertificate(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinApiResTfulServices.TppCertificate);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.certificateType).to.be.a('string');
            expect(data.certificateType).to.be("QWAC");
            expect(data.label).to.be.a('string');
            expect(data.label).to.be("Global QWAC till 2022");
            expect(data.validFrom).to.be.a('string');
            expect(data.validFrom).to.be("2019-07-20");
            expect(data.validUntil).to.be.a('string');
            expect(data.validUntil).to.be("2019-07-20");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteCertificate', function() {
        it('should call deleteCertificate successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteCertificate call
          /*
          var id = 789;

          instance.deleteCertificate(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAllCertificates', function() {
        it('should call getAllCertificates successfully', function(done) {
          // TODO: uncomment, update parameter values for getAllCertificates call and complete the assertions
          /*
          var opts = {};
          opts.page = 1;
          opts.perPage = 20;

          instance.getAllCertificates(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinApiResTfulServices.PageableTppCertificateList);
            {
              let dataCtr = data.tppCertificates;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(FinApiResTfulServices.TppCertificate);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(1);
                expect(data.certificateType).to.be.a('string');
                expect(data.certificateType).to.be("QWAC");
                expect(data.label).to.be.a('string');
                expect(data.label).to.be("Global QWAC till 2022");
                expect(data.validFrom).to.be.a('string');
                expect(data.validFrom).to.be("2019-07-20");
                expect(data.validUntil).to.be.a('string');
                expect(data.validUntil).to.be("2019-07-20");
              }
            }
            expect(data.paging).to.be.a(FinApiResTfulServices.Paging);
                  expect(data.paging.page).to.be.a('number');
              expect(data.paging.page).to.be(1);
              expect(data.paging.perPage).to.be.a('number');
              expect(data.paging.perPage).to.be(20);
              expect(data.paging.pageCount).to.be.a('number');
              expect(data.paging.pageCount).to.be(10);
              expect(data.paging.totalCount).to.be.a('number');
              expect(data.paging.totalCount).to.be(200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCertificate', function() {
        it('should call getCertificate successfully', function(done) {
          // TODO: uncomment, update parameter values for getCertificate call and complete the assertions
          /*
          var id = 789;

          instance.getCertificate(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinApiResTfulServices.TppCertificate);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.certificateType).to.be.a('string');
            expect(data.certificateType).to.be("QWAC");
            expect(data.label).to.be.a('string');
            expect(data.label).to.be("Global QWAC till 2022");
            expect(data.validFrom).to.be.a('string');
            expect(data.validFrom).to.be("2019-07-20");
            expect(data.validUntil).to.be.a('string');
            expect(data.validUntil).to.be("2019-07-20");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
