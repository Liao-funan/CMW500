# FETChGSMMEASiMEValuationLISTMODulationPERCentile

Module: GSM Measurements
Source: b99879e59c0542dd.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, Result Groups)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERCentile?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERCentile? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:MODulation:PERCentile? 
Returns the 95
th
 percentile of the modulation results in list mode.
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
<7_EVM>
Error vector magnitude percentile
Range: 
0 %  to  100 %
Default unit: 
%
<8_MagnitudeError>
Magnitude error percentile
Range: 
0 %  to  100 %
Default unit: 
%
<9_PhaseError>}
Phase error percentile
Range: 
0 deg  to  180 deg
Default unit: 
deg
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.5.3
V2.0.20: CALCulate command added.
Options: 
R&S CMW-KM012; R&S CMW-KM201 (for 16-QAM)
Top