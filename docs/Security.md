# FinApiResTfulServices.Security

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Identifier. Note: Whenever a security account is being updated, its security positions will be internally re-created, meaning that the identifier of a security position might change over time. | 
**accountId** | **Number** | Security account identifier | 
**name** | **String** | Name | [optional] 
**isin** | **String** | ISIN | [optional] 
**wkn** | **String** | WKN | [optional] 
**quote** | **Number** | Quote | [optional] 
**quoteCurrency** | **String** | Currency of quote | [optional] 
**quoteType** | **String** | Type of quote. 'PERC' if quote is a percentage value, 'ACTU' if quote is the actual amount | [optional] 
**quoteDate** | **String** | Quote date in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time). | [optional] 
**quantityNominal** | **Number** | Value of quantity or nominal | [optional] 
**quantityNominalType** | **String** | Type of quantity or nominal value. 'UNIT' if value is a quantity, 'FAMT' if value is the nominal amount | [optional] 
**marketValue** | **Number** | Market value | [optional] 
**marketValueCurrency** | **String** | Currency of market value | [optional] 
**entryQuote** | **Number** | Entry quote | [optional] 
**entryQuoteCurrency** | **String** | Currency of entry quote | [optional] 
**profitOrLoss** | **Number** | Current profit or loss | [optional] 


<a name="QuoteTypeEnum"></a>
## Enum: QuoteTypeEnum


* `ACTU` (value: `"ACTU"`)

* `PERC` (value: `"PERC"`)




<a name="QuantityNominalTypeEnum"></a>
## Enum: QuantityNominalTypeEnum


* `UNIT` (value: `"UNIT"`)

* `FAMT` (value: `"FAMT"`)




