# CONFigureBLUetoothMEASiMEValuationLIMitSOBW

Module: Bluetooth Measurements
Source: ad1dcc6f924743a4.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:SOBW
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:SOBW 
<LimitThreshold>, <EqHighPeakUpper>, <LowPeakUpper>, <EqHighPeakEnab>, <LowPeakEnab>
Defines and enables the limits for the 20 dB bandwidth measurement (BR only).
Parameters:
<LimitThreshold>
Threshold value for "high" vs "low" peak emission bursts
Range: 
-80 dBm  to  40 dBm
*RST:
0 dBm
<EqHighPeakUpper>
20 dB bandwidth limit for "high" peak emission bursts (
≥
LimitThreshold
)
Range: 
1E-3 MHz  to  4 MHz
*RST:
1 MHz
<LowPeakUpper>
20 dB bandwidth limit for "low" peak emission bursts (< 
LimitThreshold
)
Range: 
1E-3 MHz  to  4 MHz
*RST:
1.5 MHz
<EqHighPeakEnab>
OFF |
 
 ON
Disable or enable the 20 dB bandwidth limit for "high" peak emission bursts
*RST:
ON
<LowPeakEnab>
OFF |
 
 ON
Disable or enable the 20 dB bandwidth limit for "low" peak emission bursts
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V1.0.15.20
V2.1.20: removed 
<BandwidthUpper>
, 
<BandwidthEnab>
, added 
<LimitThreshold>
, 
<EqHighPeakUpper>
, 
<LowPeakUpper>
, 
<EqHighPeakEnab>
, 
<LowPeakEnab>
Manual operation: 
See 
"20 dB Bandwidth (BR)"
Top