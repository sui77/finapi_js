# FinApiResTfulServices.IbanRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Rule identifier | 
**category** | [**Category**](Category.md) | The category that this rule assigns to the transactions that it matches | 
**direction** | **String** | Direction for the rule. 'Income' means that the rule applies to transactions with a positive amount only, 'Spending' means it applies to transactions with a negative amount only. | 
**creationDate** | **String** | Timestamp of when the rule was created, in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time) | 
**iban** | **String** | The IBAN for this rule | 


<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `income` (value: `"Income"`)

* `spending` (value: `"Spending"`)




