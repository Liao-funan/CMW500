# FETChWCDMaSIGNiULLoggingCARRiercANACk

Module: WCDMA Signaling
Source: 7710c5ab383c442d.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:ANACk?
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:ANACk? 
READ:WCDMa:SIGN<i>:ULLogging:CARRier<c>:ANACk? 
Return results of the UL logging measurement on the UL HS-DPCCH. The results are returned per measured subframe:
<Reliability>, <ACKNACK>
subframe1
, <ACKNACK>
subframe2
, ..., <ACKNACK>
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
<ACKNACK>
DTX |
 
 ACK |
 
 NACK
HARQ-ACK:
DTX:
 no answer received from the UE
ACK:
 successful CRC check of a received transmission packet
NACK:
 failed CRC check of a received transmission packet
Usage: 
Query only
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS401
Top