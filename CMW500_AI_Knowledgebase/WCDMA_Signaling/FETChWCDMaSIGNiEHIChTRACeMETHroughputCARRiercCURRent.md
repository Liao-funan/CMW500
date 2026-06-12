# FETChWCDMaSIGNiEHIChTRACeMETHroughputCARRiercCURRent

Module: WCDMA Signaling
Source: 5876edc5a35c491e.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
E-HICH Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:EHICh:TRACe:METHroughput:CARRier<c>:CURRent?
FETCh:WCDMa:SIGN<i>:EHICh:TRACe:METHroughput:CARRier<c>:CURRent? 
READ:WCDMa:SIGN<i>:EHICh:TRACe:METHroughput:CARRier<c>:CURRent? 
Return the results of the E-HICH traces per carrier. Maximum expected throughput reachable if the UE sends at the maximum data rate (depends on the current settings) and no CRC errors occur.
The number of results depends on the configured number of subframes to be measured per measurement cycle, see 
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
Suffix: 
<c>
1..*
Uplink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Current>
N throughput values, from first to last (most recent) measured subframe
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
Example: 
See 
"Performing an E-HICH Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10
V3.2.60 commands renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KS401
Top