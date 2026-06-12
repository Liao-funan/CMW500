# CONFigureGSMMEASiMEValuationLIMitGMSKSSWitchingPLEVel

Module: GSM Measurements
Source: c8f090627ca84509.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum Switching)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:SSWitching:PLEVel
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:SSWitching:PLEVel 
<Enable1>, ..., <Enable10>, <PowerLevel1>, ..., <PowerLevel10>
Defines and activates reference power values for the modulation scheme GMSK. These values are relevant in the context of 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
GMSK:
​
SSWitching:
​
MPOint<no>
.
Parameters:
<Enable1> ... <Enable10>
ON |
 
 OFF
ON:
 Enable reference value
OFF:
 Disable reference value
*RST:
ON
<PowerLevel1> ... <PowerLevel10>
Reference power value
Range: 
0 dBm  to  39 dBm
*RST:
Level 1 to 10 in dBm: 39, 37, 35, 33, 31, 29, 27, 25, 23, 21
Default unit: 
dBm
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Spectrum Modulation and Spectrum Switching"
Top