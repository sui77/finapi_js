# FinApiResTfulServices.MandatorAdministrationApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeClientCredentials**](MandatorAdministrationApi.md#changeClientCredentials) | **POST** /api/v1/mandatorAdmin/changeClientCredentials | Change client credentials
[**createIbanRules**](MandatorAdministrationApi.md#createIbanRules) | **POST** /api/v1/mandatorAdmin/ibanRules | Create IBAN rules
[**createKeywordRules**](MandatorAdministrationApi.md#createKeywordRules) | **POST** /api/v1/mandatorAdmin/keywordRules | Create keyword rules
[**deleteIbanRules**](MandatorAdministrationApi.md#deleteIbanRules) | **POST** /api/v1/mandatorAdmin/ibanRules/delete | Delete IBAN rules
[**deleteKeywordRules**](MandatorAdministrationApi.md#deleteKeywordRules) | **POST** /api/v1/mandatorAdmin/keywordRules/delete | Delete keyword rules
[**deleteUsers**](MandatorAdministrationApi.md#deleteUsers) | **POST** /api/v1/mandatorAdmin/deleteUsers | Delete users
[**getIbanRuleList**](MandatorAdministrationApi.md#getIbanRuleList) | **GET** /api/v1/mandatorAdmin/ibanRules | Get IBAN rules
[**getKeywordRuleList**](MandatorAdministrationApi.md#getKeywordRuleList) | **GET** /api/v1/mandatorAdmin/keywordRules | Get keyword rules
[**getUserList**](MandatorAdministrationApi.md#getUserList) | **GET** /api/v1/mandatorAdmin/getUserList | Get user list


<a name="changeClientCredentials"></a>
# **changeClientCredentials**
> changeClientCredentials(body)

Change client credentials

Change the client_secret for any of your clients, including the mandator admin client. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client'>mandator admin client</a>'s access_token. <br/><br/>NOTES:<br/>&bull; When you change a client's secret, then all of its existing access tokens will be revoked. User access tokens are not affected.<br/>&bull; finAPI is storing client secrets with a one-way encryption. A lost client secret can NOT be recovered.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.MandatorAdministrationApi();

var body = new FinApiResTfulServices.ChangeClientCredentialsParams(); // ChangeClientCredentialsParams | Parameters for changing client credentials


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changeClientCredentials(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ChangeClientCredentialsParams**](ChangeClientCredentialsParams.md)| Parameters for changing client credentials | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createIbanRules"></a>
# **createIbanRules**
> IbanRuleList createIbanRules(body)

Create IBAN rules

This service can be used to define IBAN rules for finAPI's transaction categorization system. The transaction categorization is run automatically whenever new transactions are imported, as well as when you call the services 'Check categorization' or 'Trigger categorization'. <br/><br/>An IBAN rule maps an IBAN to a certain category. finAPI's categorization system will pick the category as a candidate for any transaction whose counterpart's account matches the IBAN. It is not guaranteed though that this candidate will actually be applied, as there could be other categorization rules that have higher priority or that are an even better match for the transaction.<br/><br/>Note that the rules that you define here will be applied to all of your users. They have higher priority than finAPI's default categorization rules, but lower priority than user-specific rules (User-specific rules are created implicitly whenever a category is manually assigned to a transaction via the PATCH /transactions services). IBAN rules have a higher priority than keyword rules (see the 'Create keyword rules' service).

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.MandatorAdministrationApi();

var body = new FinApiResTfulServices.IbanRulesParams(); // IbanRulesParams | IBAN rule definitions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createIbanRules(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IbanRulesParams**](IbanRulesParams.md)| IBAN rule definitions | 

### Return type

[**IbanRuleList**](IbanRuleList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createKeywordRules"></a>
# **createKeywordRules**
> KeywordRuleList createKeywordRules(body)

Create keyword rules

This service can be used to define keyword rules for finAPI's transaction categorization system. The transaction categorization is run automatically whenever new transactions are imported, as well as when you call the services 'Check categorization' or 'Trigger categorization'. <br/><br/>A keyword rule maps a set of keywords to a certain category. finAPI's categorization system will pick the category as a candidate for any transaction that contains at least one of the defined keywords in its purpose or counterpart information. It is not guaranteed though that this candidate will actually be applied, as there could be other categorization rules that have higher priority or that are an even better match for the transaction. If there are multiple keyword rules that match a transaction, finAPI will pick the one with the highest count of matched keywords.<br/><br/>Note that the rules that you define here will be applied to all of your users. They have higher priority than finAPI's default categorization rules, but lower priority than user-specific rules (User-specific rules are created implicitly whenever a category is manually assigned to a transaction via the PATCH /transactions services). Keyword rules have a lower priority than IBAN rules (see the 'Create IBAN rules' service).

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.MandatorAdministrationApi();

var body = new FinApiResTfulServices.KeywordRulesParams(); // KeywordRulesParams | Keyword rule definitions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createKeywordRules(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KeywordRulesParams**](KeywordRulesParams.md)| Keyword rule definitions | 

### Return type

[**KeywordRuleList**](KeywordRuleList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteIbanRules"></a>
# **deleteIbanRules**
> IdentifierList deleteIbanRules(body)

Delete IBAN rules

Delete one or multiple IBAN rules that you have previously created via the 'Create IBAN rules' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.MandatorAdministrationApi();

var body = new FinApiResTfulServices.IbanRuleIdentifiersParams(); // IbanRuleIdentifiersParams | List of IBAN rules identifiers.The maximum number of identifiers is 100.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteIbanRules(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IbanRuleIdentifiersParams**](IbanRuleIdentifiersParams.md)| List of IBAN rules identifiers.The maximum number of identifiers is 100. | 

### Return type

[**IdentifierList**](IdentifierList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteKeywordRules"></a>
# **deleteKeywordRules**
> IdentifierList deleteKeywordRules(body)

Delete keyword rules

Delete one or multiple keyword rules that you have previously created via the 'Create keyword rules' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.MandatorAdministrationApi();

var body = new FinApiResTfulServices.KeywordRuleIdentifiersParams(); // KeywordRuleIdentifiersParams | List of keyword rule identifiers.The maximum number of identifiers is 100.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteKeywordRules(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KeywordRuleIdentifiersParams**](KeywordRuleIdentifiersParams.md)| List of keyword rule identifiers.The maximum number of identifiers is 100. | 

### Return type

[**IdentifierList**](IdentifierList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteUsers"></a>
# **deleteUsers**
> UserIdentifiersList deleteUsers(body)

Delete users

Delete one or several users, which are specified by a given list of identifiers. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token. <br/><br/><b>NOTE</b>: finAPI may fail to delete one (or several, or all) of the specified users. A user cannot get deleted when his data is currently locked by an internal process (for instance, update of a bank connection or transactions categorization). The response contains the identifiers of all users that could not get deleted, and all users that could get deleted, separated in two lists. The mandator admin client can retry the request at a later time for the users who could not get deleted.<br/> Note that non-existing user identifiers will be ignored entirely, meaning that those identifiers will not appear in the response at all.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.MandatorAdministrationApi();

var body = new FinApiResTfulServices.UserIdentifiersParams(); // UserIdentifiersParams | List of user identifiers


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUsers(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserIdentifiersParams**](UserIdentifiersParams.md)| List of user identifiers | 

### Return type

[**UserIdentifiersList**](UserIdentifiersList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getIbanRuleList"></a>
# **getIbanRuleList**
> PageableIbanRuleList getIbanRuleList(opts)

Get IBAN rules

Returns all IBAN-based categorization rules that you have defined for your users via the 'Create IBAN rules' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.MandatorAdministrationApi();

var opts = { 
  'page': 1, // Number | Result page that you want to retrieve
  'perPage': 20 // Number | Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIbanRuleList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Result page that you want to retrieve | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]

### Return type

[**PageableIbanRuleList**](PageableIbanRuleList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getKeywordRuleList"></a>
# **getKeywordRuleList**
> PageableKeywordRuleList getKeywordRuleList(opts)

Get keyword rules

Returns all keyword-based categorization rules that you have defined for your users via the 'Create keyword rules' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.MandatorAdministrationApi();

var opts = { 
  'page': 1, // Number | Result page that you want to retrieve
  'perPage': 20 // Number | Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKeywordRuleList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Result page that you want to retrieve | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]

### Return type

[**PageableKeywordRuleList**](PageableKeywordRuleList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserList"></a>
# **getUserList**
> PageableUserInfoList getUserList(opts)

Get user list

<p>Get a list of the users of the mandator that is authorized by the access_token. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token. You can set optional search criteria to get only those users that you are interested in. If you do not specify any search criteria, then this service functions as a 'get all' service.</p><p>Note that the original user id is no longer available in finAPI once a user has been deleted. Because of this, the userId of deleted users will be a distorted version of the original userId. For example, if the deleted user's id was originally 'user', then this service will return 'uXXr' as the userId.</p>

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.MandatorAdministrationApi();

var opts = { 
  'minRegistrationDate': "minRegistrationDate_example", // String | Lower bound for a user's registration date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'registrationDate' is equal to or later than the given date will be regarded.
  'maxRegistrationDate': "maxRegistrationDate_example", // String | Upper bound for a user's registration date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'registrationDate' is equal to or earlier than the given date will be regarded.
  'minDeletionDate': "minDeletionDate_example", // String | Lower bound for a user's deletion date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'deletionDate' is not null, and is equal to or later than the given date will be regarded.
  'maxDeletionDate': "maxDeletionDate_example", // String | Upper bound for a user's deletion date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'deletionDate' is null, or is equal to or earlier than the given date will be regarded.
  'minLastActiveDate': "minLastActiveDate_example", // String | Lower bound for a user's last active date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'lastActiveDate' is not null, and is equal to or later than the given date will be regarded.
  'maxLastActiveDate': "maxLastActiveDate_example", // String | Upper bound for a user's last active date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'lastActiveDate' is null, or is equal to or earlier than the given date will be regarded.
  'includeMonthlyStats': false, // Boolean | Whether to include the 'monthlyStats' for the returned users. If not specified, then the field defaults to 'false'.
  'monthlyStatsStartDate': "monthlyStatsStartDate_example", // String | Minimum bound for the monthly stats (=oldest month that should be included). Must be passed in the format 'YYYY-MM'. If not specified, then the monthly stats will go back up to the first month in which the user existed (date of the user's registration). Note that this field is only regarded if 'includeMonthlyStats' = true.
  'monthlyStatsEndDate': "monthlyStatsEndDate_example", // String | Maximum bound for the monthly stats (=latest month that should be included). Must be passed in the format 'YYYY-MM'. If not specified, then the monthly stats will go up to either the current month (for active users), or up to the month of deletion (for deleted users). Note that this field is only regarded if  'includeMonthlyStats' = true.
  'minBankConnectionCountInMonthlyStats': 0, // Number | A value of X means that the service will return only those users which had at least X bank connections imported at any time within the returned monthly stats set. This field is only regarded when 'includeMonthlyStats' is set to 'true'. The default value for this field is 0.
  'userId': "userId_example", // String | The identifier of a user to search for. If specified, then only the user with the given id will be regarded. If no user can be found for the passed userId (because the user was deleted or his username was misspelled), then the result list will be empty.
  'isDeleted': true, // Boolean | If NOT specified, then the service will regard both active and deleted users in the search. If set to 'true', then ONLY deleted users will be regarded. If set to 'false', then ONLY active users will be regarded.
  'isLocked': true, // Boolean | If NOT specified, then the service will regard both locked and not locked users in the search. If set to 'true', then ONLY locked users will be regarded. If set to 'false', then ONLY not locked users will be regarded.
  'page': 1, // Number | Result page that you want to retrieve
  'perPage': 20, // Number | Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes.
  'order': ["order_example"] // [String] | Determines the order of the results. You can order the results by 'userId'. The default order for this service is 'userId,asc'. The general format is: 'property[,asc|desc]', with 'asc' being the default value. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minRegistrationDate** | **String**| Lower bound for a user's registration date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'registrationDate' is equal to or later than the given date will be regarded. | [optional] 
 **maxRegistrationDate** | **String**| Upper bound for a user's registration date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'registrationDate' is equal to or earlier than the given date will be regarded. | [optional] 
 **minDeletionDate** | **String**| Lower bound for a user's deletion date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'deletionDate' is not null, and is equal to or later than the given date will be regarded. | [optional] 
 **maxDeletionDate** | **String**| Upper bound for a user's deletion date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'deletionDate' is null, or is equal to or earlier than the given date will be regarded. | [optional] 
 **minLastActiveDate** | **String**| Lower bound for a user's last active date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'lastActiveDate' is not null, and is equal to or later than the given date will be regarded. | [optional] 
 **maxLastActiveDate** | **String**| Upper bound for a user's last active date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only users whose 'lastActiveDate' is null, or is equal to or earlier than the given date will be regarded. | [optional] 
 **includeMonthlyStats** | **Boolean**| Whether to include the 'monthlyStats' for the returned users. If not specified, then the field defaults to 'false'. | [optional] [default to false]
 **monthlyStatsStartDate** | **String**| Minimum bound for the monthly stats (=oldest month that should be included). Must be passed in the format 'YYYY-MM'. If not specified, then the monthly stats will go back up to the first month in which the user existed (date of the user's registration). Note that this field is only regarded if 'includeMonthlyStats' = true. | [optional] 
 **monthlyStatsEndDate** | **String**| Maximum bound for the monthly stats (=latest month that should be included). Must be passed in the format 'YYYY-MM'. If not specified, then the monthly stats will go up to either the current month (for active users), or up to the month of deletion (for deleted users). Note that this field is only regarded if  'includeMonthlyStats' = true. | [optional] 
 **minBankConnectionCountInMonthlyStats** | **Number**| A value of X means that the service will return only those users which had at least X bank connections imported at any time within the returned monthly stats set. This field is only regarded when 'includeMonthlyStats' is set to 'true'. The default value for this field is 0. | [optional] [default to 0]
 **userId** | **String**| The identifier of a user to search for. If specified, then only the user with the given id will be regarded. If no user can be found for the passed userId (because the user was deleted or his username was misspelled), then the result list will be empty. | [optional] 
 **isDeleted** | **Boolean**| If NOT specified, then the service will regard both active and deleted users in the search. If set to 'true', then ONLY deleted users will be regarded. If set to 'false', then ONLY active users will be regarded. | [optional] 
 **isLocked** | **Boolean**| If NOT specified, then the service will regard both locked and not locked users in the search. If set to 'true', then ONLY locked users will be regarded. If set to 'false', then ONLY not locked users will be regarded. | [optional] 
 **page** | **Number**| Result page that you want to retrieve | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]
 **order** | [**[String]**](String.md)| Determines the order of the results. You can order the results by 'userId'. The default order for this service is 'userId,asc'. The general format is: 'property[,asc|desc]', with 'asc' being the default value.  | [optional] 

### Return type

[**PageableUserInfoList**](PageableUserInfoList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

