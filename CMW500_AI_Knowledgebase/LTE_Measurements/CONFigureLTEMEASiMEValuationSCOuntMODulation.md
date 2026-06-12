# CONFigureLTEMEASiMEValuationSCOuntMODulation

Module: LTE Measurements
Source: c7686c7e80b24b6b.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:SCOunt:MODulation
CONFigure:LTE:MEAS<i>:MEValuation:SCOunt:MODulation 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
See also: 
"Statistical Settings"
Parameters:
<StatisticCount>
Number of measurement intervals (slots)
Range: 
1 slot  to  1000 slots
*RST:
20 slots
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Statistic Count"
Top