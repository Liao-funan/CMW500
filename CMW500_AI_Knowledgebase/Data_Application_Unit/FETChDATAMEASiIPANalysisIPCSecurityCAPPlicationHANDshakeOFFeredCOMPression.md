# FETChDATAMEASiIPANalysisIPCSecurityCAPPlicationHANDshakeOFFeredCOMPression

Module: Data Application Unit
Source: ccd0343037eb4c68.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
SSL/TLS Handshake Information
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:COMPression?
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:COMPression? 
<FlowID>
Queries information about the compression methods offered during the handshake for a specific connection.
After the reliability indicator, two results are returned for each method:
<Reliability>, {<CompressionID>, <CompressionName>}
Method 1
, {...}
Method 2
, ...
Query parameters: 
<FlowID>
Selects the connection for which information is queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<CompressionID>
Compression method ID as hexadecimal value
<CompressionName>
Compression method name as string
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
"Compression"
Top