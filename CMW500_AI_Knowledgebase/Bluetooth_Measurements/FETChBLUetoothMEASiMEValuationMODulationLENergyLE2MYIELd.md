# FETChBLUetoothMEASiMEValuationMODulationLENergyLE2MYIELd

Module: Bluetooth Measurements
Source: a9f4d100f5564538.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Modulation Measurement Results (LE)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:YIELd?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy:LE2M:YIELd? 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:LENergy[:LE1M]:YIELd? 
Returns the percentages of auto-detected LE packets with a particular pattern type for LE 1M PHY (
...:LE1M...
) and LE 2M PHY (
...:LE2M...
).
A result is available after the R&S
 
CMW has auto-detected a packet (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
ISIGnal:
​
DMODe
 
AUTO
).
Return values: 
<Reliability>
"Reliability Indicator"
<PatternYield>
Pattern yield for 11110000 patterns, 10101010 patterns, and any other patterns (3 values)
Range: 
0  to  100
Default unit: 
%
Example: 
See 
"Automatic Detection Mode"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.5.70: added commands for LE2M
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M
Top