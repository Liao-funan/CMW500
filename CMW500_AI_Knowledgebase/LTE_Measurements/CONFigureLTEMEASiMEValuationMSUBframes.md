# CONFigureLTEMEASiMEValuationMSUBframes

Module: LTE Measurements
Source: d7342691e14094.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:LTE:MEAS<i>:MEValuation:MSUBframes
CONFigure:LTE:MEAS<i>:MEValuation:MSUBframes 
<SubframeOffset>, <SubframeCount>, <MeasSubframe>
Configures the scope of the measurement, i.e. which subframes are measured.
Parameters:
<SubframeOffset>
Start of the measured subframe range relative to the trigger event
Range: 
0  to  9
*RST:
0
<SubframeCount>
Length of the measured subframe range
Range: 
1  to  320
*RST:
1
<MeasSubframe>
Subframe containing the measured slots for modulation and spectrum results
Range: 
0  to  <SubframeCount>-1
*RST:
0
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.15.20
V2.1.10: <SubframeCount> maximum increased to 320
Manual operation: 
See 
"Measurement Subframe"
Top