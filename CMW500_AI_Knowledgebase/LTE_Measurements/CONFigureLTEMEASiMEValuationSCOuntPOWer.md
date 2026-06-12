# CONFigureLTEMEASiMEValuationSCOuntPOWer

Module: LTE Measurements
Source: 1dd398262e22485c.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:SCOunt:POWer
CONFigure:LTE:MEAS<i>:MEValuation:SCOunt:POWer 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
See also: 
"Statistical Settings"
Parameters:
<StatisticCount>
Number of measurement intervals
Range: 
1 subframe  to  1000 subframes
*RST:
20 subframes
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"Statistic Count"
Top