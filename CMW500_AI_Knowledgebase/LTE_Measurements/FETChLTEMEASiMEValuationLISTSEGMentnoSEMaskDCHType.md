# FETChLTEMEASiMEValuationLISTSEGMentnoSEMaskDCHType

Module: LTE Measurements
Source: 655226350b7c45c6.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:DCHType?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask:DCHType? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:DCHType? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:DCHType? 
Return the detected channel type for segment <no> in list mode.
The result is determined from the last measured slot of the statistical length. The individual measurements provide identical detected channel type results when measuring the same slot. However different statistical lengths can be defined for the measurements so that the measured slots and returned results can differ.
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<ChannelType>
PUSCh |
 
 PUCCh
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