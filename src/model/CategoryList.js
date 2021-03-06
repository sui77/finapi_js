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
    define(['ApiClient', 'model/Category'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Category'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.CategoryList = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.Category);
  }
}(this, function(ApiClient, Category) {
  'use strict';

  /**
   * The CategoryList model module.
   * @module model/CategoryList
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>CategoryList</code>.
   * Container for data of multiple categories
   * @alias module:model/CategoryList
   * @class
   * @param categories {Array.<module:model/Category>} Categories
   */
  var exports = function(categories) {
    this.categories = categories;
  };

  /**
   * Constructs a <code>CategoryList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CategoryList} obj Optional instance to populate.
   * @return {module:model/CategoryList} The populated <code>CategoryList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('categories'))
        obj.categories = ApiClient.convertToType(data['categories'], [Category]);
    }
    return obj;
  }

  /**
   * Categories
   * @member {Array.<module:model/Category>} categories
   */
  exports.prototype.categories = undefined;

  return exports;

}));
