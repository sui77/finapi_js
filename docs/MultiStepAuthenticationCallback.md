# FinApiResTfulServices.MultiStepAuthenticationCallback

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **String** | Hash that was returned in the previous multi-step authentication error. | 
**challengeResponse** | **String** | Challenge response. Must be set when the previous multi-step authentication error had status 'CHALLENGE_RESPONSE_REQUIRED. | [optional] 
**twoStepProcedureId** | **String** | The bank-given ID of the two-step-procedure that should be used for authentication. Must be set when the previous multi-step authentication error had status 'TWO_STEP_PROCEDURE_REQUIRED. | [optional] 
**redirectCallback** | **String** | Must be passed when the previous multi-step authentication error had status 'REDIRECT_REQUIRED'. The value must consist of the complete query parameter list that was contained in the received redirect from the bank. | [optional] 
**decoupledCallback** | **Boolean** | Must be passed when the previous multi-step authentication error had status 'DECOUPLED_AUTH_REQUIRED' or 'DECOUPLED_AUTH_IN_PROGRESS'. The field represents the state of the decoupled authentication meaning that when it's set to 'true', the end-user has completed the authentication process on bank's side. | [optional] 


