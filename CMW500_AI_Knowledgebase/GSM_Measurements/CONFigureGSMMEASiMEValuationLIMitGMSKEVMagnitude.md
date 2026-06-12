# CONFigureGSMMEASiMEValuationLIMitGMSKEVMagnitude

Module: GSM Measurements
Source: 7f4bc24009f44320.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (GMSK Modulation)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:EVMagnitude
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:EVMagnitude 
<LimitRMS>, <LimitPeak>, <Limit95%>, <StatRMSCurrent>, <StatRMSAverage>, <StatRMSMax>, <StatPeakCurrent>, <StatPeakAverage>, <StatPeakMax>, <Stat95%>
Defines and activates upper limits for the RMS, peak and 95th percentile values of the error vector magnitude (EVM).
Parameters:
<LimitRMS>
Range: 
0 %  to  50 %
*RST:
10 %
Default unit: 
%
<LimitPeak>
Range: 
0 %  to  50 %
*RST:
35 %
Default unit: 
%
<Limit95%>
Range: 
0 %  to  50 %
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