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
    define(['ApiClient', 'model/Paging', 'model/TppCredentials'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Paging'), require('./TppCredentials'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.PageableTppCredentialResources = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.Paging, root.FinApiResTfulServices.TppCredentials);
  }
}(this, function(ApiClient, Paging, TppCredentials) {
  'use strict';

  /**
   * The PageableTppCredentialResources model module.
   * @module model/PageableTppCredentialResources
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>PageableTppCredentialResources</code>.
   * Container for TPP client credentials information with paging info
   * @alias module:model/PageableTppCredentialResources
   * @class
   * @param tppCredentials {Array.<module:model/TppCredentials>} List of TPP client credentials
   * @param paging {module:model/Paging} Information for pagination
   */
  var exports = function(tppCredentials, paging) {
    this.tppCredentials = tppCredentials;
    this.paging = paging;
  };

  /**
   * Constructs a <code>PageableTppCredentialResources</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageableTppCredentialResources} obj Optional instance to populate.
   * @return {module:model/PageableTppCredentialResources} The populated <code>PageableTppCredentialResources</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('tppCredentials'))
        obj.tppCredentials = ApiClient.convertToType(data['tppCredentials'], [TppCredentials]);
      if (data.hasOwnProperty('paging'))
        obj.paging = Paging.constructFromObject(data['paging']);
    }
    return obj;
  }

  /**
   * List of TPP client credentials
   * @member {Array.<module:model/TppCredentials>} tppCredentials
   */
  exports.prototype.tppCredentials = undefined;

  /**
   * Information for pagination
   * @member {module:model/Paging} paging
   */
  exports.prototype.paging = undefined;

  return exports;

}));
