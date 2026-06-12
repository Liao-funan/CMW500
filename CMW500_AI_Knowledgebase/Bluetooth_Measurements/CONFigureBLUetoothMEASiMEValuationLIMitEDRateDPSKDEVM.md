# CONFigureBLUetoothMEASiMEValuationLIMitEDRateDPSKDEVM

Module: Bluetooth Measurements
Source: 75d5282e26b44d93.htm

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
Limits (Modulation EDR)
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:EDRate:DPSK:DEVM
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:EDRate:DPSK:DEVM 
<RMS>, <Peak>, <P99>, <RMSEnabled>(3), <PeakEnabled>(3), <P99Enabled>
Defines and activates upper limits for the differential error vector magnitude for 8DPSK modulated packets (3-DHx).
Parameters:
<RMS>
Limit for RMS DEVM (8DPSK)
Range: 
0  to  1
*RST:
0.13
<Peak>
Limit for peak DEVM (8DPSK)
Range: 
0  to  1
*RST:
0.25
<P99>
Limit for 99% DEVM (8DPSK)
Range: 
0  to  1
*RST:
0.2
<RMSEnabled>
OFF |
 
 ON
Disable or enable limit check for current, average, and maximum results (3 values)
*RST:
ON
<PeakEnabled>
OFF |
 
 ON
Disable or enable limit check for current, average, and maximum results (3 values)
*RST:
ON
<P99Enabled>
OFF |
 
 ON
Disable or enable limit check for current result (1 value)
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"EDR"
Top