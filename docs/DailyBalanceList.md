# FinApiResTfulServices.DailyBalanceList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latestCommonBalanceTimestamp** | **String** | The latestCommonBalanceTimestamp is the latest timestamp at which all regarded  accounts have been up to date. Only balances with their date being smaller than the latestCommonBalanceTimestamp are reliable. Example: A user has two accounts: A (last update today, so balance from today) and B (last update yesterday, so balance from yesterday). The service /accounts/dailyBalances will return a balance for yesterday and for today, with the info latestCommonBalanceTimestamp=yesterday. Since account B might have received transactions this morning, today's balance might be wrong. So either make sure that all regarded accounts are up to date before calling this service, or use the results carefully in combination with the latestCommonBalanceTimestamp. The format is 'YYYY-MM-DD HH:MM:SS.SSS' (german time). | [optional] 
**dailyBalances** | [**[DailyBalance]**](DailyBalance.md) | List of daily balances for the requested period and account(s) | 
**paging** | [**Paging**](Paging.md) | Information for pagination | 


