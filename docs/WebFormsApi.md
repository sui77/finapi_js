# FinApiResTfulServices.WebFormsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWebForm**](WebFormsApi.md#getWebForm) | **GET** /api/v1/webForms/{id} | Get a web form


<a name="getWebForm"></a>
# **getWebForm**
> WebForm getWebForm(id)

Get a web form

Get a web form of the user that is authorized by the access_token. Must pass the web form's identifier and the user's access_token. <br/><br/>Note that every web form resource is automatically removed from the finAPI system after 24 hours after its creation.

### Example
```javascript
var FinApiResTfulServices = require('fin_api_res_tful_services');
var defaultClient = FinApiResTfulServices.ApiClient.instance;

// Configure OAuth2 access token for authorization: finapi_auth
var finapi_auth = defaultClient.authentications['finapi_auth'];
finapi_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FinApiResTfulServices.WebFormsApi();

var id = 789; // Number | Identifier of web form


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebForm(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of web form | 

### Return type

[**WebForm**](WebForm.md)

### Authorization

[finapi_auth](../README.md#finapi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

