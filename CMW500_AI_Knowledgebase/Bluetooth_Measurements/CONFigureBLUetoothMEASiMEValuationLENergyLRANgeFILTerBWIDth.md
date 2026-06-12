# CONFigureBLUetoothMEASiMEValuationLENergyLRANgeFILTerBWIDth

Module: Bluetooth Measurements
Source: bfab5d71a15f40de.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LENergy:LRANge:FILTer:BWIDth
CONFigure:BLUetooth:MEAS<i>:MEValuation:LENergy:LRANge:FILTer:BWIDth 
<FilterBandWidth>
CONFigure:BLUetooth:MEAS<i>:MEValuation:LENergy:LE2M:FILTer:BWIDth 
<FilterBandWidth>
CONFigure:BLUetooth:MEAS<i>:MEValuation:LENergy[:LE1M]:FILTer:BWIDth 
<FilterBandWidth>
Selects the filter bandwidth.
Commands for LE 1M PHY - uncoded (
...:LE1M...
), LE 2M PHY - uncoded (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<FilterBandWidth>
NARRow |
 
 WIDE
NARRow:
 Narrow-band filter
WIDE:
 Wide-band filter
*RST:
NARR
Example: 
See 
"Spectrum Measurements"
Firmware/Software: 
V2.1.20
V3.5.70: added commands for LE2M and LRANge
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M and LRANge
Manual operation: 
See 
"Filter"
Top