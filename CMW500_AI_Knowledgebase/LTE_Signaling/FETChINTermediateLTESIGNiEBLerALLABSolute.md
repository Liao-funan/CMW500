# FETChINTermediateLTESIGNiEBLerALLABSolute

Module: LTE Signaling
Source: 510b2edbe502439c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:INTermediate:LTE:SIGN<i>:EBLer:ALL:ABSolute?
FETCh:INTermediate:LTE:SIGN<i>:EBLer:ALL:ABSolute? 
FETCh:LTE:SIGN<i>:EBLer:ALL:ABSolute? 
Returns the absolute overall results of the BLER measurement for the sum of all downlink streams of all carriers.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
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
V3.2.50
Top