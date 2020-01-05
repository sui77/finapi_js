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
    define(['ApiClient', 'model/BadCredentialsError', 'model/ErrorMessage', 'model/IdentifierList', 'model/NotificationRule', 'model/NotificationRuleList', 'model/NotificationRuleParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadCredentialsError'), require('../model/ErrorMessage'), require('../model/IdentifierList'), require('../model/NotificationRule'), require('../model/NotificationRuleList'), require('../model/NotificationRuleParams'));
  } else {
    // Browser globals (root is window)
    if (!root.FinApiResTfulServices) {
      root.FinApiResTfulServices = {};
    }
    root.FinApiResTfulServices.NotificationRulesApi = factory(root.FinApiResTfulServices.ApiClient, root.FinApiResTfulServices.BadCredentialsError, root.FinApiResTfulServices.ErrorMessage, root.FinApiResTfulServices.IdentifierList, root.FinApiResTfulServices.NotificationRule, root.FinApiResTfulServices.NotificationRuleList, root.FinApiResTfulServices.NotificationRuleParams);
  }
}(this, function(ApiClient, BadCredentialsError, ErrorMessage, IdentifierList, NotificationRule, NotificationRuleList, NotificationRuleParams) {
  'use strict';

  /**
   * NotificationRules service.
   * @module api/NotificationRulesApi
   * @version v1.92.0
   */

  /**
   * Constructs a new NotificationRulesApi. 
   * @alias module:api/NotificationRulesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createNotificationRule operation.
     * @callback module:api/NotificationRulesApi~createNotificationRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new notification rule
     * Create a new notification rule for a specific user. Must pass the user's access_token.<br/><br/>Setting up notification rules for a user allows your client application to get notified about changes in the user's data, e.g. when new transactions were downloaded, an account's balance has changed, or the user's banking credentials are no longer correct. Note that currently, this feature is implemented only for finAPI's automatic batch update, i.e. notification rules are only relevant when the user has activated the automatic updates (and when the automatic batch update is activated in general for your client).<br/><br/>There are different kinds of notification rules. The kind of a rule is depicted by the 'triggerEvent'. The trigger event specifies what data you have to pass when creating a rule (specifically, the contents of the 'params' field), on which events finAPI will send notifications to your client application, as well as what data is contained in those notifications. The specifics of the different trigger events are documented in the following article on our Dev Portal: <a href='https://finapi.zendesk.com/hc/en-us/articles/232324608-How-to-create-notification-rules-and-receive-notifications' target='_blank'>How to create notification rules and receive notifications</a>
     * @param {module:model/NotificationRuleParams} body Notification rule parameters
     * @param {module:api/NotificationRulesApi~createNotificationRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationRule}
     */
    this.createNotificationRule = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createNotificationRule");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['finapi_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = NotificationRule;

      return this.apiClient.callApi(
        '/api/v1/notificationRules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAllNotificationRules operation.
     * @callback module:api/NotificationRulesApi~deleteAllNotificationRulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IdentifierList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all notification rules
     * Delete all notification rules of the user that is authorized by the access_token. Must pass the user's access_token. 
     * @param {module:api/NotificationRulesApi~deleteAllNotificationRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IdentifierList}
     */
    this.deleteAllNotificationRules = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['finapi_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = IdentifierList;

      return this.apiClient.callApi(
        '/api/v1/notificationRules', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNotificationRule operation.
     * @callback module:api/NotificationRulesApi~deleteNotificationRuleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a notification rule
     * Delete a single notification rule of the user that is authorized by the access_token. Must pass the notification rule's identifier and the user's access_token.
     * @param {Number} id Identifier of the notification rule to delete
     * @param {module:api/NotificationRulesApi~deleteNotificationRuleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNotificationRule = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteNotificationRule");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['finapi_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/notificationRules/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAndSearchAllNotificationRules operation.
     * @callback module:api/NotificationRulesApi~getAndSearchAllNotificationRulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationRuleList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get and search all notification rules
     * Get notification rules of the user that is authorized by the access_token. Must pass the user's access_token. You can set optional search criteria to get only those notification rules that you are interested in. If you do not specify any search criteria, then this service functions as a 'get all' service.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.ids A comma-separated list of notification rule identifiers. If specified, then only notification rules whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000.
     * @param {module:model/String} opts.triggerEvent If specified, then only notification rules with given trigger event will be regarded.
     * @param {Boolean} opts.includeDetails If specified, then only notification rules that include or not include details will be regarded.
     * @param {module:api/NotificationRulesApi~getAndSearchAllNotificationRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationRuleList}
     */
    this.getAndSearchAllNotificationRules = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'triggerEvent': opts['triggerEvent'],
        'includeDetails': opts['includeDetails'],
      };
      var collectionQueryParams = {
        'ids': {
          value: opts['ids'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['finapi_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = NotificationRuleList;

      return this.apiClient.callApi(
        '/api/v1/notificationRules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNotificationRule operation.
     * @callback module:api/NotificationRulesApi~getNotificationRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a notification rule
     * Get a single notification rule of the user that is authorized by the access_token. Must pass the notification rule's identifier and the user's access_token.
     * @param {Number} id Identifier of requested notification rule
     * @param {module:api/NotificationRulesApi~getNotificationRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationRule}
     */
    this.getNotificationRule = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNotificationRule");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['finapi_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = NotificationRule;

      return this.apiClient.callApi(
        '/api/v1/notificationRules/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
