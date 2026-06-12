# CONFigureWCDMaSIGNiRFSettingsCOPowerTOTal

Module: WCDMA Signaling
Source: 00cae8b035c14b75.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:COPower:TOTal
CONFigure:WCDMa:SIGN<i>:RFSettings:COPower:TOTal 
<TotalOutChPwr>
Sets the total base level of the generator.
For multi-carrier operation, this value is the sum of all carrier powers. If you modify the total power level, all carrier powers are increased/decreased by the same amount so that the new total power level is reached.
The allowed value range per carrier can be calculated as follows:
Range (Base Level) = Range (Output Power) - External Attenuation - Insertion Loss + Baseband Level
Range (Output Power) = -130 dBm to -5 dBm (RFx COM) or -120 dBm to 3 dBm (RFx OUT)
; please also notice the ranges quoted in the data sheet.
Insertion loss is only relevant for internal fading. Baseband level only relevant for external fading.
Parameters:
<TotalOutChPwr>
Range: 
see above
*RST:
-56.1 dBm
Default unit: 
dBm
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"Output Power (Ior)"
Top