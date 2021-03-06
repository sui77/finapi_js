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
    define(['ApiClient', 'model/Paging', 'model/TppCertificate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Paging'), require('./TppCertificate'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.PageableTppCertificateList = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.Paging, root.FinApiResTfulServices.TppCertificate);
  }
}(this, function(ApiClient, Paging, TppCertificate) {
  'use strict';

  /**
   * The PageableTppCertificateList model module.
   * @module model/PageableTppCertificateList
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>PageableTppCertificateList</code>.
   * Container for bank certificate information with paging info
   * @alias module:model/PageableTppCertificateList
   * @class
   * @param tppCertificates {Array.<module:model/TppCertificate>} List of certificates
   * @param paging {module:model/Paging} Information for pagination
   */
  var exports = function(tppCertificates, paging) {
    this.tppCertificates = tppCertificates;
    this.paging = paging;
  };

  /**
   * Constructs a <code>PageableTppCertificateList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageableTppCertificateList} obj Optional instance to populate.
   * @return {module:model/PageableTppCertificateList} The populated <code>PageableTppCertificateList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('tppCertificates'))
        obj.tppCertificates = ApiClient.convertToType(data['tppCertificates'], [TppCertificate]);
      if (data.hasOwnProperty('paging'))
        obj.paging = Paging.constructFromObject(data['paging']);
    }
    return obj;
  }

  /**
   * List of certificates
   * @member {Array.<module:model/TppCertificate>} tppCertificates
   */
  exports.prototype.tppCertificates = undefined;

  /**
   * Information for pagination
   * @member {module:model/Paging} paging
   */
  exports.prototype.paging = undefined;

  return exports;

}));
