# CONFigureBLUetoothMEASiMEValuationLIMitBRATePVTime

Module: Bluetooth Measurements
Source: 06b9cab28ee64f89.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:BRATe:PVTime
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:BRATe:PVTime 
<NomPowLower>, <NomPowUpper>, <PeakPowUpper>, <NomPowEnabled>(4), <PeakPowEnabled>(4)
Defines the power limits for BR: lower and upper average power limits, upper peak power limit, limit check enabling.
Parameters:
<NomPowLower>
Range: 
-99.99 dBm  to  99.99 dBm
*RST:
-6 dBm
<NomPowUpper>
Range: 
-99.99 dBm  to  99.99 dBm
*RST:
4 dBm
<PeakPowUpper>
Range: 
-99.99 dBm  to  99.99 dBm
*RST:
23 dBm
<NomPowEnabled>
OFF |
 
 ON
Disables or enables the limit check for the average power, 4 values, corresponding to the current, average, maximum and minimum results.
*RST:
ON
<PeakPowEnabled>
OFF |
 
 ON
Disables or enables the limit check for the peak power, 4 values, corresponding to the current, average, maximum and minimum results.
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Power Limits"
Top