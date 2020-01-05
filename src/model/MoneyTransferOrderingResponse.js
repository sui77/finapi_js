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
    root.FinApiResTfulServices.MoneyTransferOrderingResponse = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MoneyTransferOrderingResponse model module.
   * @module model/MoneyTransferOrderingResponse
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>MoneyTransferOrderingResponse</code>.
   * Bank server's response to a money transfer order request
   * @alias module:model/MoneyTransferOrderingResponse
   * @class
   * @param paymentId {Number} Payment identifier. Can be used to retrieve the status of the payment (see 'Get payments' service).
   */
  var exports = function(paymentId) {
    this.paymentId = paymentId;
  };

  /**
   * Constructs a <code>MoneyTransferOrderingResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MoneyTransferOrderingResponse} obj Optional instance to populate.
   * @return {module:model/MoneyTransferOrderingResponse} The populated <code>MoneyTransferOrderingResponse</code> instance.
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
      if (data.hasOwnProperty('challengeMessage'))
        obj.challengeMessage = ApiClient.convertToType(data['challengeMessage'], 'String');
      if (data.hasOwnProperty('answerFieldLabel'))
        obj.answerFieldLabel = ApiClient.convertToType(data['answerFieldLabel'], 'String');
      if (data.hasOwnProperty('tanListNumber'))
        obj.tanListNumber = ApiClient.convertToType(data['tanListNumber'], 'String');
      if (data.hasOwnProperty('opticalData'))
        obj.opticalData = ApiClient.convertToType(data['opticalData'], 'String');
      if (data.hasOwnProperty('photoTanMimeType'))
        obj.photoTanMimeType = ApiClient.convertToType(data['photoTanMimeType'], 'String');
      if (data.hasOwnProperty('photoTanData'))
        obj.photoTanData = ApiClient.convertToType(data['photoTanData'], 'String');
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

  /**
   * Message from the bank server containing information or instructions on how to retrieve the TAN that is needed to execute the requested order. This message should be presented to the user. Note that some bank servers may limit the message to just the most crucial information, e.g. the message may contain just a single number that depicts the target TAN number on a user's TAN list. You may want to parse the challenge message for such cases and extend it with more detailed information before showing it to the user.
   * @member {String} challengeMessage
   */
  exports.prototype.challengeMessage = undefined;

  /**
   * Suggestion from the bank server on how you can label your input field where the user must enter his TAN. A typical value that many bank servers give is 'TAN-Nummer'.
   * @member {String} answerFieldLabel
   */
  exports.prototype.answerFieldLabel = undefined;

  /**
   * In case that the bank server has instructed the user to look up a TAN from a TAN list, this field may contain the identification number of the TAN list. However in most cases, this field is only set (i.e. not null) when the user has multiple active TAN lists.
   * @member {String} tanListNumber
   */
  exports.prototype.tanListNumber = undefined;

  /**
   * In case that the bank server has instructed the user to scan a flicker code, then this field will contain the raw data for the flicker animation as a BASE-64 string. Otherwise, this field will be not set (i.e. null). For more information on how to process the flicker code data, please address the <a href='https://finapi.zendesk.com' target='_blank'>finAPI Developer Portal</a>.
   * @member {String} opticalData
   */
  exports.prototype.opticalData = undefined;

  /**
   * In case that the 'photoTanData' field is set (i.e. not null), this field contains the MIME type to use for interpreting the photo data (e.g.: 'image/png')
   * @member {String} photoTanMimeType
   */
  exports.prototype.photoTanMimeType = undefined;

  /**
   * In case that the bank server has instructed the user to scan a photo (or more generally speaking, any kind of QR-code-like data), then this field will contain the raw data of the photo as a BASE-64 string. Otherwise, this field will be not set (i.e. null). For more information on how to process the photo data, please address the <a href='https://finapi.zendesk.com' target='_blank'>finAPI Developer Portal</a>.
   * @member {String} photoTanData
   */
  exports.prototype.photoTanData = undefined;

  return exports;

}));
