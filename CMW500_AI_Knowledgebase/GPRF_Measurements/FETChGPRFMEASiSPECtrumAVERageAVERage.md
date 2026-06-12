# FETChGPRFMEASiSPECtrumAVERageAVERage

Module: GPRF Measurements
Source: e0b9266825ea474c.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Spectrum Analyzer Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:SPECtrum:AVERage:AVERage?
FETCh:GPRF:MEAS<i>:SPECtrum:AVERage:AVERage? 
FETCh:GPRF:MEAS<i>:SPECtrum:AVERage:CURRent? 
FETCh:GPRF:MEAS<i>:SPECtrum:AVERage:MAXimum? 
FETCh:GPRF:MEAS<i>:SPECtrum:AVERage:MINimum? 
READ:GPRF:MEAS<i>:SPECtrum:AVERage:AVERage? 
READ:GPRF:MEAS<i>:SPECtrum:AVERage:CURRent? 
READ:GPRF:MEAS<i>:SPECtrum:AVERage:MAXimum? 
READ:GPRF:MEAS<i>:SPECtrum:AVERage:MINimum? 
Returns the traces calculated with the average detector. Current, average, maximum and minimum traces can be retrieved.
The averaging mode is defined via 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
SPECtrum:
​
AMODe
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Power>
1001 values
Range: 
-150 dBm  to  50 dBm
Default unit: 
dBm
Usage: 
Query only
Firmware/Software: 
V3.0.10
Options: 
R&S CMW-KM010
Top