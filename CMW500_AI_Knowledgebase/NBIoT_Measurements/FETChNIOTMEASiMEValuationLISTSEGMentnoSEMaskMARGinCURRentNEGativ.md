# FETChNIOTMEASiMEValuationLISTSEGMentnoSEMaskMARGinCURRentNEGativ

Module: NBIoT Measurements
Source: 1379b38d40a54764.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:CURRent:NEGativ?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:CURRent:NEGativ? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:CURRent:POSitiv? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:AVERage:NEGativ? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:AVERage:POSitiv? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:MINimum:NEGativ? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:MINimum:POSitiv? 
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
Each command returns pairs of X and Y values of the margins for emission mask areas 1 to 12. Result array structure:
<Reliability>, <SegReliability>, <StatistExpired>, <OutOfTolerance>, {<MarginX>, <MarginY>}
area 1
, {...}
area 2
, ..., {...}
area 12
For inactive areas, NCAP is returned.
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<StatistExpired>
Reached statistical length in slots
Range: 
0  to  1000
<OutOfTolerance>
Percentage of measured slots with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<MarginMinPosX>
X-position of margin
Range: 
-35 MHz  to  35 MHz
Default unit: 
Hz
<MarginMinPosY>
Y-value of margin
Range: 
-160 dB  to  160 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KM012
Top