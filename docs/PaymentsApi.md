# FinApiResTfulServices.PaymentsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayments**](PaymentsApi.md#getPayments) | **GET** /api/v1/payments | Get payments


<a name="getPayments"></a>
# **getPayments**
> PageablePaymentResources getPayments(opts)

Get payments

Get payments of the user that is authorized by the access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.PaymentsApi();

var opts = { 
  'ids': [3.4], // [Number] | A comma-separated list of payment identifiers. If specified, then only payments whose identifier is matching any of the given identifiers will be regarded. The maximum number of identifiers is 1000.
  'accountIds': [3.4], // [Number] | A comma-separated list of account identifiers. If specified, then only payments that relate to the given account(s) will be regarded. The maximum number of identifiers is 1000.
  'minAmount': 8.14, // Number | If specified, then only those payments are regarded whose (absolute) total amount is equal or greater than the given amount will be regarded. The value must be a positive (absolute) amount.
  'maxAmount': 8.14, // Number | If specified, then only those payments are regarded whose (absolute) total amount is equal or less than the given amount will be regarded. Value must be a positive (absolute) amount.
  'page': 1, // Number | Result page that you want to retrieve
  'perPage': 20, // Number | Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes.
  'order': ["order_example"] // [String] | Determines the order of the results. You can use the following fields for ordering the response: 'id', 'amount', 'requestDate' and 'executionDate'. The default order for all services is 'id,asc'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| A comma-separated list of payment identifiers. If specified, then only payments whose identifier is matching any of the given identifiers will be regarded. The maximum number of identifiers is 1000. | [optional] 
 **accountIds** | [**[Number]**](Number.md)| A comma-separated list of account identifiers. If specified, then only payments that relate to the given account(s) will be regarded. The maximum number of identifiers is 1000. | [optional] 
 **minAmount** | **Number**| If specified, then only those payments are regarded whose (absolute) total amount is equal or greater than the given amount will be regarded. The value must be a positive (absolute) amount. | [optional] 
 **maxAmount** | **Number**| If specified, then only those payments are regarded whose (absolute) total amount is equal or less than the given amount will be regarded. Value must be a positive (absolute) amount. | [optional] 
 **page** | **Number**| Result page that you want to retrieve | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]
 **order** | [**[String]**](String.md)| Determines the order of the results. You can use the following fields for ordering the response: 'id', 'amount', 'requestDate' and 'executionDate'. The default order for all services is 'id,asc'. | [optional] 

### Return type

[**PageablePaymentResources**](PageablePaymentResources.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

