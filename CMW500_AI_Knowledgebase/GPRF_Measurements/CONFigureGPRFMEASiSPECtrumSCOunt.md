# CONFigureGPRFMEASiSPECtrumSCOunt

Module: GPRF Measurements
Source: d35e20231.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Spectrum Analyzer Commands
 > 
 Statistical Settings
 > 
CONFigure:GPRF:MEAS<i>:SPECtrum:SCOunt
CONFigure:GPRF:MEAS<i>:SPECtrum:SCOunt 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
See also: 
"Statistical Settings"
Parameters:
<StatisticCount>
Number of measurement intervals. A measurement interval comprises a single frequency sweep.
Range: 
1  to  1000
*RST:
1
Example: 
See 
"Single-Shot and Continuous Measurements"
Firmware/Software: 
V3.0.10
Options: 
R&S CMW-KM010
Manual operation: 
See 
"Statistic Count"
Top