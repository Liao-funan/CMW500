# CONFigureBLUetoothMEASiMEValuationLIMitLENergyLE2MMRATio

Module: Bluetooth Measurements
Source: 3dfda13b6f9a46fd.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Limit Settings
 > 
Limits (Modulation LE)
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:MRATio
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:MRATio 
<ModRatio>, <ModRatioEnabled>
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy[:LE1M]:MRATio 
<ModRatio>, <ModRatioEnabled>
Sets or queries the modulation ratio limit Δf2 avg / Δf1 avg for LE 1M PHY (
...:LE1M...
) and LE 2M PHY (
...:LE2M...
).
Parameters:
<ModRatio>
Range: 
0  to  1
*RST:
0.8
<ModRatioEnabled>
OFF |
 
 ON
Disable/enable limit checking
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V2.1.20
V3.5.70: added commands for LE2M
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M
Manual operation: 
See 
"LE"
Top