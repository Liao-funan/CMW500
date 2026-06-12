# CONFigureBLUetoothMEASiMEValuationLIMitLENergyLRANgeFACCuracy

Module: Bluetooth Measurements
Source: 4980d71599cf4ba7.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:FACCuracy
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:FACCuracy 
<FreqAccuracy>, <FreqAccEnabled>(3)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:FACCuracy 
<FreqAccuracy>, <FreqAccEnabled>(3)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy[:LE1M]:FACCuracy 
<FreqAccuracy>, <FreqAccEnabled>(3)
Defines the limit for the frequency accuracy.
Commands for LE 1M PHY - uncoded (
...:LE1M...
), LE 2M PHY - uncoded (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<FreqAccuracy>
Range: 
0 Hz  to  250E+3 Hz
*RST:
150E+3 Hz
<FreqAccEnabled>
OFF |
 
 ON
Disable or enable limit check for current, average, and maximum results (3 values)
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V3.2.30
V3.5.70: added commands for LE2M and LRANge
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M and LRANge
Manual operation: 
See 
"LE"
Top