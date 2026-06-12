# FETChLTEMEASiMEValuationLISTPOWerTXPowerCURRent

Module: LTE Measurements
Source: 40d19a6540844c57.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:POWer:TXPower:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:POWer:TXPower:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:POWer:TXPower:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:POWer:TXPower:MINimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:POWer:TXPower:MAXimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:POWer:TXPower:SDEViation? 
Return the total TX power of all component carriers, for all measured list mode segments.
To enable the calculation of the results, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
POWer
.
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
V3.5.50
Options: 
R&S CMW-KM012
Top