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
    define(['ApiClient', 'model/Account'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Account'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.AccountList = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.Account);
  }
}(this, function(ApiClient, Account) {
  'use strict';

  /**
   * The AccountList model module.
   * @module model/AccountList
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>AccountList</code>.
   * Container for data of multiple bank accounts
   * @alias module:model/AccountList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccountList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountList} obj Optional instance to populate.
   * @return {module:model/AccountList} The populated <code>AccountList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accounts'))
        obj.accounts = ApiClient.convertToType(data['accounts'], [Account]);
    }
    return obj;
  }

  /**
   * List of bank accounts
   * @member {Array.<module:model/Account>} accounts
   */
  exports.prototype.accounts = undefined;

  return exports;

}));
