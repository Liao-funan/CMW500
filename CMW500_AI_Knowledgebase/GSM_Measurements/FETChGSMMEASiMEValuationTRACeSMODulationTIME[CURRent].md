# FETChGSMMEASiMEValuationTRACeSMODulationTIME[CURRent]

Module: GSM Measurements
Source: d4cdf02b1a264aad.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Modulation Results
 > 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:SMODulation:TIME[:CURRent]?
FETCh:GSM:MEAS<i>:MEValuation:TRACe:SMODulation:TIME[:CURRent]? 
READ:GSM:MEAS<i>:MEValuation:TRACe:SMODulation:TIME[:CURRent]? 
Returns the spectrum due to modulation trace values measured at a selected offset frequency (
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
SMODulation:
​
TDFSelect
).
Return values: 
<Reliability>
"Reliability Indicator"
<Result_1> ... <Result_n>
n power results, 4 for each symbol period of the "Measured Slot"
Range: 
-100 dB  to  100 dB
Default unit: 
dB
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