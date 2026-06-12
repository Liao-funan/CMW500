# FETChGSMMEASiMEValuationSMODulationFREQuency

Module: GSM Measurements
Source: 4af626e091d646e9.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Modulation Results
 > 
FETCh:GSM:MEAS<i>:MEValuation:SMODulation:FREQuency?
FETCh:GSM:MEAS<i>:MEValuation:SMODulation:FREQuency? 
READ:GSM:MEAS<i>:MEValuation:SMODulation:FREQuency? 
CALCulate:GSM:MEAS<i>:MEValuation:SMODulation:FREQuency? 
Returns the average burst power measured at a series of frequencies. The frequencies are determined by the offset values defined via the command 
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
OFRequence
. All defined offset values are considered (irrespective of their activation status).
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_PowOffsetM19> ... <21_PowOffsetM0> <22_PowCarrier> <23_PowOffsetP0> ... <42_PowOffsetP19>
<PowOffsetM/P n>
 refers to the average burst power at the carrier frequency minus/plus the frequency offset value number n.
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