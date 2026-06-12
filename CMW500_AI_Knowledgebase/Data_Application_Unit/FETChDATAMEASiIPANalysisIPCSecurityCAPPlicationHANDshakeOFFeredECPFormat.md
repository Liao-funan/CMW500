# FETChDATAMEASiIPANalysisIPCSecurityCAPPlicationHANDshakeOFFeredECPFormat

Module: Data Application Unit
Source: d2c4302fefab47db.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
SSL/TLS Handshake Information
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:ECPFormat?
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:ECPFormat? 
<FlowID>
Queries information about the elliptic curve point formats offered during the handshake for a specific connection.
After the reliability indicator, two results are returned for each format:
<Reliability>, {<ECPFormatID>, <ECPFormatName>}
Format 1
, {...}
Format 2
, ...
Query parameters: 
<FlowID>
Selects the connection for which information is queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ECPFormatID>
Elliptic curve point format ID as hexadecimal value
<ECPFormatName>
Elliptic curve point format name as string
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
"Elliptic Curves, Elliptic Curve Point Formats, Elliptic Curve Type"
Top