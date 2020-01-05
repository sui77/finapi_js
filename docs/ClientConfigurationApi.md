# FinApiResTfulServices.ClientConfigurationApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editClientConfiguration**](ClientConfigurationApi.md#editClientConfiguration) | **PATCH** /api/v1/clientConfiguration | Edit client configuration
[**getClientConfiguration**](ClientConfigurationApi.md#getClientConfiguration) | **GET** /api/v1/clientConfiguration | Get client configuration


<a name="editClientConfiguration"></a>
# **editClientConfiguration**
> ClientConfiguration editClientConfiguration(opts)

Edit client configuration

Edit your client's configuration. Must pass your global (i.e. client) access_token.<br/><br/> <b>NOTE</b>: When token validity periods are changed, this only applies to newly requested tokens, and does not change the expiration time of already existing tokens.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.ClientConfigurationApi();

var opts = { 
  'body': new FinApiResTfulServices.ClientConfigurationParams() // ClientConfigurationParams | Client configuration parameters
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editClientConfiguration(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ClientConfigurationParams**](ClientConfigurationParams.md)| Client configuration parameters | [optional] 

### Return type

[**ClientConfiguration**](ClientConfiguration.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getClientConfiguration"></a>
# **getClientConfiguration**
> ClientConfiguration getClientConfiguration()

Get client configuration

Get your client's configuration. Must pass your global (i.e. client) access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.ClientConfigurationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClientConfiguration(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ClientConfiguration**](ClientConfiguration.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

