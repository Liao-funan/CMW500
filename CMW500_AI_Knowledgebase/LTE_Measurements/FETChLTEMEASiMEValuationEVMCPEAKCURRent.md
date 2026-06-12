# FETChLTEMEASiMEValuationEVMCPEAKCURRent

Module: LTE Measurements
Source: 4b76bfb003a04ee8.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
FETCh:LTE:MEAS<i>:MEValuation:EVMC:PEAK:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:EVMC:PEAK:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:EVMC:PEAK:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:EVMC:PEAK:MAXimum? 
FETCh:LTE:MEAS<i>:MEValuation:EVMC:PEAK:SDEViation? 
READ:LTE:MEAS<i>:MEValuation:EVMC:PEAK:CURRent? 
READ:LTE:MEAS<i>:MEValuation:EVMC:PEAK:AVERage? 
READ:LTE:MEAS<i>:MEValuation:EVMC:PEAK:MAXimum? 
READ:LTE:MEAS<i>:MEValuation:EVMC:PEAK:SDEViation? 
The 
CURRent
 command returns the maximum value of the EVM vs subcarrier trace.
The 
AVERage
, 
MAXimum
 and 
SDEViation
 values are calculated from the 
CURRent
 values.
The peak results cannot be displayed at the GUI.
Return values: 
<Reliability>
"Reliability Indicator"
<EVMCpeakStdDev>
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Top