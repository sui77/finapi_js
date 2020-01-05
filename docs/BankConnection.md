# FinApiResTfulServices.BankConnection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Bank connection identifier | 
**bankId** | **Number** | Identifier of the bank that this connection belongs to. NOTE: This field is DEPRECATED and will get removed at some point. Please refer to the 'bank' field instead. | 
**name** | **String** | Custom name for the bank connection. You can set this field with the 'Edit a bank connection' service, as well as during the initial import of the bank connection. Maximum length is 64. | [optional] 
**bankingUserId** | **String** | NOTE: This field is deprecated and will be removed at some point. Please refer to the 'loginCredentials' in the 'interfaces' field instead.<br><br>Stored online banking user ID credential. This field may be null for the 'demo connection'. If your client has no license for processing banking credentials then a banking user ID will always be 'XXXXX' | [optional] 
**bankingCustomerId** | **String** | NOTE: This field is deprecated and will be removed at some point. Please refer to the 'loginCredentials' in the 'interfaces' field instead.<br><br>Stored online banking customer ID credential. If your client has no license for processing banking credentials or if this field contains a value that requires password protection (see field ‘isCustomerIdPassword’ in Bank Resource) then the banking customer ID will always be 'XXXXX | [optional] 
**bankingPin** | **String** | NOTE: This field is deprecated and will be removed at some point. Please refer to the 'loginCredentials' in the 'interfaces' field instead.<br><br>Stored online banking PIN. If a PIN is stored, this will always be 'XXXXX' | [optional] 
**type** | **String** | Bank connection type | 
**updateStatus** | **String** | Current status of data download (account balances and transactions/securities). The POST /bankConnections/import and POST /bankConnections/<id>/update services will set this flag to IN_PROGRESS before they return. Once the import or update has finished, the status will be changed to READY. | 
**categorizationStatus** | **String** | Current status of transactions categorization. The asynchronous download process that is triggered by a call of the POST /bankConnections/import and POST /bankConnections/<id>/update services (and also by finAPI's auto update, if enabled) will set this flag to PENDING once the download has finished and a categorization is scheduled for the imported transactions. A separate categorization thread will then start to categorize the transactions (during this process, the status is IN_PROGRESS). When categorization has finished, the status will be (re-)set to READY. Note that the current categorization status should only be queried after the download has finished, i.e. once the download status has switched from IN_PROGRESS to READY. | 
**lastManualUpdate** | [**UpdateResult**](UpdateResult.md) | NOTE: This field is deprecated and will be removed at some point. Please refer to corresponding field in 'interfaces' instead.<br><br>Result of the last manual update of this bank connection. If no manual update has ever been done so far, then this field will not be set. | [optional] 
**lastAutoUpdate** | [**UpdateResult**](UpdateResult.md) | NOTE: This field is deprecated and will be removed at some point. Please refer to corresponding field in 'interfaces' instead.<br><br>Result of the last auto update of this bank connection (ran by finAPI's automatic batch update process). If no auto update has ever been done so far, then this field will not be set. | [optional] 
**ibanOnlyMoneyTransferSupported** | **Boolean** | NOTE: This field is deprecated and will be removed at some point. Please refer to the account capabilities instead.<br><br>Whether this bank connection accepts money transfer requests where the recipient's account is defined just by the IBAN (without an additional BIC). This field is re-evaluated each time this bank connection is updated. <br/>See also: /accounts/requestSepaMoneyTransfer | 
**ibanOnlyDirectDebitSupported** | **Boolean** | NOTE: This field is deprecated and will be removed at some point. Please refer to the account capabilities instead.<br><br>Whether this bank connection accepts direct debit requests where the debitor's account is defined just by the IBAN (without an additional BIC). This field is re-evaluated each time this bank connection is updated. <br/>See also: /accounts/requestSepaDirectDebit | 
**collectiveMoneyTransferSupported** | **Boolean** | NOTE: This field is deprecated and will be removed at some point. Please refer to the account capabilities instead.<br><br>Whether this bank connection supports submitting collective money transfers. This field is re-evaluated each time this bank connection is updated. <br/>See also: /accounts/requestSepaMoneyTransfer | 
**defaultTwoStepProcedureId** | **String** | NOTE: This field is deprecated and will be removed at some point. Please refer to corresponding field in 'interfaces' instead.<br><br>The default two-step-procedure. Must match one of the available 'procedureId's from the 'twoStepProcedures' list. When this field is set, then finAPI will automatically try to select the procedure wherever applicable. Note that the list of available procedures of a bank connection may change as a result of an update of the connection, and if this field references a procedure that is no longer available after an update, finAPI will automatically clear the default procedure (set it to null). | [optional] 
**twoStepProcedures** | [**[TwoStepProcedure]**](TwoStepProcedure.md) | NOTE: This field is deprecated and will be removed at some point. Please refer to corresponding field in 'interfaces' instead.<br><br>Available two-step-procedures for this bank connection, used for submitting a money transfer or direct debit request (see /accounts/requestSepaMoneyTransfer or /requestSepaDirectDebit). The available two-step-procedures are re-evaluated each time this bank connection is updated (/bankConnections/update). This means that this list may change as a result of an update. | [optional] 
**interfaces** | [**[BankConnectionInterface]**](BankConnectionInterface.md) | Set of interfaces that are connected for this bank connection. | [optional] 
**accountIds** | **[Number]** | Identifiers of the accounts that belong to this bank connection | 
**owners** | [**[BankConnectionOwner]**](BankConnectionOwner.md) | Information about the owner(s) of the bank connection | [optional] 
**bank** | [**Bank**](Bank.md) | Bank that this connection belongs to | 
**furtherLoginNotRecommended** | **Boolean** | This field indicates whether the last communication with the bank failed with an error that requires the user's attention or multi-step authentication error. If 'furtherLoginNotRecommended' is true, finAPI will stop auto updates of this bank connection to mitigate the risk of the user's bank account getting locked by the bank. Every communication with the bank (via updates, money_transfers, direct debits. etc.) can change the value of this flag. If this field is true, we recommend the user to check his credentials and try a manual update of the bank connection. If the update is successful without any multi-step authentication error, the 'furtherLoginNotRecommended' field will be set to false and the bank connection will be reincluded in the next batch update process. A manual update of the bank connection with incorrect credentials or if multi-step authentication error happens will set this field to true and lead to the exclusion of the bank connection from the following batch updates. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `ONLINE` (value: `"ONLINE"`)

* `DEMO` (value: `"DEMO"`)




<a name="UpdateStatusEnum"></a>
## Enum: UpdateStatusEnum


* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `READY` (value: `"READY"`)




<a name="CategorizationStatusEnum"></a>
## Enum: CategorizationStatusEnum


* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `PENDING` (value: `"PENDING"`)

* `READY` (value: `"READY"`)




