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
    define(['ApiClient', 'model/AccountReference', 'model/LoginCredential', 'model/MultiStepAuthenticationCallback'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountReference'), require('./LoginCredential'), require('./MultiStepAuthenticationCallback'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.ImportBankConnectionParams = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.AccountReference, root.FinApiResTfulServices.LoginCredential, root.FinApiResTfulServices.MultiStepAuthenticationCallback);
  }
}(this, function(ApiClient, AccountReference, LoginCredential, MultiStepAuthenticationCallback) {
  'use strict';

  /**
   * The ImportBankConnectionParams model module.
   * @module model/ImportBankConnectionParams
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>ImportBankConnectionParams</code>.
   * Container for bank connection import parameters
   * @alias module:model/ImportBankConnectionParams
   * @class
   * @param bankId {Number} Bank Identifier
   */
  var exports = function(bankId) {
    this.bankId = bankId;
  };

  /**
   * Constructs a <code>ImportBankConnectionParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImportBankConnectionParams} obj Optional instance to populate.
   * @return {module:model/ImportBankConnectionParams} The populated <code>ImportBankConnectionParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bankId'))
        obj.bankId = ApiClient.convertToType(data['bankId'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('bankingUserId'))
        obj.bankingUserId = ApiClient.convertToType(data['bankingUserId'], 'String');
      if (data.hasOwnProperty('bankingCustomerId'))
        obj.bankingCustomerId = ApiClient.convertToType(data['bankingCustomerId'], 'String');
      if (data.hasOwnProperty('bankingPin'))
        obj.bankingPin = ApiClient.convertToType(data['bankingPin'], 'String');
      if (data.hasOwnProperty('storePin'))
        obj.storePin = ApiClient.convertToType(data['storePin'], 'Boolean');
      if (data.hasOwnProperty('interface'))
        obj._interface = ApiClient.convertToType(data['interface'], 'String');
      if (data.hasOwnProperty('loginCredentials'))
        obj.loginCredentials = ApiClient.convertToType(data['loginCredentials'], [LoginCredential]);
      if (data.hasOwnProperty('storeSecrets'))
        obj.storeSecrets = ApiClient.convertToType(data['storeSecrets'], 'Boolean');
      if (data.hasOwnProperty('skipPositionsDownload'))
        obj.skipPositionsDownload = ApiClient.convertToType(data['skipPositionsDownload'], 'Boolean');
      if (data.hasOwnProperty('loadOwnerData'))
        obj.loadOwnerData = ApiClient.convertToType(data['loadOwnerData'], 'Boolean');
      if (data.hasOwnProperty('maxDaysForDownload'))
        obj.maxDaysForDownload = ApiClient.convertToType(data['maxDaysForDownload'], 'Number');
      if (data.hasOwnProperty('accountTypes'))
        obj.accountTypes = ApiClient.convertToType(data['accountTypes'], ['String']);
      if (data.hasOwnProperty('accountTypeIds'))
        obj.accountTypeIds = ApiClient.convertToType(data['accountTypeIds'], ['Number']);
      if (data.hasOwnProperty('accountReferences'))
        obj.accountReferences = ApiClient.convertToType(data['accountReferences'], [AccountReference]);
      if (data.hasOwnProperty('challengeResponse'))
        obj.challengeResponse = ApiClient.convertToType(data['challengeResponse'], 'String');
      if (data.hasOwnProperty('multiStepAuthentication'))
        obj.multiStepAuthentication = MultiStepAuthenticationCallback.constructFromObject(data['multiStepAuthentication']);
      if (data.hasOwnProperty('redirectUrl'))
        obj.redirectUrl = ApiClient.convertToType(data['redirectUrl'], 'String');
    }
    return obj;
  }

  /**
   * Bank Identifier
   * @member {Number} bankId
   */
  exports.prototype.bankId = undefined;

  /**
   * Custom name for the bank connection. Maximum length is 64. If you do not want to set a name, you can leave this field unset.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * NOTE: This field is deprecated and will be removed at some point. Use 'loginCredentials' + 'interface' instead. If any of those two fields is used, then the value of this field will be ignored.<br><br>Online banking user ID credential. Max length: 170. NOTES:<br/>- if you import the 'demo connection', this field can be left unset;<br/> - if the user will need to enter his credentials in finAPI's web form, this field can contain any value. It will be ignored.
   * @member {String} bankingUserId
   */
  exports.prototype.bankingUserId = undefined;

  /**
   * NOTE: This field is deprecated and will be removed at some point. Use 'loginCredentials' + 'interface' instead. If any of those two fields is used, then the value of this field will be ignored.<br><br>Online banking customer ID credential (for most banks this field can remain unset). Max length: 170. NOTES:<br/>- if the user will need to enter his credentials in finAPI's web form, this field can contain any value. It will be ignored.
   * @member {String} bankingCustomerId
   */
  exports.prototype.bankingCustomerId = undefined;

  /**
   * NOTE: This field is deprecated and will be removed at some point. Use 'loginCredentials' + 'interface' instead. If any of those two fields is used, then the value of this field will be ignored.<br><br>Online banking PIN. Max length: 170. Any symbols are allowed. NOTES:<br/>- if you import the 'demo connection', this field can be left unset;<br/> - if the user will need to enter his credentials in finAPI's web form, this field can be left unset or contain any value. It will be ignored.
   * @member {String} bankingPin
   */
  exports.prototype.bankingPin = undefined;

  /**
   * NOTE: This field is deprecated and will be removed at some point. Use 'storeSecrets' instead.<br><br>Whether to store the PIN. If the PIN is stored, it is not required to pass the PIN again when updating this bank connection or when executing orders (like money transfers). Default is false. <br/><br/>NOTES:<br/> - before you set this field to true, please regard the 'pinsAreVolatile' flag of this connection's bank;<br/> - this field is ignored in case when the user will need to use finAPI's web form. The user will be able to decide whether to store the PIN or not in the web form, depending on the 'storeSecretsAvailableInWebForm' setting (see Client Configuration).
   * @member {Boolean} storePin
   * @default false
   */
  exports.prototype.storePin = false;

  /**
   * The interface to use for connecting with the bank.
   * @member {module:model/ImportBankConnectionParams.InterfaceEnum} _interface
   */
  exports.prototype._interface = undefined;

  /**
   * Set of login credentials. Must be passed in combination with the 'interface' field. For mandators requiring a web form, no matter the passed login credentials, the web form will contain all login fields defined by the bank for the respective interface.
   * @member {Array.<module:model/LoginCredential>} loginCredentials
   */
  exports.prototype.loginCredentials = undefined;

  /**
   * Whether to store the secret login fields. If the secret fields are stored, then updates can be triggered without the involvement of the users, as long as the credentials remain valid and the bank consent has not expired. Note that bank consent will be stored regardless of the field value. Default value is false.<br/><br/>NOTES:<br/> - this field is ignored in case when the user will need to use finAPI's web form. The user will be able to decide whether to store the secrets or not in the web form, depending on the 'storeSecretsAvailableInWebForm' setting (see Client Configuration).
   * @member {Boolean} storeSecrets
   * @default false
   */
  exports.prototype.storeSecrets = false;

  /**
   * Whether to skip the download of transactions and securities or not. If set to true, then finAPI will download just the accounts list with the accounts' information (like account name, number, holder, etc), as well as the accounts' balances (if possible), but skip the download of transactions and securities. Default is false.<br/><br/>NOTES:<br/>&bull; If you skip the download of transactions and securities during an import or update, you can still download them on a later update (though you might not get all positions at a later point, because the date range in which the bank servers provide this data is usually limited). However, once finAPI has downloaded the transactions or securities for the first time, you will not be able to go back to skipping the download of transactions and securities! In other words: Once you make your first request with skipPositionsDownload=false for a certain bank connection, you will no longer be able to make a request with skipPositionsDownload=true for that same bank connection.<br/>&bull; If this bank connection is updated via finAPI's automatic batch update, then transactions and security positions <u>will</u> be downloaded in any case!<br/>&bull; For security accounts, skipping the downloading of the securities might result in the account's balance also not being downloaded.<br/>&bull; For Bausparen accounts, this field is ignored. finAPI will always download transactions for Bausparen accounts.<br/>
   * @member {Boolean} skipPositionsDownload
   * @default false
   */
  exports.prototype.skipPositionsDownload = false;

  /**
   * Whether to load information about the bank connection owner(s) - see field 'owners'. Default value is 'false'.<br><br>NOTE: This feature is supported only by the WEB_SCRAPER interface.
   * @member {Boolean} loadOwnerData
   * @default false
   */
  exports.prototype.loadOwnerData = false;

  /**
   * Use this parameter if you want to limit the date range for transactions download. The value depicts the number of days that finAPI will download transactions for, starting from - and including - today. For example, if you want to download only transactions from within the past 30 days (including today), then pass the value 30. The minimum allowed value is 14, the maximum value is 3650. You may also pass the value 0 though (which is also the default value when you do not specify this parameter), in which case there will be no limit to the transactions download and finAPI will try to get all transactions that it can. Please note that when you specify the parameter there is no guarantee that finAPI will actually download transactions for the entire given date range, as the bank servers may limit the date range on their own. Also note that this parameter only applies to transactions, not to security positions; finAPI will always download all positions that it can get.<br/><br/><b>Please note: If you are not limiting the maxDaysForDownload with a value smaller than 90 days, the bank is more likely to trigger a strong customer authentication request for the user.</b>
   * @member {Number} maxDaysForDownload
   * @default 0
   */
  exports.prototype.maxDaysForDownload = 0;

  /**
   * A set of account types of finAPI account types that are considered for the import. Only accounts whose type matches with one of the given types will be imported. Note that when the bank connection does not contain any accounts of the given types, the import will fail with error code NO_ACCOUNTS_FOR_TYPE_LIST. If no values is given, then all accounts will be imported.<br/><br/><br/>Checking,<br/>Savings,<br/>CreditCard,<br/>Security,<br/>Loan,<br/>Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>Membership,<br/>Bausparen<br/><br/><b>This flag is currently not guaranteed to work for all banks!</b>
   * @member {Array.<module:model/ImportBankConnectionParams.AccountTypesEnum>} accountTypes
   */
  exports.prototype.accountTypes = undefined;

  /**
   * Whitelist of identifiers of finAPI account types that are considered for the import. Only accounts whose type matches with one of the given types will be imported. Note that when the bank connection does not contain any accounts of the given types, the import will fail with error code NO_ACCOUNTS_FOR_TYPE_LIST. If no whitelist is given, then all accounts will be imported.<br/><br/>NOTE: This field is deprecated and would be removed at some point. Please refer to the accountTypes field instead.<br/><br/><br/>1 = Checking,<br/>2 = Savings,<br/>3 = CreditCard,<br/>4 = Security,<br/>5 = Loan,<br/>6 = Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>7 = Membership,<br/>8 = Bausparen<br/><br/><b>This flag is currently not guaranteed to work for all banks!</b>
   * @member {Array.<Number>} accountTypeIds
   */
  exports.prototype.accountTypeIds = undefined;

  /**
   * List of accounts for which access is requested from the bank. It must only be passed if the bank interface has the DETAILED_CONSENT property set.
   * @member {Array.<module:model/AccountReference>} accountReferences
   */
  exports.prototype.accountReferences = undefined;

  /**
   * NOTE: This field is DEPRECATED and will get removed at some point. Please refer to the 'multiStepAuthentication' field instead.<br/><br/>Challenge response. This field should be set only when the previous attempt of importing the bank connection failed with HTTP code 510, i.e. the bank sent a challenge for the user for an additional authentication. In this case, this field must contain the response to the bank's challenge. Note that in the context of finAPI's web form flow, finAPI will automatically deal with getting the challenge response from the user via the web form.
   * @member {String} challengeResponse
   */
  exports.prototype.challengeResponse = undefined;

  /**
   * Container for multi-step authentication data. Required when a previous service call initiated a multi-step authentication.
   * @member {module:model/MultiStepAuthenticationCallback} multiStepAuthentication
   */
  exports.prototype.multiStepAuthentication = undefined;

  /**
   * Must only be passed when the used interface has the property REDIRECT_APPROACH and no web form flow is used. The user will be redirected to the given URL from the bank's website after having entered his credentials. Must use HTTPS protocol.
   * @member {String} redirectUrl
   */
  exports.prototype.redirectUrl = undefined;


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


  /**
   * Allowed values for the <code>accountTypes</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountTypesEnum = {
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