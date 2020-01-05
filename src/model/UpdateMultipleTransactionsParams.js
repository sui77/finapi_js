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
    root.FinApiResTfulServices.UpdateMultipleTransactionsParams = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateMultipleTransactionsParams model module.
   * @module model/UpdateMultipleTransactionsParams
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>UpdateMultipleTransactionsParams</code>.
   * Update specific transactions parameters
   * @alias module:model/UpdateMultipleTransactionsParams
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateMultipleTransactionsParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateMultipleTransactionsParams} obj Optional instance to populate.
   * @return {module:model/UpdateMultipleTransactionsParams} The populated <code>UpdateMultipleTransactionsParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('isNew'))
        obj.isNew = ApiClient.convertToType(data['isNew'], 'Boolean');
      if (data.hasOwnProperty('isPotentialDuplicate'))
        obj.isPotentialDuplicate = ApiClient.convertToType(data['isPotentialDuplicate'], 'Boolean');
      if (data.hasOwnProperty('categoryId'))
        obj.categoryId = ApiClient.convertToType(data['categoryId'], 'Number');
      if (data.hasOwnProperty('trainCategorization'))
        obj.trainCategorization = ApiClient.convertToType(data['trainCategorization'], 'Boolean');
      if (data.hasOwnProperty('labelIds'))
        obj.labelIds = ApiClient.convertToType(data['labelIds'], ['Number']);
      if (data.hasOwnProperty('ids'))
        obj.ids = ApiClient.convertToType(data['ids'], ['Number']);
      if (data.hasOwnProperty('accountIds'))
        obj.accountIds = ApiClient.convertToType(data['accountIds'], ['Number']);
    }
    return obj;
  }

  /**
   * Whether this transactions should be flagged as 'new' or not. Any newly imported transaction will have this flag initially set to true. How you use this field is up to your interpretation. For example, you might want to set it to false once a user has clicked on/seen the transaction.
   * @member {Boolean} isNew
   */
  exports.prototype.isNew = undefined;

  /**
   * You can set this field only to 'false'. finAPI marks transactions as a potential duplicates  when its internal duplicate detection algorithm is signaling so. Transactions that are flagged as duplicates can be deleted by the user. To prevent the user from deleting original transactions, which might lead to incorrect balances, it is not possible to manually set this flag to 'true'.
   * @member {Boolean} isPotentialDuplicate
   */
  exports.prototype.isPotentialDuplicate = undefined;

  /**
   * Identifier of the new category to apply to the transaction. When updating the transaction's category, the category's fields 'id', 'name', 'parentId', 'parentName', and 'isCustom' will all get updated. To clear the category for the transaction, the categoryId field must be passed with value 0.
   * @member {Number} categoryId
   */
  exports.prototype.categoryId = undefined;

  /**
   * This field is only regarded when the field 'categoryId' is set. It controls whether finAPI's categorization system should learn from the given categorization(s). If set to 'true', then the user's categorization rules will be updated so that similar transactions will get categorized accordingly in future. If set to 'false', then the service will simply change the category of the given transaction(s), without updating the user's categorization rules. The field defaults to 'true' if not specified.
   * @member {Boolean} trainCategorization
   * @default true
   */
  exports.prototype.trainCategorization = true;

  /**
   * Identifiers of labels to apply to the transaction. To clear transactions' labels, pass an empty array of identifiers: '[]'
   * @member {Array.<Number>} labelIds
   */
  exports.prototype.labelIds = undefined;

  /**
   * A comma-separated list of transaction identifiers. If specified, then only transactions whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 100.
   * @member {Array.<Number>} ids
   */
  exports.prototype.ids = undefined;

  /**
   * A comma-separated list of account identifiers. If specified, then only transactions whose account's identifier is included in this list will be regarded.
   * @member {Array.<Number>} accountIds
   */
  exports.prototype.accountIds = undefined;

  return exports;

}));
