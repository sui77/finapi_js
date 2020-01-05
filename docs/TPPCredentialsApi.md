# FinApiResTfulServices.TPPCredentialsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTppCredential**](TPPCredentialsApi.md#createTppCredential) | **POST** /api/v1/tppCredentials | Create new TPP credentials
[**deleteTppCredential**](TPPCredentialsApi.md#deleteTppCredential) | **DELETE** /api/v1/tppCredentials/{id} | Delete a set of TPP credentials
[**editTppCredential**](TPPCredentialsApi.md#editTppCredential) | **PATCH** /api/v1/tppCredentials/{id} | Edit a set of TPP credentials
[**getAllTppCredentials**](TPPCredentialsApi.md#getAllTppCredentials) | **GET** /api/v1/tppCredentials | Get all TPP credentials
[**getAndSearchTppAuthenticationGroups**](TPPCredentialsApi.md#getAndSearchTppAuthenticationGroups) | **GET** /api/v1/tppCredentials/tppAuthenticationGroups | Get all TPP Authentication Groups
[**getTppCredential**](TPPCredentialsApi.md#getTppCredential) | **GET** /api/v1/tppCredentials/{id} | Get a set of TPP credentials


<a name="createTppCredential"></a>
# **createTppCredential**
> TppCredentials createTppCredential(body)

Create new TPP credentials

Upload TPP credentials for a TPP Authentication Group. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TPPCredentialsApi();

var body = new FinApiResTfulServices.TppCredentialsParams(); // TppCredentialsParams | Parameters of a new set of TPP credentials


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTppCredential(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TppCredentialsParams**](TppCredentialsParams.md)| Parameters of a new set of TPP credentials | 

### Return type

[**TppCredentials**](TppCredentials.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteTppCredential"></a>
# **deleteTppCredential**
> deleteTppCredential(id)

Delete a set of TPP credentials

Delete a single set of TPP credentials by its id. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TPPCredentialsApi();

var id = 789; // Number | Id of the TPP credentials to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTppCredential(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the TPP credentials to delete | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="editTppCredential"></a>
# **editTppCredential**
> TppCredentials editTppCredential(id, body)

Edit a set of TPP credentials

Edit TPP credentials data. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TPPCredentialsApi();

var id = 789; // Number | Id of the TPP credentials to edit

var body = new FinApiResTfulServices.EditTppCredentialParams(); // EditTppCredentialParams | New TPP credentials parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editTppCredential(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the TPP credentials to edit | 
 **body** | [**EditTppCredentialParams**](EditTppCredentialParams.md)| New TPP credentials parameters | 

### Return type

[**TppCredentials**](TppCredentials.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllTppCredentials"></a>
# **getAllTppCredentials**
> PageableTppCredentialResources getAllTppCredentials(opts)

Get all TPP credentials

Get and search all TPP credentials. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token. You can set optional search criteria to get only those TPP credentials that you are interested in. If you do not specify any search criteria, then this service functions as a 'get all' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TPPCredentialsApi();

var opts = { 
  'search': "search_example", // String | Returns only the TPP credentials belonging to those banks whose 'name', 'blz', or 'bic' contains the given search string (the matching works case-insensitive). Note: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must apply to a bank in order for it to get included into the result.
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
apiInstance.getAllTppCredentials(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Returns only the TPP credentials belonging to those banks whose 'name', 'blz', or 'bic' contains the given search string (the matching works case-insensitive). Note: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must apply to a bank in order for it to get included into the result. | [optional] 
 **page** | **Number**| Result page that you want to retrieve | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]

### Return type

[**PageableTppCredentialResources**](PageableTppCredentialResources.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAndSearchTppAuthenticationGroups"></a>
# **getAndSearchTppAuthenticationGroups**
> PageableTppAuthenticationGroupResources getAndSearchTppAuthenticationGroups(opts)

Get all TPP Authentication Groups

Get and search across all available TPP authentication groups. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token. You can set optional search criteria to get only those TPP authentication groups that you are interested in. If you do not specify any search criteria, then this service functions as a 'get all' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TPPCredentialsApi();

var opts = { 
  'ids': [3.4], // [Number] | A comma-separated list of TPP authentication group identifiers. If specified, then only TPP authentication groups whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000.
  'name': "name_example", // String | Only the tpp authentication groups with name matching the given one should appear in the result list
  'bankBlz': "bankBlz_example", // String | Search by connected banks: only the banks with BLZ matching the given one should appear in the result list
  'bankName': "bankName_example", // String | Search by connected banks: only the banks with name matching the given one should appear in the result list
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
apiInstance.getAndSearchTppAuthenticationGroups(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| A comma-separated list of TPP authentication group identifiers. If specified, then only TPP authentication groups whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000. | [optional] 
 **name** | **String**| Only the tpp authentication groups with name matching the given one should appear in the result list | [optional] 
 **bankBlz** | **String**| Search by connected banks: only the banks with BLZ matching the given one should appear in the result list | [optional] 
 **bankName** | **String**| Search by connected banks: only the banks with name matching the given one should appear in the result list | [optional] 
 **page** | **Number**| Result page that you want to retrieve | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]

### Return type

[**PageableTppAuthenticationGroupResources**](PageableTppAuthenticationGroupResources.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getTppCredential"></a>
# **getTppCredential**
> TppCredentials getTppCredential(id)

Get a set of TPP credentials

Get a single set of TPP credentials by its id. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TPPCredentialsApi();

var id = 789; // Number | Id of the requested TPP credentials


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTppCredential(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the requested TPP credentials | 

### Return type

[**TppCredentials**](TppCredentials.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

