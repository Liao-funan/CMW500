# FETChDATAMEASiIPANalysisIPCSecurityKYWordSEARch

Module: Data Application Unit
Source: 9947a8d5af1344b5.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Keyword Search Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:KYWord:SEARch?
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:KYWord:SEARch? 
Queries the keyword search results.
After the reliability indicator, five results are returned for each found keyword:
<Reliability>, {<Keyword>, <Count>, <DstIP>, <FQDN>, <Application>}
1
, {...}
2
, ...
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Keyword>
Found keyword as string
<Count>
How often the keyword was found
<DstIP>
IP address of the destination as string
<FQDN>
FQDN of the destination as string
<Application>
Application using the connection, as string
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
"Keyword search results"
Top