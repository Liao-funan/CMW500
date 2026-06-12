# FETChGSMMEASiMEValuationTRACeSSWitchingTIME[CURRent]

Module: GSM Measurements
Source: 0f27d63e6e4e4754.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Switching Results
 > 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:SSWitching:TIME[:CURRent]?
FETCh:GSM:MEAS<i>:MEValuation:TRACe:SSWitching:TIME[:CURRent]? 
READ:GSM:MEAS<i>:MEValuation:TRACe:SSWitching:TIME[:CURRent]? 
Returns the spectrum due to switching trace values measured at a selected offset frequency (
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
SSWitching:
​
TDFSelect
).
Return values: 
<Reliability>
"Reliability Indicator"
<Result_1> ... <Result_n>
n power results, 4 for each symbol period of all measured slots
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Configuring a Spectrum Measurement"
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top