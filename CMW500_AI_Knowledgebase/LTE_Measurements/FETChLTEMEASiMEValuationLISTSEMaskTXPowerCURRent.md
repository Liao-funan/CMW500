# FETChLTEMEASiMEValuationLISTSEMaskTXPowerCURRent

Module: LTE Measurements
Source: e6ca5671b8394873.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:TXPower:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:TXPower:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:TXPower:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:TXPower:MINimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:TXPower:MAXimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:TXPower:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEMask:TXPower:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEMask:TXPower:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEMask:TXPower:MINimum? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEMask:TXPower:MAXimum? 
Return the total TX power in the slot for all measured list mode segments.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<TXpower>
Comma-separated list of values, one per measured segment
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
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