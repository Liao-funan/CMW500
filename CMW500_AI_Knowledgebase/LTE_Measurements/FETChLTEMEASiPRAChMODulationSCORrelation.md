# FETChLTEMEASiPRAChMODulationSCORrelation

Module: LTE Measurements
Source: c20c1ac6cf174df3.htm

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
FETCh:LTE:MEAS<i>:PRACh:MODulation:SCORrelation?
FETCh:LTE:MEAS<i>:PRACh:MODulation:SCORrelation? 
Returns the sequence correlation for single-preamble measurements.
It indicates the correlation between the ideal preamble sequence determined from the parameter settings and the measured preamble sequence. A value of 1 corresponds to perfect correlation. A value much smaller than 1 indicates that the preamble sequence was not found.
Return values: 
<Reliability>
"Reliability Indicator"
<SeqCorrelation>
Range: 
0  to  1
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Statistical Overviews and other Single Values"
Top