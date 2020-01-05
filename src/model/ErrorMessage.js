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
    define(['ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.ErrorMessage = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';

  /**
   * The ErrorMessage model module.
   * @module model/ErrorMessage
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>ErrorMessage</code>.
   * Response type when a service call was not successful. Contains details about the error(s) that occurred.
   * @alias module:model/ErrorMessage
   * @class
   * @param errors {Array.<module:model/ErrorDetails>} List of errors
   * @param _date {String} Server date of when the error(s) occurred, in the format YYYY-MM-DD HH:MM:SS.SSS
   * @param endpoint {String} The service endpoint that was called
   * @param authContext {String} Information about the authorization context of the service call
   */
  var exports = function(errors, _date, endpoint, authContext) {
    this.errors = errors;
    this._date = _date;
    this.endpoint = endpoint;
    this.authContext = authContext;
  };

  /**
   * Constructs a <code>ErrorMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorMessage} obj Optional instance to populate.
   * @return {module:model/ErrorMessage} The populated <code>ErrorMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [ErrorDetails]);
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('requestId'))
        obj.requestId = ApiClient.convertToType(data['requestId'], 'String');
      if (data.hasOwnProperty('endpoint'))
        obj.endpoint = ApiClient.convertToType(data['endpoint'], 'String');
      if (data.hasOwnProperty('authContext'))
        obj.authContext = ApiClient.convertToType(data['authContext'], 'String');
      if (data.hasOwnProperty('bank'))
        obj.bank = ApiClient.convertToType(data['bank'], 'String');
    }
    return obj;
  }

  /**
   * List of errors
   * @member {Array.<module:model/ErrorDetails>} errors
   */
  exports.prototype.errors = undefined;

  /**
   * Server date of when the error(s) occurred, in the format YYYY-MM-DD HH:MM:SS.SSS
   * @member {String} _date
   */
  exports.prototype._date = undefined;

  /**
   * ID of the request that caused this error. This is either what you have passed for the header 'X-REQUEST-ID', or an auto-generated ID in case you didn't pass any value for that header.
   * @member {String} requestId
   */
  exports.prototype.requestId = undefined;

  /**
   * The service endpoint that was called
   * @member {String} endpoint
   */
  exports.prototype.endpoint = undefined;

  /**
   * Information about the authorization context of the service call
   * @member {String} authContext
   */
  exports.prototype.authContext = undefined;

  /**
   * BLZ and name (in format \"<BLZ> - <name>\") of a bank that was used for the original request
   * @member {String} bank
   */
  exports.prototype.bank = undefined;

  return exports;

}));