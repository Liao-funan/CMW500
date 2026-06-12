# FETChWCDMaSIGNiHACKTRACeSUBFrameCARRiercTBLockMINimum

Module: WCDMA Signaling
Source: fbc424883a154ffc.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA ACK Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>:TBLock:MINimum?
FETCh:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>:TBLock:MINimum? 
FETCh:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>:TBLock:MAXimum? 
READ:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>:TBLock:MINimum? 
READ:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>:TBLock:MAXimum? 
Returns the trace results per carrier with details on transport block size in subframes. Commands query minimum or maximum values.
The number of results depends on the configured number of subframes N to be measured per measurement cycle, see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
HACK:
​
MSFRames
.
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Block>
Detected transport block size index
Range: 
0 to 7
Example: 
See 
"Performing an HSDPA ACK Measurement"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS401
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top