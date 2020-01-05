# FinApiResTfulServices.CategoriesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](CategoriesApi.md#createCategory) | **POST** /api/v1/categories | Create a new category
[**deleteAllCategories**](CategoriesApi.md#deleteAllCategories) | **DELETE** /api/v1/categories | Delete all categories
[**deleteCategory**](CategoriesApi.md#deleteCategory) | **DELETE** /api/v1/categories/{id} | Delete a category
[**editCategory**](CategoriesApi.md#editCategory) | **PATCH** /api/v1/categories/{id} | Edit a category
[**getAndSearchAllCategories**](CategoriesApi.md#getAndSearchAllCategories) | **GET** /api/v1/categories | Get and search all categories
[**getCashFlows**](CategoriesApi.md#getCashFlows) | **GET** /api/v1/categories/cashFlows | Get cash flows
[**getCategory**](CategoriesApi.md#getCategory) | **GET** /api/v1/categories/{id} | Get a category
[**getMultipleCategories**](CategoriesApi.md#getMultipleCategories) | **GET** /api/v1/categories/{ids} | Get multiple categories
[**trainCategorization**](CategoriesApi.md#trainCategorization) | **POST** /api/v1/categories/trainCategorization | Train categorization


<a name="createCategory"></a>
# **createCategory**
> Category createCategory(opts)

Create a new category

Create a new custom transaction category for the authorized user, that can then be assigned to transactions via PATCH /transactions, and that will also be regarded in finAPI's automatic transactions categorization process. Must pass the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.CategoriesApi();

var opts = { 
  'body': new FinApiResTfulServices.CategoryParams() // CategoryParams | Parameters of the new category
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCategory(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CategoryParams**](CategoryParams.md)| Parameters of the new category | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteAllCategories"></a>
# **deleteAllCategories**
> IdentifierList deleteAllCategories()

Delete all categories

Delete all custom categories of the user that is authorized by the access_token. Must pass the user's access_token. Note that this deletes both parent categories as well as any related sub-categories.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.CategoriesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAllCategories(callback);
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

<a name="deleteCategory"></a>
# **deleteCategory**
> deleteCategory(id)

Delete a category

Delete a single category of the user that is authorized by the access_token. Must pass the user's access_token. Note that you can only delete user-custom categories (category's where the 'isCustom' flag is true). Also note that when deleting a parent category, all its sub-categories will be deleted as well.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.CategoriesApi();

var id = 789; // Number | Category identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCategory(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Category identifier | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="editCategory"></a>
# **editCategory**
> Category editCategory(id, opts)

Edit a category

Change the name of a custom transaction category belonging to the authorized user. Must pass the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.CategoriesApi();

var id = 789; // Number | Identifier of the category to edit

var opts = { 
  'body': new FinApiResTfulServices.EditCategoryParams() // EditCategoryParams | New category name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editCategory(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of the category to edit | 
 **body** | [**EditCategoryParams**](EditCategoryParams.md)| New category name | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAndSearchAllCategories"></a>
# **getAndSearchAllCategories**
> PageableCategoryList getAndSearchAllCategories(opts)

Get and search all categories

Get a list of all global finAPI categories as well as all custom categories of the authorized user. Must pass the user's access_token. You can set optional search criteria to get only those categories that you are interested in. If you do not specify any search criteria, then this service functions as a 'get all' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.CategoriesApi();

var opts = { 
  'ids': [3.4], // [Number] | A comma-separated list of category identifiers. If specified, then only categories whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000.
  'search': "search_example", // String | If specified, then only those categories will be contained in the result whose 'name' contains the given search string (the matching works case-insensitive). If no categories contain the search string in their name, then the result will be an empty list. NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the name in order for a category to get included into the result.
  'isCustom': true, // Boolean | If specified, then the result will contain only categories that are either finAPI global (in case of value 'false'), or only categories that have been created by the authorized user (in case of value 'true').
  'page': 1, // Number | Result page that you want to retrieve.
  'perPage': 20, // Number | Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes.
  'order': ["order_example"] // [String] | Determines the order of the results. You can order the results by 'id', 'name' and 'isCustom'. The default order is 'id,asc'. You can also order by multiple properties. In that case the order of the parameters passed is important. Example: '/categories?order=isCustom,desc&order=name' will return all custom categories followed by all default categories. Both groups are ordered ascending by name. The general format is: 'property[,asc|desc]', with 'asc' being the default value. Please note that ordering by multiple fields is not supported in our swagger frontend, but you can test this feature with any HTTP tool of your choice (e.g. postman or DHC). 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAndSearchAllCategories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| A comma-separated list of category identifiers. If specified, then only categories whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000. | [optional] 
 **search** | **String**| If specified, then only those categories will be contained in the result whose 'name' contains the given search string (the matching works case-insensitive). If no categories contain the search string in their name, then the result will be an empty list. NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the name in order for a category to get included into the result. | [optional] 
 **isCustom** | **Boolean**| If specified, then the result will contain only categories that are either finAPI global (in case of value 'false'), or only categories that have been created by the authorized user (in case of value 'true'). | [optional] 
 **page** | **Number**| Result page that you want to retrieve. | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]
 **order** | [**[String]**](String.md)| Determines the order of the results. You can order the results by 'id', 'name' and 'isCustom'. The default order is 'id,asc'. You can also order by multiple properties. In that case the order of the parameters passed is important. Example: '/categories?order=isCustom,desc&order=name' will return all custom categories followed by all default categories. Both groups are ordered ascending by name. The general format is: 'property[,asc|desc]', with 'asc' being the default value. Please note that ordering by multiple fields is not supported in our swagger frontend, but you can test this feature with any HTTP tool of your choice (e.g. postman or DHC).  | [optional] 

### Return type

[**PageableCategoryList**](PageableCategoryList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCashFlows"></a>
# **getCashFlows**
> CashFlowList getCashFlows(opts)

Get cash flows

Get the cash flow(s) (= total income, spending, and balance) for one or several categories. You can specify various criteria such as the time period to calculate the cash flows for, or what categories to do the calculations for. Note that the cash flow for a category may include the cash flows for all of its sub-categories, or not include it, depending on the 'includeSubCashFlows' setting. Must pass the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.CategoriesApi();

var opts = { 
  'search': "search_example", // String | If specified, then only transactions that contain the search term in their purpose or counterpart fields will be contained in the result. Note that the search is case insensitive.
  'counterpart': "counterpart_example", // String | The counterpart is the person or institution that received your payment, or that you made the payment to. If this parameter is specified, then only transactions that contain the given term in one (or more) of their counterpart fields ('counterpartName', 'counterpartAccountNumber', 'counterpartIban', 'counterpartBic' or 'counterpartBlz') will be contained in the result. Note that the search is case insensitive.
  'purpose': "purpose_example", // String | If specified, then only those transactions will be contained in the result whose purpose field contains the given search string. Note that the search is case insensitive.NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the purpose in order for a transaction to get included into the result.
  'accountIds': [3.4], // [Number] | A comma-separated list of account identifiers. If specified, then only transactions that relate to the given accounts will be regarded. If not specified, then all accounts will be regarded.
  'minBankBookingDate': "minBankBookingDate_example", // String | Lower bound for a transaction's booking date as returned by the bank (= original booking date), in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'bankBookingDate' is equal to or later than the given date will be regarded.
  'maxBankBookingDate': "maxBankBookingDate_example", // String | Upper bound for a transaction's booking date as returned by the bank (= original booking date), in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'bankBookingDate' is equal to or earlier than the given date will be regarded.
  'minFinapiBookingDate': "minFinapiBookingDate_example", // String | Lower bound for a transaction's booking date as set by finAPI, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). For details about the meaning of the finAPI booking date, please see the field's documentation in the service's response.
  'maxFinapiBookingDate': "maxFinapiBookingDate_example", // String | Upper bound for a transaction's booking date as set by finAPI, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). For details about the meaning of the finAPI booking date, please see the field's documentation in the service's response.
  'minAmount': 8.14, // Number | If specified, then only transactions whose amount is equal to or greater than the given amount will be regarded. Can contain a positive or negative number with at most two decimal places. Examples: -300.12, or 90.95
  'maxAmount': 8.14, // Number | If specified, then only transactions whose amount is equal to or less than the given amount will be regarded. Can contain a positive or negative number with at most two decimal places. Examples: -300.12, or 90.95
  'direction': "all", // String | If specified, then only transactions with the given direction(s) will be regarded. Use 'income' for regarding only received payments (amount >= 0), 'spending' for regarding only outgoing payments (amount < 0), or 'all' to regard both directions. If not specified, the direction defaults to 'all'.
  'labelIds': [3.4], // [Number] | A comma-separated list of label identifiers. If specified, then only transactions that have been marked with at least one of the given labels will be contained in the result.
  'categoryIds': [3.4], // [Number] | If specified, then the result will contain only those cash flows that relate to the given categories. Note that the cash flow for a category may include/exclude the cash flows of its sub-categories, depending on the 'includeSubCashFlows' setting. To include the cash flow of not categorized transactions, pass the value '0' as categoryId. Note: When this parameter is NOT set, then the result will contain a cash flow for all categories that have transactions associated to them (this includes the 'null'-category for the cash flow of not categorized transactions), more precisely: transactions that fulfill the filter criteria. Categories that have no associated transactions according to the filter criteria will not appear in the result. However, when you specify this parameter, then all specified categories will have a cash flow entry in the result, even if there are no associated transactions for the category (the cash flow will have income, spending and balance all set to zero).
  'isNew': true, // Boolean | If specified, then only transactions that have their 'isNew' flag set to true/false will be regarded for the cash flow calculations.
  'minImportDate': "minImportDate_example", // String | Lower bound for a transaction's import date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'importDate' is equal to or later than the given date will be regarded.
  'maxImportDate': "maxImportDate_example", // String | Upper bound for a transaction's import date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'importDate' is equal to or earlier than the given date will be regarded.
  'includeSubCashFlows': true, // Boolean | If it is true, then the income, spending, balance and count of transactions of a main category results from all transactions that have either this (main) category or any of its subcategories assigned (of course all transactions depends from the other filtering settings); If it is false, then the income, spending, balance and count of transactions of a main category only results from the transactions that have exactly this (main) category assigned. Default value for this parameter is 'true'.
  'order': ["order_example"] // [String] | Determines the order of the results. You can order the results by 'income', 'spending', 'balance', 'category.id' or 'category.name'. The default order for this service is 'category.id,asc'. You can also order by multiple properties. In that case the order of the parameters passed is important. Example: '/cashFlows?order=income,desc&order=spending,asc&balance,desc' will return as first result the category with the highest income. If two categories have the same income, it returns the category with the highest spending first (because spending is a negative value) and so on. The general format is: 'property[,asc|desc]', with 'asc' being the default value. Please note that ordering by multiple fields is not supported in our swagger frontend, but you can test this feature with any HTTP tool of your choice (e.g. postman or DHC). 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCashFlows(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| If specified, then only transactions that contain the search term in their purpose or counterpart fields will be contained in the result. Note that the search is case insensitive. | [optional] 
 **counterpart** | **String**| The counterpart is the person or institution that received your payment, or that you made the payment to. If this parameter is specified, then only transactions that contain the given term in one (or more) of their counterpart fields ('counterpartName', 'counterpartAccountNumber', 'counterpartIban', 'counterpartBic' or 'counterpartBlz') will be contained in the result. Note that the search is case insensitive. | [optional] 
 **purpose** | **String**| If specified, then only those transactions will be contained in the result whose purpose field contains the given search string. Note that the search is case insensitive.NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the purpose in order for a transaction to get included into the result. | [optional] 
 **accountIds** | [**[Number]**](Number.md)| A comma-separated list of account identifiers. If specified, then only transactions that relate to the given accounts will be regarded. If not specified, then all accounts will be regarded. | [optional] 
 **minBankBookingDate** | **String**| Lower bound for a transaction's booking date as returned by the bank (= original booking date), in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'bankBookingDate' is equal to or later than the given date will be regarded. | [optional] 
 **maxBankBookingDate** | **String**| Upper bound for a transaction's booking date as returned by the bank (= original booking date), in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'bankBookingDate' is equal to or earlier than the given date will be regarded. | [optional] 
 **minFinapiBookingDate** | **String**| Lower bound for a transaction's booking date as set by finAPI, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). For details about the meaning of the finAPI booking date, please see the field's documentation in the service's response. | [optional] 
 **maxFinapiBookingDate** | **String**| Upper bound for a transaction's booking date as set by finAPI, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). For details about the meaning of the finAPI booking date, please see the field's documentation in the service's response. | [optional] 
 **minAmount** | **Number**| If specified, then only transactions whose amount is equal to or greater than the given amount will be regarded. Can contain a positive or negative number with at most two decimal places. Examples: -300.12, or 90.95 | [optional] 
 **maxAmount** | **Number**| If specified, then only transactions whose amount is equal to or less than the given amount will be regarded. Can contain a positive or negative number with at most two decimal places. Examples: -300.12, or 90.95 | [optional] 
 **direction** | **String**| If specified, then only transactions with the given direction(s) will be regarded. Use 'income' for regarding only received payments (amount >= 0), 'spending' for regarding only outgoing payments (amount < 0), or 'all' to regard both directions. If not specified, the direction defaults to 'all'. | [optional] [default to all]
 **labelIds** | [**[Number]**](Number.md)| A comma-separated list of label identifiers. If specified, then only transactions that have been marked with at least one of the given labels will be contained in the result. | [optional] 
 **categoryIds** | [**[Number]**](Number.md)| If specified, then the result will contain only those cash flows that relate to the given categories. Note that the cash flow for a category may include/exclude the cash flows of its sub-categories, depending on the 'includeSubCashFlows' setting. To include the cash flow of not categorized transactions, pass the value '0' as categoryId. Note: When this parameter is NOT set, then the result will contain a cash flow for all categories that have transactions associated to them (this includes the 'null'-category for the cash flow of not categorized transactions), more precisely: transactions that fulfill the filter criteria. Categories that have no associated transactions according to the filter criteria will not appear in the result. However, when you specify this parameter, then all specified categories will have a cash flow entry in the result, even if there are no associated transactions for the category (the cash flow will have income, spending and balance all set to zero). | [optional] 
 **isNew** | **Boolean**| If specified, then only transactions that have their 'isNew' flag set to true/false will be regarded for the cash flow calculations. | [optional] 
 **minImportDate** | **String**| Lower bound for a transaction's import date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'importDate' is equal to or later than the given date will be regarded. | [optional] 
 **maxImportDate** | **String**| Upper bound for a transaction's import date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'importDate' is equal to or earlier than the given date will be regarded. | [optional] 
 **includeSubCashFlows** | **Boolean**| If it is true, then the income, spending, balance and count of transactions of a main category results from all transactions that have either this (main) category or any of its subcategories assigned (of course all transactions depends from the other filtering settings); If it is false, then the income, spending, balance and count of transactions of a main category only results from the transactions that have exactly this (main) category assigned. Default value for this parameter is 'true'. | [optional] [default to true]
 **order** | [**[String]**](String.md)| Determines the order of the results. You can order the results by 'income', 'spending', 'balance', 'category.id' or 'category.name'. The default order for this service is 'category.id,asc'. You can also order by multiple properties. In that case the order of the parameters passed is important. Example: '/cashFlows?order=income,desc&order=spending,asc&balance,desc' will return as first result the category with the highest income. If two categories have the same income, it returns the category with the highest spending first (because spending is a negative value) and so on. The general format is: 'property[,asc|desc]', with 'asc' being the default value. Please note that ordering by multiple fields is not supported in our swagger frontend, but you can test this feature with any HTTP tool of your choice (e.g. postman or DHC).  | [optional] 

### Return type

[**CashFlowList**](CashFlowList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategory"></a>
# **getCategory**
> Category getCategory(id)

Get a category

Get a single category that is either a global finAPI category or a custom category of the authorized user. Must pass the category's identifier and the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.CategoriesApi();

var id = 789; // Number | Category identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategory(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Category identifier | 

### Return type

[**Category**](Category.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMultipleCategories"></a>
# **getMultipleCategories**
> CategoryList getMultipleCategories(ids)

Get multiple categories

Get a list of multiple categories that are either a global finAPI category or a custom category of the authorized user. Must pass the categories' identifiers and the user's access_token. Categories whose identifiers do not exist or that relate to a different user not be contained in the result (If this applies to all of the given identifiers, then the result will be an empty list). WARNING: This service is deprecated and will be removed at some point. If you want to get multiple categories, please instead use the service 'Get and search all categories' and pass a comma-separated list of identifiers as a parameter 'ids'.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.CategoriesApi();

var ids = [3.4]; // [Number] | Comma-separated list of identifiers of requested categories


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMultipleCategories(ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| Comma-separated list of identifiers of requested categories | 

### Return type

[**CategoryList**](CategoryList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainCategorization"></a>
# **trainCategorization**
> trainCategorization(opts)

Train categorization

This service allows you to create user-specific categorization rules (for the user that is authorized by the access_token). Pass a categorization sample (=set of transaction data and a target category), and finAPI will train the user's categorization rules so that similar transactions will be categorized accordingly in future. Basically, this service behaves the same as when assigning categories to existing transactions via the 'Edit a transaction' service, with the difference that you can directly pass transaction data to this service, without the need of having any transactions actually imported in finAPI. Must pass the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.CategoriesApi();

var opts = { 
  'body': new FinApiResTfulServices.TrainCategorizationData() // TrainCategorizationData | Categorization sample
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.trainCategorization(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TrainCategorizationData**](TrainCategorizationData.md)| Categorization sample | [optional] 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

