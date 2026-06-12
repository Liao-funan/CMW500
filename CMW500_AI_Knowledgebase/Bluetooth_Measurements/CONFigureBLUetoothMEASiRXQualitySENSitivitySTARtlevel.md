# CONFigureBLUetoothMEASiRXQualitySENSitivitySTARtlevel

Module: Bluetooth Measurements
Source: d091de6808d841cb.htm

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
CONFigure:BLUetooth:MEAS<i>:RXQuality:SENSitivity:STARtlevel
CONFigure:BLUetooth:MEAS<i>:RXQuality:SENSitivity:STARtlevel 
<StartLevel>
Sets Tx start level of R&S
 
CMW for sensitivity search measurement.
The allowed value range can be calculated as follows:
Range (Start Level) = Range (Output Power) - External Attenuation
Range (Output Power) = -130 dBm to 0 dBm (RFx COM) or -120 dBm to 8 dBm (RFx OUT)
; please also notice the ranges quoted in the data sheet.
Parameters:
<StartLevel>
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
"Start Level"
Top