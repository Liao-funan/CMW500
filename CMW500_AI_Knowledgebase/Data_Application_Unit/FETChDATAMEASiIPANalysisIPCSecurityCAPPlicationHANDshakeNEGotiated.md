# FETChDATAMEASiIPANalysisIPCSecurityCAPPlicationHANDshakeNEGotiated

Module: Data Application Unit
Source: 403494495aa64d60.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
SSL/TLS Handshake Information
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:NEGotiated?
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:NEGotiated? 
<FlowID>
Queries the negotiated handshake results for a specific connection.
Query parameters: 
<FlowID>
Selects the connection for which information is queried
Return values: 
<VersionID>
Protocol version ID as hexadecimal value
<VersionName>
Protocol version as string
<CipherSuiteID>
Cipher suite ID as hexadecimal value
<CipherSuiteName>
Cipher suite name as string
<CompressionID>
Compression method ID as hexadecimal value
<CompressionName>
Compression method name as string
<RegisterType>
IANA |
 
 OID
Type of the register used for the signature hash algorithm pair
If the value is IANA, the fields SignatureAlgoHashID and SignaHashAlgoSignID are filled with the ID values.
If the value is OID, the field OID is filled with a single combined ID value for the signature hash algorithm pair.
In both cases, the fields SignatureAlgoHashName and SignaHashAlgoSignName are filled with the names as strings.
<OID>
Signature hash algorithm ID as string
<SignAlgHashID>
Hash algorithm ID as hexadecimal value
<SignAlgHashName>
Hash algorithm name as string
<SignAlgSignID>
Signature algorithm ID as hexadecimal value
<SignAlgSignName>
Signature algorithm name as string
<ECurveID>
Elliptic curve ID as hexadecimal value
<ECName>
Elliptic curve name as string
<ECTypeID>
Elliptic curve type ID as hexadecimal value
<ECTypeName>
Elliptic curve type name as string
<ECPFormatID>
Elliptic curve point format ID as hexadecimal value - no longer supported
<ECPFormatName>
Elliptic curve point format name as string - no longer supported
<SignLength>
Length of the server signature in bits
<PublicLength>
Length of the public key of the server in bits
Example: 
See 
"Performing IP Security Tests"
Usage: 
Query only
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KM052
Manual operation: 
See 
"Version"
Top