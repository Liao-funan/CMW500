# CONFigureBLUetoothMEASiMEValuationLIMitLENergyLRANgeFOFFset

Module: Bluetooth Measurements
Source: d7a60a860fc3438c.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:FOFFset
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:FOFFset 
<FreqOffset>, <FreqOffsetEnab>(3)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:FOFFset 
<FreqOffset>, <FreqOffsetEnab>(3)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy[:LE1M]:FOFFset 
<FreqOffset>, <FreqOffsetEnab>(3)
Sets/gets the frequency offset limit.
Commands for LE 1M PHY - uncoded (
...:LE1M...
), LE 2M PHY - uncoded (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<FreqOffset>
Range: 
0 Hz  to  250E+3 Hz
*RST:
150E+3 Hz
<FreqOffsetEnab>
OFF |
 
 ON
Disable or enable limit checking for current, average, and maximum results (3 values)
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V2.1.20
V3.5.70: added commands for LE2M and LRANge
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M and LRANge
Manual operation: 
See 
"LE"
Top