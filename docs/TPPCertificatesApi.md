# FinApiResTfulServices.TPPCertificatesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewCertificate**](TPPCertificatesApi.md#createNewCertificate) | **POST** /api/v1/tppCertificates | Create a new certificate
[**deleteCertificate**](TPPCertificatesApi.md#deleteCertificate) | **DELETE** /api/v1/tppCertificates/{id} | Delete a certificate
[**getAllCertificates**](TPPCertificatesApi.md#getAllCertificates) | **GET** /api/v1/tppCertificates | Get all certificates
[**getCertificate**](TPPCertificatesApi.md#getCertificate) | **GET** /api/v1/tppCertificates/{id} | Get a certificate


<a name="createNewCertificate"></a>
# **createNewCertificate**
> TppCertificate createNewCertificate(body)

Create a new certificate

Upload a new TPP certificate. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token. <br/>QWAC certificate is used to verify your identity by the bank during the TLS handshake.<br/>QsealC certificate is used to sign the requests to the bank.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TPPCertificatesApi();

var body = new FinApiResTfulServices.TppCertificateParams(); // TppCertificateParams | Create new certificate parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNewCertificate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TppCertificateParams**](TppCertificateParams.md)| Create new certificate parameters | 

### Return type

[**TppCertificate**](TppCertificate.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCertificate"></a>
# **deleteCertificate**
> deleteCertificate(id)

Delete a certificate

Delete a single certificate by its id. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TPPCertificatesApi();

var id = 789; // Number | Id of the certificate to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCertificate(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the certificate to delete | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllCertificates"></a>
# **getAllCertificates**
> PageableTppCertificateList getAllCertificates(opts)

Get all certificates

Returns all certificates that you have uploaded via 'Create a new certificate' service. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TPPCertificatesApi();

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
apiInstance.getAllCertificates(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Result page that you want to retrieve | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]

### Return type

[**PageableTppCertificateList**](PageableTppCertificateList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCertificate"></a>
# **getCertificate**
> TppCertificate getCertificate(id)

Get a certificate

Get a single certificate by its id. Must pass the <a href='https://finapi.zendesk.com/hc/en-us/articles/115003661827-Difference-between-app-clients-and-mandator-admin-client' target='_blank'>mandator admin client</a>'s access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TPPCertificatesApi();

var id = 789; // Number | Id of requested certificate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCertificate(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of requested certificate | 

### Return type

[**TppCertificate**](TppCertificate.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

