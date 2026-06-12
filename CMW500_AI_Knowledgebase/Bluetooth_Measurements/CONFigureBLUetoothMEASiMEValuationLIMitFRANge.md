# CONFigureBLUetoothMEASiMEValuationLIMitFRANge

Module: Bluetooth Measurements
Source: 56722c1141c24bad.htm

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
Limits (Spectrum)
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:FRANge
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:FRANge 
<FLx_Lower>, <FHx_Upper>, <FLx_LowerEnable>, <FHx_UpperEnable>
Defines the limit for the frequency range measurement.
Parameters:
<FLx_Lower>
Lower limit for the lowest frequency f
L
 relative to center frequency
Range: 
-5 MHz  to  0 MHz
*RST:
-2 MHz
Default unit: 
Hz
<FHx_Upper>
Upper limit for the highest frequency f
H
 relative to center frequency
Range: 
0 MHz  to  5 MHz
*RST:
3.5 MHz
Default unit: 
Hz
<FLx_LowerEnable>
OFF |
 
 ON
Disable or enable limit check for the lowest frequency f
L
*RST:
ON
<FHx_UpperEnable>
OFF |
 
 ON
Disable or enable limit check for the highest frequency f
H
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"Frequency Range"
Top