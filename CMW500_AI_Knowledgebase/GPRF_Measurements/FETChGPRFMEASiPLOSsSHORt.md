# FETChGPRFMEASiPLOSsSHORt

Module: GPRF Measurements
Source: 773f87d907d1496e.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Pathloss Measurement Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:PLOSs:SHORt?
FETCh:GPRF:MEAS<i>:PLOSs:SHORt? 
<Connector>
Queries the result state for the measurement mode "Short" and a selected RF connector.
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
<ResultStateShort>
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