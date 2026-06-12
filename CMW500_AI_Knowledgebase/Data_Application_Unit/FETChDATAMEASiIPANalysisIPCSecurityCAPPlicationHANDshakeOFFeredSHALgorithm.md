# FETChDATAMEASiIPANalysisIPCSecurityCAPPlicationHANDshakeOFFeredSHALgorithm

Module: Data Application Unit
Source: 49394c1f1cee4f88.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
SSL/TLS Handshake Information
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:SHALgorithm?
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:SHALgorithm? 
<FlowID>
Queries information about the hash algorithms and signature algorithms offered during the handshake for a specific connection.
After the reliability indicator, four results are returned for each pair of algorithms:
<Reliability>, {<AlgorithmHashID>, <AlgorithmSignID>, <AlgoHashName>, <AlgoSignName>}
1
, {...}
2
, ...
Query parameters: 
<FlowID>
Selects the connection for which information is queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<AlgorithmHashID>
Hash algorithm ID as hexadecimal value
<AlgorithmSignID>
Signature algorithm ID as hexadecimal value
<AlgoHashName>
Hash algorithm name as string
<AlgoSignName>
Signature algorithm name as string
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
"Signature Hash Algorithm"
Top