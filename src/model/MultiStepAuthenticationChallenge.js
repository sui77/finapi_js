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
    define(['ApiClient', 'model/TwoStepProcedure'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TwoStepProcedure'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.MultiStepAuthenticationChallenge = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.TwoStepProcedure);
  }
}(this, function(ApiClient, TwoStepProcedure) {
  'use strict';

  /**
   * The MultiStepAuthenticationChallenge model module.
   * @module model/MultiStepAuthenticationChallenge
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>MultiStepAuthenticationChallenge</code>.
   * Container for multi-step authentication data, as returned by finAPI to the client
   * @alias module:model/MultiStepAuthenticationChallenge
   * @class
   * @param hash {String} Hash for this multi-step authentication flow. Must be passed back to finAPI when continuing the flow.
   * @param status {module:model/MultiStepAuthenticationChallenge.StatusEnum} Indicates the current status of the multi-step authentication flow:<br/><br/>TWO_STEP_PROCEDURE_REQUIRED means that the bank has requested an SCA method selection for the user. In this case, the service should be recalled with a chosen TSP-ID set to the 'twoStepProcedureId' field.<br/>When the web form flow is used, the user is forwarded to finAPI's web form to prompt for his credentials (if they are not stored in finAPI) and to select the preferred SCA method.<br/><br/>CHALLENGE_RESPONSE_REQUIRED means that the bank has requested a challenge code for the previously given TSP (SCA). This status can be completed by setting the 'challengeResponse' field.<br/>When the web form flow is used, the user should submit the challenge response for the challenge message shown by the web form.<br/><br/>REDIRECT_REQUIRED means that the user must be redirected to the bank's website, where the authentication can be finished.<br/>When the web form flow is used, the user should visit the web form, get a redirect to the bank's website, complete the authentication and will then be redirected back to the web form.<br/><br/>DECOUPLED_AUTH_REQUIRED means that the bank has asked for the decoupled authentication. In this case, the 'decoupledCallback' field must be set to true to complete the authentication.<br/><br/>DECOUPLED_AUTH_IN_PROGRESS means that the bank is waiting for the completion of the decoupled authentication by the user. Until this is done, the service should be recalled with the 'decoupledCallback' field set to ‘true’. Once the decoupled authentication is completed by the user, the service returns a successful response.
   */
  var exports = function(hash, status) {
    this.hash = hash;
    this.status = status;
  };

  /**
   * Constructs a <code>MultiStepAuthenticationChallenge</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MultiStepAuthenticationChallenge} obj Optional instance to populate.
   * @return {module:model/MultiStepAuthenticationChallenge} The populated <code>MultiStepAuthenticationChallenge</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('challengeMessage'))
        obj.challengeMessage = ApiClient.convertToType(data['challengeMessage'], 'String');
      if (data.hasOwnProperty('answerFieldLabel'))
        obj.answerFieldLabel = ApiClient.convertToType(data['answerFieldLabel'], 'String');
      if (data.hasOwnProperty('redirectUrl'))
        obj.redirectUrl = ApiClient.convertToType(data['redirectUrl'], 'String');
      if (data.hasOwnProperty('redirectContext'))
        obj.redirectContext = ApiClient.convertToType(data['redirectContext'], 'String');
      if (data.hasOwnProperty('redirectContextField'))
        obj.redirectContextField = ApiClient.convertToType(data['redirectContextField'], 'String');
      if (data.hasOwnProperty('twoStepProcedures'))
        obj.twoStepProcedures = ApiClient.convertToType(data['twoStepProcedures'], [TwoStepProcedure]);
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
   * Hash for this multi-step authentication flow. Must be passed back to finAPI when continuing the flow.
   * @member {String} hash
   */
  exports.prototype.hash = undefined;

  /**
   * Indicates the current status of the multi-step authentication flow:<br/><br/>TWO_STEP_PROCEDURE_REQUIRED means that the bank has requested an SCA method selection for the user. In this case, the service should be recalled with a chosen TSP-ID set to the 'twoStepProcedureId' field.<br/>When the web form flow is used, the user is forwarded to finAPI's web form to prompt for his credentials (if they are not stored in finAPI) and to select the preferred SCA method.<br/><br/>CHALLENGE_RESPONSE_REQUIRED means that the bank has requested a challenge code for the previously given TSP (SCA). This status can be completed by setting the 'challengeResponse' field.<br/>When the web form flow is used, the user should submit the challenge response for the challenge message shown by the web form.<br/><br/>REDIRECT_REQUIRED means that the user must be redirected to the bank's website, where the authentication can be finished.<br/>When the web form flow is used, the user should visit the web form, get a redirect to the bank's website, complete the authentication and will then be redirected back to the web form.<br/><br/>DECOUPLED_AUTH_REQUIRED means that the bank has asked for the decoupled authentication. In this case, the 'decoupledCallback' field must be set to true to complete the authentication.<br/><br/>DECOUPLED_AUTH_IN_PROGRESS means that the bank is waiting for the completion of the decoupled authentication by the user. Until this is done, the service should be recalled with the 'decoupledCallback' field set to ‘true’. Once the decoupled authentication is completed by the user, the service returns a successful response.
   * @member {module:model/MultiStepAuthenticationChallenge.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * In case of status = CHALLENGE_RESPONSE_REQUIRED, this field contains a message from the bank containing instructions for the user on how to proceed with the authorization.
   * @member {String} challengeMessage
   */
  exports.prototype.challengeMessage = undefined;

  /**
   * Suggestion from the bank on how you can label your input field where the user should enter his challenge response.
   * @member {String} answerFieldLabel
   */
  exports.prototype.answerFieldLabel = undefined;

  /**
   * In case of status = REDIRECT_REQUIRED, this field contains the URL to which you must direct the user. It already includes the redirect URL back to your client that you have passed when initiating the service call.
   * @member {String} redirectUrl
   */
  exports.prototype.redirectUrl = undefined;

  /**
   * Set in case of status = REDIRECT_REQUIRED. When the bank redirects the user back to your client, the redirect URL will contain this string, which you must process to identify the user context for the callback on your side.
   * @member {String} redirectContext
   */
  exports.prototype.redirectContext = undefined;

  /**
   * Set in case of status = REDIRECT_REQUIRED. This field is set to the name of the query parameter that contains the 'redirectContext' in the redirect URL from the bank back to your client.
   * @member {String} redirectContextField
   */
  exports.prototype.redirectContextField = undefined;

  /**
   * In case of status = TWO_STEP_PROCEDURE_REQUIRED, this field contains the available two-step procedures. Note that this set does not necessarily match the set that is stored in the respective bank connection interface. You should always use the set from this field for the multi-step authentication flow.
   * @member {Array.<module:model/TwoStepProcedure>} twoStepProcedures
   */
  exports.prototype.twoStepProcedures = undefined;

  /**
   * In case that the bank server has instructed the user to scan a flicker code, then this field will contain the raw data for the flicker animation as a BASE-64 string.
   * @member {String} opticalData
   */
  exports.prototype.opticalData = undefined;

  /**
   * In case that the 'photoTanData' field is set (i.e. not null), this field contains the MIME type to use for interpreting the photo data (e.g.: 'image/png')
   * @member {String} photoTanMimeType
   */
  exports.prototype.photoTanMimeType = undefined;

  /**
   * In case that the bank server has instructed the user to scan a photo (or more generally speaking, any kind of QR-code-like data), then this field will contain the raw data of the photo as a BASE-64 string. 
   * @member {String} photoTanData
   */
  exports.prototype.photoTanData = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "CHALLENGE_RESPONSE_REQUIRED"
     * @const
     */
    CHALLENGE_RESPONSE_REQUIRED: "CHALLENGE_RESPONSE_REQUIRED",

    /**
     * value: "TWO_STEP_PROCEDURE_REQUIRED"
     * @const
     */
    TWO_STEP_PROCEDURE_REQUIRED: "TWO_STEP_PROCEDURE_REQUIRED",

    /**
     * value: "REDIRECT_REQUIRED"
     * @const
     */
    REDIRECT_REQUIRED: "REDIRECT_REQUIRED",

    /**
     * value: "DECOUPLED_AUTH_REQUIRED"
     * @const
     */
    DECOUPLED_AUTH_REQUIRED: "DECOUPLED_AUTH_REQUIRED",

    /**
     * value: "DECOUPLED_AUTH_IN_PROGRESS"
     * @const
     */
    DECOUPLED_AUTH_IN_PROGRESS: "DECOUPLED_AUTH_IN_PROGRESS"
  };

  return exports;

}));
