# FETChLTEMEASiMEValuationLISTSEGMentnoMODulationDMODulation

Module: LTE Measurements
Source: 72e2cec4041a4f93.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:DMODulation?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:DMODulation? 
Return the detected modulation scheme for segment <no> in list mode.
The result is determined from the last measured slot of the statistical length.
If channel type PUCCH is detected, QPSK is returned as modulation type because the QPSK limits are applied in that case.
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<Modulation>
QPSK |
 
 Q16 |
 
 Q64
QPSK, 16-QAM, 64-QAM
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
Options: 
R&S CMW-KM012
Top