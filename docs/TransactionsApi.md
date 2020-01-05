# FinApiResTfulServices.TransactionsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAllTransactions**](TransactionsApi.md#deleteAllTransactions) | **DELETE** /api/v1/transactions | Delete all transactions
[**deleteTransaction**](TransactionsApi.md#deleteTransaction) | **DELETE** /api/v1/transactions/{id} | Delete a transaction
[**editMultipleTransactions**](TransactionsApi.md#editMultipleTransactions) | **PATCH** /api/v1/transactions | Edit multiple transactions
[**editMultipleTransactionsDeprecated**](TransactionsApi.md#editMultipleTransactionsDeprecated) | **PATCH** /api/v1/transactions/{ids} | Edit multiple transactions (DEPRECATED)
[**editTransaction**](TransactionsApi.md#editTransaction) | **PATCH** /api/v1/transactions/{id} | Edit a transaction
[**getAndSearchAllTransactions**](TransactionsApi.md#getAndSearchAllTransactions) | **GET** /api/v1/transactions | Get and search all transactions
[**getMultipleTransactions**](TransactionsApi.md#getMultipleTransactions) | **GET** /api/v1/transactions/{ids} | Get multiple transactions
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /api/v1/transactions/{id} | Get a transaction
[**restoreTransaction**](TransactionsApi.md#restoreTransaction) | **POST** /api/v1/transactions/{id}/restore | Restore a transaction
[**splitTransaction**](TransactionsApi.md#splitTransaction) | **POST** /api/v1/transactions/{id}/split | Split a transaction
[**triggerCategorization**](TransactionsApi.md#triggerCategorization) | **POST** /api/v1/transactions/triggerCategorization | Trigger categorization


<a name="deleteAllTransactions"></a>
# **deleteAllTransactions**
> IdentifierList deleteAllTransactions(opts)

Delete all transactions

Delete a set, or the entirety, of transactions of the currently authorized user.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var opts = { 
  'maxDeletionDate': "maxDeletionDate_example", // String | If specified, then only those transactions are being deleted whose 'finapiBookingDate' is equal to or earlier to the given date. The date may not be in future, and must be given in the format 'YYYY-MM-DD'. If not specified, then no date limitation will be in place for the deletion.
  'safeMode': true, // Boolean | When passing 'true', then only those transactions are being deleted where at least one of the following holds true: 1. The transaction belongs to a 'demo connection'; 2. The transaction's 'potentialDuplicate' flag is set to TRUE; 3. The transaction is an adjusting entry ('Zwischensaldo' transaction) that was added by finAPI. When passing 'false', then finAPI will delete transactions independent of these characteristics. The default value for this parameter is 'true'.
  'rememberDeletion': false // Boolean | When passing 'true', then finAPI will make sure to not re-import deleted transactions on future account updates. When 'false', then deleted transactions might be re-imported. Default value for this parameter is 'false'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAllTransactions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maxDeletionDate** | **String**| If specified, then only those transactions are being deleted whose 'finapiBookingDate' is equal to or earlier to the given date. The date may not be in future, and must be given in the format 'YYYY-MM-DD'. If not specified, then no date limitation will be in place for the deletion. | [optional] 
 **safeMode** | **Boolean**| When passing 'true', then only those transactions are being deleted where at least one of the following holds true: 1. The transaction belongs to a 'demo connection'; 2. The transaction's 'potentialDuplicate' flag is set to TRUE; 3. The transaction is an adjusting entry ('Zwischensaldo' transaction) that was added by finAPI. When passing 'false', then finAPI will delete transactions independent of these characteristics. The default value for this parameter is 'true'. | [optional] [default to true]
 **rememberDeletion** | **Boolean**| When passing 'true', then finAPI will make sure to not re-import deleted transactions on future account updates. When 'false', then deleted transactions might be re-imported. Default value for this parameter is 'false'. | [optional] [default to false]

### Return type

[**IdentifierList**](IdentifierList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteTransaction"></a>
# **deleteTransaction**
> deleteTransaction(id)

Delete a transaction

Delete a single transaction of the user that is authorized by the access_token.<br/><br/> A transaction can only get deleted if at least one of the following holds true:<br/> &bull; The transaction belongs to a 'demo connection'<br/> &bull; The transaction's 'potentialDuplicate' flag is set to TRUE<br/> &bull; The transaction is an adjusting entry ('Zwischensaldo' transaction) that was added by finAPI<br/><br/>Note that the 'Delete all transactions' service has additional functionality and allows you to delete transactions that you cannot delete with this service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var id = 789; // Number | Identifier of transaction


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTransaction(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of transaction | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="editMultipleTransactions"></a>
# **editMultipleTransactions**
> IdentifierList editMultipleTransactions(body)

Edit multiple transactions

Edit one or multiple transactions. You can edit the following fields: 'isNew=true|false' and/or 'isPotentialDuplicate=false' and/or 'categoryId=<id>' and/or 'labelIds=[<ids>]'. To clear the category of the given transactions (so that they are no longer categorized), pass the value '0' as the categoryId. To clear the labels of the given transactions, pass an empty array of label identifiers: '[]'. The parameters 'categoryId' and 'labelIds' are forbidden if 'ids' is NOT set (i.e. you cannot update the category or labels for ALL transactions). The result is a list of identifiers of only those transactions that have changed as a result of this service call.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var body = new FinApiResTfulServices.UpdateMultipleTransactionsParams(); // UpdateMultipleTransactionsParams | Update transactions parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editMultipleTransactions(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateMultipleTransactionsParams**](UpdateMultipleTransactionsParams.md)| Update transactions parameters | 

### Return type

[**IdentifierList**](IdentifierList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="editMultipleTransactionsDeprecated"></a>
# **editMultipleTransactionsDeprecated**
> IdentifierList editMultipleTransactionsDeprecated(ids, body)

Edit multiple transactions (DEPRECATED)

Change the fields of multiple transactions. You can change the following fields: 'isNew=true|false' and/or 'isPotentialDuplicate=false' and/or 'categoryId=<id>' and/or 'labelIds=[<ids>]'. The max number of input identifiers is limited to 100. To clear the category of the given transactions (so that they are no longer categorized), pass the value '0' as the categoryId. To clear the labels of the given transactions, pass an empty array of label identifiers: '[]'. The result is a list of identifiers of only those transactions that have changed as a result of this service call. WARNING: This service is deprecated and will be removed at some point. If you want to edit multiple transactions, please instead use the service 'Edit multiple transactions', where you can pass a comma-separated list of identifiers.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var ids = [3.4]; // [Number] | Comma-separated list of identifiers of updated transactions

var body = new FinApiResTfulServices.UpdateTransactionsParams(); // UpdateTransactionsParams | Update transactions parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editMultipleTransactionsDeprecated(ids, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| Comma-separated list of identifiers of updated transactions | 
 **body** | [**UpdateTransactionsParams**](UpdateTransactionsParams.md)| Update transactions parameters | 

### Return type

[**IdentifierList**](IdentifierList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="editTransaction"></a>
# **editTransaction**
> Transaction editTransaction(id, body)

Edit a transaction

Change a transaction's fields. You can change the following fields: 'isNew=true|false' and/or 'isPotentialDuplicate=false' and/or 'categoryId=<id>' and/or 'labelIds=[<ids>]'. To clear a transaction's category (so that it is no longer categorized), pass the value '0' as the categoryId. To clear the labels of the given transaction, pass an empty array of label identifiers: '[]'.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var id = 789; // Number | Identifier of transaction

var body = new FinApiResTfulServices.UpdateTransactionsParams(); // UpdateTransactionsParams | Update transactions parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editTransaction(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of transaction | 
 **body** | [**UpdateTransactionsParams**](UpdateTransactionsParams.md)| Update transactions parameters | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAndSearchAllTransactions"></a>
# **getAndSearchAllTransactions**
> PageableTransactionList getAndSearchAllTransactions(view, opts)

Get and search all transactions

Get transactions of the user that is authorized by the access_token. Must pass the user's access_token. You can set optional search criteria to get only those transactions that you are interested in. If you do not specify any search criteria, then this service functions as a 'get all' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var view = "view_example"; // String | This parameter defines finAPI's logical view on the transactions when querying them: 'bankView' regards only the original transactions as they were received from the bank, without considering how the transactions might have gotten split by the user (see POST /transactions/<id>/split). This means that if a transaction is split into logical sub-transactions, then the service will still regard only the original transaction, and NOT the logical sub-transactions in its processing (though for convenience, the transactions will have the data of their sub-transactions included in the response). 'userView' by contrast regards the transactions as they exist for the user. For transactions that have not been split into logical sub-transactions, there is no difference to the \"bankView\". But for transaction that have been split into logical sub-transactions, the service will ONLY regard these sub-transactions, and not the originally received transaction (though for convenience, the sub-transactions will have the identifier of their original transaction included in the response).

var opts = { 
  'ids': [3.4], // [Number] | A comma-separated list of transaction identifiers. If specified, then only transactions whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000.
  'search': "search_example", // String | If specified, then only those transactions will be contained in the result whose 'purpose' or counterpart fields contain the given search string (the matching works case-insensitive). If no transactions contain the search string in any of these fields, then the result will be an empty list. NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the searched fields in order for a transaction to get included into the result.
  'counterpart': "counterpart_example", // String | If specified, then only those transactions will be contained in the result whose counterpart fields contain the given search string (the matching works case-insensitive). If no transactions contain the search string in any of the counterpart fields, then the result will be an empty list. NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the searched fields in order for a transaction to get included into the result.
  'purpose': "purpose_example", // String | If specified, then only those transactions will be contained in the result whose purpose field contains the given search string (the matching works case-insensitive). If no transactions contain the search string in the purpose field, then the result will be an empty list. NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the purpose in order for a transaction to get included into the result.
  'accountIds': [3.4], // [Number] | A comma-separated list of account identifiers. If specified, then only transactions that relate to the given accounts will be regarded. If not specified, then all accounts will be regarded.
  'minBankBookingDate': "minBankBookingDate_example", // String | Lower bound for a transaction's booking date as returned by the bank (= original booking date), in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'bankBookingDate' is equal to or later than the given date will be regarded.
  'maxBankBookingDate': "maxBankBookingDate_example", // String | Upper bound for a transaction's booking date as returned by the bank (= original booking date), in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'bankBookingDate' is equal to or earlier than the given date will be regarded.
  'minFinapiBookingDate': "minFinapiBookingDate_example", // String | Lower bound for a transaction's booking date as set by finAPI, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). For details about the meaning of the finAPI booking date, please see the field's documentation in the service's response.
  'maxFinapiBookingDate': "maxFinapiBookingDate_example", // String | Upper bound for a transaction's booking date as set by finAPI, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). For details about the meaning of the finAPI booking date, please see the field's documentation in the service's response.
  'minAmount': 8.14, // Number | If specified, then only transactions whose amount is equal to or greater than the given amount will be regarded. Can contain a positive or negative number with at most two decimal places. Examples: -300.12, or 90.95
  'maxAmount': 8.14, // Number | If specified, then only transactions whose amount is equal to or less than the given amount will be regarded. Can contain a positive or negative number with at most two decimal places. Examples: -300.12, or 90.95
  'direction': "all", // String | If specified, then only transactions with the given direction(s) will be regarded. Use 'income' for regarding only received payments (amount >= 0), 'spending' for regarding only outgoing payments (amount < 0), or 'all' to regard both directions. If not specified, the direction defaults to 'all'.
  'labelIds': [3.4], // [Number] | A comma-separated list of label identifiers. If specified, then only transactions that have been marked with at least one of the given labels will be contained in the result.
  'categoryIds': [3.4], // [Number] | A comma-separated list of category identifiers. If specified, then the result will contain only transactions whose category is either one of the given categories, or - but only if the 'includeChildCategories' flag is set to 'true' - whose category is a sub-category of one of the given categories. To include transactions without any category, pass the value '0' as the categoryId.
  'includeChildCategories': true, // Boolean | This flag controls how the given 'categoryIds' are handled. If set to 'true', then all transactions of a given categoryId, as well as all transactions of any of its sub-categories will be regarded. If set to 'false', then sub-categories of a given categoryId will not be regarded and only those transactions are regarded whose category matches one of the explicitly given categoryIds. The default value for this flag is 'true'.
  'isNew': true, // Boolean | If specified, then only transactions that have their 'isNew' flag set to true/false will be regarded.
  'isPotentialDuplicate': true, // Boolean | If specified, then only transactions that have their 'isPotentialDuplicate' flag set to true/false will be regarded.
  'isAdjustingEntry': true, // Boolean | If specified, then only transactions that have their 'isAdjustingEntry' flag set to true/false will be regarded.
  'minImportDate': "minImportDate_example", // String | Lower bound for a transaction's import date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'importDate' is equal to or later than the given date will be regarded.
  'maxImportDate': "maxImportDate_example", // String | Upper bound for a transaction's import date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'importDate' is equal to or earlier than the given date will be regarded.
  'page': 1, // Number | Result page that you want to retrieve.
  'perPage': 20, // Number | Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes.
  'order': ["order_example"] // [String] | Determines the order of the results. You can use the following fields for ordering the response: 'id', 'parentId', 'accountId', 'valueDate', 'bankBookingDate', 'finapiBookingDate', 'amount', 'purpose', 'counterpartName', 'counterpartAccountNumber', 'counterpartIban', 'counterpartBlz', 'counterpartBic', 'type', 'primanota', 'category.id', 'category.name', 'isPotentialDuplicate', 'isNew' and 'importDate'. The default order for all services is 'id,asc'. You can also order by multiple properties. In that case the order of the parameters passed is important. Example: '/transactions?order=finapiBookingDate,desc&order=counterpartName' will return the latest transactions first. If there are more transactions on the same day, then these transactions are ordered by the counterpart name (ascending). The general format is: 'property[,asc|desc]', with 'asc' being the default value. Please note that ordering by multiple fields is not supported in our swagger frontend, but you can test this feature with any HTTP tool of your choice (e.g. postman or DHC). 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAndSearchAllTransactions(view, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **view** | **String**| This parameter defines finAPI's logical view on the transactions when querying them: 'bankView' regards only the original transactions as they were received from the bank, without considering how the transactions might have gotten split by the user (see POST /transactions/<id>/split). This means that if a transaction is split into logical sub-transactions, then the service will still regard only the original transaction, and NOT the logical sub-transactions in its processing (though for convenience, the transactions will have the data of their sub-transactions included in the response). 'userView' by contrast regards the transactions as they exist for the user. For transactions that have not been split into logical sub-transactions, there is no difference to the \"bankView\". But for transaction that have been split into logical sub-transactions, the service will ONLY regard these sub-transactions, and not the originally received transaction (though for convenience, the sub-transactions will have the identifier of their original transaction included in the response). | 
 **ids** | [**[Number]**](Number.md)| A comma-separated list of transaction identifiers. If specified, then only transactions whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000. | [optional] 
 **search** | **String**| If specified, then only those transactions will be contained in the result whose 'purpose' or counterpart fields contain the given search string (the matching works case-insensitive). If no transactions contain the search string in any of these fields, then the result will be an empty list. NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the searched fields in order for a transaction to get included into the result. | [optional] 
 **counterpart** | **String**| If specified, then only those transactions will be contained in the result whose counterpart fields contain the given search string (the matching works case-insensitive). If no transactions contain the search string in any of the counterpart fields, then the result will be an empty list. NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the searched fields in order for a transaction to get included into the result. | [optional] 
 **purpose** | **String**| If specified, then only those transactions will be contained in the result whose purpose field contains the given search string (the matching works case-insensitive). If no transactions contain the search string in the purpose field, then the result will be an empty list. NOTE: If the given search string consists of several terms (separated by whitespace), then ALL of these terms must be contained in the purpose in order for a transaction to get included into the result. | [optional] 
 **accountIds** | [**[Number]**](Number.md)| A comma-separated list of account identifiers. If specified, then only transactions that relate to the given accounts will be regarded. If not specified, then all accounts will be regarded. | [optional] 
 **minBankBookingDate** | **String**| Lower bound for a transaction's booking date as returned by the bank (= original booking date), in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'bankBookingDate' is equal to or later than the given date will be regarded. | [optional] 
 **maxBankBookingDate** | **String**| Upper bound for a transaction's booking date as returned by the bank (= original booking date), in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'bankBookingDate' is equal to or earlier than the given date will be regarded. | [optional] 
 **minFinapiBookingDate** | **String**| Lower bound for a transaction's booking date as set by finAPI, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). For details about the meaning of the finAPI booking date, please see the field's documentation in the service's response. | [optional] 
 **maxFinapiBookingDate** | **String**| Upper bound for a transaction's booking date as set by finAPI, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). For details about the meaning of the finAPI booking date, please see the field's documentation in the service's response. | [optional] 
 **minAmount** | **Number**| If specified, then only transactions whose amount is equal to or greater than the given amount will be regarded. Can contain a positive or negative number with at most two decimal places. Examples: -300.12, or 90.95 | [optional] 
 **maxAmount** | **Number**| If specified, then only transactions whose amount is equal to or less than the given amount will be regarded. Can contain a positive or negative number with at most two decimal places. Examples: -300.12, or 90.95 | [optional] 
 **direction** | **String**| If specified, then only transactions with the given direction(s) will be regarded. Use 'income' for regarding only received payments (amount >= 0), 'spending' for regarding only outgoing payments (amount < 0), or 'all' to regard both directions. If not specified, the direction defaults to 'all'. | [optional] [default to all]
 **labelIds** | [**[Number]**](Number.md)| A comma-separated list of label identifiers. If specified, then only transactions that have been marked with at least one of the given labels will be contained in the result. | [optional] 
 **categoryIds** | [**[Number]**](Number.md)| A comma-separated list of category identifiers. If specified, then the result will contain only transactions whose category is either one of the given categories, or - but only if the 'includeChildCategories' flag is set to 'true' - whose category is a sub-category of one of the given categories. To include transactions without any category, pass the value '0' as the categoryId. | [optional] 
 **includeChildCategories** | **Boolean**| This flag controls how the given 'categoryIds' are handled. If set to 'true', then all transactions of a given categoryId, as well as all transactions of any of its sub-categories will be regarded. If set to 'false', then sub-categories of a given categoryId will not be regarded and only those transactions are regarded whose category matches one of the explicitly given categoryIds. The default value for this flag is 'true'. | [optional] [default to true]
 **isNew** | **Boolean**| If specified, then only transactions that have their 'isNew' flag set to true/false will be regarded. | [optional] 
 **isPotentialDuplicate** | **Boolean**| If specified, then only transactions that have their 'isPotentialDuplicate' flag set to true/false will be regarded. | [optional] 
 **isAdjustingEntry** | **Boolean**| If specified, then only transactions that have their 'isAdjustingEntry' flag set to true/false will be regarded. | [optional] 
 **minImportDate** | **String**| Lower bound for a transaction's import date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'importDate' is equal to or later than the given date will be regarded. | [optional] 
 **maxImportDate** | **String**| Upper bound for a transaction's import date, in the format 'YYYY-MM-DD' (e.g. '2016-01-01'). If specified, then only transactions whose 'importDate' is equal to or earlier than the given date will be regarded. | [optional] 
 **page** | **Number**| Result page that you want to retrieve. | [optional] [default to 1]
 **perPage** | **Number**| Maximum number of records per page. By default it's 20. Can be at most 500. NOTE: Due to its validation and visualization, the swagger frontend might show very low performance, or even crashes, when a service responds with a lot of data. It is recommended to use a HTTP client like Postman or DHC instead of our swagger frontend for service calls with large page sizes. | [optional] [default to 20]
 **order** | [**[String]**](String.md)| Determines the order of the results. You can use the following fields for ordering the response: 'id', 'parentId', 'accountId', 'valueDate', 'bankBookingDate', 'finapiBookingDate', 'amount', 'purpose', 'counterpartName', 'counterpartAccountNumber', 'counterpartIban', 'counterpartBlz', 'counterpartBic', 'type', 'primanota', 'category.id', 'category.name', 'isPotentialDuplicate', 'isNew' and 'importDate'. The default order for all services is 'id,asc'. You can also order by multiple properties. In that case the order of the parameters passed is important. Example: '/transactions?order=finapiBookingDate,desc&order=counterpartName' will return the latest transactions first. If there are more transactions on the same day, then these transactions are ordered by the counterpart name (ascending). The general format is: 'property[,asc|desc]', with 'asc' being the default value. Please note that ordering by multiple fields is not supported in our swagger frontend, but you can test this feature with any HTTP tool of your choice (e.g. postman or DHC).  | [optional] 

### Return type

[**PageableTransactionList**](PageableTransactionList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMultipleTransactions"></a>
# **getMultipleTransactions**
> TransactionList getMultipleTransactions(ids)

Get multiple transactions

Get a list of multiple transactions of the user that is authorized by the access_token. Must pass the transactions' identifiers and the user's access_token. Transactions whose identifiers do not exist or do not relate to the authorized user will not be contained in the result (If this applies to all of the given identifiers, then the result will be an empty list). WARNING: This service is deprecated and will be removed at some point. If you want to get multiple transactions, please instead use the service 'Get and search all transactions', where you can pass a comma-separated list of identifiers.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var ids = [3.4]; // [Number] | Comma-separated list of identifiers of requested transactions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMultipleTransactions(ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| Comma-separated list of identifiers of requested transactions | 

### Return type

[**TransactionList**](TransactionList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getTransaction"></a>
# **getTransaction**
> Transaction getTransaction(id)

Get a transaction

Get a single transaction of the user that is authorized by the access_token. Must pass the transaction's identifier and the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var id = 789; // Number | Identifier of transaction


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransaction(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of transaction | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="restoreTransaction"></a>
# **restoreTransaction**
> Transaction restoreTransaction(id)

Restore a transaction

Restore a previously split transaction. Removes all of its sub-transactions.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var id = 789; // Number | Transaction identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.restoreTransaction(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Transaction identifier | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="splitTransaction"></a>
# **splitTransaction**
> Transaction splitTransaction(id, body)

Split a transaction

Split a transaction into several logical sub-transactions. If the given transaction is split already, all its current sub-transactions will get deleted before the new sub-transactions will get created.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var id = 789; // Number | Transaction identifier

var body = new FinApiResTfulServices.SplitTransactionsParams(); // SplitTransactionsParams | Split transactions parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.splitTransaction(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Transaction identifier | 
 **body** | [**SplitTransactionsParams**](SplitTransactionsParams.md)| Split transactions parameters | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="triggerCategorization"></a>
# **triggerCategorization**
> triggerCategorization(body)

Trigger categorization

Triggers finAPI's background categorization process for all uncategorized transactions of the given bank connection(s) (or of all of the user's bank connections, if no bank connection identifiers are passed). The service returns as soon as the categorizations are scheduled. At this point, the bank connections will have their 'categorizationStatus' set to 'PENDING'. Use the service \"Get a bank connection\" or \"Get all bank connections\" to check when the categorization has finished (this is the case when the categorizationStatus has switched to 'READY').<br/><br/>Note that if at least one of the target bank connections is currently locked at the time when you call this service (i.e. the bank connection is currently being updated, or another categorization is already scheduled for it), then no categorization will be triggered at all and the service will respond with HTTP code 422.<br/><br/>Please also note:<br/>&bull; finAPI's background categorization process is executed automatically whenever you import or update a bank connection (though in case of update, it will categorize only the new transactions, and not re-run categorization for previously imported transactions). This means that in general you do not have to call this service after an import or update. Use this service only when you wish to re-run the categorization of all existing uncategorized transactions.<br/>&bull; if you wish to just manually assign categories to transactions, please use the service \"Edit a transaction\" or \"Edit multiple transactions\" instead.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.TransactionsApi();

var body = new FinApiResTfulServices.TriggerCategorizationParams(); // TriggerCategorizationParams | Trigger categorization parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.triggerCategorization(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TriggerCategorizationParams**](TriggerCategorizationParams.md)| Trigger categorization parameters | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

