# FETChLTEMEASiMEValuationLISTSEMaskDALLocation

Module: LTE Measurements
Source: b11bad614d474839.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:DALLocation?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:DALLocation? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:ACLR:DALLocation? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:DALLocation? 
Return the detected allocation for all measured list mode segments.
The result is determined from the last measured slot of the statistical length of a segment. The individual measurements provide identical detected allocation results when measuring the same slot. However different statistical lengths can be defined for the measurements so that the measured slots and returned results can differ.
The results are returned as pairs per segment: 
<Reliability>
, {
<NrResBlocks>
, 
<OffsetResBlocks>
}
Seg 1
, {
<NrResBlocks>
, 
<OffsetResBlocks>
}
Seg 2
, ...
Return values: 
<Reliability>
"Reliability Indicator"
<NrResBlocks>
Number of allocated resource blocks
Range: 
1  to  100
<OffsetResBlocks>
Offset of the first allocated resource block from the edge of the allocated UL transmission bandwidth
Range: 
0  to  99
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