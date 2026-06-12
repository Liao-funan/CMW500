# CONFigureWPANMEASiMEValuationSCOuntMODulation

Module: LRWPAN Measurements
Source: f8c39f0562b64ae9.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:WPAN:MEAS<i>:MEValuation:SCOunt:MODulation
CONFigure:WPAN:MEAS<i>:MEValuation:SCOunt:MODulation 
<StatisticCount>
CONFigure:WPAN:MEAS<i>:MEValuation:SCOunt:PVTime 
<StatisticCount>
CONFigure:WPAN:MEAS<i>:MEValuation:SCOunt:SPECtrum 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
The last mnemonic denotes the measurement type: statistical modulation, statistical power and spectrum measurement.
See also: 
"Statistical Settings"
Parameters:
<StatisticCount>
Number of measurement intervals
Range: 
1  to  1000
*RST:
10
Example: 
See 
"Performing Single Shot Measurements"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Power vs Time / Modulation / Spectrum > ... Statistic Count"
Top