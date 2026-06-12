# CONFigureGSMMEASiMEValuationSMODulationEARea

Module: GSM Measurements
Source: 92a307af1f594903.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Modulation Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:SMODulation:EARea
CONFigure:GSM:MEAS<i>:MEValuation:SMODulation:EARea 
<Enable1>, <Start1>, <Stop1>, <Enable2>, <Start2>, <Stop2>
Defines the time intervals (evaluation areas) to be used for spectrum modulation measurements.
Parameters:
<Enable1>
OFF |
 
 ON
ON:
 Enable area 1
OFF:
 Disable area 1
*RST:
OFF
<Start1>
Start of evaluation area 1
Range: 
0 Sym  to  146 Sym
*RST:
6 Sym
Default unit: 
Symbol
<Stop1>
Stop of evaluation area 1
Range: 
1 Symbol  to  147 Symbol
*RST:
45 Symbol
Default unit: 
Symbol
<Enable2>
OFF |
 
 ON
ON:
 Enable area 2
OFF:
 Disable area 2
*RST:
ON
<Start2>
Start of evaluation area 2
Range: 
0 Sym  to  146 Symbol
*RST:
90 Symbol
Default unit: 
Symbol
<Stop2>
Stop of evaluation area 2
Range: 
1 Symbol  to  147 Symbol
*RST:
129 Symbol
Default unit: 
Symbol
Example: 
See 
"Configuring a Spectrum Measurement"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Evaluation Areas"
Top