# CONFigureGSMMEASiMEValuationLIMitQAMModOrderIQOFfset

Module: GSM Measurements
Source: 35418f60dfaa478e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (16-QAM Modulation)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:IQOFfset
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:IQOFfset 
<Limit>, <StatCurrent>, <StatAverage>, <StatMax>
Defines and activates upper limits for the I/Q origin offset values.
Suffix: 
<ModOrder>
16
Modulation order (fixed)
Parameters:
<Limit>
Range: 
-100 dB  to  0 dB
*RST:
-30 dB
Default unit: 
dB
<StatCurrent> <StatAverage> <StatMax>
ON |
 
 OFF
ON:
 Apply limit to the current, average, max values
OFF:
 Do not apply limit
*RST:
OFF (ON for Average)
Firmware/Software: 
V1.0.15.0
Options: 
R&S CMW-KM201 (for QAM16)
Top