# FETChLTEMEASiENBMEValuationTRACeOOPowerCURRent

Module: LTE eNodeB Measurements
Source: f58528ef83f643c1.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
ON/OFF Power Results (Traces)
 > 
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:OOPower:CURRent?
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:OOPower:CURRent? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:OOPower:AVERage? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:OOPower:MAXimum? 
READ:LTE:MEAS<i>:ENB:MEValuation:TRACe:OOPower:CURRent? 
READ:LTE:MEAS<i>:ENB:MEValuation:TRACe:OOPower:AVERage? 
READ:LTE:MEAS<i>:ENB:MEValuation:TRACe:OOPower:MAXimum? 
Returns the values of the ON/OFF power trace. See also 
"View ON/OFF Power"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of 7680 power values, from start of special subframe to end of subframe number 4
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
V3.5.30
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top