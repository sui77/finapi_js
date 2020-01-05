# FinApiResTfulServices.ErrorDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **String** | Error message | [optional] 
**code** | **String** | Error code. See the documentation of the individual services for details about what values may be returned. | 
**type** | **String** | Error type. BUSINESS errors depict error messages in the language of the bank (or the preferred language) for the user, e.g. from a bank server. TECHNICAL errors are meant to be read by developers and depict internal errors. | 
**multiStepAuthentication** | [**MultiStepAuthenticationChallenge**](MultiStepAuthenticationChallenge.md) | This field is set when a multi-step authentication is required, i.e. when you need to repeat the original service call and provide additional data. The field contains information about what additional data is required. | [optional] 


<a name="CodeEnum"></a>
## Enum: CodeEnum


* `MISSING_FIELD` (value: `"MISSING_FIELD"`)

* `UNKNOWN_ENTITY` (value: `"UNKNOWN_ENTITY"`)

* `METHOD_NOT_ALLOWED` (value: `"METHOD_NOT_ALLOWED"`)

* `ENTITY_EXISTS` (value: `"ENTITY_EXISTS"`)

* `ILLEGAL_ENTITY_STATE` (value: `"ILLEGAL_ENTITY_STATE"`)

* `UNEXPECTED_ERROR` (value: `"UNEXPECTED_ERROR"`)

* `ILLEGAL_FIELD_VALUE` (value: `"ILLEGAL_FIELD_VALUE"`)

* `UNAUTHORIZED_ACCESS` (value: `"UNAUTHORIZED_ACCESS"`)

* `BAD_REQUEST` (value: `"BAD_REQUEST"`)

* `UNSUPPORTED_ORDER` (value: `"UNSUPPORTED_ORDER"`)

* `ILLEGAL_PAGE_SIZE` (value: `"ILLEGAL_PAGE_SIZE"`)

* `INVALID_FILTER_OPTIONS` (value: `"INVALID_FILTER_OPTIONS"`)

* `TOO_MANY_IDS` (value: `"TOO_MANY_IDS"`)

* `BANK_SERVER_REJECTION` (value: `"BANK_SERVER_REJECTION"`)

* `IBAN_ONLY_MONEY_TRANSFER_NOT_SUPPORTED` (value: `"IBAN_ONLY_MONEY_TRANSFER_NOT_SUPPORTED"`)

* `IBAN_ONLY_DIRECT_DEBIT_NOT_SUPPORTED` (value: `"IBAN_ONLY_DIRECT_DEBIT_NOT_SUPPORTED"`)

* `COLLECTIVE_MONEY_TRANSFER_NOT_SUPPORTED` (value: `"COLLECTIVE_MONEY_TRANSFER_NOT_SUPPORTED"`)

* `INVALID_TWO_STEP_PROCEDURE` (value: `"INVALID_TWO_STEP_PROCEDURE"`)

* `MISSING_TWO_STEP_PROCEDURE` (value: `"MISSING_TWO_STEP_PROCEDURE"`)

* `UNSUPPORTED_MEDIA_TYPE` (value: `"UNSUPPORTED_MEDIA_TYPE"`)

* `UNSUPPORTED_BANK` (value: `"UNSUPPORTED_BANK"`)

* `USER_NOT_VERIFIED` (value: `"USER_NOT_VERIFIED"`)

* `USER_ALREADY_VERIFIED` (value: `"USER_ALREADY_VERIFIED"`)

* `INVALID_TOKEN` (value: `"INVALID_TOKEN"`)

* `LOCKED` (value: `"LOCKED"`)

* `NO_ACCOUNTS_FOR_TYPE_LIST` (value: `"NO_ACCOUNTS_FOR_TYPE_LIST"`)

* `FORBIDDEN` (value: `"FORBIDDEN"`)

* `NO_EXISTING_CHALLENGE` (value: `"NO_EXISTING_CHALLENGE"`)

* `ADDITIONAL_AUTHENTICATION_REQUIRED` (value: `"ADDITIONAL_AUTHENTICATION_REQUIRED"`)

* `WEB_FORM_REQUIRED` (value: `"WEB_FORM_REQUIRED"`)

* `WEB_FORM_ABORTED` (value: `"WEB_FORM_ABORTED"`)

* `INVALID_CONSENT` (value: `"INVALID_CONSENT"`)

* `NO_CERTIFICATE` (value: `"NO_CERTIFICATE"`)

* `NO_TPP_CLIENT_CREDENTIALS` (value: `"NO_TPP_CLIENT_CREDENTIALS"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `BUSINESS` (value: `"BUSINESS"`)

* `TECHNICAL` (value: `"TECHNICAL"`)




