# FETChWCDMaSIGNiHCQITRACeCARRierc

Module: WCDMA Signaling
Source: b18d9f6aee6d4c00.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA CQI Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HCQI:TRACe:CARRier<c>?
FETCh:WCDMa:SIGN<i>:HCQI:TRACe:CARRier<c>? 
READ:WCDMa:SIGN<i>:HCQI:TRACe:CARRier<c>? 
Returns the CQI distribution results in percentage per carrier. For each CQI value one result is returned: <Reliability>, <HistCQI>
0
, ..., <HistCQI>
31
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<HistCQI>
Histogram CQI: percentage of the reported CQI value 0 to 30 per measurement cycle
The position 31 indicates the percentage of DTX subframes.
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing an HSDPA CQI Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS411
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top