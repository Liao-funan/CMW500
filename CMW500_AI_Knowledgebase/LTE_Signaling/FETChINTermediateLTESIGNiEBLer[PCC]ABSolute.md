# FETChINTermediateLTESIGNiEBLer[PCC]ABSolute

Module: LTE Signaling
Source: 8c8b41c9edc040ac.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:INTermediate:LTE:SIGN<i>:EBLer[:PCC]:ABSolute?
FETCh:INTermediate:LTE:SIGN<i>:EBLer[:PCC]:ABSolute? 
FETCh:INTermediate:LTE:SIGN<i>:EBLer:SCC<c>:ABSolute? 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:ABSolute? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:ABSolute? 
Returns the absolute overall results of the BLER measurement for the sum of all DL streams of one carrier.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<c>
1..3
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_ACK>
Number of received acknowledgments (sum of all downlink streams)
Range: 
0  to  4E+9
<3_NACK>
Number of received negative acknowledgments (sum of all downlink streams)
Range: 
0  to  4E+9
<4_Subframes>
Number of already processed subframes (per downlink stream)
Range: 
0  to  2E+9
<5_ThroughputAver> <6_ThroughputMin> <7_ThroughputMax>
Average, minimum and maximum throughput (sum of all downlink streams)
Default unit: 
kbit/s
<8_DTX>
Number of sent scheduled subframes for which no ACK and no NACK has been received (sum of all downlink streams)
Range: 
0  to  4E+9
<9_Scheduled>
Number of already sent scheduled subframes (per downlink stream)
Range: 
0  to  2E+9
<10_MedianCQI>
Median value of received CQI indices
Range: 
0  to  15
Example: 
See 
"Performing a Continuous BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.0.10
V3.0.30: INTermediate command, max number of subframes enhanced for continuous measurements
V3.2.50: SCC command
Top