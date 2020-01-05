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
    define(['ApiClient', 'model/KeywordRule', 'model/Paging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./KeywordRule'), require('./Paging'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.PageableKeywordRuleList = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.KeywordRule, root.FinApiResTfulServices.Paging);
  }
}(this, function(ApiClient, KeywordRule, Paging) {
  'use strict';

  /**
   * The PageableKeywordRuleList model module.
   * @module model/PageableKeywordRuleList
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>PageableKeywordRuleList</code>.
   * Container for keyword rule information with paging info
   * @alias module:model/PageableKeywordRuleList
   * @class
   * @param keywordRules {Array.<module:model/KeywordRule>} List of keyword rules
   * @param paging {module:model/Paging} Information for pagination
   */
  var exports = function(keywordRules, paging) {
    this.keywordRules = keywordRules;
    this.paging = paging;
  };

  /**
   * Constructs a <code>PageableKeywordRuleList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageableKeywordRuleList} obj Optional instance to populate.
   * @return {module:model/PageableKeywordRuleList} The populated <code>PageableKeywordRuleList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('keywordRules'))
        obj.keywordRules = ApiClient.convertToType(data['keywordRules'], [KeywordRule]);
      if (data.hasOwnProperty('paging'))
        obj.paging = Paging.constructFromObject(data['paging']);
    }
    return obj;
  }

  /**
   * List of keyword rules
   * @member {Array.<module:model/KeywordRule>} keywordRules
   */
  exports.prototype.keywordRules = undefined;

  /**
   * Information for pagination
   * @member {module:model/Paging} paging
   */
  exports.prototype.paging = undefined;

  return exports;

}));
