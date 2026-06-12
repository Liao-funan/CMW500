# CONFigureBLUetoothMEASiRXQualityPERLEVel

Module: Bluetooth Measurements
Source: 223f2cad721f46cb.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Rx Measurement
 > 
Measurement Settings
 > 
CONFigure:BLUetooth:MEAS<i>:RXQuality:PER:LEVel
CONFigure:BLUetooth:MEAS<i>:RXQuality:PER:LEVel 
<Level>
Sets the Tx level of R&S
 
CMW for PER measurements.
The allowed value range can be calculated as follows:
Range (Level) = Range (Output Power) - External Attenuation
Range (Output Power) = -130 dBm to 0 dBm (RFx COM) or -120 dBm to 8 dBm (RFx OUT)
; please also notice the ranges quoted in the data sheet.
Parameters:
<Level>
Range: 
see above
*RST:
-40 dBm
Example: 
See 
"Configuring an Rx Measurement"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KD611
Manual operation: 
See 
"Level"
Top