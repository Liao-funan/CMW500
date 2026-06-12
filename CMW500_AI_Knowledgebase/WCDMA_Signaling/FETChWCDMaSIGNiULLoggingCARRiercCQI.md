# FETChWCDMaSIGNiULLoggingCARRiercCQI

Module: WCDMA Signaling
Source: e332354931174994.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:CQI?
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:CQI? 
READ:WCDMa:SIGN<i>:ULLogging:CARRier<c>:CQI? 
Return results of the UL logging measurement on the HS-DPCCH. The results are returned per measured subframe:
<Reliability>, <CQI>
subframe1
, <CQI>
subframe2
, ..., <CQI>
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
<CQI>
DTX |
 
 0 |
 
 1 |
 
 2 |
 
 3 |
 
 4 |
 
 5 |
 
 6 |
 
 7 |
 
 8 |
 
 9 |
 
 10 |
 
 11 |
 
 12 |
 
 13 |
 
 14 |
 
 15 |
 
 16 |
 
 17 |
 
 18 |
 
 19 |
 
 20 |
 
 21 |
 
 22 |
 
 23 |
 
 24 |
 
 25 |
 
 26 |
 
 27 |
 
 28 |
 
 29 |
 
 30
DTX:
 no answer received from the UE
0 to 30:
 reported channel quality indicator, 30 means the best quality
Usage: 
Query only
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS401
Top