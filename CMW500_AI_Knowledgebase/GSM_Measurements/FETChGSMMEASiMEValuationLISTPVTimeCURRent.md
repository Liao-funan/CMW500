# FETChGSMMEASiMEValuationLISTPVTimeCURRent

Module: GSM Measurements
Source: 8a5db47a36c84aa2.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, Result Groups)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:CURRent? 
[<SegmentStart>, <SegmentCount>]
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:AVERage? 
[<SegmentStart>, <SegmentCount>]
CALCulate:GSM:MEAS<i>:MEValuation:LIST:PVTime:CURRent? 
[<SegmentStart>, <SegmentCount>]
CALCulate:GSM:MEAS<i>:MEValuation:LIST:PVTime:AVERage? 
[<SegmentStart>, <SegmentCount>]
Returns the power vs. time results in list mode. By default results are returned for all measured segments. Use the optional parameters to query only a subset.
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
The values described below are returned by 
FETCh
 commands. The first six values ("Reliability" to "Out of Tolerance" result) are also returned by 
CALCulate
 commands. The remaining values returned by 
CALCulate
 commands are limit check results, one value for each result listed below.
Query parameters: 
<SegmentStart>
First segment to be returned
<SegmentCount>
Number of segments to be returned
Return values: 
<1_Reliability>
"Reliability Indicator"
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
<7_AverBurstPow>}
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.5.3
V.2.0.20: CALCulate commands added.
Options: 
R&S CMW-KM012; R&S CMW-KM201 (for 16-QAM)
Top