# FinApiResTfulServices.UpdateTransactionsParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isNew** | **Boolean** | Whether this transactions should be flagged as 'new' or not. Any newly imported transaction will have this flag initially set to true. How you use this field is up to your interpretation. For example, you might want to set it to false once a user has clicked on/seen the transaction. | [optional] 
**isPotentialDuplicate** | **Boolean** | You can set this field only to 'false'. finAPI marks transactions as a potential duplicates  when its internal duplicate detection algorithm is signaling so. Transactions that are flagged as duplicates can be deleted by the user. To prevent the user from deleting original transactions, which might lead to incorrect balances, it is not possible to manually set this flag to 'true'. | [optional] 
**categoryId** | **Number** | Identifier of the new category to apply to the transaction. When updating the transaction's category, the category's fields 'id', 'name', 'parentId', 'parentName', and 'isCustom' will all get updated. To clear the category for the transaction, the categoryId field must be passed with value 0. | [optional] 
**trainCategorization** | **Boolean** | This field is only regarded when the field 'categoryId' is set. It controls whether finAPI's categorization system should learn from the given categorization(s). If set to 'true', then the user's categorization rules will be updated so that similar transactions will get categorized accordingly in future. If set to 'false', then the service will simply change the category of the given transaction(s), without updating the user's categorization rules. The field defaults to 'true' if not specified. | [optional] [default to true]
**labelIds** | **[Number]** | Identifiers of labels to apply to the transaction. To clear transactions' labels, pass an empty array of identifiers: '[]' | [optional] 


