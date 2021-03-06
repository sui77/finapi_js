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
    root.FinApiResTfulServices.TppCredentials = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TppCredentials model module.
   * @module model/TppCredentials
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>TppCredentials</code>.
   * A container for the TPP client credentials data
   * @alias module:model/TppCredentials
   * @class
   * @param id {Number} The credential identifier.
   */
  var exports = function(id) {
    this.id = id;
  };

  /**
   * Constructs a <code>TppCredentials</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TppCredentials} obj Optional instance to populate.
   * @return {module:model/TppCredentials} The populated <code>TppCredentials</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('tppAuthenticationGroupId'))
        obj.tppAuthenticationGroupId = ApiClient.convertToType(data['tppAuthenticationGroupId'], 'Number');
      if (data.hasOwnProperty('validFrom'))
        obj.validFrom = ApiClient.convertToType(data['validFrom'], 'String');
      if (data.hasOwnProperty('validUntil'))
        obj.validUntil = ApiClient.convertToType(data['validUntil'], 'String');
    }
    return obj;
  }

  /**
   * The credential identifier.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Optional label of tpp client credentials set.
   * @member {String} label
   */
  exports.prototype.label = undefined;

  /**
   * TPP Authentication Group ID
   * @member {Number} tppAuthenticationGroupId
   */
  exports.prototype.tppAuthenticationGroupId = undefined;

  /**
   * Valid from date in the format 'YYYY-MM-DD'.
   * @member {String} validFrom
   */
  exports.prototype.validFrom = undefined;

  /**
   * Valid until date in the format 'YYYY-MM-DD'.
   * @member {String} validUntil
   */
  exports.prototype.validUntil = undefined;

  return exports;

}));
