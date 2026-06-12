# CONFigureGPRFMEASiFFTSanalyzerSCOunt

Module: GPRF Measurements
Source: 5b598c0043d44719.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
FFT Spectrum Analyzer Commands
 > 
 Statistical Settings
 > 
CONFigure:GPRF:MEAS<i>:FFTSanalyzer:SCOunt
CONFigure:GPRF:MEAS<i>:FFTSanalyzer:SCOunt 
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
1  to  1000
*RST:
1
Example: 
See 
"Single-Shot and Continuous Measurements"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Statistic Count"
Top