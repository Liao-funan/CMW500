# CONFigureGSMMEASiMEValuationSCOuntPVTime

Module: GSM Measurements
Source: 6cd46aba2de04ddb.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Statistical Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:SCOunt:PVTime
CONFigure:GSM:MEAS<i>:MEValuation:SCOunt:PVTime 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
See also: 
"Statistical Settings"
Parameters:
<StatisticCount>
Number of measurement intervals for the power vs. time measurement
Range: 
1  to  1000
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