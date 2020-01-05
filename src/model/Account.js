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
    define(['ApiClient', 'model/AccountInterface', 'model/ClearingAccountData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountInterface'), require('./ClearingAccountData'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.Account = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.AccountInterface, root.FinApiResTfulServices.ClearingAccountData);
  }
}(this, function(ApiClient, AccountInterface, ClearingAccountData) {
  'use strict';

  /**
   * The Account model module.
   * @module model/Account
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>Account</code>.
   * Container for a bank account's data
   * @alias module:model/Account
   * @class
   * @param id {Number} Account identifier
   * @param bankConnectionId {Number} Identifier of the bank connection that this account belongs to
   * @param accountNumber {String} (National) account number. Note that this value might change whenever the account is updated (for example, leading zeros might be added or removed).
   * @param accountTypeId {Number} Identifier of the account's type. Note that, in general, the type of an account can change any time when the account is being updated. This is subject to changes within the bank's internal account management. However, if the account's type has previously been changed explicitly (via the PATCH method), then the explicitly set type will NOT be automatically changed anymore, even if the type has changed on the bank side. <br/>Note: this field is deprecated and would be removed at some point. Please refer to new field in 'accountType' instead.<br/>1 = Checking,<br/>2 = Savings,<br/>3 = CreditCard,<br/>4 = Security,<br/>5 = Loan,<br/>6 = Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>7 = Membership,<br/>8 = Bausparen<br/>
   * @param accountTypeName {String} Name of the account's type<br/>Note: this field is deprecated and would be removed at some point. Please refer to new field in 'accountType' instead.
   * @param isNew {Boolean} Indicating whether this account is 'new' or not. Any newly imported account will have this flag initially set to true, and remain so until you set it to false (see PATCH /accounts/<id>). How you use this field is up to your interpretation, however it is recommended to set the flag to false for all accounts right after the initial import of the bank connection. This way, you will be able recognize accounts that get newly imported during a later update of the bank connection, by checking for any accounts with the flag set to true right after an update.
   * @param status {module:model/Account.StatusEnum} THIS FIELD IS DEPRECATED AND WILL BE REMOVED. Refer to the 'status' field in 'interfaces' instead.<br/><br/>The current status of the account. Possible values are:<br/>&bull; <code>UPDATED</code> means that the account is up to date from finAPI's point of view. This means that no current import/update is running, and the previous import/update could successfully update the account's data (e.g. transactions and securities), and the bank given balance matched the transaction's calculated sum, meaning that no adjusting entry ('Zwischensaldo' transaction) was inserted.<br/>&bull; <code>UPDATED_FIXED</code> means that the account is up to date from finAPI's point of view (no current import/update is running, and the previous import/update could successfully update the account's data), BUT there was a deviation in the bank given balance which was fixed by adding an adjusting entry ('Zwischensaldo' transaction).<br/>&bull; <code>DOWNLOAD_IN_PROGRESS</code> means that the account's data is currently being imported/updated.<br/>&bull; <code>DOWNLOAD_FAILED</code> means that the account data could not get successfully imported or updated. Possible reasons: finAPI could not get the account's balance, or it could not parse all transactions/securities, or some internal error has occurred. Also, it could mean that finAPI could not even get to the point of receiving the account data from the bank server, for example because of incorrect login credentials or a network problem. Note however that when we get a balance and just an empty list of transactions or securities, then this is regarded as valid and successful download. The reason for this is that for some accounts that have little activity, we may actually get no recent transactions but only a balance.<br/>&bull; <code>DEPRECATED</code> means that the account could no longer get matched with any account from the bank server. This can mean either that the account was terminated by the user and is no longer sent by the bank server, or that finAPI could no longer match it because the account's data (name, type, iban, account number, etc.) has been changed by the bank.
   * @param supportedOrders {Array.<module:model/Account.SupportedOrdersEnum>} THIS FIELD IS DEPRECATED AND WILL BE REMOVED. Refer to the 'capabilities' in 'interfaces' field instead.<br/><br/>List of orders that this account supports. Possible values are:<br/><br/>&bull; <code>SEPA_MONEY_TRANSFER</code> - single money transfer<br/>&bull; <code>SEPA_COLLECTIVE_MONEY_TRANSFER</code> - collective money transfer<br/>&bull; <code>SEPA_BASIC_DIRECT_DEBIT</code> - single basic direct debit<br/>&bull; <code>SEPA_BASIC_COLLECTIVE_DIRECT_DEBIT</code> - collective basic direct debit<br/>&bull; <code>SEPA_B2B_DIRECT_DEBIT</code> - single Business-To-Business direct debit<br/>&bull; <code>SEPA_B2B_COLLECTIVE_DIRECT_DEBIT</code> - collective Business-To-Business direct debit<br/><br/>Note that this list may be empty if the account is not supporting any of the above orders. Also note that the list is refreshed each time the account is being updated, so available orders may get added or removed in the course of an account update.
   */
  var exports = function(id, bankConnectionId, accountNumber, accountTypeId, accountTypeName, isNew, status, supportedOrders) {
    this.id = id;
    this.bankConnectionId = bankConnectionId;
    this.accountNumber = accountNumber;
    this.accountTypeId = accountTypeId;
    this.accountTypeName = accountTypeName;
    this.isNew = isNew;
    this.status = status;
    this.supportedOrders = supportedOrders;
  };

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('bankConnectionId'))
        obj.bankConnectionId = ApiClient.convertToType(data['bankConnectionId'], 'Number');
      if (data.hasOwnProperty('accountName'))
        obj.accountName = ApiClient.convertToType(data['accountName'], 'String');
      if (data.hasOwnProperty('iban'))
        obj.iban = ApiClient.convertToType(data['iban'], 'String');
      if (data.hasOwnProperty('accountNumber'))
        obj.accountNumber = ApiClient.convertToType(data['accountNumber'], 'String');
      if (data.hasOwnProperty('subAccountNumber'))
        obj.subAccountNumber = ApiClient.convertToType(data['subAccountNumber'], 'String');
      if (data.hasOwnProperty('accountHolderName'))
        obj.accountHolderName = ApiClient.convertToType(data['accountHolderName'], 'String');
      if (data.hasOwnProperty('accountHolderId'))
        obj.accountHolderId = ApiClient.convertToType(data['accountHolderId'], 'String');
      if (data.hasOwnProperty('accountCurrency'))
        obj.accountCurrency = ApiClient.convertToType(data['accountCurrency'], 'String');
      if (data.hasOwnProperty('accountTypeId'))
        obj.accountTypeId = ApiClient.convertToType(data['accountTypeId'], 'Number');
      if (data.hasOwnProperty('accountTypeName'))
        obj.accountTypeName = ApiClient.convertToType(data['accountTypeName'], 'String');
      if (data.hasOwnProperty('accountType'))
        obj.accountType = ApiClient.convertToType(data['accountType'], 'String');
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'Number');
      if (data.hasOwnProperty('overdraft'))
        obj.overdraft = ApiClient.convertToType(data['overdraft'], 'Number');
      if (data.hasOwnProperty('overdraftLimit'))
        obj.overdraftLimit = ApiClient.convertToType(data['overdraftLimit'], 'Number');
      if (data.hasOwnProperty('availableFunds'))
        obj.availableFunds = ApiClient.convertToType(data['availableFunds'], 'Number');
      if (data.hasOwnProperty('lastSuccessfulUpdate'))
        obj.lastSuccessfulUpdate = ApiClient.convertToType(data['lastSuccessfulUpdate'], 'String');
      if (data.hasOwnProperty('lastUpdateAttempt'))
        obj.lastUpdateAttempt = ApiClient.convertToType(data['lastUpdateAttempt'], 'String');
      if (data.hasOwnProperty('isNew'))
        obj.isNew = ApiClient.convertToType(data['isNew'], 'Boolean');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('supportedOrders'))
        obj.supportedOrders = ApiClient.convertToType(data['supportedOrders'], ['String']);
      if (data.hasOwnProperty('interfaces'))
        obj.interfaces = ApiClient.convertToType(data['interfaces'], [AccountInterface]);
      if (data.hasOwnProperty('clearingAccounts'))
        obj.clearingAccounts = ApiClient.convertToType(data['clearingAccounts'], [ClearingAccountData]);
    }
    return obj;
  }

  /**
   * Account identifier
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Identifier of the bank connection that this account belongs to
   * @member {Number} bankConnectionId
   */
  exports.prototype.bankConnectionId = undefined;

  /**
   * Account name
   * @member {String} accountName
   */
  exports.prototype.accountName = undefined;

  /**
   * Account's IBAN. Note that this field can change from 'null' to a value - or vice versa - any time when the account is being updated. This is subject to changes within the bank's internal account management.
   * @member {String} iban
   */
  exports.prototype.iban = undefined;

  /**
   * (National) account number. Note that this value might change whenever the account is updated (for example, leading zeros might be added or removed).
   * @member {String} accountNumber
   */
  exports.prototype.accountNumber = undefined;

  /**
   * Account's sub-account-number. Note that this field can change from 'null' to a value - or vice versa - any time when the account is being updated. This is subject to changes within the bank's internal account management.
   * @member {String} subAccountNumber
   */
  exports.prototype.subAccountNumber = undefined;

  /**
   * Name of the account holder
   * @member {String} accountHolderName
   */
  exports.prototype.accountHolderName = undefined;

  /**
   * Bank's internal identification of the account holder. Note that if your client has no license for processing this field, it will always be 'XXXXX'
   * @member {String} accountHolderId
   */
  exports.prototype.accountHolderId = undefined;

  /**
   * Account's currency
   * @member {String} accountCurrency
   */
  exports.prototype.accountCurrency = undefined;

  /**
   * Identifier of the account's type. Note that, in general, the type of an account can change any time when the account is being updated. This is subject to changes within the bank's internal account management. However, if the account's type has previously been changed explicitly (via the PATCH method), then the explicitly set type will NOT be automatically changed anymore, even if the type has changed on the bank side. <br/>Note: this field is deprecated and would be removed at some point. Please refer to new field in 'accountType' instead.<br/>1 = Checking,<br/>2 = Savings,<br/>3 = CreditCard,<br/>4 = Security,<br/>5 = Loan,<br/>6 = Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>7 = Membership,<br/>8 = Bausparen<br/>
   * @member {Number} accountTypeId
   */
  exports.prototype.accountTypeId = undefined;

  /**
   * Name of the account's type<br/>Note: this field is deprecated and would be removed at some point. Please refer to new field in 'accountType' instead.
   * @member {String} accountTypeName
   */
  exports.prototype.accountTypeName = undefined;

  /**
   * An account type.<br/><br/>Checking,<br/>Savings,<br/>CreditCard,<br/>Security,<br/>Loan,<br/>Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>Membership,<br/>Bausparen<br/><br/>
   * @member {module:model/Account.AccountTypeEnum} accountType
   */
  exports.prototype.accountType = undefined;

  /**
   * Current account balance
   * @member {Number} balance
   */
  exports.prototype.balance = undefined;

  /**
   * Current overdraft
   * @member {Number} overdraft
   */
  exports.prototype.overdraft = undefined;

  /**
   * Overdraft limit
   * @member {Number} overdraftLimit
   */
  exports.prototype.overdraftLimit = undefined;

  /**
   * Current available funds. Note that this field is only set if finAPI can make a definite statement about the current available funds. This might not always be the case, for example if there is not enough information available about the overdraft limit and current overdraft.
   * @member {Number} availableFunds
   */
  exports.prototype.availableFunds = undefined;

  /**
   * THIS FIELD IS DEPRECATED AND WILL BE REMOVED. Refer to the corresponding field in 'interfaces' instead.<br/><br/>Timestamp of when the account was last successfully updated (or initially imported); more precisely: time when the account data (balance and positions) has been stored into the finAPI databases. The value is returned in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time).
   * @member {String} lastSuccessfulUpdate
   */
  exports.prototype.lastSuccessfulUpdate = undefined;

  /**
   * THIS FIELD IS DEPRECATED AND WILL BE REMOVED. Refer to the corresponding field in 'interfaces' instead.<br/><br/>Timestamp of when the account was last tried to be updated (or initially imported); more precisely: time when the update (or initial import) was triggered. The value is returned in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time).
   * @member {String} lastUpdateAttempt
   */
  exports.prototype.lastUpdateAttempt = undefined;

  /**
   * Indicating whether this account is 'new' or not. Any newly imported account will have this flag initially set to true, and remain so until you set it to false (see PATCH /accounts/<id>). How you use this field is up to your interpretation, however it is recommended to set the flag to false for all accounts right after the initial import of the bank connection. This way, you will be able recognize accounts that get newly imported during a later update of the bank connection, by checking for any accounts with the flag set to true right after an update.
   * @member {Boolean} isNew
   */
  exports.prototype.isNew = undefined;

  /**
   * THIS FIELD IS DEPRECATED AND WILL BE REMOVED. Refer to the 'status' field in 'interfaces' instead.<br/><br/>The current status of the account. Possible values are:<br/>&bull; <code>UPDATED</code> means that the account is up to date from finAPI's point of view. This means that no current import/update is running, and the previous import/update could successfully update the account's data (e.g. transactions and securities), and the bank given balance matched the transaction's calculated sum, meaning that no adjusting entry ('Zwischensaldo' transaction) was inserted.<br/>&bull; <code>UPDATED_FIXED</code> means that the account is up to date from finAPI's point of view (no current import/update is running, and the previous import/update could successfully update the account's data), BUT there was a deviation in the bank given balance which was fixed by adding an adjusting entry ('Zwischensaldo' transaction).<br/>&bull; <code>DOWNLOAD_IN_PROGRESS</code> means that the account's data is currently being imported/updated.<br/>&bull; <code>DOWNLOAD_FAILED</code> means that the account data could not get successfully imported or updated. Possible reasons: finAPI could not get the account's balance, or it could not parse all transactions/securities, or some internal error has occurred. Also, it could mean that finAPI could not even get to the point of receiving the account data from the bank server, for example because of incorrect login credentials or a network problem. Note however that when we get a balance and just an empty list of transactions or securities, then this is regarded as valid and successful download. The reason for this is that for some accounts that have little activity, we may actually get no recent transactions but only a balance.<br/>&bull; <code>DEPRECATED</code> means that the account could no longer get matched with any account from the bank server. This can mean either that the account was terminated by the user and is no longer sent by the bank server, or that finAPI could no longer match it because the account's data (name, type, iban, account number, etc.) has been changed by the bank.
   * @member {module:model/Account.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * THIS FIELD IS DEPRECATED AND WILL BE REMOVED. Refer to the 'capabilities' in 'interfaces' field instead.<br/><br/>List of orders that this account supports. Possible values are:<br/><br/>&bull; <code>SEPA_MONEY_TRANSFER</code> - single money transfer<br/>&bull; <code>SEPA_COLLECTIVE_MONEY_TRANSFER</code> - collective money transfer<br/>&bull; <code>SEPA_BASIC_DIRECT_DEBIT</code> - single basic direct debit<br/>&bull; <code>SEPA_BASIC_COLLECTIVE_DIRECT_DEBIT</code> - collective basic direct debit<br/>&bull; <code>SEPA_B2B_DIRECT_DEBIT</code> - single Business-To-Business direct debit<br/>&bull; <code>SEPA_B2B_COLLECTIVE_DIRECT_DEBIT</code> - collective Business-To-Business direct debit<br/><br/>Note that this list may be empty if the account is not supporting any of the above orders. Also note that the list is refreshed each time the account is being updated, so available orders may get added or removed in the course of an account update.
   * @member {Array.<module:model/Account.SupportedOrdersEnum>} supportedOrders
   */
  exports.prototype.supportedOrders = undefined;

  /**
   * Set of interfaces to which this account is connected
   * @member {Array.<module:model/AccountInterface>} interfaces
   */
  exports.prototype.interfaces = undefined;

  /**
   * List of clearing accounts that relate to this account. Clearing accounts can be used for money transfers (see field 'clearingAccountId' of the 'Request SEPA Money Transfer' service).<br><br>NOTE: This field is deprecated and will be removed at some point.
   * @member {Array.<module:model/ClearingAccountData>} clearingAccounts
   */
  exports.prototype.clearingAccounts = undefined;


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


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "UPDATED"
     * @const
     */
    UPDATED: "UPDATED",

    /**
     * value: "UPDATED_FIXED"
     * @const
     */
    UPDATED_FIXED: "UPDATED_FIXED",

    /**
     * value: "DOWNLOAD_IN_PROGRESS"
     * @const
     */
    DOWNLOAD_IN_PROGRESS: "DOWNLOAD_IN_PROGRESS",

    /**
     * value: "DOWNLOAD_FAILED"
     * @const
     */
    DOWNLOAD_FAILED: "DOWNLOAD_FAILED",

    /**
     * value: "DEPRECATED"
     * @const
     */
    DEPRECATED: "DEPRECATED"
  };


  /**
   * Allowed values for the <code>supportedOrders</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SupportedOrdersEnum = {
    /**
     * value: "SEPA_MONEY_TRANSFER"
     * @const
     */
    MONEY_TRANSFER: "SEPA_MONEY_TRANSFER",

    /**
     * value: "SEPA_COLLECTIVE_MONEY_TRANSFER"
     * @const
     */
    COLLECTIVE_MONEY_TRANSFER: "SEPA_COLLECTIVE_MONEY_TRANSFER",

    /**
     * value: "SEPA_BASIC_DIRECT_DEBIT"
     * @const
     */
    BASIC_DIRECT_DEBIT: "SEPA_BASIC_DIRECT_DEBIT",

    /**
     * value: "SEPA_BASIC_COLLECTIVE_DIRECT_DEBIT"
     * @const
     */
    BASIC_COLLECTIVE_DIRECT_DEBIT: "SEPA_BASIC_COLLECTIVE_DIRECT_DEBIT",

    /**
     * value: "SEPA_B2B_DIRECT_DEBIT"
     * @const
     */
    b2BDIRECTDEBIT: "SEPA_B2B_DIRECT_DEBIT",

    /**
     * value: "SEPA_B2B_COLLECTIVE_DIRECT_DEBIT"
     * @const
     */
    b2BCOLLECTIVEDIRECTDEBIT: "SEPA_B2B_COLLECTIVE_DIRECT_DEBIT"
  };

  return exports;

}));