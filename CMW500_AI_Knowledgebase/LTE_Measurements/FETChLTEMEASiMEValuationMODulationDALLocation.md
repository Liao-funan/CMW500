# FETChLTEMEASiMEValuationMODulationDALLocation

Module: LTE Measurements
Source: b79b6e7cde8a49a8.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Detected Signal Configuration
 > 
FETCh:LTE:MEAS<i>:MEValuation:MODulation:DALLocation?
FETCh:LTE:MEAS<i>:MEValuation:MODulation:DALLocation? 
FETCh:LTE:MEAS<i>:MEValuation:ACLR:DALLocation? 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:DALLocation? 
Returns the detected allocation for the measured slot.
If the same slot is measured by the individual measurements, all commands yield the same result. If different statistic counts are defined for the modulation, ACLR and spectrum emission mask measurements, different slots can be measured and different results can be returned by the individual commands.
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
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10: MODulation command
V2.0.20: ACLR and SEMask command
Top