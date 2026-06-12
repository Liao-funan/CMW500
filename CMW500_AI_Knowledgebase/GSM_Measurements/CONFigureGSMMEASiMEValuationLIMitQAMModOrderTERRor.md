# CONFigureGSMMEASiMEValuationLIMitQAMModOrderTERRor

Module: GSM Measurements
Source: 4c9b0e6f28d842fc.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (16-QAM Modulation)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:TERRor
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:TERRor 
<Limit>, <StatCurrent>, <StatAverage>, <StatMax>
Defines and activates upper limits for the timing error.
Suffix: 
<ModOrder>
16
Modulation order (fixed)
Parameters:
<Limit>
Range: 
-1000 Sym  to  1000 Sym
*RST:
10 Sym
Default unit: 
Sym
<StatCurrent> <StatAverage> <StatMax>
ON |
 
 OFF
ON:
 Apply limit to the current, average, max values
OFF:
 Do not apply limit
*RST:
OFF
Firmware/Software: 
V1.0.15.0
Options: 
R&S CMW-KM201 (for QAM16)
Top