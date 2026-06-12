# FETChLTEMEASiENBMEValuationTRACeOSPower

Module: LTE eNodeB Measurements
Source: e6234cd10ddc465f.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
OFDM Symbol Power Results
 > 
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:OSPower?
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:OSPower? 
READ:LTE:MEAS<i>:ENB:MEValuation:TRACe:OSPower? 
Returns the values of the OFDM symbol power trace. See also 
"View OFDM Symbol Power"
.
The number of results n (resource blocks) depends on the channel bandwidth, see 
"Resources in Time and Frequency Domain"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of power values, one value per resource block
Range: 
-100 dB  to  10 dB
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