# FETChDATAMEASiIPANalysisIPCSecurityCAPPlicationHANDshakeOFFeredCIPSuite

Module: Data Application Unit
Source: 9a62639b12ae4a39.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
SSL/TLS Handshake Information
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:CIPSuite?
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:CIPSuite? 
<FlowID>
Queries information about the cipher suites offered during the handshake for a specific connection.
After the reliability indicator, two results are returned for each cipher suite:
<Reliability>, {<CipherSuiteID>, <CipherSuiteName>}
Suite 1
, {...}
Suite 2
, ...
Query parameters: 
<FlowID>
Selects the connection for which information is queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<CipherSuiteID>
Cipher suite ID as hexadecimal value
<CipherSuiteName>
Cipher suite name as string
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
"Cipher Suites"
Top