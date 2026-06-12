# CONFigureBLUetoothMEASiMEValuationLIMitBRATeFDRift

Module: Bluetooth Measurements
Source: 254949c9640e4ed3.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:BRATe:FDRift
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:BRATe:FDRift 
<FrequencyDrift>, <MaxDriftRate>, <FreqDriftEnable>(3), <MaxDriftRateEnb>(3)
Defines the frequency drift limit for DH1 packets and the maximum drift rate limit for all BR packets.
Since V2.1.20, this command is superseded by the command 
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
BRATe:
​
FDRift:
​
APACkets
 that allows to set different limits for different packet types.
Parameters:
<FrequencyDrift>
Range: 
0 Hz  to  250E+3 Hz
*RST:
25E+3 Hz
<MaxDriftRate>
Range: 
0 Hz  to  250E+3 Hz
*RST:
20E+3 Hz
<FreqDriftEnable>
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
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"BR"
Top