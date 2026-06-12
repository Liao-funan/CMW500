# FETChLTEMEASiMEValuationLISTSEMaskDCHType

Module: LTE Measurements
Source: c16f48f4621b4b5d.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:DCHType?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:DCHType? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:DCHType? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:DCHType? 
Return the detected channel type for all measured list mode segments.
The result is determined from the last measured slot of the statistical length of a segment. The individual measurements provide identical detected channel type results when measuring the same slot. However different statistical lengths can be defined for the measurements so that the measured slots and returned results can differ.
Return values: 
<Reliability>
"Reliability Indicator"
<ChannelType>
PUSCh |
 
 PUCCh
Comma-separated list of values, one per measured segment
Example: 
See 
"Retrieving Single Results for All Segments"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KM012
Top