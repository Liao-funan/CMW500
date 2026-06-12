# FETChWCDMaMEASiNBMEValuationTRACeEVMagnitudeCHIPCURRent

Module: WCDMA NodeB Measurements
Source: e390e08fce1747eb.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:CHIP:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:CHIP:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:CHIP:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:CHIP:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:CHIP:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:CHIP:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EVMagnitude:CHIP:MAXimum? 
Returns the values of the RMS EVM vs. chip traces, measured in the preselected slot (see 
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
<EVM1> ... <EVM2560>
Range: 
0 % to 100 % (MAXimum: -100 % to 100 %)
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