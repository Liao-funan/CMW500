# CALCulateGSMMEASiMEValuationLISTSMODulationCPOWer

Module: GSM Measurements
Source: 47e9e1ee31374830.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SMODulation:CPOWer?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SMODulation:CPOWer? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SMODulation:CPOWer? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SSWitching:CPOWer? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SSWitching:CPOWer? 
Return carrier output power results for all measured list mode segments, for spectrum due to modulation or spectrum due to switching measurement.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<CarrierPower>
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