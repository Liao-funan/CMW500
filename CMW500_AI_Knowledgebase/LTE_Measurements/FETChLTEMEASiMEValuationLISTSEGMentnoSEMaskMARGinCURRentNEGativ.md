# FETChLTEMEASiMEValuationLISTSEGMentnoSEMaskMARGinCURRentNEGativ

Module: LTE Measurements
Source: 7515af71a72840dc.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:CURRent:NEGativ?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:CURRent:NEGativ? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:CURRent:POSitiv? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:AVERage:NEGativ? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:AVERage:POSitiv? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:MINimum:NEGativ? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:MINimum:POSitiv? 
Return spectrum emission mask margin results for segment <no> in list mode.
The individual commands provide results for the 
CURRent
, 
AVERage
 and maximum traces (resulting in 
MINimum
 margins) for 
NEGative
 and 
POSitive
 offset frequencies.
Suffix: 
<no>
1..1000
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatistExpired>
Reached statistical length in slots
Range: 
0  to  1000
<4_OutOfTol>
Percentage of measured subframes with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<5_MarginX1>
X-position of margin for area 1
Range: 
-35 MHz  to  35 MHz
Default unit: 
Hz
<6_MarginY1>
Y-value of margin for area 1
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<7_MarginX2> <8_MarginY2> ... <27_MarginX12> <28_MarginY12>
X-position and Y-value for area 2 to 12
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
V2.1.25: increased maximum number of segments to 250
V2.1.30: increased maximum number of segments to 512
V3.0.50: increased maximum number of segments to 1000
V3.2.80: increased number of areas to 12
Options: 
R&S CMW-KM012
Top