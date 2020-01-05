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
    define(['ApiClient', 'model/MultiStepAuthenticationCallback', 'model/SingleDirectDebitData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MultiStepAuthenticationCallback'), require('./SingleDirectDebitData'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.RequestSepaDirectDebitParams = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.MultiStepAuthenticationCallback, root.FinApiResTfulServices.SingleDirectDebitData);
  }
}(this, function(ApiClient, MultiStepAuthenticationCallback, SingleDirectDebitData) {
  'use strict';

  /**
   * The RequestSepaDirectDebitParams model module.
   * @module model/RequestSepaDirectDebitParams
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>RequestSepaDirectDebitParams</code>.
   * Parameters for a single or collective SEPA direct debit order request
   * @alias module:model/RequestSepaDirectDebitParams
   * @class
   * @param accountId {Number} Identifier of the bank account to which you want to transfer the money.
   * @param directDebitType {module:model/RequestSepaDirectDebitParams.DirectDebitTypeEnum} Type of the direct debit; either <code>BASIC</code> or <code>B2B</code> (Business-To-Business). Please note that an account which supports the basic type must not necessarily support B2B (or vice versa). Check the source account's 'supportedOrders' field to find out which types of direct debit it supports.<br/><br/>
   * @param sequenceType {module:model/RequestSepaDirectDebitParams.SequenceTypeEnum} Sequence type of the direct debit. Possible values:<br/><br/>&bull; <code>OOFF</code> - means that this is a one-time direct debit order<br/>&bull; <code>FRST</code> - means that this is the first in a row of multiple direct debit orders<br/>&bull; <code>RCUR</code> - means that this is one (but not the first or final) within a row of multiple direct debit orders<br/>&bull; <code>FNAL</code> - means that this is the final in a row of multiple direct debit orders<br/><br/>
   * @param executionDate {String} Execution date for the direct debit(s), in the format 'YYYY-MM-DD'.
   * @param directDebits {Array.<module:model/SingleDirectDebitData>} List of the direct debits that you want to execute (may contain at most 15000 items). Please check the account's 'supportedOrders' field to find out whether you can pass multiple direct debits or just one.
   */
  var exports = function(accountId, directDebitType, sequenceType, executionDate, directDebits) {
    this.accountId = accountId;
    this.directDebitType = directDebitType;
    this.sequenceType = sequenceType;
    this.executionDate = executionDate;
    this.directDebits = directDebits;
  };

  /**
   * Constructs a <code>RequestSepaDirectDebitParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestSepaDirectDebitParams} obj Optional instance to populate.
   * @return {module:model/RequestSepaDirectDebitParams} The populated <code>RequestSepaDirectDebitParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'Number');
      if (data.hasOwnProperty('bankingPin'))
        obj.bankingPin = ApiClient.convertToType(data['bankingPin'], 'String');
      if (data.hasOwnProperty('storeSecrets'))
        obj.storeSecrets = ApiClient.convertToType(data['storeSecrets'], 'Boolean');
      if (data.hasOwnProperty('twoStepProcedureId'))
        obj.twoStepProcedureId = ApiClient.convertToType(data['twoStepProcedureId'], 'String');
      if (data.hasOwnProperty('directDebitType'))
        obj.directDebitType = ApiClient.convertToType(data['directDebitType'], 'String');
      if (data.hasOwnProperty('sequenceType'))
        obj.sequenceType = ApiClient.convertToType(data['sequenceType'], 'String');
      if (data.hasOwnProperty('executionDate'))
        obj.executionDate = ApiClient.convertToType(data['executionDate'], 'String');
      if (data.hasOwnProperty('singleBooking'))
        obj.singleBooking = ApiClient.convertToType(data['singleBooking'], 'Boolean');
      if (data.hasOwnProperty('directDebits'))
        obj.directDebits = ApiClient.convertToType(data['directDebits'], [SingleDirectDebitData]);
      if (data.hasOwnProperty('hideTransactionDetailsInWebForm'))
        obj.hideTransactionDetailsInWebForm = ApiClient.convertToType(data['hideTransactionDetailsInWebForm'], 'Boolean');
      if (data.hasOwnProperty('multiStepAuthentication'))
        obj.multiStepAuthentication = MultiStepAuthenticationCallback.constructFromObject(data['multiStepAuthentication']);
      if (data.hasOwnProperty('storePin'))
        obj.storePin = ApiClient.convertToType(data['storePin'], 'Boolean');
    }
    return obj;
  }

  /**
   * Identifier of the bank account to which you want to transfer the money.
   * @member {Number} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * Online banking PIN. Any symbols are allowed. Max length: 170. If a PIN is stored in the bank connection, then this field may remain unset. If finAPI's web form is not required and the field is set though then it will always be used (even if there is some other PIN stored in the bank connection). If you want the user to enter a PIN in finAPI's web form even when a PIN is stored, then just set the field to any value, so that the service recognizes that you wish to use the web form flow.
   * @member {String} bankingPin
   */
  exports.prototype.bankingPin = undefined;

  /**
   * Whether to store the PIN. If the PIN is stored, it is not required to pass the PIN again when executing SEPA orders. Default value is 'false'. <br/><br/>NOTES:<br/> - before you set this field to true, please regard the 'pinsAreVolatile' flag of the bank connection that the account belongs to;<br/> - this field is ignored in case when the user will need to use finAPI's web form. The user will be able to decide whether to store the PIN or not in the web form, depending on the 'storeSecretsAvailableInWebForm' setting (see Client Configuration).
   * @member {Boolean} storeSecrets
   * @default false
   */
  exports.prototype.storeSecrets = false;

  /**
   * The bank-given ID of the two-step-procedure that should be used for the order. For a list of available two-step-procedures, see the corresponding bank connection (GET /bankConnections). If this field is not set, then the bank connection's default two-step-procedure will be used. Note that in this case, when the bank connection has no default two-step-procedure set, then the response of the service depends on whether you need to use finAPI's web form or not. If you need to use the web form, the user will be prompted to select the two-step-procedure within the web form. If you don't need to use the web form, then the service will return an error (passing a value for this field is required in this case).
   * @member {String} twoStepProcedureId
   */
  exports.prototype.twoStepProcedureId = undefined;

  /**
   * Type of the direct debit; either <code>BASIC</code> or <code>B2B</code> (Business-To-Business). Please note that an account which supports the basic type must not necessarily support B2B (or vice versa). Check the source account's 'supportedOrders' field to find out which types of direct debit it supports.<br/><br/>
   * @member {module:model/RequestSepaDirectDebitParams.DirectDebitTypeEnum} directDebitType
   */
  exports.prototype.directDebitType = undefined;

  /**
   * Sequence type of the direct debit. Possible values:<br/><br/>&bull; <code>OOFF</code> - means that this is a one-time direct debit order<br/>&bull; <code>FRST</code> - means that this is the first in a row of multiple direct debit orders<br/>&bull; <code>RCUR</code> - means that this is one (but not the first or final) within a row of multiple direct debit orders<br/>&bull; <code>FNAL</code> - means that this is the final in a row of multiple direct debit orders<br/><br/>
   * @member {module:model/RequestSepaDirectDebitParams.SequenceTypeEnum} sequenceType
   */
  exports.prototype.sequenceType = undefined;

  /**
   * Execution date for the direct debit(s), in the format 'YYYY-MM-DD'.
   * @member {String} executionDate
   */
  exports.prototype.executionDate = undefined;

  /**
   * This field is only regarded when you pass multiple orders. It determines whether the orders should be processed by the bank as one collective booking (in case of 'false'), or as single bookings (in case of 'true'). Default value is 'false'.
   * @member {Boolean} singleBooking
   * @default false
   */
  exports.prototype.singleBooking = false;

  /**
   * List of the direct debits that you want to execute (may contain at most 15000 items). Please check the account's 'supportedOrders' field to find out whether you can pass multiple direct debits or just one.
   * @member {Array.<module:model/SingleDirectDebitData>} directDebits
   */
  exports.prototype.directDebits = undefined;

  /**
   * Whether the finAPI web form should hide transaction details when prompting the caller for the second factor. Default value is false.
   * @member {Boolean} hideTransactionDetailsInWebForm
   * @default false
   */
  exports.prototype.hideTransactionDetailsInWebForm = false;

  /**
   * Container for multi-step authentication data. Required when a previous service call initiated a multi-step authentication.
   * @member {module:model/MultiStepAuthenticationCallback} multiStepAuthentication
   */
  exports.prototype.multiStepAuthentication = undefined;

  /**
   * Whether to store the PIN. If the PIN is stored, it is not required to pass the PIN again when executing SEPA orders. Default value is 'false'. <br/><br/>NOTES:<br/> - before you set this field to true, please regard the 'pinsAreVolatile' flag of the bank connection that the account belongs to;<br/> - this field is ignored in case when the user will need to use finAPI's web form. The user will be able to decide whether to store the PIN or not in the web form, depending on the 'storeSecretsAvailableInWebForm' setting (see Client Configuration).<br><br>NOTE: This field is deprecated and will be removed at some point. Use 'storeSecrets' instead.
   * @member {Boolean} storePin
   * @default false
   */
  exports.prototype.storePin = false;


  /**
   * Allowed values for the <code>directDebitType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectDebitTypeEnum = {
    /**
     * value: "B2B"
     * @const
     */
    b2B: "B2B",

    /**
     * value: "BASIC"
     * @const
     */
    BASIC: "BASIC"
  };


  /**
   * Allowed values for the <code>sequenceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SequenceTypeEnum = {
    /**
     * value: "OOFF"
     * @const
     */
    OOFF: "OOFF",

    /**
     * value: "FRST"
     * @const
     */
    FRST: "FRST",

    /**
     * value: "RCUR"
     * @const
     */
    RCUR: "RCUR",

    /**
     * value: "FNAL"
     * @const
     */
    FNAL: "FNAL"
  };

  return exports;

}));
