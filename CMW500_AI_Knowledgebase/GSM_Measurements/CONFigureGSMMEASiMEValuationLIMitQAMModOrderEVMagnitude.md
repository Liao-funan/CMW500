# CONFigureGSMMEASiMEValuationLIMitQAMModOrderEVMagnitude

Module: GSM Measurements
Source: c2cddee571434925.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (16-QAM Modulation)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:EVMagnitude
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:EVMagnitude 
<LimitRMS>, <LimitPeak>, <Limit95%>, <StatRMSCurrent>, <StatRMSAverage>, <StatRMSMax>, <StatPeakCurrent>, <StatPeakAverage>, <StatPeakMax>, <Stat95%>
Defines and activates upper limits for the RMS, peak and 95th percentile values of the error vector magnitude (EVM).
Suffix: 
<ModOrder>
16
Modulation order (fixed)
Parameters:
<LimitRMS>
Range: 
0 %  to  50 %
*RST:
7 %
Default unit: 
%
<LimitPeak>
Range: 
0 %  to  50 %
*RST:
30 %
Default unit: 
%
<Limit95%>
Range: 
0 %  to  50 %
*RST:
15 %
Default unit: 
%
<StatRMSCurrent> <StatRMSAverage> <StatRMSMax> <StatPeakCurrent> <StatPeakAverage> <StatPeakMax> <Stat95%>
ON |
 
 OFF
ON:
 Apply limit to the current, average, max, 95th percentile values
OFF:
 Do not apply limit
*RST:
ON
Firmware/Software: 
V1.0.15.0
Options: 
R&S CMW-KM201 (for QAM16)
Top