# SENSeDATAMEASiIPANalysisVOIMsJITTer

Module: Data Application Unit
Source: 27c312dce4e24b92.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Voice over IMS Results
 > 
SENSe:DATA:MEAS<i>:IPANalysis:VOIMs:JITTer?
SENSe:DATA:MEAS<i>:IPANalysis:VOIMs:JITTer? 
<ConID>
Queries the jitter results for a selected voice over IMS call.
To get a list of all calls and their IDs, use 
FETCh:
​
DATA:
​
MEAS<i>:
​
IPANalysis:
​
VOIMs:
​
ALL?
.
Query parameters: 
<ConID>
Selects the call for which the results are queried
Return values: 
<JitterMaxUp>
Maximum jitter in the uplink
Default unit: 
s
<JitterAvgUp>
Average jitter in the uplink
Default unit: 
s
<JitterMinUp>
Minimum jitter in the uplink
Default unit: 
s
<JitterMaxDown>
Maximum jitter in the downlink
Default unit: 
s
<JitterAvgDown>
Average jitter in the downlink
Default unit: 
s
<JitterMinDown>
Minimum jitter in the downlink
Default unit: 
s
<JitterCurrUp>
Current jitter in the uplink
Default unit: 
s
<JitterCurrDown>
Current jitter in the downlink
Default unit: 
s
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.2.40, V3.7.11 added <JitterCurrUp>, <JitterCurrDown>
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Jitter tab (lower part)"
Top