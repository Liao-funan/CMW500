# FETChBLUetoothMEASiMEValuationMODulationBRATeYIELd

Module: Bluetooth Measurements
Source: d864974e34891.htm

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
Modulation Measurement Results (BR)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:YIELd?
FETCh:BLUetooth:MEAS<i>:MEValuation:MODulation:BRATe:YIELd? 
Returns the percentages of auto-detected BR packets with a particular pattern type. A result is available after the R&S
 
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
V2.0.10
Top