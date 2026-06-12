# FETChWCDMaSIGNiHACKTRACeSUBFrameCARRiercCODEMINimum

Module: WCDMA Signaling
Source: 32f26ec1a8584a09.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA ACK Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>:CODE:MINimum?
FETCh:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>:CODE:MINimum? 
FETCh:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>:CODE:MAXimum? 
READ:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>:CODE:MINimum? 
READ:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>:CODE:MAXimum? 
Returns the trace results per carrier with details on coding in subframes. Commands query minimum or maximum values.
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
<Code>
Number of detected codes
Range: 
1 to 15
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