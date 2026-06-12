# CONFigureGSMMEASiMEValuationLIMitEPSKSMODulationRPOWer

Module: GSM Measurements
Source: 177f7ab342b1417e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum Modulation)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:SMODulation:RPOWer
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:EPSK:SMODulation:RPOWer 
<Minimum>, <Maximum>
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:SMODulation:RPOWer 
<Minimum>, <Maximum>
Define two reference power values for the modulation schemes 8PSK and 16-QAM. These values are relevant in the context of 
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
EPSK:
​
SMODulation:
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
SMODulation:
​
MPOint<no>
.
Suffix: 
<ModOrder>
16
Modulation order (fixed)
Parameters:
<Minimum>
Low reference power value
Range: 
0 dBm  to  43 dBm
*RST:
33 dBm
<Maximum>
High reference power value
Range: 
0 dBm  to  43 dBm
*RST:
34 dBm
Firmware/Software: 
V1.0.0.4 (V1.0.15.0 for 
QAM16
)
Options: 
R&S CMW-KM201 (for QAM16)
Top