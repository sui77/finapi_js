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
    root.FinApiResTfulServices.CategoryParams = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CategoryParams model module.
   * @module model/CategoryParams
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>CategoryParams</code>.
   * Category parameters
   * @alias module:model/CategoryParams
   * @class
   * @param name {String} Name of the category. Maximum length is 128.
   */
  var exports = function(name) {
    this.name = name;
  };

  /**
   * Constructs a <code>CategoryParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CategoryParams} obj Optional instance to populate.
   * @return {module:model/CategoryParams} The populated <code>CategoryParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('parentId'))
        obj.parentId = ApiClient.convertToType(data['parentId'], 'Number');
    }
    return obj;
  }

  /**
   * Name of the category. Maximum length is 128.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Identifier of the parent category, if the new category should be created as a sub-category. Must point to a main category in this case. If the new category should be a main category itself, this field must remain unset.
   * @member {Number} parentId
   */
  exports.prototype.parentId = undefined;

  return exports;

}));
