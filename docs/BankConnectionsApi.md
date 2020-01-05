# FinApiResTfulServices.BankConnectionsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectInterface**](BankConnectionsApi.md#connectInterface) | **POST** /api/v1/bankConnections/connectInterface | Connect a new interface
[**deleteAllBankConnections**](BankConnectionsApi.md#deleteAllBankConnections) | **DELETE** /api/v1/bankConnections | Delete all bank connections
[**deleteBankConnection**](BankConnectionsApi.md#deleteBankConnection) | **DELETE** /api/v1/bankConnections/{id} | Delete a bank connection
[**editBankConnection**](BankConnectionsApi.md#editBankConnection) | **PATCH** /api/v1/bankConnections/{id} | Edit a bank connection
[**getAllBankConnections**](BankConnectionsApi.md#getAllBankConnections) | **GET** /api/v1/bankConnections | Get all bank connections
[**getBankConnection**](BankConnectionsApi.md#getBankConnection) | **GET** /api/v1/bankConnections/{id} | Get a bank connection
[**getMultipleBankConnections**](BankConnectionsApi.md#getMultipleBankConnections) | **GET** /api/v1/bankConnections/{ids} | Get multiple bank connections
[**importBankConnection**](BankConnectionsApi.md#importBankConnection) | **POST** /api/v1/bankConnections/import | Import a new bank connection
[**removeInterface**](BankConnectionsApi.md#removeInterface) | **POST** /api/v1/bankConnections/removeInterface | Remove an interface
[**updateBankConnection**](BankConnectionsApi.md#updateBankConnection) | **POST** /api/v1/bankConnections/update | Update a bank connection


<a name="connectInterface"></a>
# **connectInterface**
> BankConnection connectInterface(body)

Connect a new interface

Connects new interface to an existing bank connection for a specific user. Must pass the connection credentials and the user's access_token. All bank accounts will be downloaded and imported with their current balances, transactions and supported two-step-procedures (note that the amount of available transactions may vary between banks, e.g. some banks deliver all transactions from the past year, others only deliver the transactions from the past three months). The balance and transactions download process runs asynchronously, so this service may return before all balances and transactions have been imported. Also, all downloaded transactions will be categorized by a separate background process that runs asynchronously too. To check the status of the balance and transactions download process as well as the background categorization process, see the status flags that are returned by the GET /bankConnections/<id> service.<br/><br/>NOTE: Depending on your license, this service may respond with HTTP code 451, containing an error message with a identifier of web form in it. In addition to that the response will also have included a 'Location' header, which contains the URL to the web form. In this case, you must forward your user to finAPI's web form. For a detailed explanation of the Web Form Flow, please refer to this article: <a href='https://finapi.zendesk.com/hc/en-us/articles/360002596391' target='_blank'>finAPI's Web Form Flow</a>

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BankConnectionsApi();

var body = new FinApiResTfulServices.ConnectInterfaceParams(); // ConnectInterfaceParams | Connect interface parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.connectInterface(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ConnectInterfaceParams**](ConnectInterfaceParams.md)| Connect interface parameters | 

### Return type

[**BankConnection**](BankConnection.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteAllBankConnections"></a>
# **deleteAllBankConnections**
> IdentifierList deleteAllBankConnections()

Delete all bank connections

Delete all bank connections of the user that is authorized by the access_token. Must pass the user's access_token.<br/><br/>Notes: <br/>- All notification rules that are connected to any specific bank connection will get deleted as well. <br/>- If at least one bank connection is busy (currently in the process of import, update, or transactions categorization), then this service will perform no action at all.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BankConnectionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAllBankConnections(callback);
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

<a name="deleteBankConnection"></a>
# **deleteBankConnection**
> deleteBankConnection(id)

Delete a bank connection

Delete a single bank connection of the user that is authorized by the access_token, including all of its accounts and their transactions and balance data. Must pass the connection's identifier and the user's access_token.<br/><br/>Notes: <br/>- All notification rules that are connected to the bank connection will get adjusted so that they no longer have this connection listed. Notification rules that are connected to just this bank connection (and no other connection) will get deleted altogether. <br/>- A bank connection cannot get deleted while it is in the process of import, update, or transactions categorization.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BankConnectionsApi();

var id = 789; // Number | Identifier of the bank connection to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBankConnection(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of the bank connection to delete | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="editBankConnection"></a>
# **editBankConnection**
> BankConnection editBankConnection(id, body)

Edit a bank connection

Edit bank connection data. Must pass the connection's identifier and the user's access_token.<br/><br/>Note that a bank connection's credentials cannot be changed while it is in the process of import, update, or transactions categorization.<br/><br/>NOTE: Depending on your license, this service may respond with HTTP code 451, containing an error message with a identifier of web form in it. In addition to that the response will also have included a 'Location' header, which contains the URL to the web form. In this case, you must forward your user to finAPI's web form. For a detailed explanation of the Web Form Flow, please refer to this article: <a href='https://finapi.zendesk.com/hc/en-us/articles/360002596391' target='_blank'>finAPI's Web Form Flow</a>

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BankConnectionsApi();

var id = 789; // Number | Identifier of the bank connection to change the parameters for

var body = new FinApiResTfulServices.EditBankConnectionParams(); // EditBankConnectionParams | New bank connection parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editBankConnection(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of the bank connection to change the parameters for | 
 **body** | [**EditBankConnectionParams**](EditBankConnectionParams.md)| New bank connection parameters | 

### Return type

[**BankConnection**](BankConnection.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllBankConnections"></a>
# **getAllBankConnections**
> BankConnectionList getAllBankConnections(opts)

Get all bank connections

Get bank connections of the user that is authorized by the access_token. Must pass the user's access_token. You can set optional search criteria to get only those bank connections that you are interested in. If you do not specify any search criteria, then this service functions as a 'get all' service.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BankConnectionsApi();

var opts = { 
  'ids': [3.4] // [Number] | A comma-separated list of bank connection identifiers. If specified, then only bank connections whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllBankConnections(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| A comma-separated list of bank connection identifiers. If specified, then only bank connections whose identifier match any of the given identifiers will be regarded. The maximum number of identifiers is 1000. | [optional] 

### Return type

[**BankConnectionList**](BankConnectionList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBankConnection"></a>
# **getBankConnection**
> BankConnection getBankConnection(id)

Get a bank connection

Get a single bank connection of the user that is authorized by the access_token. Must pass the connection's identifier and the user's access_token.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BankConnectionsApi();

var id = 789; // Number | Identifier of requested bank connection


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBankConnection(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of requested bank connection | 

### Return type

[**BankConnection**](BankConnection.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMultipleBankConnections"></a>
# **getMultipleBankConnections**
> BankConnectionList getMultipleBankConnections(ids)

Get multiple bank connections

Get a list of multiple bank connections of the user that is authorized by the access_token. Must pass the connections' identifiers and the user's access_token. Connections whose identifiers do not exist or do not relate to the authorized user will not be contained in the result (If this applies to all of the given identifiers, then the result will be an empty list). WARNING: This service is deprecated and will be removed at some point. If you want to get multiple bank connections, please instead use the service 'Get all bank connections' and pass a comma-separated list of identifiers as a parameter 'ids'.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BankConnectionsApi();

var ids = [3.4]; // [Number] | Comma-separated list of identifiers of requested bank connections


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMultipleBankConnections(ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| Comma-separated list of identifiers of requested bank connections | 

### Return type

[**BankConnectionList**](BankConnectionList.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="importBankConnection"></a>
# **importBankConnection**
> BankConnection importBankConnection(body)

Import a new bank connection

Imports a new bank connection for a specific user. Must pass the connection credentials and the user's access_token. All bank accounts will be downloaded and imported with their current balances, transactions and supported two-step-procedures (note that the amount of available transactions may vary between banks, e.g. some banks deliver all transactions from the past year, others only deliver the transactions from the past three months). The balance and transactions download process runs asynchronously, so this service may return before all balances and transactions have been imported. Also, all downloaded transactions will be categorized by a separate background process that runs asynchronously too. To check the status of the balance and transactions download process as well as the background categorization process, see the status flags that are returned by the GET /bankConnections/<id> service.<br/><br/>You can also import a \"demo connection\" which contains a single bank account with some pre-defined transactions. To import the demo connection, you need to pass the identifier of the \"finAPI Test Bank\". In case of demo connection import, any other fields besides the bank identifier can remain unset. The bankingUserId, bankingCustomerId, bankingPin, and storeSecrets fields will be stored if you pass them, however they will not be regarded when updating the demo connection (in other words: It doesn't matter what credentials you choose for the demo connection). Note however that if you want to import the demo connection multiple times for the same user, you must use a different bankingUserId and/or bankingCustomerId for each of the imports. Also note that the skipPositionsDownload flag is ignored for the demo bank connection, i.e. when importing the demo bank connection, you will always get the transactions for its account. You can enable multi-step authentication for the demo bank connection by setting the bank connection name to \"MSA\".<br/><br/>The XS2A interface could also be used to initiate a demo connection import.<br/>The finAPI demo XS2A allows you to download a test account by using the 'import' or 'connectInterface' services - in general, this XS2A demo account is the FINTS_SERVER demo account, as it has the same account number and origin of balances and transactions.<br/>Keep in mind, that calling an XS2A demo connection import will result as a newly created bank connection, when the 'connectInterface' service attaches the XS2A demo account to an existing demo connection.<br/>Passing the login credentials is not obligated only for redirect banks, however the demo bank works without any given set of credentials for the XS2A interface. The old API credentials fields (bankingUserId, bankingCustomerId, bankingPin) are DEPRECATED and temporarily mapped on the new credentials data structure, allowing you to use them within the XS2A import. This is not recommended, as those fields are going to be removed at some point later.<br/>If you are looking to test the XS2A SCA (Strong Customer Authentication, or MSA (Multi-Step Authentication) in the finAPI context), you need to pass the bank connection name as \"MSA\" to trigger the SCA flow or as 'DECOUPLED-AUTH' to simulate decoupled authentication. To get better understanding about the Multi-Step Authentication, please refer to the 'Error Messages' section of the swagger documentation.<br/><br/><b>For a more in-depth understanding of the import process, please also read this article on our Dev Portal: <a href='https://finapi.zendesk.com/hc/en-us/articles/115000296607-Import-Update-of-Bank-Connections-Accounts' target='_blank'>Import & Update of Bank Connections / Accounts</a></b><br/><br/>NOTE: Depending on your license, this service may respond with HTTP code 451, containing an error message with a identifier of web form in it. In addition to that the response will also have included a 'Location' header, which contains the URL to the web form. In this case, you must forward your user to finAPI's web form. For a detailed explanation of the Web Form Flow, please refer to this article: <a href='https://finapi.zendesk.com/hc/en-us/articles/360002596391' target='_blank'>finAPI's Web Form Flow</a><br/><br/><b>Attention:</b> Due to changes on the bank's side we have been forced to limit the maxDaysForDownload field to 89 days to reduce the risk of strong customer authentication (SCA) requests. If you have implemented the SCA flow, please contact us, so that we can remove this limitation from your client.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BankConnectionsApi();

var body = new FinApiResTfulServices.ImportBankConnectionParams(); // ImportBankConnectionParams | Import bank connection parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importBankConnection(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ImportBankConnectionParams**](ImportBankConnectionParams.md)| Import bank connection parameters | 

### Return type

[**BankConnection**](BankConnection.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeInterface"></a>
# **removeInterface**
> removeInterface(body)

Remove an interface

Remove an interface from bank connection and from all associated accounts in the bank connection. Notes: <br/>- An interface cannot get deleted while it is in the process of import or update.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BankConnectionsApi();

var body = new FinApiResTfulServices.RemoveInterfaceParams(); // RemoveInterfaceParams | Remove interface parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeInterface(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RemoveInterfaceParams**](RemoveInterfaceParams.md)| Remove interface parameters | 

### Return type

null (empty response body)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateBankConnection"></a>
# **updateBankConnection**
> BankConnection updateBankConnection(body)

Update a bank connection

Update an existing bank connection of the user that is authorized by the access_token. Downloads and imports the current account balances and new transactions. Note that if the bank connection has several interfaces and some of its accounts was previously imported or updated via an interface which have higher priority than the interface used in the current update, then balances and transactions will not be downloaded for such accounts (The XS2A interface has the highest priority, followed by FINTS_SERVER and finally WEB_SCRAPER). Must pass the connection's identifier and the user's access_token. For more information about the processes of authentication, data download and transactions categorization, see POST /bankConnections/import. Note that supported two-step-procedures are updated as well. It may unset the current default two-step-procedure of the given bank connection (but only if this procedure is not supported anymore by the bank). You can also update the \"demo connection\" (in this case, the fields 'bankingPin', 'importNewAccounts', and 'skipPositionsDownload' will be ignored).<br/><br/>Note that you cannot trigger an update of a bank connection as long as there is still a previously triggered update running.<br/><br/><b>For a more in-depth understanding of the update process, please also read this article on our Dev Portal: <a href='https://finapi.zendesk.com/hc/en-us/articles/115000296607-Import-Update-of-Bank-Connections-Accounts' target='_blank'>Import & Update of Bank Connections / Accounts</a></b><br/><br/>NOTE: Depending on your license, this service may respond with HTTP code 451, containing an error message with a identifier of web form in it. In addition to that the response will also have included a 'Location' header, which contains the URL to the web form. In this case, you must forward your user to finAPI's web form. For a detailed explanation of the Web Form Flow, please refer to this article: <a href='https://finapi.zendesk.com/hc/en-us/articles/360002596391' target='_blank'>finAPI's Web Form Flow</a><br/><br/><b>Attention:</b> Due to changes on the bank's side we have been forced to limit the transaction download time frame to 89 days. Now any update of a bank connection will fetch the last three months of transactions per account. If the last successful update was more than 3 months ago, an adjusting entry ('Zwischensaldo' transaction) will be created.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.BankConnectionsApi();

var body = new FinApiResTfulServices.UpdateBankConnectionParams(); // UpdateBankConnectionParams | Update bank connection parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateBankConnection(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateBankConnectionParams**](UpdateBankConnectionParams.md)| Update bank connection parameters | 

### Return type

[**BankConnection**](BankConnection.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

