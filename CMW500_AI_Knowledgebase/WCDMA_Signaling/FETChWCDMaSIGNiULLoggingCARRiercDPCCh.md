# FETChWCDMaSIGNiULLoggingCARRiercDPCCh

Module: WCDMA Signaling
Source: 6eb7da5bd4db49a1.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:DPCCh?
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:DPCCh? 
READ:WCDMa:SIGN<i>:ULLogging:CARRier<c>:DPCCh? 
Return results of the UL logging measurement on the DPCCH. The results are returned as groups per measured subframe:
<Reliability>, {<DPCCH1>, <DPCCH2>, <DPCCH3>}
subframe1
, {...}
subframe 2
, ..., {...}
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
<DPCCH1>
OFF |
 
 ON
Queries the status of DPCCH read out from the first slot
<DPCCH2>
OFF |
 
 ON
Queries the status of DPCCH read out from the second slot
<DPCCH3>
OFF |
 
 ON
Queries the status of DPCCH read out from the third slot
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