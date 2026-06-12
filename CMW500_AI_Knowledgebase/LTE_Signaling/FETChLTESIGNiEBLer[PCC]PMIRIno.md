# FETChLTESIGNiEBLer[PCC]PMIRIno

Module: LTE Signaling
Source: 2d7abc0d1d5f4894.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:PMI:RI<no>?
FETCh:LTE:SIGN<i>:EBLer[:PCC]:PMI:RI<no>? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:PMI:RI<no>? 
Returns the PMI results for the RI value <no>.
Suffix: 
<no>
1..4
<c>
1..4
Return values: 
<Reliability>
See 
"Reliability Indicator"
<PMI>
Comma-separated list of values, indicating the number of received PMI values, see table
Range: 
0  to  2E+9
Example: 
See 
"Performing a Single-Shot BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.20, SCC command V3.2.70
V3.7.10 <no> 3, 4
<PMI> results depending on TX antennas and <no>
TX antennas
RI<no>
Number of <PMI> results
2
1
4 values for PMI = 0, 1, 2, 3
2
2 values for PMI = 0, 1
4
any
16 values for PMI = 0, 1, ..., 15
8
any
256 values for {PMI2 = 0, ..., 15}
PMI1 = 0
, ..., {...}
PMI1 = 15
Top