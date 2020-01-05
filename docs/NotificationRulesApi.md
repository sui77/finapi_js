# FinApiResTfulServices.NotificationRulesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNotificationRule**](NotificationRulesApi.md#createNotificationRule) | **POST** /api/v1/notificationRules | Create a new notification rule
[**deleteAllNotificationRules**](NotificationRulesApi.md#deleteAllNotificationRules) | **DELETE** /api/v1/notificationRules | Delete all notification rules
[**deleteNotificationRule**](NotificationRulesApi.md#deleteNotificationRule) | **DELETE** /api/v1/notificationRules/{id} | Delete a notification rule
[**getAndSearchAllNotificationRules**](NotificationRulesApi.md#getAndSearchAllNotificationRules) | **GET** /api/v1/notificationRules | Get and search all notification rules
[**getNotificationRule**](NotificationRulesApi.md#getNotificationRule) | **GET** /api/v1/notificationRules/{id} | Get a notification rule


<a name="createNotificationRule"></a>
# **createNotificationRule**
> NotificationRule createNotificationRule(body)

Create a new notification rule

Create a new notification rule for a specific user. Must pass the user's access_token.<br/><br/>Setting up notification rules for a user allows your client application to get notified about changes in the user's data, e.g. when new transactions were downloaded, an account's balance has changed, or the user's banking credentials are no longer correct. Note that currently, this feature is implemented only for finAPI's automatic batch update, i.e. notification rules are only relevant when the user has activated the automatic updates (and when the automatic batch update is activated in general for your client).<br/><br/>There are different kinds of notification rules. The kind of a rule is depicted by the 'triggerEvent'. The trigger event specifies what data you have to pass when creating a rule (specifically, the contents of the 'params' field), on which events finAPI will send notifications to your client application, as well as what data is contained in those notifications. The specifics of the different trigger events are documented in the following article on our Dev Portal: <a href='https://finapi.zendesk.com/hc/en-us/articles/232324608-How-to-create-notification-rules-and-receive-notifications' target='_blank'>How to create notification rules and receive notifications</a>

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.NotificationRulesApi();

var body = new FinApiResTfulServices.NotificationRuleParams(); // NotificationRuleParams | Notification rule parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNotificationRule(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NotificationRuleParams**](NotificationRuleParams.md)| Notification rule parameters | 

### Return type

[**NotificationRule**](NotificationRule.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteAllNotificationRules"></a>
# **deleteAllNotificationRules**
> IdentifierList deleteAllNotificationRules()

Delete all notification rules

Delete all notification rules of the user that is authorized by the access_token. Must pass the user's access_token. 

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.NotificationRulesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAllNotificationRules(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**IdentifierList**](IdentifierList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNotificationRule"></a>
# **deleteNotificationRule**
> deleteNotificationRule(id)

Delete a notification rule

Delete a single notification rule of the user that is authorized by the access_token. Must pass the notification rule's identifier and the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.NotificationRulesApi();

var id = 789; // Number | Identifier of the notification rule to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNotificationRule(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of the notification rule to delete | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAndSearchAllNotificationRules"></a>
# **getAndSearchAllNotificationRules**
> NotificationRuleList getAndSearchAllNotificationRules(opts)

Get and search all notification rules

Get notification rules of the user that is authorized by the access_token. Must pass the user's access_token. You can set optional search criteria to get only those notification rules that you are interested in. If you do not specify any search criteria, then this service functions as a 'get all' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.NotificationRulesApi();

var opts = { 
  'ids': [3.4], // [Number] | A comma-separated list of notification rule identifiers. If specified, then only notification rules whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000.
  'triggerEvent': "triggerEvent_example", // String | If specified, then only notification rules with given trigger event will be regarded.
  'includeDetails': true // Boolean | If specified, then only notification rules that include or not include details will be regarded.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAndSearchAllNotificationRules(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| A comma-separated list of notification rule identifiers. If specified, then only notification rules whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000. | [optional] 
 **triggerEvent** | **String**| If specified, then only notification rules with given trigger event will be regarded. | [optional] 
 **includeDetails** | **Boolean**| If specified, then only notification rules that include or not include details will be regarded. | [optional] 

### Return type

[**NotificationRuleList**](NotificationRuleList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNotificationRule"></a>
# **getNotificationRule**
> NotificationRule getNotificationRule(id)

Get a notification rule

Get a single notification rule of the user that is authorized by the access_token. Must pass the notification rule's identifier and the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.NotificationRulesApi();

var id = 789; // Number | Identifier of requested notification rule


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNotificationRule(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of requested notification rule | 

### Return type

[**NotificationRule**](NotificationRule.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

