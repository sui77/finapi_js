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
    root.FinApiResTfulServices.BankConsent = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BankConsent model module.
   * @module model/BankConsent
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>BankConsent</code>.
   * Bank consent information
   * @alias module:model/BankConsent
   * @class
   * @param status {module:model/BankConsent.StatusEnum} Status of the consent. If <code>PRESENT</code>, it means that finAPI has a consent stored and can use it to connect to the bank. If <code>NOT_PRESENT</code>, finAPI will need to acquire a consent when connecting to the bank, which may require login credentials (either passed by the client, or stored in finAPI), and/or user involvement. Note that even when a consent is <code>PRESENT</code>, it may no longer be valid and finAPI will still have to acquire a new consent.
   * @param expiresAt {String} Expiration time of the consent in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time).
   */
  var exports = function(status, expiresAt) {
    this.status = status;
    this.expiresAt = expiresAt;
  };

  /**
   * Constructs a <code>BankConsent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankConsent} obj Optional instance to populate.
   * @return {module:model/BankConsent} The populated <code>BankConsent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('expiresAt'))
        obj.expiresAt = ApiClient.convertToType(data['expiresAt'], 'String');
    }
    return obj;
  }

  /**
   * Status of the consent. If <code>PRESENT</code>, it means that finAPI has a consent stored and can use it to connect to the bank. If <code>NOT_PRESENT</code>, finAPI will need to acquire a consent when connecting to the bank, which may require login credentials (either passed by the client, or stored in finAPI), and/or user involvement. Note that even when a consent is <code>PRESENT</code>, it may no longer be valid and finAPI will still have to acquire a new consent.
   * @member {module:model/BankConsent.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * Expiration time of the consent in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time).
   * @member {String} expiresAt
   */
  exports.prototype.expiresAt = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "PRESENT"
     * @const
     */
    PRESENT: "PRESENT",

    /**
     * value: "NOT_PRESENT"
     * @const
     */
    NOT_PRESENT: "NOT_PRESENT"
  };

  return exports;

}));