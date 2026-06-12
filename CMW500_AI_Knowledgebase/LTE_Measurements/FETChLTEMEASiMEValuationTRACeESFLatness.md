# FETChLTEMEASiMEValuationTRACeESFLatness

Module: LTE Measurements
Source: 239ccfc585ac4c27.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Equalizer Spectrum Flatness Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:ESFLatness?
FETCh:LTE:MEAS<i>:MEValuation:TRACe:ESFLatness? 
READ:LTE:MEAS<i>:MEValuation:TRACe:ESFLatness? 
Returns the values of the equalizer spectrum flatness trace. See also 
"View Equalizer Spectrum Flatness"
.
The number of results n equals 12 times the number of resource blocks, which depends on the channel bandwidth, see 
"Resources in Time and Frequency Domain"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power_1> ... <Power_n>
Comma-separated list of power values, one value per subcarrier
For not allocated subcarriers, NCAP is returned.
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
V2.0.10
Top