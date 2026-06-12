# FETChWCDMaSIGNiEAGCh

Module: WCDMA Signaling
Source: d3ee42fff6da41bb.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
E-AGCH Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:EAGCh?
FETCh:WCDMa:SIGN<i>:EAGCh? 
READ:WCDMa:SIGN<i>:EAGCh? 
Return all single value results of the E-AGCH measurement. The results are returned as groups per most frequently detected E-TFCI values:
<1_Reliability>, <2_MeasedFrames>, <3_TotETFCIEvents>, <4_MissedDet>, <5_MissedDetProb>, <6_HappyBits>, {<7_ETFCINr>, <8_ETFCIEvents>}
1
, {...}
2
, ..., {...}
8
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_MeasedFrames>
Number of already measured HSUPA subframes
Range: 
1  to  1E+6
<3_TotETFCIEvents>
Sum of all detected E-TFCI events
Range: 
1  to  1E+6
<4_MissedDet>
Number of missed expected E-TFCI detections
Range: 
1  to  1E+6
<5_MissedDetProb>
Missed detection probability (<4_MissedDet> / <3_TotETFCIEvents>)
Range: 
0 %  to  100 %
<6_HappyBits>
Number of happy happy bits
Range: 
1  to  1E+6
{<7_ETFCINr>
Expected E-TFCI value
Range: 
0  to  127
<8_ETFCIEvents>}...
Number of detections
Range: 
0  to  1E+6
Example: 
See 
"Performing an E-AGCH Measurement"
Usage: 
Query only
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS401
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top