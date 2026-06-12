# FETChLTEMEASiPRAChMODulationSCORrelationPREambleNumber

Module: LTE Measurements
Source: 9b6882541216487e.htm

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
FETCh:LTE:MEAS<i>:PRACh:MODulation:SCORrelation:PREamble<Number>?
FETCh:LTE:MEAS<i>:PRACh:MODulation:SCORrelation:PREamble<Number>? 
Returns the sequence correlation for a selected preamble of multi-preamble measurements.
It indicates the correlation between the ideal preamble sequence determined from the parameter settings and the measured preamble sequence. A value of 1 corresponds to perfect correlation. A value much smaller than 1 indicates that the preamble sequence was not found.
Suffix: 
<Number>
1..400
Number of the preamble for which the results are queried
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
V2.1.20, V3.7.10 increased number of preambles
Manual operation: 
See 
"Statistical Overviews and other Single Values"
Top