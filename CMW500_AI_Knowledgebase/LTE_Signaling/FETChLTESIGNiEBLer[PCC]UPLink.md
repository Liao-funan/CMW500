# FETChLTESIGNiEBLer[PCC]UPLink

Module: LTE Signaling
Source: 84ee4e415e5c449b.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:UPLink?
FETCh:LTE:SIGN<i>:EBLer[:PCC]:UPLink? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:UPLink? 
Returns the uplink results of the BLER measurement.
Suffix: 
<c>
1..4
Return values: 
<Reliability>
See 
"Reliability Indicator"
<BLER>
Block error ratio (percentage of received uplink subframes with failed CRC check)
Range: 
0 %  to  100 %
Default unit: 
%
<Throughput>
Average uplink throughput
Default unit: 
bit/s
<CRCPass>
Number of received subframes with passed CRC check
Range: 
0  to  2E+9
<CRCFail>
Number of received subframes with failed CRC check
Range: 
0  to  2E+9
<DTX>
Number of scheduled UL subframes not sent by the UE
Range: 
0  to  2E+9
Example: 
See 
"Performing a Single-Shot BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.0.50, SCC command V3.5.20
V3.5.50 added <DTX>
Options: 
R&S CMW-KS510
Top