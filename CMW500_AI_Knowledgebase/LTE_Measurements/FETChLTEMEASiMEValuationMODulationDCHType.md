# FETChLTEMEASiMEValuationMODulationDCHType

Module: LTE Measurements
Source: 9692607a9767498a.htm

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
FETCh:LTE:MEAS<i>:MEValuation:MODulation:DCHType?
FETCh:LTE:MEAS<i>:MEValuation:MODulation:DCHType? 
FETCh:LTE:MEAS<i>:MEValuation:ACLR:DCHType? 
FETCh:LTE:MEAS<i>:MEValuation:SEMask:DCHType? 
Returns the detected channel type for the measured slot.
If the same slot is measured by the individual measurements, all commands yield the same result. If different statistic counts are defined for the modulation, ACLR and spectrum emission mask measurements, different slots can be measured and different results can be returned by the individual commands.
Return values: 
<Reliability>
"Reliability Indicator"
<ChannelType>
PUSCh |
 
 PUCCh
PUSCh
: slot contains only PUSCH
PUCCH
: slot contains only PUCCH
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10: MODulation command
V2.0.20: ACLR and SEMask commands added
Top