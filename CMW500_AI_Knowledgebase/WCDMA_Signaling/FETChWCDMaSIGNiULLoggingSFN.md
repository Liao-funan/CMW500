# FETChWCDMaSIGNiULLoggingSFN

Module: WCDMA Signaling
Source: c1449a4713704f9c.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ULLogging:SFN?
FETCh:WCDMa:SIGN<i>:ULLogging:SFN? 
READ:WCDMa:SIGN<i>:ULLogging:SFN? 
Return results of the UL logging measurement on the UL HS-DPCCH/E-DPCCH/DPCCH. The results are returned per measured subframe:
<Reliability>, <SFN>
subframe1
, <SFN>
subframe2
, ..., <SFN>
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
<SFN>
System frame number corresponds to the subframe number for which the UL logging information is displayed (set to modulo 4095)
Range: 
0  to  4095
*RST:
0
Usage: 
Query only
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS401
Top