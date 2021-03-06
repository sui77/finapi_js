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
    root.FinApiResTfulServices.TppCertificateParams = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TppCertificateParams model module.
   * @module model/TppCertificateParams
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>TppCertificateParams</code>.
   * A container for the new certificate data
   * @alias module:model/TppCertificateParams
   * @class
   * @param type {module:model/TppCertificateParams.TypeEnum} A type of certificate submitted
   * @param publicKey {String} A certificate (public key)
   * @param privateKey {String} A private key in PKCS #8 or PKCS #1 format. PKCS #1/#8 private keys are typically exchanged in the PEM base64-encoded format (https://support.quovadisglobal.com/kb/a37/what-is-pem-format.aspx)</br></br>NOTE: The certificate should have one of the following headers:</br>- '-----BEGIN RSA PRIVATE KEY-----'<br>- '-----BEGIN PRIVATE KEY-----'</br>- '-----BEGIN ENCRYPTED PRIVATE KEY-----'<br>Any other header denotes that the private key is neither in PKCS #8 nor in PKCS #1 formats!
   * @param label {String} A label for certificate to identify in the list of certificates
   */
  var exports = function(type, publicKey, privateKey, label) {
    this.type = type;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
    this.label = label;
  };

  /**
   * Constructs a <code>TppCertificateParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TppCertificateParams} obj Optional instance to populate.
   * @return {module:model/TppCertificateParams} The populated <code>TppCertificateParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('publicKey'))
        obj.publicKey = ApiClient.convertToType(data['publicKey'], 'String');
      if (data.hasOwnProperty('privateKey'))
        obj.privateKey = ApiClient.convertToType(data['privateKey'], 'String');
      if (data.hasOwnProperty('passphrase'))
        obj.passphrase = ApiClient.convertToType(data['passphrase'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('validFromDate'))
        obj.validFromDate = ApiClient.convertToType(data['validFromDate'], 'String');
      if (data.hasOwnProperty('validUntilDate'))
        obj.validUntilDate = ApiClient.convertToType(data['validUntilDate'], 'String');
    }
    return obj;
  }

  /**
   * A type of certificate submitted
   * @member {module:model/TppCertificateParams.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * A certificate (public key)
   * @member {String} publicKey
   */
  exports.prototype.publicKey = undefined;

  /**
   * A private key in PKCS #8 or PKCS #1 format. PKCS #1/#8 private keys are typically exchanged in the PEM base64-encoded format (https://support.quovadisglobal.com/kb/a37/what-is-pem-format.aspx)</br></br>NOTE: The certificate should have one of the following headers:</br>- '-----BEGIN RSA PRIVATE KEY-----'<br>- '-----BEGIN PRIVATE KEY-----'</br>- '-----BEGIN ENCRYPTED PRIVATE KEY-----'<br>Any other header denotes that the private key is neither in PKCS #8 nor in PKCS #1 formats!
   * @member {String} privateKey
   */
  exports.prototype.privateKey = undefined;

  /**
   * Optional passphrase for the private key
   * @member {String} passphrase
   */
  exports.prototype.passphrase = undefined;

  /**
   * A label for certificate to identify in the list of certificates
   * @member {String} label
   */
  exports.prototype.label = undefined;

  /**
   * Start day of the certificate's validity, in the format 'YYYY-MM-DD'. Default is the passed certificate validFrom date
   * @member {String} validFromDate
   */
  exports.prototype.validFromDate = undefined;

  /**
   * Expiration day of the certificate's validity, in the format 'YYYY-MM-DD'. Default is the passed certificate validUntil date
   * @member {String} validUntilDate
   */
  exports.prototype.validUntilDate = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "QWAC"
     * @const
     */
    QWAC: "QWAC",

    /**
     * value: "QSEALC"
     * @const
     */
    QSEALC: "QSEALC"
  };

  return exports;

}));
