# FETChWLANMEASiMEValuationTRACeIQConstINPHase

Module: WLAN Measurements
Source: 56b60833a3474974.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
I/Q Constellation Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:IQConst:INPHase?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:IQConst:INPHase? 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:IQConst:QUADrature? 
READ:WLAN:MEAS<i>:MEValuation:TRACe:IQConst:INPHase? 
READ:WLAN:MEAS<i>:MEValuation:TRACe:IQConst:QUADrature? 
Return the results in the I/Q constellation diagram. The I (in phase) and Q (quadrature) components are retrieved via separate commands.
Return values: 
<Reliability>
"Reliability Indicator"
<Amplitudes>
Comma-separated list of I or Q amplitudes. The maximum number of values is 1000 for DSSS signals and 2080 for OFDM signals.
Range: 
-2  to  2
Example: 
See 
"Performing Single-Shot Measurements (DSSS)"
Usage: 
Query only
Firmware/Software: 
V2.0.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top