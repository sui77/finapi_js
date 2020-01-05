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
    root.FinApiResTfulServices.IdentifierList = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IdentifierList model module.
   * @module model/IdentifierList
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>IdentifierList</code>.
   * Set of identifiers (in ascending order)
   * @alias module:model/IdentifierList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>IdentifierList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentifierList} obj Optional instance to populate.
   * @return {module:model/IdentifierList} The populated <code>IdentifierList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('identifiers'))
        obj.identifiers = ApiClient.convertToType(data['identifiers'], ['Number']);
    }
    return obj;
  }

  /**
   * Set of identifiers (in ascending order)
   * @member {Array.<Number>} identifiers
   */
  exports.prototype.identifiers = undefined;

  return exports;

}));
