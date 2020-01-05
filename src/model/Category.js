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
    root.FinApiResTfulServices.Category = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Category model module.
   * @module model/Category
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>Category</code>.
   * Category data
   * @alias module:model/Category
   * @class
   * @param id {Number} Category identifier.<br/><br/>NOTE: Do NOT assume that the identifiers of the global finAPI categories are the same across different finAPI environments. In fact, the identifiers may change whenever a new finAPI version is released, even within the same environment. The identifiers are meant to be used for references within the finAPI services only, but not for hard-coding them in your application. If you need to hard-code the usage of a certain global category within your application, please instead refer to the category name. Also, please make sure to check the 'isCustom' flag, which is false for all global categories (if you are not regarding this flag, you might end up referring to a user-specific category, and not the global category).
   * @param name {String} Category name
   * @param isCustom {Boolean} Whether the category is a finAPI global category (in which case this field will be false), or the category was created by a user (in which case this field will be true)
   */
  var exports = function(id, name, isCustom) {
    this.id = id;
    this.name = name;
    this.isCustom = isCustom;
  };

  /**
   * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Category} obj Optional instance to populate.
   * @return {module:model/Category} The populated <code>Category</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('parentId'))
        obj.parentId = ApiClient.convertToType(data['parentId'], 'Number');
      if (data.hasOwnProperty('parentName'))
        obj.parentName = ApiClient.convertToType(data['parentName'], 'String');
      if (data.hasOwnProperty('isCustom'))
        obj.isCustom = ApiClient.convertToType(data['isCustom'], 'Boolean');
      if (data.hasOwnProperty('children'))
        obj.children = ApiClient.convertToType(data['children'], ['Number']);
    }
    return obj;
  }

  /**
   * Category identifier.<br/><br/>NOTE: Do NOT assume that the identifiers of the global finAPI categories are the same across different finAPI environments. In fact, the identifiers may change whenever a new finAPI version is released, even within the same environment. The identifiers are meant to be used for references within the finAPI services only, but not for hard-coding them in your application. If you need to hard-code the usage of a certain global category within your application, please instead refer to the category name. Also, please make sure to check the 'isCustom' flag, which is false for all global categories (if you are not regarding this flag, you might end up referring to a user-specific category, and not the global category).
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Category name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Identifier of the parent category (if a parent category exists)
   * @member {Number} parentId
   */
  exports.prototype.parentId = undefined;

  /**
   * Name of the parent category (if a parent category exists)
   * @member {String} parentName
   */
  exports.prototype.parentName = undefined;

  /**
   * Whether the category is a finAPI global category (in which case this field will be false), or the category was created by a user (in which case this field will be true)
   * @member {Boolean} isCustom
   */
  exports.prototype.isCustom = undefined;

  /**
   * List of sub-categories identifiers (if any exist)
   * @member {Array.<Number>} children
   */
  exports.prototype.children = undefined;

  return exports;

}));
