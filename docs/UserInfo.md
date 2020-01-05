# FinApiResTfulServices.UserInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | User's identifier | 
**registrationDate** | **String** | User's registration date, in the format 'YYYY-MM-DD' | 
**deletionDate** | **String** | User's deletion date, in the format 'YYYY-MM-DD'. May be null if the user has not been deleted. | [optional] 
**lastActiveDate** | **String** | User's last active date, in the format 'YYYY-MM-DD'. May be null if the user has not yet logged in. | [optional] 
**bankConnectionCount** | **Number** | Number of bank connections that currently exist for this user. | 
**latestBankConnectionImportDate** | **String** | Latest date of when a bank connection was imported for this user, in the format 'YYYY-MM-DD'. This field is null when there has never been a bank connection import. | [optional] 
**latestBankConnectionDeletionDate** | **String** | Latest date of when a bank connection was deleted for this user, in the format 'YYYY-MM-DD'. This field is null when there has never been a bank connection deletion. | [optional] 
**monthlyStats** | [**[MonthlyUserStats]**](MonthlyUserStats.md) | Additional information about the user's data or activities, broken down in months. The list will by default contain an entry for each month starting with the month of when the user was registered, up to the current month. The date range may vary when you have limited it in the request. <br/><br/>Please note:<br/>&bull; this field is only set when 'includeMonthlyStats' = true, otherwise it will be null.<br/>&bull; the list is always ordered from the latest month first, to the oldest month last.<br/>&bull; the list will never contain an entry for a month that was prior to the month of when the user was registered, or after the month of when the user was deleted, even when you have explicitly set a respective date range. This means that the list may be empty if you are requesting a date range where the user didn't exist yet, or didn't exist any longer. | [optional] 
**isLocked** | **Boolean** | Whether the user is currently locked (for further information, see the 'maxUserLoginAttempts' setting in your client's configuration). Note that deleted users will always have this field set to 'false'. | [optional] 


