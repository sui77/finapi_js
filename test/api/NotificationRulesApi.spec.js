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
    instance = new FinApiResTfulServices.NotificationRulesApi();
  });

  describe('(package)', function() {
    describe('NotificationRulesApi', function() {
      describe('createNotificationRule', function() {
        it('should call createNotificationRule successfully', function(done) {
          // TODO: uncomment, update parameter values for createNotificationRule call and complete the assertions
          /*
          var body = new FinApiResTfulServices.NotificationRuleParams();
          body.triggerEvent = "NEW_ACCOUNT_BALANCE";
          body.params = {"accountIds":"1,2,3"};
          body.callbackHandle = "handle";
          body.includeDetails = true;

          instance.createNotificationRule(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinApiResTfulServices.NotificationRule);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.triggerEvent).to.be.a('string');
            expect(data.triggerEvent).to.be("NEW_ACCOUNT_BALANCE");
            {
              let dataCtr = data.params;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.callbackHandle).to.be.a('string');
            expect(data.callbackHandle).to.be("handle");
            expect(data.includeDetails).to.be.a('boolean');
            expect(data.includeDetails).to.be(true);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteAllNotificationRules', function() {
        it('should call deleteAllNotificationRules successfully', function(done) {
          // TODO: uncomment deleteAllNotificationRules call and complete the assertions
          /*

          instance.deleteAllNotificationRules(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinApiResTfulServices.IdentifierList);
            {
              let dataCtr = data.identifiers;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be("0");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteNotificationRule', function() {
        it('should call deleteNotificationRule successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteNotificationRule call
          /*
          var id = 789;

          instance.deleteNotificationRule(id, function(error, data, response) {
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
      describe('getAndSearchAllNotificationRules', function() {
        it('should call getAndSearchAllNotificationRules successfully', function(done) {
          // TODO: uncomment, update parameter values for getAndSearchAllNotificationRules call and complete the assertions
          /*
          var opts = {};
          opts.ids = [3.4];
          opts.triggerEvent = "triggerEvent_example";
          opts.includeDetails = true;

          instance.getAndSearchAllNotificationRules(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinApiResTfulServices.NotificationRuleList);
            {
              let dataCtr = data.notificationRules;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(FinApiResTfulServices.NotificationRule);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(1);
                expect(data.triggerEvent).to.be.a('string');
                expect(data.triggerEvent).to.be("NEW_ACCOUNT_BALANCE");
                {
                  let dataCtr = data.params;
                  expect(dataCtr).to.be.an(Object);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.callbackHandle).to.be.a('string');
                expect(data.callbackHandle).to.be("handle");
                expect(data.includeDetails).to.be.a('boolean');
                expect(data.includeDetails).to.be(true);
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNotificationRule', function() {
        it('should call getNotificationRule successfully', function(done) {
          // TODO: uncomment, update parameter values for getNotificationRule call and complete the assertions
          /*
          var id = 789;

          instance.getNotificationRule(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FinApiResTfulServices.NotificationRule);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.triggerEvent).to.be.a('string');
            expect(data.triggerEvent).to.be("NEW_ACCOUNT_BALANCE");
            {
              let dataCtr = data.params;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.callbackHandle).to.be.a('string');
            expect(data.callbackHandle).to.be("handle");
            expect(data.includeDetails).to.be.a('boolean');
            expect(data.includeDetails).to.be(true);

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