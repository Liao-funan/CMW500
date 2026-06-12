# FETChGPRFMEASiPLOSsEVALSTATe

Module: GPRF Measurements
Source: 5298b29fded14d3d.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Pathloss Measurement Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:PLOSs:EVAL:STATe?
FETCh:GPRF:MEAS<i>:PLOSs:EVAL:STATe? 
<Connector>
Queries the result state for all measurement modes and a selected RF connector.
For possible connector values, see 
"Values for RF Path Selection"
.
Query parameters: 
<Connector>
RF connector for which the result state is queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ResultStateOpen>
NCAP |
 
 PEND |
 
 RDY
Result state for measurement mode "Open"
NCAP
: no measurement results available
PEND
: measurement running
RDY
: measurement complete, results available
<ResultStateShort>
NCAP |
 
 PEND |
 
 RDY
Result state for measurement mode "Short"
<ResultStateEval>
NCAP |
 
 PEND |
 
 RDY
Result state for measurement mode "Eval"
Example: 
See 
"Pathloss Measurement"
Usage: 
Query only
Firmware/Software: 
V3.7.21
Manual operation: 
See 
"Result diagram view"
Top