# FinApiResTfulServices.TwoStepProcedure

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**procedureId** | **String** | Bank-given ID of the procedure | 
**procedureName** | **String** | Bank-given name of the procedure | 
**procedureChallengeType** | **String** | The challenge type of the procedure. Possible values are:<br/><br/>&bull; <code>TEXT</code> - the challenge will be a text that contains instructions for the user on how to proceed with the authorization.<br/>&bull; <code>PHOTO</code> - the challenge will contain a BASE-64 string depicting a photo (or any kind of QR-code-like data) that must be shown to the user.<br/>&bull; <code>FLICKER_CODE</code> - the challenge will contain a BASE-64 string depicting a flicker code animation that must be shown to the user.<br/><br/>Note that this challenge type information does not originate from the bank, but is determined by finAPI internally. There is no guarantee that the determined challenge type is correct. Note also that this field may not be set, meaning that finAPI could not determine the challenge type of the procedure. | [optional] 
**implicitExecute** | **Boolean** | If 'true', then there is no need for your client to pass back anything to finAPI to continue the authorization when using this procedure. The authorization will be dealt with directly between the user, finAPI, and the bank. | 


