# CONFigureGPRFMEASiEPSensorSCOunt

Module: GPRF Measurements
Source: 631ce65ddef44bd1.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
External Power Sensor Measurement Commands
 > 
Statistical Settings
 > 
CONFigure:GPRF:MEAS<i>:EPSensor:SCOunt
CONFigure:GPRF:MEAS<i>:EPSensor:SCOunt 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
See also: 
"Statistical Settings"
Parameters:
<StatisticCount>
Number of measurement intervals, i.e. the number of measured power values from the external sensor.
Range: 
1  to  1000
*RST:
1
Example: 
See 
"Performing a Single-Shot Measurement"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Statistic Count"
Top