# FETChLTEMEASiMEValuationTRACePMONitorCCno

Module: LTE Measurements
Source: 1edc6f019bb5409e.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Monitor Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:PMONitor:CC<no>?
FETCh:LTE:MEAS<i>:MEValuation:TRACe:PMONitor:CC<no>? 
READ:LTE:MEAS<i>:MEValuation:TRACe:PMONitor:CC<no>? 
Returns the power monitor results for all captured CC<no> subframes. The number of subframes can be configured, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
MSUBframes
.
Suffix: 
<no>
1..4
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of power values, one value per subframe
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.7.30
Top