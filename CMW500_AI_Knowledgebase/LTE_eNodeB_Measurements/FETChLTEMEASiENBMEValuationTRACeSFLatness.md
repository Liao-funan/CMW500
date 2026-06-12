# FETChLTEMEASiENBMEValuationTRACeSFLatness

Module: LTE eNodeB Measurements
Source: cbdca325fada45d6.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Flatness Results (Traces)
 > 
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:SFLatness?
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:SFLatness? 
READ:LTE:MEAS<i>:ENB:MEValuation:TRACe:SFLatness? 
Returns the values of the spectrum flatness trace. See also 
"View Spectrum Flatness"
.
The number of results n equals 12 times the number of resource blocks, which depends on the channel bandwidth, see 
"Resources in Time and Frequency Domain"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of n power values, one per subcarrier
Range: 
-20 dB  to  20 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top