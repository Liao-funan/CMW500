# FETChWCDMaSIGNiHACKTRACeMCQICARRiercCURRent

Module: WCDMA Signaling
Source: 5fd993d3715f4028.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA ACK Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HACK:TRACe:MCQI:CARRier<c>:CURRent?
FETCh:WCDMa:SIGN<i>:HACK:TRACe:MCQI:CARRier<c>:CURRent? 
READ:WCDMa:SIGN<i>:HACK:TRACe:MCQI:CARRier<c>:CURRent? 
Returns the current median CQI trace results.
The number of results depends on the configured number of subframes to be measured per measurement cycle, see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
HACK:
​
MSFRames
. For each 100 subframes, one result is returned.
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Current>
N median CQI values, from first to last measured subframe, one value per 100 measured subframes
Range: 
0  to  31
Example: 
See 
"Performing an HSDPA ACK Measurement"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS401
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top