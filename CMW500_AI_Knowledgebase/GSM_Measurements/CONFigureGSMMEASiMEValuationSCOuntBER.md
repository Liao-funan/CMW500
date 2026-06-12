# CONFigureGSMMEASiMEValuationSCOuntBER

Module: GSM Measurements
Source: d35e11036.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Statistical Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:SCOunt:BER
CONFigure:GSM:MEAS<i>:MEValuation:SCOunt:BER 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
See also: 
"Statistical Settings"
Parameters:
<StatisticCount>
Number of measurement intervals (bursts) for the "BER" measurement
Range: 
1  to  1000
*RST:
10
Example: 
See 
"BER Measurement"
Firmware/Software: 
V1.0.5.3
Manual operation: 
See 
"Statistic Count"
Top