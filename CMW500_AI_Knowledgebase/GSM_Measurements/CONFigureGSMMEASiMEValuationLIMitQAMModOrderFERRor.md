# CONFigureGSMMEASiMEValuationLIMitQAMModOrderFERRor

Module: GSM Measurements
Source: 0c7d9162b71048f8.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (16-QAM Modulation)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:FERRor
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:FERRor 
<Limit>, <StatCurrent>, <StatAverage>, <StatMax>
Defines and activates upper limits for the frequency error.
Suffix: 
<ModOrder>
16
Modulation order (fixed)
Parameters:
<Limit>
Range: 
0 Hz  to  1000 Hz
*RST:
90 Hz
Default unit: 
Hz
<StatCurrent> <StatAverage> <StatMax>
ON |
 
 OFF
ON:
 Apply limit to the current, average, max values
OFF:
 Do not apply limit
*RST:
ON
Firmware/Software: 
V1.0.15.0
Options: 
R&S CMW-KM201 (for QAM16)
Top