# FETChWCDMaSIGNiULLoggingCARRiercHBIT

Module: WCDMA Signaling
Source: fad7836eb8e9456f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:HBIT?
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:HBIT? 
READ:WCDMa:SIGN<i>:ULLogging:CARRier<c>:HBIT? 
Return results of the UL logging measurement on the E-DPCCH. The results are returned per measured subframe:
<Reliability>, <HappyBit>
subframe1
, <HappyBit>
subframe2
, ..., <HappyBit>
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
<HappyBit>
HAPPy |
 
 UNHappy |
 
 DTX
HAPPy:
 UE is satisfied with the granted data rate
UNHappy:
 UE is not transmitting at maximum power and cannot empty its transmit buffer with the current serving grant within a certain time period
DTX:
 no answer received from the UE
*RST:
n/a
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