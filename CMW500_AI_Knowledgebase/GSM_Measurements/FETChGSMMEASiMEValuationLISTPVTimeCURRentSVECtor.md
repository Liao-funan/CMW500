# FETChGSMMEASiMEValuationLISTPVTimeCURRentSVECtor

Module: GSM Measurements
Source: cdfc65f878eb43d0.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, Result Groups)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:CURRent:SVECtor?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:CURRent:SVECtor? 
Returns special burst power values in list mode.
The values listed below in curly brackets {} are returned for each measured segment: {...}
seg 1
, {...}
seg 2
, ..., {...}
seg n
. The position of measured segments within the range of configured segments and their number n is determined by 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
LRANge
.
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
{<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatistExpired>
Number of measured steps
Range: 
0  to  <Statistical Length> (integer value)
<4_BurstType>
GMSK |
 
 EPSK |
 
 ACCess |
 
 Q16 |
 
 OFF
Detected burst type of the last measured burst
GMSK:
 Normal burst, GMSK-modulated
EPSK:
 Normal burst, 8PSK-modulated
ACCess:
 Access burst
Q16:
 Normal burst, 16-QAM-modulated
OFF:
 Inactive slot
<5_SlotStatistic>
ON |
 
 OFF
ON:
 Averaging over different burst type
OFF:
 Uniform burst type in the averaging range
<6_OutOfTolerance>
Percentage of measured bursts with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<7_UsefulPartMin> <8_UsefulPartMax>
Minimum and maximum power across the useful part of the burst
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<9_Subvector1> ... <20_Subvector12>}
Burst power at position in μs: –28, –18, –10, 0, 2, 4, 538.2, 540.2, 542.8, 552.8, 560.8, 570.8
Range: 
-100 dB  to  100 dB
Default unit: 
dB
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
Options: 
R&S CMW-KM012; R&S CMW-KM201 (for 16-QAM)
Top