# CONFigureBLUetoothMEASiMEValuationSCOuntMODulation

Module: Bluetooth Measurements
Source: 384dfdbfccbd477f.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCOunt:MODulation
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCOunt:MODulation 
<StatisticCount>
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCOunt:PENCoding 
<StatisticCount>
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCOunt:PVTime 
<StatisticCount>
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCOunt:SOBW 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
The last mnemonic denotes the measurement type: statistical modulation, statistical power and spectrum 20 dB bandwidth (occupied bandwidth) measurement.
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
V1.0.10.1
V1.0.15.20: added command for spectrum 20 dB bandwidth measurement
Manual operation: 
See 
"Power vs. Time / Modulation / Phase Encoding / Spectrum > ... Statistic Count"
Top