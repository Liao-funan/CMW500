# CONFigureLTEMEASiMEValuationBLERSFRames

Module: LTE Measurements
Source: 037c82cb88364bb5.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
BLER Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:BLER:SFRames
CONFigure:LTE:MEAS<i>:MEValuation:BLER:SFRames 
<Subframes>[, <SchedSubfrPerFr>]
Specifies the statistic count (number of measured subframes) and the number of scheduled subframes per radio frame for the BLER measurement. BLER is a single shot measurement.
See also: 
"Statistical Settings"
Parameters:
<Subframes>
Number of subframes to be measured
Range: 
1 subframe  to  200E+3 subframes
*RST:
10E+3 subframes
<SchedSubfrPerFr>
Number of scheduled subframes per radio frame in the generated downlink signal
Range: 
1 subframe  to  10 subframes
*RST:
9 subframes
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.15.21
V3.0.10: added <SchedSubfrPerFr>
Manual operation: 
See 
"BLER > No. of Subframes"
Top