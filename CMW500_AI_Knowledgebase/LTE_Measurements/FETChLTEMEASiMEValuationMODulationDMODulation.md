# FETChLTEMEASiMEValuationMODulationDMODulation

Module: LTE Measurements
Source: cd0756c24f724635.htm

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
FETCh:LTE:MEAS<i>:MEValuation:MODulation:DMODulation?
FETCh:LTE:MEAS<i>:MEValuation:MODulation:DMODulation? 
Returns the detected modulation scheme in the measured slot. If channel type PUCCH is detected, QPSK is returned as modulation type because the QPSK limits are applied in that case.
Return values: 
<Reliability>
"Reliability Indicator"
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
Top