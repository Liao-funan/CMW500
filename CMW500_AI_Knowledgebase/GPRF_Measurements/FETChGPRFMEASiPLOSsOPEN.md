# FETChGPRFMEASiPLOSsOPEN

Module: GPRF Measurements
Source: 1519ad85c8e04c82.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Pathloss Measurement Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:PLOSs:OPEN?
FETCh:GPRF:MEAS<i>:PLOSs:OPEN? 
<Connector>
Queries the result state for the measurement mode "Open" and a selected RF connector.
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
NCAP
: no measurement results available
PEND
: measurement running
RDY
: measurement complete, results available
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