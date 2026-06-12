# CONFigureLTEMEASiMEValuationMODulationEEPeriodsPUSChLAGGing

Module: LTE Measurements
Source: d7342691e14811.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:MODulation:EEPeriods:PUSCh:LAGGing
CONFigure:LTE:MEAS<i>:MEValuation:MODulation:EEPeriods:PUSCh:LAGGing 
<Lagging>
Specifies an EVM exclusion period at the end of each subframe (detected channel type "PUSCH"); if SRS signals are allowed, at the end of each shortened subframe. The specified period is excluded from the calculation of EVM, magnitude error and phase error results.
Parameters:
<Lagging>
OFF |
 
 MS05 |
 
 MS25
OFF
: no exclusion
MS05
: 5 μs excluded
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