# FETChDATAMEASiIPANalysisIPCSecurityPRTScan

Module: Data Application Unit
Source: a3772b3903f94992.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Port Scan Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:PRTScan?
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:PRTScan? 
Queries the results of a port scan. After the reliability indicator, two parameters are returned for each open port:
<Reliability>, {<Port>, <Protocol>}
1
, ..., {<Port>, <Protocol>}
n
If there is no open port, you get:
<Reliability>, INV, INV
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Port>
Port number
<Protocol>
Layer 4 protocol
Example: 
See 
"Performing IP Security Tests"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Result"
Top