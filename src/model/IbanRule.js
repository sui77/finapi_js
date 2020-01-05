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
    root.FinApiResTfulServices.IbanRule = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.Category);
  }
}(this, function(ApiClient, Category) {
  'use strict';

  /**
   * The IbanRule model module.
   * @module model/IbanRule
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>IbanRule</code>.
   * Container for an IBAN rule
   * @alias module:model/IbanRule
   * @class
   * @param id {Number} Rule identifier
   * @param category {module:model/Category} The category that this rule assigns to the transactions that it matches
   * @param direction {module:model/IbanRule.DirectionEnum} Direction for the rule. 'Income' means that the rule applies to transactions with a positive amount only, 'Spending' means it applies to transactions with a negative amount only.
   * @param creationDate {String} Timestamp of when the rule was created, in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time)
   * @param iban {String} The IBAN for this rule
   */
  var exports = function(id, category, direction, creationDate, iban) {
    this.id = id;
    this.category = category;
    this.direction = direction;
    this.creationDate = creationDate;
    this.iban = iban;
  };

  /**
   * Constructs a <code>IbanRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IbanRule} obj Optional instance to populate.
   * @return {module:model/IbanRule} The populated <code>IbanRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('category'))
        obj.category = Category.constructFromObject(data['category']);
      if (data.hasOwnProperty('direction'))
        obj.direction = ApiClient.convertToType(data['direction'], 'String');
      if (data.hasOwnProperty('creationDate'))
        obj.creationDate = ApiClient.convertToType(data['creationDate'], 'String');
      if (data.hasOwnProperty('iban'))
        obj.iban = ApiClient.convertToType(data['iban'], 'String');
    }
    return obj;
  }

  /**
   * Rule identifier
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * The category that this rule assigns to the transactions that it matches
   * @member {module:model/Category} category
   */
  exports.prototype.category = undefined;

  /**
   * Direction for the rule. 'Income' means that the rule applies to transactions with a positive amount only, 'Spending' means it applies to transactions with a negative amount only.
   * @member {module:model/IbanRule.DirectionEnum} direction
   */
  exports.prototype.direction = undefined;

  /**
   * Timestamp of when the rule was created, in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time)
   * @member {String} creationDate
   */
  exports.prototype.creationDate = undefined;

  /**
   * The IBAN for this rule
   * @member {String} iban
   */
  exports.prototype.iban = undefined;


  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "Income"
     * @const
     */
    income: "Income",

    /**
     * value: "Spending"
     * @const
     */
    spending: "Spending"
  };

  return exports;

}));
