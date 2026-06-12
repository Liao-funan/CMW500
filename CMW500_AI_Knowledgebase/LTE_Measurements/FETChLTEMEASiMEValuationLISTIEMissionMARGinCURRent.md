# FETChLTEMEASiMEValuationLISTIEMissionMARGinCURRent

Module: LTE Measurements
Source: 5221a9430f40424b.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:IEMission:MARGin:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:IEMission:MARGin:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:IEMission:MARGin:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:IEMission:MARGin:EXTReme? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:IEMission:MARGin:SDEViation? 
Return the inband emission limit line margin results for all measured list mode segments.
The 
CURRent
 margins indicate the minimum (vertical) distance between the limit line and the current trace. A negative result indicates that the limit is exceeded.
The 
AVERage
, 
EXTReme
 and 
SDEViation
 values are calculated from the current margins.
Return values: 
<Reliability>
"Reliability Indicator"
<Margin>
Comma-separated list of values, one per measured segment
Range: 
-50 dB  to  110 dB
Default unit: 
dB
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