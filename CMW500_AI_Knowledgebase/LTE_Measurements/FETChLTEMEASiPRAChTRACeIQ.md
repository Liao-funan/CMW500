# FETChLTEMEASiPRAChTRACeIQ

Module: LTE Measurements
Source: 0c71f26fc3354cbc.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
I/Q Constellation Results (Traces)
 > 
FETCh:LTE:MEAS<i>:PRACh:TRACe:IQ?
FETCh:LTE:MEAS<i>:PRACh:TRACe:IQ? 
Returns the results in the I/Q constellation diagram.
See also 
"View I/Q Constellation"
.
Return values: 
<Reliability>
"Reliability Indicator"
<I_Phase_1> <Q_Phase_1> ... <I_Phase_139/839> <Q_Phase_139/839>
Normalized I and Q amplitudes, one value pair per modulation symbol.
For preamble format 4, there are 139 symbols.
For preamble format 0 to 3, there are 839 symbols.
Range: 
-2  to  2
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Traces and Bar Graphs"
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top