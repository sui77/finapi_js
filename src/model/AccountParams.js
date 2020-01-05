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
    root.FinApiResTfulServices.AccountParams = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccountParams model module.
   * @module model/AccountParams
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>AccountParams</code>.
   * Container for an account's name, type and 'isNew' flag'.
   * @alias module:model/AccountParams
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccountParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountParams} obj Optional instance to populate.
   * @return {module:model/AccountParams} The populated <code>AccountParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountName'))
        obj.accountName = ApiClient.convertToType(data['accountName'], 'String');
      if (data.hasOwnProperty('accountTypeId'))
        obj.accountTypeId = ApiClient.convertToType(data['accountTypeId'], 'Number');
      if (data.hasOwnProperty('accountType'))
        obj.accountType = ApiClient.convertToType(data['accountType'], 'String');
      if (data.hasOwnProperty('isNew'))
        obj.isNew = ApiClient.convertToType(data['isNew'], 'Boolean');
    }
    return obj;
  }

  /**
   * Account name. Maximum length is 512.
   * @member {String} accountName
   */
  exports.prototype.accountName = undefined;

  /**
   * Identifier of account type.<br/><br/>1 = Checking,<br/>2 = Savings,<br/>3 = CreditCard,<br/>4 = Security,<br/>5 = Loan,<br/>6 = Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>7 = Membership,<br/>8 = Bausparen<br/><br/><br/> Note: this field is deprecated and will be removed at some point. Please refer to the accountType field instead.
   * @member {Number} accountTypeId
   */
  exports.prototype.accountTypeId = undefined;

  /**
   * An account type.<br/><br/>Checking,<br/>Savings,<br/>CreditCard,<br/>Security,<br/>Loan,<br/>Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>Membership,<br/>Bausparen<br/><br/>
   * @member {module:model/AccountParams.AccountTypeEnum} accountType
   */
  exports.prototype.accountType = undefined;

  /**
   * Whether this account should be flagged as 'new' or not. Any newly imported account will have this flag initially set to true, and remain so until you set it to false (see PATCH /accounts/<id>). How you use this field is up to your interpretation, however it is recommended to set the flag to false for all accounts right after the initial import of the bank connection. This way, you will be able recognize accounts that get newly imported during a later update of the bank connection, by checking for any accounts with the flag set to true after every update of the bank connection.
   * @member {Boolean} isNew
   */
  exports.prototype.isNew = undefined;


  /**
   * Allowed values for the <code>accountType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountTypeEnum = {
    /**
     * value: "Checking"
     * @const
     */
    checking: "Checking",

    /**
     * value: "Savings"
     * @const
     */
    savings: "Savings",

    /**
     * value: "CreditCard"
     * @const
     */
    creditCard: "CreditCard",

    /**
     * value: "Security"
     * @const
     */
    security: "Security",

    /**
     * value: "Loan"
     * @const
     */
    loan: "Loan",

    /**
     * value: "Pocket"
     * @const
     */
    pocket: "Pocket",

    /**
     * value: "Membership"
     * @const
     */
    membership: "Membership",

    /**
     * value: "Bausparen"
     * @const
     */
    bausparen: "Bausparen"
  };

  return exports;

}));