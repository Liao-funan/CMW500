# FETChWCDMaMEASiMEValuationTRACeEVMagnitudeCHIPCURRent

Module: WCDMA Measurements
Source: 9853eb2a92c146b6.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EVMagnitude:CHIP:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EVMagnitude:CHIP:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EVMagnitude:CHIP:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EVMagnitude:CHIP:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EVMagnitude:CHIP:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EVMagnitude:CHIP:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EVMagnitude:CHIP:MAXimum? 
Returns the values of the RMS EVM vs. chip traces, measured in the preselected slot (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
PSLot
). One value per chip is returned. The results of the current, average and maximum traces can be retrieved.
See also 
"Detailed Views: Modulation, CDP and CDE"
Return values: 
<Reliability>
"Reliability Indicator"
<EVM1> ... <EVM2560>
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
V1.0.4.11
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top