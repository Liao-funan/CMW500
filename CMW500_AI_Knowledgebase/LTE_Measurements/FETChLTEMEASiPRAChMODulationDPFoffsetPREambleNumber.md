# FETChLTEMEASiPRAChMODulationDPFoffsetPREambleNumber

Module: LTE Measurements
Source: 1018f91de92e4d07.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Detected Signal Configuration
 > 
FETCh:LTE:MEAS<i>:PRACh:MODulation:DPFoffset:PREamble<Number>?
FETCh:LTE:MEAS<i>:PRACh:MODulation:DPFoffset:PREamble<Number>? 
Returns the automatically detected or manually configured PRACH frequency offset for a selected preamble of multi-preamble measurements.
Suffix: 
<Number>
1..400
Number of the preamble for which the results are queried
Return values: 
<Reliability>
"Reliability Indicator"
<PRACHfreqOffset>
Range: 
0  to  94
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.1.20, V3.7.10 increased number of preambles
Manual operation: 
See 
"Statistical Overviews and other Single Values"
Top