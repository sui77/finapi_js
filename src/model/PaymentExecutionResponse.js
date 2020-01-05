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
    root.FinApiResTfulServices.PaymentExecutionResponse = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PaymentExecutionResponse model module.
   * @module model/PaymentExecutionResponse
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>PaymentExecutionResponse</code>.
   * Bank server's response to Money Transfer / Direct Debit execution
   * @alias module:model/PaymentExecutionResponse
   * @class
   * @param paymentId {Number} Payment identifier. Can be used to retrieve the status of the payment (see 'Get payments' service).
   */
  var exports = function(paymentId) {
    this.paymentId = paymentId;
  };

  /**
   * Constructs a <code>PaymentExecutionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentExecutionResponse} obj Optional instance to populate.
   * @return {module:model/PaymentExecutionResponse} The populated <code>PaymentExecutionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('successMessage'))
        obj.successMessage = ApiClient.convertToType(data['successMessage'], 'String');
      if (data.hasOwnProperty('warnMessage'))
        obj.warnMessage = ApiClient.convertToType(data['warnMessage'], 'String');
      if (data.hasOwnProperty('paymentId'))
        obj.paymentId = ApiClient.convertToType(data['paymentId'], 'Number');
    }
    return obj;
  }

  /**
   * Technical message from the bank server, confirming the success of the request. Typically, you would not want to present this message to the user. Note that this field may not be set. However if it is not set, it does not necessarily mean that there was an error in processing the request.
   * @member {String} successMessage
   */
  exports.prototype.successMessage = undefined;

  /**
   * In some cases, a bank server may accept the requested order, but return a warn message. This message may be of technical nature, but could also be of interest to the user.
   * @member {String} warnMessage
   */
  exports.prototype.warnMessage = undefined;

  /**
   * Payment identifier. Can be used to retrieve the status of the payment (see 'Get payments' service).
   * @member {Number} paymentId
   */
  exports.prototype.paymentId = undefined;

  return exports;

}));