# CONFigureLTEMEASiMEValuationMODulationEEPeriodsPUSChLEADing

Module: LTE Measurements
Source: d7342691e14773.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:MODulation:EEPeriods:PUSCh:LEADing
CONFigure:LTE:MEAS<i>:MEValuation:MODulation:EEPeriods:PUSCh:LEADing 
<Leading>
Specifies an EVM exclusion period at the beginning of a subframe (detected channel type "PUSCH"). The specified period is excluded from the calculation of EVM, magnitude error and phase error results.
Parameters:
<Leading>
OFF |
 
 MS25
OFF
: no exclusion
MS25
: 25 μs excluded
*RST:
OFF
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"EVM Exclusion Periods"
Top