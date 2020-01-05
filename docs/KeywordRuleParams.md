# FinApiResTfulServices.KeywordRuleParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categoryId** | **Number** | ID of the category that this rule should assign to the matching transactions | 
**direction** | **String** | Direction for the rule. 'Income' means that the rule applies to transactions with a positive amount only, 'Spending' means it applies to transactions with a negative amount only. 'Both' means that it applies to both kind of transactions. Note that in case of 'Both', finAPI will create two individual rules (one with direction 'Income' and one with direction 'Spending'). | 
**keywords** | **[String]** | Set of keywords for the rule (Keywords are regarded case-insensitive). The minimum number of keywords is 1. The maximum number of keywords is 100. | 


<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `income` (value: `"Income"`)

* `spending` (value: `"Spending"`)

* `both` (value: `"Both"`)




