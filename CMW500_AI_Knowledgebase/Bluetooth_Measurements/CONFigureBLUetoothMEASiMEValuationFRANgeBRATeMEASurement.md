# CONFigureBLUetoothMEASiMEValuationFRANgeBRATeMEASurement

Module: Bluetooth Measurements
Source: 3b65f99dd6ac4518.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:FRANge:BRATe:MEASurement
CONFigure:BLUetooth:MEAS<i>:MEValuation:FRANge:BRATe:MEASurement 
<LeftChannel>, <RightChannel>, <Threshold>
Specifies the number of 1 MHz channels to be measured below and above the current measured channel. The threshold is the level that needs to be crossed to search the frequencies fL and fH.
Parameters:
<LeftChannel>
Left adjacent channel relative to the EUT center TX channel
Range: 
1  to  5
*RST:
5
<RightChannel>
Right adjacent channel relative to the EUT center TX channel
Range: 
1  to  5
*RST:
5
<Threshold>
Threshold for the spectral power density drop to search the frequencies f
L
 and f
H
Specification defines - 80 dBm/Hz for equivalent isotropically radiated power or - 30 dBm if measured in a 100 kHz bandwidth.
Range: 
-80 dBm  to  40 dBm
*RST:
-30 dBm
Example: 
See 
"Spectrum Measurements"
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"Frequency Range (BR)"
Top