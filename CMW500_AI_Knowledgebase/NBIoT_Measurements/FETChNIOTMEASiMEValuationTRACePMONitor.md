# FETChNIOTMEASiMEValuationTRACePMONitor

Module: NBIoT Measurements
Source: 7327bc30334f4c00.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Monitor Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:PMONitor?
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:PMONitor? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:PMONitor? 
Returns the power monitor results for all captured slots. The number of captured slots is configurable, see 
CONFigure:
​
NIOT:
​
MEAS<i>:
​
MEValuation:
​
NSLots
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of power values, one value per captured slot
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
V3.5.10
Top