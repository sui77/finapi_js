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
    root.FinApiResTfulServices.TppCertificate = factory(root.FinApiResTfulServices.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TppCertificate model module.
   * @module model/TppCertificate
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>TppCertificate</code>.
   * A container for the bank certificate's data
   * @alias module:model/TppCertificate
   * @class
   * @param id {Number} A certificate identifier.
   * @param certificateType {module:model/TppCertificate.CertificateTypeEnum} Type of certificate.
   */
  var exports = function(id, certificateType) {
    this.id = id;
    this.certificateType = certificateType;
  };

  /**
   * Constructs a <code>TppCertificate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TppCertificate} obj Optional instance to populate.
   * @return {module:model/TppCertificate} The populated <code>TppCertificate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('certificateType'))
        obj.certificateType = ApiClient.convertToType(data['certificateType'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('validFrom'))
        obj.validFrom = ApiClient.convertToType(data['validFrom'], 'String');
      if (data.hasOwnProperty('validUntil'))
        obj.validUntil = ApiClient.convertToType(data['validUntil'], 'String');
    }
    return obj;
  }

  /**
   * A certificate identifier.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Type of certificate.
   * @member {module:model/TppCertificate.CertificateTypeEnum} certificateType
   */
  exports.prototype.certificateType = undefined;

  /**
   * Optional label of certificate.
   * @member {String} label
   */
  exports.prototype.label = undefined;

  /**
   * Valid from date in the format 'YYYY-MM-DD'.
   * @member {String} validFrom
   */
  exports.prototype.validFrom = undefined;

  /**
   * Valid until date in the format 'YYYY-MM-DD'.
   * @member {String} validUntil
   */
  exports.prototype.validUntil = undefined;


  /**
   * Allowed values for the <code>certificateType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CertificateTypeEnum = {
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
