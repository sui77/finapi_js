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
    root.FinApiResTfulServices.ClearingAccountData = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClearingAccountData model module.
   * @module model/ClearingAccountData
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>ClearingAccountData</code>.
   * @alias module:model/ClearingAccountData
   * @class
   * @param clearingAccountId {String} Technical identifier of the clearing account
   * @param clearingAccountName {String} Name of the clearing account
   */
  var exports = function(clearingAccountId, clearingAccountName) {
    this.clearingAccountId = clearingAccountId;
    this.clearingAccountName = clearingAccountName;
  };

  /**
   * Constructs a <code>ClearingAccountData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClearingAccountData} obj Optional instance to populate.
   * @return {module:model/ClearingAccountData} The populated <code>ClearingAccountData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('clearingAccountId'))
        obj.clearingAccountId = ApiClient.convertToType(data['clearingAccountId'], 'String');
      if (data.hasOwnProperty('clearingAccountName'))
        obj.clearingAccountName = ApiClient.convertToType(data['clearingAccountName'], 'String');
    }
    return obj;
  }

  /**
   * Technical identifier of the clearing account
   * @member {String} clearingAccountId
   */
  exports.prototype.clearingAccountId = undefined;

  /**
   * Name of the clearing account
   * @member {String} clearingAccountName
   */
  exports.prototype.clearingAccountName = undefined;

  return exports;

}));
