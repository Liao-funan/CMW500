# CONFigureBLUetoothMEASiMEValuationLIMitLENergyLRANgeFDRift

Module: Bluetooth Measurements
Source: 75c60685db1349f9.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:FDRift
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:FDRift 
<FrequencyDrift>, <MaxDriftRate>, <InitlFreqDrift>, <FreqDriftEnable>(3), <MaxDriftRateEnb>(3), <InitFreqDriftEn>(3)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:FDRift 
<FrequencyDrift>, <MaxDriftRate>, <InitlFreqDrift>, <FreqDriftEnable>(3), <MaxDriftRateEnb>(3), <InitFreqDriftEn>(3)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy[:LE1M]:FDRift 
<FrequencyDrift>, <MaxDriftRate>, <InitlFreqDrift>, <FreqDriftEnable>(3), <MaxDriftRateEnb>(3), <InitFreqDriftEn>(3)
Sets and enables limits for frequency drift, maximum drift rate and initial frequency drift.
Commands for LE 1M PHY - uncoded (
...:LE1M...
), LE 2M PHY - uncoded (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<FrequencyDrift>
Range: 
0 Hz  to  250E+3 Hz
*RST:
50E+3 Hz
<MaxDriftRate>
Range: 
0 Hz  to  250E+3 Hz
*RST:
20E+3 Hz
<InitlFreqDrift>
Range: 
0 Hz  to  250E+3 Hz
*RST:
23E+3 Hz
<FreqDriftEnable>
OFF |
 
 ON
Disable or enable limit checking for current, average, and maximum results (3 values).
*RST:
ON
<MaxDriftRateEnb>
OFF |
 
 ON
Disable or enable limit checking for current, average, and maximum results (3 values).
*RST:
ON
<InitFreqDriftEn>
OFF |
 
 ON
Disable or enable limit checking for current, average, and maximum results (3 values).
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V2.1.20
V3.5.60: changed reset value of <InitlFreqDrift>
V3.5.70: added commands for LE2M
V3.7.20: added commands for LRANge
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M and LELR
Manual operation: 
See 
"LE"
Top