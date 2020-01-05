# FinApiResTfulServices.BanksApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAndSearchAllBanks**](BanksApi.md#getAndSearchAllBanks) | **GET** /api/v1/banks | Get and search all banks
[**getBank**](BanksApi.md#getBank) | **GET** /api/v1/banks/{id} | Get a bank
[**getMultipleBanks**](BanksApi.md#getMultipleBanks) | **GET** /api/v1/banks/{ids} | Get multiple banks


<a name="getAndSearchAllBanks"></a>
# **getAndSearchAllBanks**
> PageableBankList getAndSearchAllBanks(opts)

Get and search all banks

Get and search banks from finAPI's database of banks. Must pass the authorized user's access_token, or your client's access_token. You can set optional search criteria to get only those banks that you are interested in. If you do not specify any search criteria, then this service functions as a 'get all' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BanksApi();

var opts = { 
  'ids': [3.4], // [Number] | A comma-separated list of bank identifiers. If specified, then only banks whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000.
  'search': "search_example", // String | If specified, then only those banks will be contained in the result whose 'name', 'blz', 'bic' or 'city' contains the given search string (the matching works case-insensitive). If no banks contain the search string in any of the regarded fields, then the result will be an empty list. Note that you may also pass an IBAN in this field, in which case finAPI will try to find the related bank in its database and regard only this bank for the search. Also note: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must apply to a bank in order for it to get included into the result.
  'isSupported': true, // Boolean | If specified, then only supported (in case of 'true' value) or unsupported (in case of 'false' value) banks will be regarded.  NOTE: This field is deprecated and will be removed at some point. Please refer to field 'supportedInterfaces' instead.
  'pinsAreVolatile': true, // Boolean | If specified, then only those banks will be regarded that have the given value (true or false) for their 'pinsAreVolatile' field.  NOTE: This field is deprecated and will be removed at some point.
  'supportedDataSources': ["supportedDataSources_example"], // [String] | Comma-separated list of data sources. Possible values: WEB_SCRAPER,FINTS_SERVER. If this parameter is specified, then only those banks will be regarded in the search that support ALL of the given data sources. Note that this does NOT imply that those data sources must be the only data sources that are supported by a bank.  NOTE: This field is deprecated and will be removed at some point. Please refer to field 'supportedInterfaces' instead.
  'supportedInterfaces': ["supportedInterfaces_example"], // [String] | Comma-separated list of bank interfaces. Possible values: FINTS_SERVER,WEB_SCRAPER,XS2A. If this parameter is specified, then all the banks that support at least one of the given interfaces will be returned. Note that this does NOT imply that those interfaces must be the only ones that are supported by a bank.
  'location': ["location_example"], // [String] | Comma-separated list of two-letter country codes (ISO 3166 ALPHA-2). If set, then only those banks will be regarded in the search that are located in the specified countries. Notes: Banks which do not have a location set (i.e. international institutes) will ALWAYS be regarded in the search, independent of what you specify for this field. When you pass a country code that doesn't exist in the ISO 3166 ALPHA-2 standard, then the service will respond with 400 BAD_REQUEST.
  'tppAuthenticationGroupIds': [3.4], // [Number] | A comma-separated list of TPP authentication group identifiers. If specified, then only banks who have at least one interface belonging to one of the given groups will be regarded. The maximum number of identifiers is 1000.
  'isTestBank': true, // Boolean | If specified, then only those banks will be regarded that have the given value (true or false) for their 'isTestBank' field.
  'page': 1, // Number | Result page that you want to retrieve.
  'perPage': 20, // Number | Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes.
  'order': ["order_example"] // [String] | Determines the order of the results. You can order the results by 'id', 'name', 'blz', 'bic' or 'popularity'. The default order for all services is 'id,asc'. You can also order by multiple properties. In that case the order of the parameters passed is important. Example: '/banks?order=name,desc&order=id,asc' will return banks ordered by 'name' (descending), where banks with the same 'name' are ordered by 'id' (ascending). The general format is: 'property[,asc|desc]', with 'asc' being the default value. Please note that ordering by multiple fields is not supported in our swagger frontend, but you can test this feature with any HTTP tool of your choice (e.g. postman or DHC). 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAndSearchAllBanks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| A comma-separated list of bank identifiers. If specified, then only banks whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000. | [optional] 
 **search** | **String**| If specified, then only those banks will be contained in the result whose 'name', 'blz', 'bic' or 'city' contains the given search string (the matching works case-insensitive). If no banks contain the search string in any of the regarded fields, then the result will be an empty list. Note that you may also pass an IBAN in this field, in which case finAPI will try to find the related bank in its database and regard only this bank for the search. Also note: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must apply to a bank in order for it to get included into the result. | [optional] 
 **isSupported** | **Boolean**| If specified, then only supported (in case of 'true' value) or unsupported (in case of 'false' value) banks will be regarded.  NOTE: This field is deprecated and will be removed at some point. Please refer to field 'supportedInterfaces' instead. | [optional] 
 **pinsAreVolatile** | **Boolean**| If specified, then only those banks will be regarded that have the given value (true or false) for their 'pinsAreVolatile' field.  NOTE: This field is deprecated and will be removed at some point. | [optional] 
 **supportedDataSources** | [**[String]**](String.md)| Comma-separated list of data sources. Possible values: WEB_SCRAPER,FINTS_SERVER. If this parameter is specified, then only those banks will be regarded in the search that support ALL of the given data sources. Note that this does NOT imply that those data sources must be the only data sources that are supported by a bank.  NOTE: This field is deprecated and will be removed at some point. Please refer to field 'supportedInterfaces' instead. | [optional] 
 **supportedInterfaces** | [**[String]**](String.md)| Comma-separated list of bank interfaces. Possible values: FINTS_SERVER,WEB_SCRAPER,XS2A. If this parameter is specified, then all the banks that support at least one of the given interfaces will be returned. Note that this does NOT imply that those interfaces must be the only ones that are supported by a bank. | [optional] 
 **location** | [**[String]**](String.md)| Comma-separated list of two-letter country codes (ISO 3166 ALPHA-2). If set, then only those banks will be regarded in the search that are located in the specified countries. Notes: Banks which do not have a location set (i.e. international institutes) will ALWAYS be regarded in the search, independent of what you specify for this field. When you pass a country code that doesn't exist in the ISO 3166 ALPHA-2 standard, then the service will respond with 400 BAD_REQUEST. | [optional] 
 **tppAuthenticationGroupIds** | [**[Number]**](Number.md)| A comma-separated list of TPP authentication group identifiers. If specified, then only banks who have at least one interface belonging to one of the given groups will be regarded. The maximum number of identifiers is 1000. | [optional] 
 **isTestBank** | **Boolean**| If specified, then only those banks will be regarded that have the given value (true or false) for their 'isTestBank' field. | [optional] 
 **page** | **Number**| Result page that you want to retrieve. | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]
 **order** | [**[String]**](String.md)| Determines the order of the results. You can order the results by 'id', 'name', 'blz', 'bic' or 'popularity'. The default order for all services is 'id,asc'. You can also order by multiple properties. In that case the order of the parameters passed is important. Example: '/banks?order=name,desc&order=id,asc' will return banks ordered by 'name' (descending), where banks with the same 'name' are ordered by 'id' (ascending). The general format is: 'property[,asc|desc]', with 'asc' being the default value. Please note that ordering by multiple fields is not supported in our swagger frontend, but you can test this feature with any HTTP tool of your choice (e.g. postman or DHC).  | [optional] 

### Return type

[**PageableBankList**](PageableBankList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBank"></a>
# **getBank**
> Bank getBank(id)

Get a bank

Get a single bank from finAPI's database of banks. You have to pass the bank's identifier, and either the authorized user's access_token, or your client's access token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BanksApi();

var id = 789; // Number | Identifier of requested bank


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBank(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of requested bank | 

### Return type

[**Bank**](Bank.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMultipleBanks"></a>
# **getMultipleBanks**
> BankList getMultipleBanks(ids)

Get multiple banks

Get a list of multiple banks from finAPI's database of banks. You have to pass a list of bank identifiers, and either the authorized user's access_token, or your client's access token. Note that banks whose identifiers do not exist will not be contained in the result (If this applies to all of the given identifiers, then the result will be an empty list).<br/><br/><b>WARNING</b>: This service is deprecated and will be removed at some point. If you want to get multiple banks, please instead use the service 'Get and search all banks' and pass a comma-separated list of identifiers with the parameter 'ids'.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BanksApi();

var ids = [3.4]; // [Number] | Comma-separated list of identifiers of requested banks


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMultipleBanks(ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| Comma-separated list of identifiers of requested banks | 

### Return type

[**BankList**](BankList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

