# CALCulateGSMMEASiMEValuationLISTPVTimeABPowerCURRent

Module: GSM Measurements
Source: cfa7a328a3ab4b7c.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:PVTime:ABPower:CURRent?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:PVTime:ABPower:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:PVTime:ABPower:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:ABPower:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:PVTime:ABPower:AVERage? 
Return average burst power results for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<AverageBurstPow>
Comma-separated list of values, one per measured segment
Range: 
-100 dBm  to  55 dBm
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V2.1.60
Options: 
R&S CMW-KM012
Top