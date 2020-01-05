# FinApiResTfulServices.UsersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /api/v1/users | Create a new user
[**deleteAuthorizedUser**](UsersApi.md#deleteAuthorizedUser) | **DELETE** /api/v1/users | Delete the authorized user
[**deleteUnverifiedUser**](UsersApi.md#deleteUnverifiedUser) | **DELETE** /api/v1/users/{userId} | Delete an unverified user
[**editAuthorizedUser**](UsersApi.md#editAuthorizedUser) | **PATCH** /api/v1/users | Edit the authorized user
[**executePasswordChange**](UsersApi.md#executePasswordChange) | **POST** /api/v1/users/executePasswordChange | Execute password change
[**getAuthorizedUser**](UsersApi.md#getAuthorizedUser) | **GET** /api/v1/users | Get the authorized user
[**getVerificationStatus**](UsersApi.md#getVerificationStatus) | **GET** /api/v1/users/verificationStatus | Get a user's verification status
[**requestPasswordChange**](UsersApi.md#requestPasswordChange) | **POST** /api/v1/users/requestPasswordChange | Request password change
[**verifyUser**](UsersApi.md#verifyUser) | **POST** /api/v1/users/verify/{userId} | Verify a user


<a name="createUser"></a>
# **createUser**
> User createUser(body)

Create a new user

<p>Create a new user. Must pass your global (i.e. client) access_token. </p><p>This service returns the user's password as plain text. </p><p>The automatic update of the user's bank connections is disabled by default for any new user. User identifiers are regarded case-insensitive by finAPI.</p><p>Please note that finAPI generally has a restricted set of allowed characters for input fields. You can find the allowed characters <a href = \"https://finapi.zendesk.com/hc/en-us/articles/222013148-What-symbols-are-allowed-in-finAPI-\">here</a>. If a field does not explicitly specify a set of allowed characters, then these are the characters that are allowed for the field. Some fields may specify a different set of characters, in which case this will be documented for the field (like for the 'id' field in this service).</p>

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.UsersApi();

var body = new FinApiResTfulServices.UserCreateParams(); // UserCreateParams | User's details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserCreateParams**](UserCreateParams.md)| User's details | 

### Return type

[**User**](User.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteAuthorizedUser"></a>
# **deleteAuthorizedUser**
> deleteAuthorizedUser()

Delete the authorized user

Delete the authorized user. Must pass the user's access_token. ATTENTION: This deletes the user including all of his bank connections, accounts, balance data and transactions! THIS PROCESS CANNOT BE UNDONE! Note that a user cannot get deleted while any of his bank connections are currently busy (in the process of import, update, or transactions categorization). <p>Note: finAPI will send a notification about the deletion of the user to each of your clients that has a user synchronization callback URL set in its configuration. This also includes the client that is performing this request.</p>

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAuthorizedUser(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteUnverifiedUser"></a>
# **deleteUnverifiedUser**
> deleteUnverifiedUser(userId)

Delete an unverified user

Delete an unverified user. Must pass your global (i.e. client) access_token.<br/><br/>Notes:<br/>&bull; Unverified users can only exist if the field 'isUserAutoVerificationEnabled' (see Client Configuration Resource) is set to 'false' (or had been false at some point in the past).<br/>&bull; finAPI will send a notification about the deletion of the user to each of your clients that has a user synchronization callback URL set in its configuration. This also includes the client that is performing this request.<br/>&bull; finAPI regards user identifiers case-insensitive.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.UsersApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUnverifiedUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="editAuthorizedUser"></a>
# **editAuthorizedUser**
> User editAuthorizedUser(body)

Edit the authorized user

Edit the authorized user's data and settings. Must pass the user's access_token. Pass an empty string (but not null) to unset either the email or phone number. At least one field must have a non-null value in the request body. This service returns the user's password as 'XXXXX'.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.UsersApi();

var body = new FinApiResTfulServices.UserUpdateParams(); // UserUpdateParams | User's details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editAuthorizedUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserUpdateParams**](UserUpdateParams.md)| User's details | 

### Return type

[**User**](User.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="executePasswordChange"></a>
# **executePasswordChange**
> executePasswordChange(opts)

Execute password change

Change the password of a user. Must pass your global (i.e. client) access_token.<br/><br/>Note: When changing the password of a user, all tokens that have been handed out for that user (for whatever client) will be revoked! Also note that finAPI regards user identifiers case-insensitive.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.UsersApi();

var opts = { 
  'body': new FinApiResTfulServices.ExecutePasswordChangeParams() // ExecutePasswordChangeParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.executePasswordChange(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExecutePasswordChangeParams**](ExecutePasswordChangeParams.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAuthorizedUser"></a>
# **getAuthorizedUser**
> User getAuthorizedUser()

Get the authorized user

Get the authorized user's data. Must pass the user's access_token. Only the authorized user can get his data, i.e. his access_token must be used. This service returns the user's password as 'XXXXX'.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuthorizedUser(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVerificationStatus"></a>
# **getVerificationStatus**
> VerificationStatusResource getVerificationStatus(userId)

Get a user's verification status

Get the verification status of the requested user. Must pass your global (i.e. client) access_token. Note that finAPI regards user identifiers case-insensitive.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.UsersApi();

var userId = "userId_example"; // String | User's identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVerificationStatus(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User's identifier | 

### Return type

[**VerificationStatusResource**](VerificationStatusResource.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="requestPasswordChange"></a>
# **requestPasswordChange**
> PasswordChangingResource requestPasswordChange(opts)

Request password change

Request password change for a user. Must pass your global (i.e. client) access_token. Note that finAPI regards user identifiers case-insensitive.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.UsersApi();

var opts = { 
  'body': new FinApiResTfulServices.RequestPasswordChangeParams() // RequestPasswordChangeParams | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestPasswordChange(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestPasswordChangeParams**](RequestPasswordChangeParams.md)|  | [optional] 

### Return type

[**PasswordChangingResource**](PasswordChangingResource.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="verifyUser"></a>
# **verifyUser**
> verifyUser(userId)

Verify a user

Verify a user. User verification is only required when your client does not have auto-verification enabled (see field 'isUserAutoVerificationEnabled' in Client Configuration Resource). Must pass your global (i.e. client) access_token. Note that finAPI regards user identifiers case-insensitive.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.UsersApi();

var userId = "userId_example"; // String | User's identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.verifyUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User's identifier | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

