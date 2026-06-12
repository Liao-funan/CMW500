# CONFigureLTEMEASiMEValuationMODulationEEPeriodsPUCCh

Module: LTE Measurements
Source: 8dae028576f74457.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:MODulation:EEPeriods:PUCCh
CONFigure:LTE:MEAS<i>:MEValuation:MODulation:EEPeriods:PUCCh 
<PUCCH>
Enables or disables EVM exclusion periods for slots with detected channel type "PUCCH". If enabled, the first and the last SC-FDMA symbol of each slot is excluded from the calculation of EVM, magnitude error and phase error single value results. If the last symbol of a slot is already excluded because SRS signals are allowed, the second but last symbol is also excluded.
Parameters:
<PUCCH>
OFF |
 
 ON
*RST:
ON
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"EVM Exclusion Periods"
Top