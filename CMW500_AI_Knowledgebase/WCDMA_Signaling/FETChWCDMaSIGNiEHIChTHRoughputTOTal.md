# FETChWCDMaSIGNiEHIChTHRoughputTOTal

Module: WCDMA Signaling
Source: df49e0baa955459f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
E-HICH Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:EHICh:THRoughput:TOTal?
FETCh:WCDMa:SIGN<i>:EHICh:THRoughput:TOTal? 
READ:WCDMa:SIGN<i>:EHICh:THRoughput:TOTal? 
Return the results of the E-HICH traces over all carriers.
The number of results N depends on the configured number of subframes to be measured per measurement cycle, see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
EHICh:
​
MFRames
. One measurement result is returned per 100 subframes for 2 ms TTI and per 20 frames for 10 ms TTI.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Current>
N throughput values, from first to last (most recent) measured subframe
<Average>
Average of all "Current" values referenced to the last statistics cycle
Example: 
See 
"Performing an E-HICH Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KS401
Top