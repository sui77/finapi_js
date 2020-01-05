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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.MultiStepAuthenticationCallback = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MultiStepAuthenticationCallback model module.
   * @module model/MultiStepAuthenticationCallback
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>MultiStepAuthenticationCallback</code>.
   * Container for multi-step authentication data, as passed by the client to finAPI
   * @alias module:model/MultiStepAuthenticationCallback
   * @class
   * @param hash {String} Hash that was returned in the previous multi-step authentication error.
   */
  var exports = function(hash) {
    this.hash = hash;
  };

  /**
   * Constructs a <code>MultiStepAuthenticationCallback</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MultiStepAuthenticationCallback} obj Optional instance to populate.
   * @return {module:model/MultiStepAuthenticationCallback} The populated <code>MultiStepAuthenticationCallback</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('challengeResponse'))
        obj.challengeResponse = ApiClient.convertToType(data['challengeResponse'], 'String');
      if (data.hasOwnProperty('twoStepProcedureId'))
        obj.twoStepProcedureId = ApiClient.convertToType(data['twoStepProcedureId'], 'String');
      if (data.hasOwnProperty('redirectCallback'))
        obj.redirectCallback = ApiClient.convertToType(data['redirectCallback'], 'String');
      if (data.hasOwnProperty('decoupledCallback'))
        obj.decoupledCallback = ApiClient.convertToType(data['decoupledCallback'], 'Boolean');
    }
    return obj;
  }

  /**
   * Hash that was returned in the previous multi-step authentication error.
   * @member {String} hash
   */
  exports.prototype.hash = undefined;

  /**
   * Challenge response. Must be set when the previous multi-step authentication error had status 'CHALLENGE_RESPONSE_REQUIRED.
   * @member {String} challengeResponse
   */
  exports.prototype.challengeResponse = undefined;

  /**
   * The bank-given ID of the two-step-procedure that should be used for authentication. Must be set when the previous multi-step authentication error had status 'TWO_STEP_PROCEDURE_REQUIRED.
   * @member {String} twoStepProcedureId
   */
  exports.prototype.twoStepProcedureId = undefined;

  /**
   * Must be passed when the previous multi-step authentication error had status 'REDIRECT_REQUIRED'. The value must consist of the complete query parameter list that was contained in the received redirect from the bank.
   * @member {String} redirectCallback
   */
  exports.prototype.redirectCallback = undefined;

  /**
   * Must be passed when the previous multi-step authentication error had status 'DECOUPLED_AUTH_REQUIRED' or 'DECOUPLED_AUTH_IN_PROGRESS'. The field represents the state of the decoupled authentication meaning that when it's set to 'true', the end-user has completed the authentication process on bank's side.
   * @member {Boolean} decoupledCallback
   */
  exports.prototype.decoupledCallback = undefined;

  return exports;

}));