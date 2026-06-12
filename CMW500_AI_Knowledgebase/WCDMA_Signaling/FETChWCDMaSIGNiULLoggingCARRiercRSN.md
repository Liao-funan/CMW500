# FETChWCDMaSIGNiULLoggingCARRiercRSN

Module: WCDMA Signaling
Source: 761a876c6a5242b4.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:RSN?
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:RSN? 
READ:WCDMa:SIGN<i>:ULLogging:CARRier<c>:RSN? 
Return results of the UL logging measurement on the E-DPCCH. The results are returned per measured subframe:
<Reliability>, <RSN>
subframe1
, <RSN>
subframe2
, ..., <RSN>
subframe n
The number of subframes n is configured via 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
ULLogging:
​
MSFRames
.
Suffix: 
<c>
1..*
Uplink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<RSN>
DTX |
 
 0 |
 
 1 |
 
 2 |
 
 3
Retransmission sequence number:
DTX:
 no answer received from the UE
0:
 new transmission
1:
 first retransmission
2:
 second retransmission
3:
 higher than second retransmission
Usage: 
Query only
Firmware/Software: 
V3.0.30
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KS401
Top