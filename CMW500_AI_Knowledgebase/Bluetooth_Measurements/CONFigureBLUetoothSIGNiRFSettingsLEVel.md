# CONFigureBLUetoothSIGNiRFSettingsLEVel

Module: Bluetooth Measurements
Source: c7de73d293c3416a.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Measurement Settings
 > 
CONFigure:BLUetooth:SIGN<i>:RFSettings:LEVel
CONFigure:BLUetooth:SIGN<i>:RFSettings:LEVel 
<Level>
Defines the absolute TX level of the R&S
 
CMW (master) signal.
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
Default unit: 
dBm
Firmware/Software: 
V3.0.12
V3.7.10: changed range
Manual operation: 
See 
"TX Level (CMW)"
Top