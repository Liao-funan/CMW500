# FETChWCDMaMEASiMEValuationTRACeMERRorCHIPCURRent

Module: WCDMA Measurements
Source: 97b79f6928f54877.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Magnitude Error Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:MERRor:CHIP:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:MERRor:CHIP:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:MERRor:CHIP:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:MERRor:CHIP:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:MERRor:CHIP:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:MERRor:CHIP:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:MERRor:CHIP:MAXimum? 
Returns the values of the magnitude error vs. chip traces, measured in the preselected slot (see 
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
<MagErr1> ... <MagErr2560>
Range: 
-100 %  to  100 %
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