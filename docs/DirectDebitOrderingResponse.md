# FinApiResTfulServices.DirectDebitOrderingResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successMessage** | **String** | Technical message from the bank server, confirming the success of the request. Typically, you would not want to present this message to the user. Note that this field may not be set. However if it is not set, it does not necessarily mean that there was an error in processing the request. | [optional] 
**warnMessage** | **String** | In some cases, a bank server may accept the requested order, but return a warn message. This message may be of technical nature, but could also be of interest to the user. | [optional] 
**paymentId** | **Number** | Payment identifier. Can be used to retrieve the status of the payment (see 'Get payments' service). | 
**challengeMessage** | **String** | Message from the bank server containing information or instructions on how to retrieve the TAN that is needed to execute the requested order. This message should be presented to the user. Note that some bank servers may limit the message to just the most crucial information, e.g. the message may contain just a single number that depicts the target TAN number on a user's TAN list. You may want to parse the challenge message for such cases and extend it with more detailed information before showing it to the user. | [optional] 
**answerFieldLabel** | **String** | Suggestion from the bank server on how you can label your input field where the user must enter his TAN. A typical value that many bank servers give is 'TAN-Nummer'. | [optional] 
**tanListNumber** | **String** | In case that the bank server has instructed the user to look up a TAN from a TAN list, this field may contain the identification number of the TAN list. However in most cases, this field is only set (i.e. not null) when the user has multiple active TAN lists. | [optional] 
**opticalData** | **String** | In case that the bank server has instructed the user to scan a flicker code, then this field will contain the raw data for the flicker animation as a BASE-64 string. Otherwise, this field will be not set (i.e. null). For more information on how to process the flicker code data, please address the <a href='https://finapi.zendesk.com' target='_blank'>finAPI Developer Portal</a>. | [optional] 
**photoTanMimeType** | **String** | In case that the 'photoTanData' field is set (i.e. not null), this field contains the MIME type to use for interpreting the photo data (e.g.: 'image/png') | [optional] 
**photoTanData** | **String** | In case that the bank server has instructed the user to scan a photo (or more generally speaking, any kind of QR-code-like data), then this field will contain the raw data of the photo as a BASE-64 string. Otherwise, this field will be not set (i.e. null). For more information on how to process the photo data, please address the <a href='https://finapi.zendesk.com' target='_blank'>finAPI Developer Portal</a>. | [optional] 


