# CONFigureGSMMEASiMEValuationLIMitEPSKSSWitchingPLEVel

Module: GSM Measurements
Source: ce83158aa86b4250.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum Switching)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:SSWitching:PLEVel
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:SSWitching:PLEVel 
<Enable1>, ..., <Enable10>, <PowerLevel1>, ..., <PowerLevel10>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:SSWitching:PLEVel 
<Enable1>, ..., <Enable10>, <PowerLevel1>, ..., <PowerLevel10>
Define and activate reference power values for the modulation schemes 8PSK and 16-QAM. These values are relevant in the context of 
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
 and 
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
QAM<ModOrder>:
​
SSWitching:
​
MPOint<no>
.
Suffix: 
<ModOrder>
16
Modulation order (fixed)
Parameters:
<Enable1> ... <Enable10>
OFF |
 
 ON
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
V1.0.0.4 (V1.0.15.0 for 
QAM16
)
Options: 
R&S CMW-KM201 (for QAM16)
Top