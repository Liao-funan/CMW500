# FETChWCDMaSIGNiHACKTRANsmissionCARRierc

Module: WCDMA Signaling
Source: 8c56867d534b4a7f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA ACK Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HACK:TRANsmission:CARRier<c>?
FETCh:WCDMa:SIGN<i>:HACK:TRANsmission:CARRier<c>? 
READ:WCDMa:SIGN<i>:HACK:TRANsmission:CARRier<c>? 
Return all results of the "Transmissions" table row by row, see 
"Transmissions"
.
Suffix: 
<c>
1..*
Selects the carrier for which the results are queried - only relevant for multi-carrier scenarios
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Transmission1> <Transmission2> <Transmission3> <Transmission4>
For each transmission four values are returned:
"<Transmission...>" = <Sent>, <ACK>, <NACK>, <DTX>
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing an HSDPA ACK Measurement"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS401
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top