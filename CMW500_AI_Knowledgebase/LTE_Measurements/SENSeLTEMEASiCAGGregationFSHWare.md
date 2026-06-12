# SENSeLTEMEASiCAGGregationFSHWare

Module: LTE Measurements
Source: 6c9053a2d0994c42.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
SENSe:LTE:MEAS<i>:CAGGregation:FSHWare?
SENSe:LTE:MEAS<i>:CAGGregation:FSHWare? 
This command is only relevant for combined signal path measurements in multi-CMW setups.
It queries whether the measurement instance and the carrier to be measured are in the same CMW. If they are in different CMWs, the measurement fails.
To correct the problem, use another measurement instance or select another carrier, so that both are in the same CMW.
Return values: 
<Value>
OFF |
 
 ON
OFF
: Different CMWs - error
ON
: Same CMW - ok
Usage: 
Query only
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Scenario = Combined Signal Path"
Top