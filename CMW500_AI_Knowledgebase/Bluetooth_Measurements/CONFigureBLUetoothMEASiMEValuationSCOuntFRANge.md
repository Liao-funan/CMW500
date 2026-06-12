# CONFigureBLUetoothMEASiMEValuationSCOuntFRANge

Module: Bluetooth Measurements
Source: 3a4c7d634e8b4afc.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCOunt:FRANge
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCOunt:FRANge 
<StatisticCount>
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCOunt:SACP 
<StatisticCount>
CONFigure:BLUetooth:MEAS<i>:MEValuation:SCOunt:SGACp 
<StatisticCount>
Specifies the statistic count of the measurement. The statistic count is equal to the number of measurement intervals per single shot. Use 
CONFigure:...:MEAS<i>:...:REPetition SINGleshot | CONTinuous
 to select either single-shot or continuous measurements.
The last mnemonic denotes the measurement type: spectrum frequency range, spectrum ACP and spectrum gated ACP.
See also: 
"Statistical Settings"
Parameters:
<StatisticCount>
Statistic count for the measurement
Range: 
1  to  1000
*RST:
6
Example: 
See 
"Performing Single Shot Measurements"
Firmware/Software: 
V1.0.15.20
V2.0.20: added command for gated ACP
V3.2.50: added command for frequency range
Manual operation: 
See 
"Power vs. Time / Modulation / Phase Encoding / Spectrum > ... Statistic Count"
Top