# FETChWCDMaMEASiNBMEValuationTRACePERRorCHIPCURRent

Module: WCDMA NodeB Measurements
Source: b3687c98101e456b.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Phase Error Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:CHIP:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:CHIP:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:CHIP:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:CHIP:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:CHIP:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:CHIP:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:PERRor:CHIP:MAXimum? 
Returns the values of the RMS phase error vs. chip traces, measured in the preselected slot (see 
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
<PhaseErr1> ... <PhaseErr2560>
Range: 
-180 deg  to  180 deg
Default unit: 
deg
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