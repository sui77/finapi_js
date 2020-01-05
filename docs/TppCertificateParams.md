# FinApiResTfulServices.TppCertificateParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | A type of certificate submitted | 
**publicKey** | **String** | A certificate (public key) | 
**privateKey** | **String** | A private key in PKCS #8 or PKCS #1 format. PKCS #1/#8 private keys are typically exchanged in the PEM base64-encoded format (https://support.quovadisglobal.com/kb/a37/what-is-pem-format.aspx)</br></br>NOTE: The certificate should have one of the following headers:</br>- '-----BEGIN RSA PRIVATE KEY-----'<br>- '-----BEGIN PRIVATE KEY-----'</br>- '-----BEGIN ENCRYPTED PRIVATE KEY-----'<br>Any other header denotes that the private key is neither in PKCS #8 nor in PKCS #1 formats! | 
**passphrase** | **String** | Optional passphrase for the private key | [optional] 
**label** | **String** | A label for certificate to identify in the list of certificates | 
**validFromDate** | **String** | Start day of the certificate's validity, in the format 'YYYY-MM-DD'. Default is the passed certificate validFrom date | [optional] 
**validUntilDate** | **String** | Expiration day of the certificate's validity, in the format 'YYYY-MM-DD'. Default is the passed certificate validUntil date | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `QWAC` (value: `"QWAC"`)

* `QSEALC` (value: `"QSEALC"`)




