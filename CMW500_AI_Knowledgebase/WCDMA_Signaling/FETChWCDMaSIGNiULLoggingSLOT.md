# FETChWCDMaSIGNiULLoggingSLOT

Module: WCDMA Signaling
Source: 7d0cf9481f3e44d5.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ULLogging:SLOT?
FETCh:WCDMa:SIGN<i>:ULLogging:SLOT? 
READ:WCDMa:SIGN<i>:ULLogging:SLOT? 
Return results of the UL logging measurement on the E-DPCCH/DPCCH/HS-DPCCH. The results are returned per measured subframe:
<Reliability>, <Slot>
subframe1
, <Slot>
subframe2
, ..., <Slot>
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
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Slot>
First slot number of the received UL HS-DPCCH/E-DPCCH/DPCCH subframe; see 
"UL Logging Measurement"
Range: 
0 | 3 | 6 | 9 | 12
*RST:
0
Usage: 
Query only
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS401
Top