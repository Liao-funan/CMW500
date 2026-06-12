# FETChNIOTMEASiMEValuationLISTSEGMentnoSEMaskCURRent

Module: NBIoT Measurements
Source: 4e29ab136fbb491c.htm

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
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:SDEViation? 
Return spectrum emission single value results for segment <no> in list mode.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
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
<OBW>
Occupied bandwidth
Range: 
0 kHz  to  400 kHz
Default unit: 
Hz
<TXpower>
Total TX power within 400 kHz
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
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