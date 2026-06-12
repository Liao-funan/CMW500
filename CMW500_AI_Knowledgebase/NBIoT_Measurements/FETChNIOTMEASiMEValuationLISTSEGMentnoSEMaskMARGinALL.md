# FETChNIOTMEASiMEValuationLISTSEGMentnoSEMaskMARGinALL

Module: NBIoT Measurements
Source: c2da2c845f7c4610.htm

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
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:ALL?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:MARGin:ALL? 
Returns limit line margin values, i.e. vertical distances between the spectrum emission mask limit line and a trace, for segment <no> in list mode.
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
<MarginCurrNeg>
Comma-separated list of 12 margin results
For the current trace, area 1 to 12, negative frequency offsets
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<MarginCurrPos>
Comma-separated list of 12 margin results
For the current trace, area 1 to 12, positive frequency offsets
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<MarginAvgNeg>
Comma-separated list of 12 margin results
For the average trace, area 1 to 12, negative frequency offsets
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<MarginAvgPos>
Comma-separated list of 12 margin results
For the average trace, area 1 to 12, positive frequency offsets
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<MarginMinNeg>
Comma-separated list of 12 margin results
For the maximum trace, area 1 to 12, negative frequency offsets
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<MarginMinPos>
Comma-separated list of 12 margin results
For the maximum trace, area 1 to 12, positive frequency offsets
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