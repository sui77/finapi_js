# FinApiResTfulServices.IbanRuleParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iban** | **String** | IBAN (case-insensitive) | 
**categoryId** | **Number** | ID of the category that this rule should assign to the matching transactions | 
**direction** | **String** | Direction for the rule. 'Income' means that the rule applies to transactions with a positive amount only, 'Spending' means it applies to transactions with a negative amount only. 'Both' means that it applies to both kind of transactions. Note that in case of 'Both', finAPI will create two individual rules (one with direction 'Income' and one with direction 'Spending'). | 


<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `income` (value: `"Income"`)

* `spending` (value: `"Spending"`)

* `both` (value: `"Both"`)




