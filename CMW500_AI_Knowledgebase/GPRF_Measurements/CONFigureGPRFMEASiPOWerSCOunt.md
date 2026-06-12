# CONFigureGPRFMEASiPOWerSCOunt

Module: GPRF Measurements
Source: d35e15240.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Measurement Control Parameters
 > 
CONFigure:GPRF:MEAS<i>:POWer:SCOunt
CONFigure:GPRF:MEAS<i>:POWer:SCOunt 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
See also: 
"Statistical Settings"
Parameters:
<StatisticCount>
Number of measurement intervals. A measurement interval comprises a single power/frequency step (list mode switched off) or a sweep (list mode switched on).
Range: 
1  to  100E+3
*RST:
10
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Statistic Count"
Top