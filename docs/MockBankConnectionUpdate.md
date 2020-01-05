# FinApiResTfulServices.MockBankConnectionUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankConnectionId** | **Number** | Bank connection identifier | 
**_interface** | **String** | Banking interface to update. If not specified, then first available interface in bank connection will be used. | [optional] 
**simulateBankLoginError** | **Boolean** | Whether to simulate the case that the update fails due to incorrect banking credentials. Note that there is no real communication to any bank server involved, so you won't lock your accounts when enabling this flag. Default value is 'false'. | [optional] [default to false]
**mockAccountsData** | [**[MockAccountData]**](MockAccountData.md) | Mock accounts data. Note that for accounts that exist in a bank connection but that you do not specify in this list, the service will act like those accounts are not received by the bank servers. This means that any accounts that you do not specify here will be marked as deprecated. If you do not specify this list at all, all accounts in the bank connection will be marked as deprecated. | [optional] 


<a name="InterfaceEnum"></a>
## Enum: InterfaceEnum


* `FINTS_SERVER` (value: `"FINTS_SERVER"`)

* `WEB_SCRAPER` (value: `"WEB_SCRAPER"`)

* `xS2A` (value: `"XS2A"`)




