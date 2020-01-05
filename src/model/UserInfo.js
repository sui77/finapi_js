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
    define(['ApiClient', 'model/MonthlyUserStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MonthlyUserStats'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.UserInfo = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.MonthlyUserStats);
  }
}(this, function(ApiClient, MonthlyUserStats) {
  'use strict';

  /**
   * The UserInfo model module.
   * @module model/UserInfo
   * @version v1.92.0
   */

  /**
   * Constructs a new <code>UserInfo</code>.
   * Container for user information
   * @alias module:model/UserInfo
   * @class
   * @param userId {String} User's identifier
   * @param registrationDate {String} User's registration date, in the format 'YYYY-MM-DD'
   * @param bankConnectionCount {Number} Number of bank connections that currently exist for this user.
   */
  var exports = function(userId, registrationDate, bankConnectionCount) {
    this.userId = userId;
    this.registrationDate = registrationDate;
    this.bankConnectionCount = bankConnectionCount;
  };

  /**
   * Constructs a <code>UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfo} obj Optional instance to populate.
   * @return {module:model/UserInfo} The populated <code>UserInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('registrationDate'))
        obj.registrationDate = ApiClient.convertToType(data['registrationDate'], 'String');
      if (data.hasOwnProperty('deletionDate'))
        obj.deletionDate = ApiClient.convertToType(data['deletionDate'], 'String');
      if (data.hasOwnProperty('lastActiveDate'))
        obj.lastActiveDate = ApiClient.convertToType(data['lastActiveDate'], 'String');
      if (data.hasOwnProperty('bankConnectionCount'))
        obj.bankConnectionCount = ApiClient.convertToType(data['bankConnectionCount'], 'Number');
      if (data.hasOwnProperty('latestBankConnectionImportDate'))
        obj.latestBankConnectionImportDate = ApiClient.convertToType(data['latestBankConnectionImportDate'], 'String');
      if (data.hasOwnProperty('latestBankConnectionDeletionDate'))
        obj.latestBankConnectionDeletionDate = ApiClient.convertToType(data['latestBankConnectionDeletionDate'], 'String');
      if (data.hasOwnProperty('monthlyStats'))
        obj.monthlyStats = ApiClient.convertToType(data['monthlyStats'], [MonthlyUserStats]);
      if (data.hasOwnProperty('isLocked'))
        obj.isLocked = ApiClient.convertToType(data['isLocked'], 'Boolean');
    }
    return obj;
  }

  /**
   * User's identifier
   * @member {String} userId
   */
  exports.prototype.userId = undefined;

  /**
   * User's registration date, in the format 'YYYY-MM-DD'
   * @member {String} registrationDate
   */
  exports.prototype.registrationDate = undefined;

  /**
   * User's deletion date, in the format 'YYYY-MM-DD'. May be null if the user has not been deleted.
   * @member {String} deletionDate
   */
  exports.prototype.deletionDate = undefined;

  /**
   * User's last active date, in the format 'YYYY-MM-DD'. May be null if the user has not yet logged in.
   * @member {String} lastActiveDate
   */
  exports.prototype.lastActiveDate = undefined;

  /**
   * Number of bank connections that currently exist for this user.
   * @member {Number} bankConnectionCount
   */
  exports.prototype.bankConnectionCount = undefined;

  /**
   * Latest date of when a bank connection was imported for this user, in the format 'YYYY-MM-DD'. This field is null when there has never been a bank connection import.
   * @member {String} latestBankConnectionImportDate
   */
  exports.prototype.latestBankConnectionImportDate = undefined;

  /**
   * Latest date of when a bank connection was deleted for this user, in the format 'YYYY-MM-DD'. This field is null when there has never been a bank connection deletion.
   * @member {String} latestBankConnectionDeletionDate
   */
  exports.prototype.latestBankConnectionDeletionDate = undefined;

  /**
   * Additional information about the user's data or activities, broken down in months. The list will by default contain an entry for each month starting with the month of when the user was registered, up to the current month. The date range may vary when you have limited it in the request. <br/><br/>Please note:<br/>&bull; this field is only set when 'includeMonthlyStats' = true, otherwise it will be null.<br/>&bull; the list is always ordered from the latest month first, to the oldest month last.<br/>&bull; the list will never contain an entry for a month that was prior to the month of when the user was registered, or after the month of when the user was deleted, even when you have explicitly set a respective date range. This means that the list may be empty if you are requesting a date range where the user didn't exist yet, or didn't exist any longer.
   * @member {Array.<module:model/MonthlyUserStats>} monthlyStats
   */
  exports.prototype.monthlyStats = undefined;

  /**
   * Whether the user is currently locked (for further information, see the 'maxUserLoginAttempts' setting in your client's configuration). Note that deleted users will always have this field set to 'false'.
   * @member {Boolean} isLocked
   */
  exports.prototype.isLocked = undefined;

  return exports;

}));