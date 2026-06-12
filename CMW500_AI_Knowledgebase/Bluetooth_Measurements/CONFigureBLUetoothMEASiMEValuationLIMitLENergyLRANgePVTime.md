# CONFigureBLUetoothMEASiMEValuationLIMitLENergyLRANgePVTime

Module: Bluetooth Measurements
Source: 76a7a0928e9e4c78.htm

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
Limits (Power vs. Time)
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:PVTime
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:PVTime 
<AvgPowLower>, <AvgPowUpper>, <PkmAvgPowUpper>, <AvgPowEnabled>(4), <PkmAvgPowEnable>(4)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:PVTime 
<AvgPowLower>, <AvgPowUpper>, <PkmAvgPowUpper>, <AvgPowEnabled>(4), <PkmAvgPowEnable>(4)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy[:LE1M]:PVTime 
<AvgPowLower>, <AvgPowUpper>, <PkmAvgPowUpper>, <AvgPowEnabled>(4), <PkmAvgPowEnable>(4)
Defines the power limits: lower and upper average power limits, upper limit for "peak minus average power", limit check enabling.
Commands for LE 1M PHY - uncoded (
...:LE1M...
), LE 2M PHY - uncoded (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<AvgPowLower>
Range: 
-99.99 dBm  to  99.99 dBm
*RST:
-20 dBm
<AvgPowUpper>
Range: 
-99.99 dBm  to  99.99 dBm
*RST:
10 dBm
<PkmAvgPowUpper>
Range: 
-99.99 dBm  to  99.99 dBm
*RST:
3 dBm
<AvgPowEnabled>
OFF |
 
 ON
Disables or enables the limit check for the average power, 
4 values
, corresponding to the current, average, maximum and minimum results.
*RST:
ON
<PkmAvgPowEnable>
OFF |
 
 ON
Disables or enables the limit check for the "peak minus average power", 
4 values
, corresponding to the current, average, maximum and minimum results.
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
"Power Limits"
Top