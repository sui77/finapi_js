# FinApiResTfulServices.Account

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Account identifier | 
**bankConnectionId** | **Number** | Identifier of the bank connection that this account belongs to | 
**accountName** | **String** | Account name | [optional] 
**iban** | **String** | Account's IBAN. Note that this field can change from 'null' to a value - or vice versa - any time when the account is being updated. This is subject to changes within the bank's internal account management. | [optional] 
**accountNumber** | **String** | (National) account number. Note that this value might change whenever the account is updated (for example, leading zeros might be added or removed). | 
**subAccountNumber** | **String** | Account's sub-account-number. Note that this field can change from 'null' to a value - or vice versa - any time when the account is being updated. This is subject to changes within the bank's internal account management. | [optional] 
**accountHolderName** | **String** | Name of the account holder | [optional] 
**accountHolderId** | **String** | Bank's internal identification of the account holder. Note that if your client has no license for processing this field, it will always be 'XXXXX' | [optional] 
**accountCurrency** | **String** | Account's currency | [optional] 
**accountTypeId** | **Number** | Identifier of the account's type. Note that, in general, the type of an account can change any time when the account is being updated. This is subject to changes within the bank's internal account management. However, if the account's type has previously been changed explicitly (via the PATCH method), then the explicitly set type will NOT be automatically changed anymore, even if the type has changed on the bank side. <br/>Note: this field is deprecated and would be removed at some point. Please refer to new field in 'accountType' instead.<br/>1 = Checking,<br/>2 = Savings,<br/>3 = CreditCard,<br/>4 = Security,<br/>5 = Loan,<br/>6 = Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>7 = Membership,<br/>8 = Bausparen<br/> | 
**accountTypeName** | **String** | Name of the account's type<br/>Note: this field is deprecated and would be removed at some point. Please refer to new field in 'accountType' instead. | 
**accountType** | **String** | An account type.<br/><br/>Checking,<br/>Savings,<br/>CreditCard,<br/>Security,<br/>Loan,<br/>Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>Membership,<br/>Bausparen<br/><br/> | [optional] 
**balance** | **Number** | Current account balance | [optional] 
**overdraft** | **Number** | Current overdraft | [optional] 
**overdraftLimit** | **Number** | Overdraft limit | [optional] 
**availableFunds** | **Number** | Current available funds. Note that this field is only set if finAPI can make a definite statement about the current available funds. This might not always be the case, for example if there is not enough information available about the overdraft limit and current overdraft. | [optional] 
**lastSuccessfulUpdate** | **String** | THIS FIELD IS DEPRECATED AND WILL BE REMOVED. Refer to the corresponding field in 'interfaces' instead.<br/><br/>Timestamp of when the account was last successfully updated (or initially imported); more precisely: time when the account data (balance and positions) has been stored into the finAPI databases. The value is returned in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time). | [optional] 
**lastUpdateAttempt** | **String** | THIS FIELD IS DEPRECATED AND WILL BE REMOVED. Refer to the corresponding field in 'interfaces' instead.<br/><br/>Timestamp of when the account was last tried to be updated (or initially imported); more precisely: time when the update (or initial import) was triggered. The value is returned in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time). | [optional] 
**isNew** | **Boolean** | Indicating whether this account is 'new' or not. Any newly imported account will have this flag initially set to true, and remain so until you set it to false (see PATCH /accounts/<id>). How you use this field is up to your interpretation, however it is recommended to set the flag to false for all accounts right after the initial import of the bank connection. This way, you will be able recognize accounts that get newly imported during a later update of the bank connection, by checking for any accounts with the flag set to true right after an update. | 
**status** | **String** | THIS FIELD IS DEPRECATED AND WILL BE REMOVED. Refer to the 'status' field in 'interfaces' instead.<br/><br/>The current status of the account. Possible values are:<br/>&bull; <code>UPDATED</code> means that the account is up to date from finAPI's point of view. This means that no current import/update is running, and the previous import/update could successfully update the account's data (e.g. transactions and securities), and the bank given balance matched the transaction's calculated sum, meaning that no adjusting entry ('Zwischensaldo' transaction) was inserted.<br/>&bull; <code>UPDATED_FIXED</code> means that the account is up to date from finAPI's point of view (no current import/update is running, and the previous import/update could successfully update the account's data), BUT there was a deviation in the bank given balance which was fixed by adding an adjusting entry ('Zwischensaldo' transaction).<br/>&bull; <code>DOWNLOAD_IN_PROGRESS</code> means that the account's data is currently being imported/updated.<br/>&bull; <code>DOWNLOAD_FAILED</code> means that the account data could not get successfully imported or updated. Possible reasons: finAPI could not get the account's balance, or it could not parse all transactions/securities, or some internal error has occurred. Also, it could mean that finAPI could not even get to the point of receiving the account data from the bank server, for example because of incorrect login credentials or a network problem. Note however that when we get a balance and just an empty list of transactions or securities, then this is regarded as valid and successful download. The reason for this is that for some accounts that have little activity, we may actually get no recent transactions but only a balance.<br/>&bull; <code>DEPRECATED</code> means that the account could no longer get matched with any account from the bank server. This can mean either that the account was terminated by the user and is no longer sent by the bank server, or that finAPI could no longer match it because the account's data (name, type, iban, account number, etc.) has been changed by the bank. | 
**supportedOrders** | **[String]** | THIS FIELD IS DEPRECATED AND WILL BE REMOVED. Refer to the 'capabilities' in 'interfaces' field instead.<br/><br/>List of orders that this account supports. Possible values are:<br/><br/>&bull; <code>SEPA_MONEY_TRANSFER</code> - single money transfer<br/>&bull; <code>SEPA_COLLECTIVE_MONEY_TRANSFER</code> - collective money transfer<br/>&bull; <code>SEPA_BASIC_DIRECT_DEBIT</code> - single basic direct debit<br/>&bull; <code>SEPA_BASIC_COLLECTIVE_DIRECT_DEBIT</code> - collective basic direct debit<br/>&bull; <code>SEPA_B2B_DIRECT_DEBIT</code> - single Business-To-Business direct debit<br/>&bull; <code>SEPA_B2B_COLLECTIVE_DIRECT_DEBIT</code> - collective Business-To-Business direct debit<br/><br/>Note that this list may be empty if the account is not supporting any of the above orders. Also note that the list is refreshed each time the account is being updated, so available orders may get added or removed in the course of an account update. | 
**interfaces** | [**[AccountInterface]**](AccountInterface.md) | Set of interfaces to which this account is connected | [optional] 
**clearingAccounts** | [**[ClearingAccountData]**](ClearingAccountData.md) | List of clearing accounts that relate to this account. Clearing accounts can be used for money transfers (see field 'clearingAccountId' of the 'Request SEPA Money Transfer' service).<br><br>NOTE: This field is deprecated and will be removed at some point. | [optional] 


<a name="AccountTypeEnum"></a>
## Enum: AccountTypeEnum


* `checking` (value: `"Checking"`)

* `savings` (value: `"Savings"`)

* `creditCard` (value: `"CreditCard"`)

* `security` (value: `"Security"`)

* `loan` (value: `"Loan"`)

* `pocket` (value: `"Pocket"`)

* `membership` (value: `"Membership"`)

* `bausparen` (value: `"Bausparen"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `UPDATED` (value: `"UPDATED"`)

* `UPDATED_FIXED` (value: `"UPDATED_FIXED"`)

* `DOWNLOAD_IN_PROGRESS` (value: `"DOWNLOAD_IN_PROGRESS"`)

* `DOWNLOAD_FAILED` (value: `"DOWNLOAD_FAILED"`)

* `DEPRECATED` (value: `"DEPRECATED"`)




<a name="[SupportedOrdersEnum]"></a>
## Enum: [SupportedOrdersEnum]


* `MONEY_TRANSFER` (value: `"SEPA_MONEY_TRANSFER"`)

* `COLLECTIVE_MONEY_TRANSFER` (value: `"SEPA_COLLECTIVE_MONEY_TRANSFER"`)

* `BASIC_DIRECT_DEBIT` (value: `"SEPA_BASIC_DIRECT_DEBIT"`)

* `BASIC_COLLECTIVE_DIRECT_DEBIT` (value: `"SEPA_BASIC_COLLECTIVE_DIRECT_DEBIT"`)

* `b2BDIRECTDEBIT` (value: `"SEPA_B2B_DIRECT_DEBIT"`)

* `b2BCOLLECTIVEDIRECTDEBIT` (value: `"SEPA_B2B_COLLECTIVE_DIRECT_DEBIT"`)




