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
    define(['ApiClient', 'model/LoginCredential'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LoginCredential'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.EditBankConnectionParams = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.LoginCredential);
  }
}(this, function(ApiClient, LoginCredential) {
  'use strict';

  /**
   * The EditBankConnectionParams model module.
   * @module model/EditBankConnectionParams
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>EditBankConnectionParams</code>.
   * Container for bank connection edit params
   * @alias module:model/EditBankConnectionParams
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EditBankConnectionParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditBankConnectionParams} obj Optional instance to populate.
   * @return {module:model/EditBankConnectionParams} The populated <code>EditBankConnectionParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('bankingUserId'))
        obj.bankingUserId = ApiClient.convertToType(data['bankingUserId'], 'String');
      if (data.hasOwnProperty('bankingCustomerId'))
        obj.bankingCustomerId = ApiClient.convertToType(data['bankingCustomerId'], 'String');
      if (data.hasOwnProperty('bankingPin'))
        obj.bankingPin = ApiClient.convertToType(data['bankingPin'], 'String');
      if (data.hasOwnProperty('interface'))
        obj._interface = ApiClient.convertToType(data['interface'], 'String');
      if (data.hasOwnProperty('loginCredentials'))
        obj.loginCredentials = ApiClient.convertToType(data['loginCredentials'], [LoginCredential]);
      if (data.hasOwnProperty('defaultTwoStepProcedureId'))
        obj.defaultTwoStepProcedureId = ApiClient.convertToType(data['defaultTwoStepProcedureId'], 'String');
    }
    return obj;
  }

  /**
   * New name for the bank connection. Maximum length is 64. If you do not want to change the current name let this field remain unset. If you want to clear the current name, set the field's value to an empty string (\"\").
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * NOTE: This field is deprecated and will be removed at some point. Use 'loginCredentials' + 'interface' instead. If any of those two fields is used, then the value of this field will be ignored.<br><br>New online banking user ID. If you do not want to change the current user ID let this field remain unset. In case you need to use finAPI's web form to let the user update the field, just set the field to any value, so that the service recognizes that you wish to use the web form flow. Note that you cannot clear the current user ID, i.e. a bank connection must always have a user ID (except for when it is a 'demo connection'). Max length: 170.
   * @member {String} bankingUserId
   */
  exports.prototype.bankingUserId = undefined;

  /**
   * NOTE: This field is deprecated and will be removed at some point. Use 'loginCredentials' + 'interface' instead. If any of those two fields is used, then the value of this field will be ignored.<br><br>New online banking customer ID. If you do not want to change the current customer ID let this field remain unset. In case you need to use finAPI's web form to let the user update the field, just set the field to non-empty value, so that the service recognizes that you wish to use the web form flow. If you want to clear the current customer ID, set the field's value to an empty string (\"\"). Max length: 170.
   * @member {String} bankingCustomerId
   */
  exports.prototype.bankingCustomerId = undefined;

  /**
   * NOTE: This field is deprecated and will be removed at some point. Use 'loginCredentials' + 'interface' instead. If any of those two fields is used, then the value of this field will be ignored.<br><br>New online banking PIN. If you do not want to change the current PIN let this field remain unset. In case you need to use finAPI's web form to let the user update the field, just set the field to non-empty value, so that the service recognizes that you wish to use the web form flow. If you want to clear the current PIN, set the field's value to an empty string (\"\").<br/><br/>Any symbols are allowed. Max length: 170.
   * @member {String} bankingPin
   */
  exports.prototype.bankingPin = undefined;

  /**
   * The interface for which you want to edit data. Must be given when you pass 'loginCredentials' and/or a 'defaultTwoStepProcedureId'.
   * @member {module:model/EditBankConnectionParams.InterfaceEnum} _interface
   */
  exports.prototype._interface = undefined;

  /**
   * Set of login credentials that you want to edit. Must be passed in combination with the 'interface' field. The labels that you pass must match with the login credential labels that the respective interface defines. If you want to clear the stored value for a credential, you can pass an empty string (\"\") as value.In case you need to use finAPI's web form to let the user update the login credentials, send all fields the user wishes to update with a non-empty value.In case all fields contain an empty string (\"\"), no webform will be generated. Note that any change in the credentials will automatically remove the saved consent data associated with those credentials.<br><br>NOTE: When you pass this field, then the fields 'bankingUserId','bankingCustomerId' and 'bankingPin' will be ignored.
   * @member {Array.<module:model/LoginCredential>} loginCredentials
   */
  exports.prototype.loginCredentials = undefined;

  /**
   * NOTE: In the future, this field will work only in combination with the 'interface' field.<br><br>New default two-step-procedure. Must match the 'procedureId' of one of the procedures that are listed in the bank connection. If you do not want to change this field let it remain unset. If you want to clear the current default two-step-procedure, set the field's value to an empty string (\"\").
   * @member {String} defaultTwoStepProcedureId
   */
  exports.prototype.defaultTwoStepProcedureId = undefined;


  /**
   * Allowed values for the <code>_interface</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InterfaceEnum = {
    /**
     * value: "FINTS_SERVER"
     * @const
     */
    FINTS_SERVER: "FINTS_SERVER",

    /**
     * value: "WEB_SCRAPER"
     * @const
     */
    WEB_SCRAPER: "WEB_SCRAPER",

    /**
     * value: "XS2A"
     * @const
     */
    xS2A: "XS2A"
  };

  return exports;

}));