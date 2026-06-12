# CONFigureBLUetoothMEASiMEValuationLIMitEDRateDQPSkDEVM

Module: Bluetooth Measurements
Source: 77ef2a1269984c0e.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:EDRate:DQPSk:DEVM
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:EDRate:DQPSk:DEVM 
<RMS>, <Peak>, <P99>, <RMSEnabled>(3), <PeakEnabled>(3), <P99Enabled>
Defines and activates upper limits for the differential error vector magnitude for π/4 DQPSK modulated packets (2-DHx).
Parameters:
<RMS>
Limit for RMS DEVM (π/4 DQPSK)
Range: 
0  to  1
*RST:
0.2
<Peak>
Limit for peak DEVM (π/4 DQPSK)
Range: 
0  to  1
*RST:
0.35
<P99>
Limit for 99% DEVM (π/4 DQPSK)
Range: 
0  to  1
*RST:
0.3
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