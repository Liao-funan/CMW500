# CONFigureGSMMEASiMEValuationLIMitGMSKMERRor

Module: GSM Measurements
Source: 76f0209de25c42a9.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (GMSK Modulation)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:MERRor
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:MERRor 
<LimitRMS>, <LimitPeak>, <Limit95%>, <StatRMSCurrent>, <StatRMSAverage>, <StatRMSMax>, <StatPeakCurrent>, <StatPeakAverage>, <StatPeakMax>, <Stat95%>
Defines and activates upper limits for the RMS, peak and 95th percentile values of the magnitude error.
Parameters:
<LimitRMS>
Range: 
0 %  to  100 %
*RST:
10 %
Default unit: 
%
<LimitPeak>
Range: 
0 %  to  100 %
*RST:
35 %
Default unit: 
%
<Limit95%>
Range: 
0 %  to  100 %
*RST:
20 %
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
OFF
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Modulation"
Top