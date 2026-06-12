# CONFigureBLUetoothMEASiMEValuationLIMitBRATeFDRiftAPACkets

Module: Bluetooth Measurements
Source: 4564dbd39ae747fa.htm

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
Limits (Modulation BR)
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:BRATe:FDRift:APACkets
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:BRATe:FDRift:APACkets 
<FreqDriftDH1>, <FreqDriftDH3>, <FreqDriftDH5>, <MaxDriftRate>, <FreqDriftDH1Enb>(3), <FreqDriftDH3Enb>(3), <FreqDriftDH5Enb>(3), <MaxDriftRateEnb>(3)
Defines the limits for the frequency drift and the maximum drift rate for BR. For each packet type (DH1, DH3, DH5) a different frequency drift limit can be specified.
Parameters:
<FreqDriftDH1>
Range: 
0 Hz  to  250E+3 Hz
*RST:
25E+3 Hz
<FreqDriftDH3>
Range: 
0 Hz  to  250E+3 Hz
*RST:
40E+3 Hz
<FreqDriftDH5>
Range: 
0 Hz  to  250E+3 Hz
*RST:
40E+3 Hz
<MaxDriftRate>
Range: 
0 Hz  to  250E+3 Hz
*RST:
20E+3 Hz
<FreqDriftDH1Enb>
OFF |
 
 ON
Disable or enable limit check for current, average, and maximum results (3 values).
*RST:
ON
<FreqDriftDH3Enb>
OFF |
 
 ON
Disable or enable limit check for current, average, and maximum results (3 values).
*RST:
ON
<FreqDriftDH5Enb>
OFF |
 
 ON
Disable or enable limit check for current, average, and maximum results (3 values).
*RST:
ON
<MaxDriftRateEnb>
OFF |
 
 ON
Disable or enable limit check for current, average, and maximum results (3 values).
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"BR"
Top