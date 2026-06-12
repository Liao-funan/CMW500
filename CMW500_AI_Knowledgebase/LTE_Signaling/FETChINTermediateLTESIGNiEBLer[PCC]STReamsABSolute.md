# FETChINTermediateLTESIGNiEBLer[PCC]STReamsABSolute

Module: LTE Signaling
Source: 28ed834aa308462e.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:INTermediate:LTE:SIGN<i>:EBLer[:PCC]:STReam<s>:ABSolute?
FETCh:INTermediate:LTE:SIGN<i>:EBLer[:PCC]:STReam<s>:ABSolute? 
FETCh:INTermediate:LTE:SIGN<i>:EBLer:SCC<c>:STReam<s>:ABSolute? 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:STReam<s>:ABSolute? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:STReam<s>:ABSolute? 
Returns the absolute results of the BLER measurement for one downlink stream of one carrier.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<s>
1..2
<c>
1..3
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_ACK>
Number of received acknowledgments
Range: 
0  to  2E+9
<3_NACK>
Number of received negative acknowledgments
Range: 
0  to  2E+9
<4_Subframes>
Number of already processed subframes
Range: 
0  to  2E+9
<5_Throughput>
Average DL throughput
Default unit: 
kbit/s
<6_DTX>
Number of sent scheduled subframes for which no ACK and no NACK has been received
Range: 
0  to  2E+9
<7_Scheduled>
Number of already sent scheduled subframes
Range: 
0  to  2E+9
<8_MedianCQI>
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
Options: 
R&S CMW-KS520 or -KS540
Top