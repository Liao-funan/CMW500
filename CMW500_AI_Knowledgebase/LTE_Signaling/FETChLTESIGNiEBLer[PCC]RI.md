# FETChLTESIGNiEBLer[PCC]RI

Module: LTE Signaling
Source: 3dd30a0e5a884e05.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:RI?
FETCh:LTE:SIGN<i>:EBLer[:PCC]:RI? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:RI? 
Returns the rank indicator (RI) results.
Suffix: 
<c>
1..4
Return values: 
<Reliability>
See 
"Reliability Indicator"
<RI>
Comma-separated list of four values:
Number of received "RI = 1"
Number of received "RI = 2"
Number of received "RI = 3"
Number of received "RI = 4"
Range: 
0  to  2E+9
Example: 
See 
"Performing a Single-Shot BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.20, SCC command V3.2.70
V3.7.10 RI = 3, 4
Top