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
    instance = new FinApiResTfulServices.BanksApi();
  });

  describe('(package)', function() {
    describe('BanksApi', function() {
      describe('getAndSearchAllBanks', function() {
        it('should call getAndSearchAllBanks successfully', function(done) {
          // TODO: uncomment, update parameter values for getAndSearchAllBanks call and complete the assertions
          /*
          var opts = {};
          opts.ids = [3.4];
          opts.search = "search_example";
          opts.isSupported = true;
          opts.pinsAreVolatile = true;
          opts.supportedDataSources = ["supportedDataSources_example"];
          opts.supportedInterfaces = ["supportedInterfaces_example"];
          opts.location = ["location_example"];
          opts.tppAuthenticationGroupIds = [3.4];
          opts.isTestBank = true;
          opts.page = 1;
          opts.perPage = 20;
          opts.order = ["order_example"];

          instance.getAndSearchAllBanks(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinApiResTfulServices.PageableBankList);
            {
              let dataCtr = data.banks;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(FinApiResTfulServices.Bank);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(277672);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("FinAPI Test Bank");
                expect(data.loginHint).to.be.a('string');
                expect(data.loginHint).to.be("Bitte geben Sie Ihre Online-Identifikation und Ihre PIN ein.");
                expect(data.bic).to.be.a('string');
                expect(data.bic).to.be("TESTBANKING");
                {
                  let dataCtr = data.blzs;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.blz).to.be.a('string');
                expect(data.blz).to.be("00000000");
                expect(data.location).to.be.a('string');
                expect(data.location).to.be("DE");
                expect(data.city).to.be.a('string');
                expect(data.city).to.be("München");
                expect(data.isSupported).to.be.a('boolean');
                expect(data.isSupported).to.be(true);
                expect(data.isTestBank).to.be.a('boolean');
                expect(data.isTestBank).to.be(true);
                expect(data.popularity).to.be.a('number');
                expect(data.popularity).to.be(95);
                expect(data.health).to.be.a('number');
                expect(data.health).to.be(100);
                expect(data.loginFieldUserId).to.be.a('string');
                expect(data.loginFieldUserId).to.be("Onlinebanking-ID");
                expect(data.loginFieldCustomerId).to.be.a('string');
                expect(data.loginFieldCustomerId).to.be("Kunden-ID");
                expect(data.loginFieldPin).to.be.a('string');
                expect(data.loginFieldPin).to.be("PIN");
                expect(data.pinsAreVolatile).to.be.a('boolean');
                expect(data.pinsAreVolatile).to.be(true);
                expect(data.isCustomerIdPassword).to.be.a('boolean');
                expect(data.isCustomerIdPassword).to.be(false);
                {
                  let dataCtr = data.supportedDataSources;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("WEB_SCRAPER");
                  }
                }
                {
                  let dataCtr = data.interfaces;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(FinApiResTfulServices.BankInterface);
                    expect(data._interface).to.be.a('string');
                    expect(data._interface).to.be("FINTS_SERVER");
                    expect(data.tppAuthenticationGroup).to.be.a(FinApiResTfulServices.TppAuthenticationGroup);
                          expect(data.tppAuthenticationGroup.id).to.be.a('number');
                      expect(data.tppAuthenticationGroup.id).to.be(1);
                      expect(data.tppAuthenticationGroup.name).to.be.a('string');
                      expect(data.tppAuthenticationGroup.name).to.be("AirBank XS2A CZ");
                    {
                      let dataCtr = data.loginCredentials;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(FinApiResTfulServices.BankInterfaceLoginField);
                        expect(data.label).to.be.a('string');
                        expect(data.label).to.be("Nutzerkennung");
                        expect(data.isSecret).to.be.a('boolean');
                        expect(data.isSecret).to.be(false);
                        expect(data.isVolatile).to.be.a('boolean');
                        expect(data.isVolatile).to.be(false);
                      }
                    }
                    {
                      let dataCtr = data.properties;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("REDIRECT_APPROACH");
                      }
                    }
                    expect(data.loginHint).to.be.a('string');
                    expect(data.loginHint).to.be("Bitte geben Sie nur die ersten fünf Stellen Ihrer PIN ein.");
                    expect(data.health).to.be.a('number');
                    expect(data.health).to.be(100);
                    expect(data.lastCommunicationAttempt).to.be.a('string');
                    expect(data.lastCommunicationAttempt).to.be("2018-01-01 00:00:00.000");
                    expect(data.lastSuccessfulCommunication).to.be.a('string');
                    expect(data.lastSuccessfulCommunication).to.be("2018-01-01 00:00:00.000");
                  }
                }
                expect(data.lastCommunicationAttempt).to.be.a('string');
                expect(data.lastCommunicationAttempt).to.be("2018-01-01 00:00:00.000");
                expect(data.lastSuccessfulCommunication).to.be.a('string');
                expect(data.lastSuccessfulCommunication).to.be("2018-01-01 00:00:00.000");
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
      describe('getBank', function() {
        it('should call getBank successfully', function(done) {
          // TODO: uncomment, update parameter values for getBank call and complete the assertions
          /*
          var id = 789;

          instance.getBank(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinApiResTfulServices.Bank);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(277672);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("FinAPI Test Bank");
            expect(data.loginHint).to.be.a('string');
            expect(data.loginHint).to.be("Bitte geben Sie Ihre Online-Identifikation und Ihre PIN ein.");
            expect(data.bic).to.be.a('string');
            expect(data.bic).to.be("TESTBANKING");
            {
              let dataCtr = data.blzs;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.blz).to.be.a('string');
            expect(data.blz).to.be("00000000");
            expect(data.location).to.be.a('string');
            expect(data.location).to.be("DE");
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("München");
            expect(data.isSupported).to.be.a('boolean');
            expect(data.isSupported).to.be(true);
            expect(data.isTestBank).to.be.a('boolean');
            expect(data.isTestBank).to.be(true);
            expect(data.popularity).to.be.a('number');
            expect(data.popularity).to.be(95);
            expect(data.health).to.be.a('number');
            expect(data.health).to.be(100);
            expect(data.loginFieldUserId).to.be.a('string');
            expect(data.loginFieldUserId).to.be("Onlinebanking-ID");
            expect(data.loginFieldCustomerId).to.be.a('string');
            expect(data.loginFieldCustomerId).to.be("Kunden-ID");
            expect(data.loginFieldPin).to.be.a('string');
            expect(data.loginFieldPin).to.be("PIN");
            expect(data.pinsAreVolatile).to.be.a('boolean');
            expect(data.pinsAreVolatile).to.be(true);
            expect(data.isCustomerIdPassword).to.be.a('boolean');
            expect(data.isCustomerIdPassword).to.be(false);
            {
              let dataCtr = data.supportedDataSources;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("WEB_SCRAPER");
              }
            }
            {
              let dataCtr = data.interfaces;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(FinApiResTfulServices.BankInterface);
                expect(data._interface).to.be.a('string');
                expect(data._interface).to.be("FINTS_SERVER");
                expect(data.tppAuthenticationGroup).to.be.a(FinApiResTfulServices.TppAuthenticationGroup);
                      expect(data.tppAuthenticationGroup.id).to.be.a('number');
                  expect(data.tppAuthenticationGroup.id).to.be(1);
                  expect(data.tppAuthenticationGroup.name).to.be.a('string');
                  expect(data.tppAuthenticationGroup.name).to.be("AirBank XS2A CZ");
                {
                  let dataCtr = data.loginCredentials;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(FinApiResTfulServices.BankInterfaceLoginField);
                    expect(data.label).to.be.a('string');
                    expect(data.label).to.be("Nutzerkennung");
                    expect(data.isSecret).to.be.a('boolean');
                    expect(data.isSecret).to.be(false);
                    expect(data.isVolatile).to.be.a('boolean');
                    expect(data.isVolatile).to.be(false);
                  }
                }
                {
                  let dataCtr = data.properties;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("REDIRECT_APPROACH");
                  }
                }
                expect(data.loginHint).to.be.a('string');
                expect(data.loginHint).to.be("Bitte geben Sie nur die ersten fünf Stellen Ihrer PIN ein.");
                expect(data.health).to.be.a('number');
                expect(data.health).to.be(100);
                expect(data.lastCommunicationAttempt).to.be.a('string');
                expect(data.lastCommunicationAttempt).to.be("2018-01-01 00:00:00.000");
                expect(data.lastSuccessfulCommunication).to.be.a('string');
                expect(data.lastSuccessfulCommunication).to.be("2018-01-01 00:00:00.000");
              }
            }
            expect(data.lastCommunicationAttempt).to.be.a('string');
            expect(data.lastCommunicationAttempt).to.be("2018-01-01 00:00:00.000");
            expect(data.lastSuccessfulCommunication).to.be.a('string');
            expect(data.lastSuccessfulCommunication).to.be("2018-01-01 00:00:00.000");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMultipleBanks', function() {
        it('should call getMultipleBanks successfully', function(done) {
          // TODO: uncomment, update parameter values for getMultipleBanks call and complete the assertions
          /*
          var ids = [3.4];

          instance.getMultipleBanks(ids, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinApiResTfulServices.BankList);
            {
              let dataCtr = data.banks;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(FinApiResTfulServices.Bank);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(277672);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("FinAPI Test Bank");
                expect(data.loginHint).to.be.a('string');
                expect(data.loginHint).to.be("Bitte geben Sie Ihre Online-Identifikation und Ihre PIN ein.");
                expect(data.bic).to.be.a('string');
                expect(data.bic).to.be("TESTBANKING");
                {
                  let dataCtr = data.blzs;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.blz).to.be.a('string');
                expect(data.blz).to.be("00000000");
                expect(data.location).to.be.a('string');
                expect(data.location).to.be("DE");
                expect(data.city).to.be.a('string');
                expect(data.city).to.be("München");
                expect(data.isSupported).to.be.a('boolean');
                expect(data.isSupported).to.be(true);
                expect(data.isTestBank).to.be.a('boolean');
                expect(data.isTestBank).to.be(true);
                expect(data.popularity).to.be.a('number');
                expect(data.popularity).to.be(95);
                expect(data.health).to.be.a('number');
                expect(data.health).to.be(100);
                expect(data.loginFieldUserId).to.be.a('string');
                expect(data.loginFieldUserId).to.be("Onlinebanking-ID");
                expect(data.loginFieldCustomerId).to.be.a('string');
                expect(data.loginFieldCustomerId).to.be("Kunden-ID");
                expect(data.loginFieldPin).to.be.a('string');
                expect(data.loginFieldPin).to.be("PIN");
                expect(data.pinsAreVolatile).to.be.a('boolean');
                expect(data.pinsAreVolatile).to.be(true);
                expect(data.isCustomerIdPassword).to.be.a('boolean');
                expect(data.isCustomerIdPassword).to.be(false);
                {
                  let dataCtr = data.supportedDataSources;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("WEB_SCRAPER");
                  }
                }
                {
                  let dataCtr = data.interfaces;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(FinApiResTfulServices.BankInterface);
                    expect(data._interface).to.be.a('string');
                    expect(data._interface).to.be("FINTS_SERVER");
                    expect(data.tppAuthenticationGroup).to.be.a(FinApiResTfulServices.TppAuthenticationGroup);
                          expect(data.tppAuthenticationGroup.id).to.be.a('number');
                      expect(data.tppAuthenticationGroup.id).to.be(1);
                      expect(data.tppAuthenticationGroup.name).to.be.a('string');
                      expect(data.tppAuthenticationGroup.name).to.be("AirBank XS2A CZ");
                    {
                      let dataCtr = data.loginCredentials;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(FinApiResTfulServices.BankInterfaceLoginField);
                        expect(data.label).to.be.a('string');
                        expect(data.label).to.be("Nutzerkennung");
                        expect(data.isSecret).to.be.a('boolean');
                        expect(data.isSecret).to.be(false);
                        expect(data.isVolatile).to.be.a('boolean');
                        expect(data.isVolatile).to.be(false);
                      }
                    }
                    {
                      let dataCtr = data.properties;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("REDIRECT_APPROACH");
                      }
                    }
                    expect(data.loginHint).to.be.a('string');
                    expect(data.loginHint).to.be("Bitte geben Sie nur die ersten fünf Stellen Ihrer PIN ein.");
                    expect(data.health).to.be.a('number');
                    expect(data.health).to.be(100);
                    expect(data.lastCommunicationAttempt).to.be.a('string');
                    expect(data.lastCommunicationAttempt).to.be("2018-01-01 00:00:00.000");
                    expect(data.lastSuccessfulCommunication).to.be.a('string');
                    expect(data.lastSuccessfulCommunication).to.be("2018-01-01 00:00:00.000");
                  }
                }
                expect(data.lastCommunicationAttempt).to.be.a('string');
                expect(data.lastCommunicationAttempt).to.be("2018-01-01 00:00:00.000");
                expect(data.lastSuccessfulCommunication).to.be.a('string');
                expect(data.lastSuccessfulCommunication).to.be("2018-01-01 00:00:00.000");
              }
            }

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
