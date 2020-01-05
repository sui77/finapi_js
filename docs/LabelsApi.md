# FinApiResTfulServices.LabelsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLabel**](LabelsApi.md#createLabel) | **POST** /api/v1/labels | Create a new label
[**deleteAllLabels**](LabelsApi.md#deleteAllLabels) | **DELETE** /api/v1/labels | Delete all labels
[**deleteLabel**](LabelsApi.md#deleteLabel) | **DELETE** /api/v1/labels/{id} | Delete a label
[**editLabel**](LabelsApi.md#editLabel) | **PATCH** /api/v1/labels/{id} | Edit a label
[**getAndSearchAllLabels**](LabelsApi.md#getAndSearchAllLabels) | **GET** /api/v1/labels | Get and search all labels
[**getLabel**](LabelsApi.md#getLabel) | **GET** /api/v1/labels/{id} | Get a label
[**getMultipleLabels**](LabelsApi.md#getMultipleLabels) | **GET** /api/v1/labels/{ids} | Get multiple labels


<a name="createLabel"></a>
# **createLabel**
> Label createLabel(body)

Create a new label

Create a new label for a specific user. Must pass the new label's name and the user's access_token.<br/><br/>Users can create labels to flag transactions (see method PATCH /transactions), with the goal of collecting and getting an overview of all transactions of a certain 'type'. In this sense, labels are similar to transaction categories. However, labels are supposed to depict more of an implicit meaning of a transaction. For instance, a user might want to assign a flag to a transaction that reminds him that he can offset it against tax. At the same time, the category of the transactions might be something like 'insurance', which is a more 'fact-based', or 'objective' way of typing the transaction. Despite this semantic difference between categories and labels, there is also the difference that a transaction can be assigned multiple labels at the same time (while in contrast it can have just a single category).

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.LabelsApi();

var body = new FinApiResTfulServices.LabelParams(); // LabelParams | Label's name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLabel(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LabelParams**](LabelParams.md)| Label's name | 

### Return type

[**Label**](Label.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteAllLabels"></a>
# **deleteAllLabels**
> IdentifierList deleteAllLabels()

Delete all labels

Delete all labels of the user that is authorized by the access_token. Must pass the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.LabelsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAllLabels(callback);
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

<a name="deleteLabel"></a>
# **deleteLabel**
> deleteLabel(id)

Delete a label

Delete a single label of the user that is authorized by the access_token. Must pass the label's identifier and the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.LabelsApi();

var id = 789; // Number | Identifier of the label to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLabel(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of the label to delete | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="editLabel"></a>
# **editLabel**
> Label editLabel(id, body)

Edit a label

Change the name of a label of the user that is authorized by the access_token. Must pass the label's identifier, the label's new name and the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.LabelsApi();

var id = 789; // Number | Label's identifier

var body = new FinApiResTfulServices.LabelParams(); // LabelParams | Label's new name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editLabel(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Label's identifier | 
 **body** | [**LabelParams**](LabelParams.md)| Label's new name | 

### Return type

[**Label**](Label.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAndSearchAllLabels"></a>
# **getAndSearchAllLabels**
> PageableLabelList getAndSearchAllLabels(opts)

Get and search all labels

Get labels of the user that is authorized by the access_token. Must pass the user's access_token. You can set optional search criteria to get only those labels that you are interested in. If you do not specify any search criteria, then this service functions as a 'get all' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.LabelsApi();

var opts = { 
  'ids': [3.4], // [Number] | A comma-separated list of label identifiers. If specified, then only labels whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000.
  'search': "search_example", // String | If specified, then only those labels will be contained in the result whose 'name' contains the given search string (the matching works case-insensitive). If no labels contain the search string in their name, then the result will be an empty list. NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the name in order for a label to get included into the result.
  'page': 1, // Number | Result page that you want to retrieve
  'perPage': 20, // Number | Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes.
  'order': ["order_example"] // [String] | Determines the order of the results. You can order the results by 'id' or 'name'. The default order for all services is 'id,asc'. Since both fields (id and name) are unique, ordering by multiple fields is pointless. The general format is: 'property[,asc|desc]', with 'asc' being the default value. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAndSearchAllLabels(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| A comma-separated list of label identifiers. If specified, then only labels whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000. | [optional] 
 **search** | **String**| If specified, then only those labels will be contained in the result whose 'name' contains the given search string (the matching works case-insensitive). If no labels contain the search string in their name, then the result will be an empty list. NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the name in order for a label to get included into the result. | [optional] 
 **page** | **Number**| Result page that you want to retrieve | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]
 **order** | [**[String]**](String.md)| Determines the order of the results. You can order the results by 'id' or 'name'. The default order for all services is 'id,asc'. Since both fields (id and name) are unique, ordering by multiple fields is pointless. The general format is: 'property[,asc|desc]', with 'asc' being the default value.  | [optional] 

### Return type

[**PageableLabelList**](PageableLabelList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getLabel"></a>
# **getLabel**
> Label getLabel(id)

Get a label

Get a single label of the user that is authorized by the access_token. Must pass the label's identifier and the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.LabelsApi();

var id = 789; // Number | Identifier of requested label


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLabel(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of requested label | 

### Return type

[**Label**](Label.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMultipleLabels"></a>
# **getMultipleLabels**
> LabelList getMultipleLabels(ids)

Get multiple labels

Get a list of multiple labels of the user that is authorized by the access_token.Must pass the labels' identifiers and the user's access_token. Identifiers that do not exist or do not relate to the authorized user will not be contained in the result (If this applies to all of the given identifiers, then the result will be an empty list). WARNING: This service is deprecated and will be removed at some point. If you want to get multiple labels, please instead use the service 'Get all labels' and pass a comma-separated list of identifiers as a parameter 'ids'.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.LabelsApi();

var ids = [3.4]; // [Number] | Comma-separated list of identifiers of requested labels


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMultipleLabels(ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| Comma-separated list of identifiers of requested labels | 

### Return type

[**LabelList**](LabelList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

