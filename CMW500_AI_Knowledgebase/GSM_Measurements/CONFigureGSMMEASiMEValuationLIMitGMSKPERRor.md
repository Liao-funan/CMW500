# CONFigureGSMMEASiMEValuationLIMitGMSKPERRor

Module: GSM Measurements
Source: 8fa0a3683fb74daf.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (GMSK Modulation)
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PERRor
CONFigure:GSM:MEAS<i>:MEValuation:LIMit:GMSK:PERRor 
<LimitRMS>, <LimitPeak>, <Limit95%>, <StatRMSCurrent>, <StatRMSAverage>, <StatRMSMax>, <StatPeakCurrent>, <StatPeakAverage>, <StatPeakMax>, <Stat95%>
Defines and activates upper limits for the RMS, peak and 95th percentile values of the phase error.
Parameters:
<LimitRMS>
Range: 
0 deg  to  180 deg
*RST:
5 deg
Default unit: 
deg
<LimitPeak>
Range: 
0 deg  to  180 deg
*RST:
20 deg
Default unit: 
deg
<Limit95%>
Range: 
0 deg  to  180 deg
*RST:
10 deg
Default unit: 
deg
<StatRMSCurrent> <StatRMSAverage> <StatRMSMax> <StatPeakCurrent> <StatPeakAverage> <StatPeakMax> <Stat95%>
ON |
 
 OFF
ON:
 Apply limit to the current, average, max, 95th percentile values
OFF:
 Do not apply limit
*RST:
ON (<Stat95%> OFF)
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Modulation"
Top