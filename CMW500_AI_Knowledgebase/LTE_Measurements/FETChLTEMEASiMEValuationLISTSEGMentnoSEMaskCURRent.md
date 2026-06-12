# FETChLTEMEASiMEValuationLISTSEGMentnoSEMaskCURRent

Module: LTE Measurements
Source: f64277b81b634984.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:AVERage? 
Return spectrum emission single value results for segment <no> in list mode.
The values described below are returned by 
FETCh
 commands. The first four values (reliability to out-of-tolerance result) are also returned by 
CALCulate
 commands. The remaining values returned by 
CALCulate
 commands are limit check results, one value for each result listed below.
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
Percentage of measured subframes with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<OBW>
Occupied bandwidth
Range: 
0 MHz  to  40 MHz
Default unit: 
Hz
<TXpower>
Total TX power in the slot
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
V2.0.10
V2.0.20: CALCulate commands
V2.1.25: increased maximum number of segments to 250
V2.1.30: increased maximum number of segments to 512
V3.0.50: increased maximum number of segments to 1000
Options: 
R&S CMW-KM012
Top