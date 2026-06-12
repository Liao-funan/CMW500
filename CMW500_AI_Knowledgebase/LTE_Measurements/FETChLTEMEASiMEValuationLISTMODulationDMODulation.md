# FETChLTEMEASiMEValuationLISTMODulationDMODulation

Module: LTE Measurements
Source: 5974a644c5414b57.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:DMODulation?
FETCh:LTE:MEAS<i>:MEValuation:LIST:MODulation:DMODulation? 
Return the detected modulation scheme for all measured list mode segments.
The result is determined from the last measured slot of the statistical length of a segment.
If channel type PUCCH is detected, QPSK is returned as modulation type because the QPSK limits are applied in that case.
Return values: 
<Reliability>
"Reliability Indicator"
<Modulation>
QPSK |
 
 Q16 |
 
 Q64
Comma-separated list of values, one per measured segment
QPSK, 16-QAM, 64-QAM
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