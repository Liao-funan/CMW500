# FETChWCDMaMEASiNBMEValuationTRACeMERRorCHIPCURRent

Module: WCDMA NodeB Measurements
Source: c9e2e3a56cac495a.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Magnitude Error Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:CHIP:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:CHIP:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:CHIP:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:CHIP:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:CHIP:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:CHIP:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:MERRor:CHIP:MAXimum? 
Returns the values of the magnitude error vs. chip traces, measured in the preselected slot (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
NB:
​
MEValuation:
​
PSLot
). One value per chip is returned. The results of the current, average and maximum traces can be retrieved.
See also 
"Detailed Views: Modulation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<MagErr1> ... <MagErr2560>
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
V3.5.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top