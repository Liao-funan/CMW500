# CONFigureBLUetoothMEASiMEValuationLIMitLENergyLRANgeDAVerage

Module: Bluetooth Measurements
Source: 4bc41b5b91934828.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:DAVerage
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:DAVerage 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF1Enable>(4)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:DMINimum 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF1Enable>(4)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:DMAXimum 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF1Enable>(4)
Defines the lower and upper Δf1 frequency deviation limits for LE coded PHY. The mnemonics 
DAVerage
, 
DMINimum
, 
DMAXimum
 distinguish average, minimum and maximum frequency deviations.
Parameters:
<FreqDevF1Lower>
Range: 
0 Hz  to  500E+3 Hz
*RST:
225E+3 Hz
<FreqDevF1Upper>
Range: 
0 Hz  to  500E+3 Hz
*RST:
275E+3 Hz
<FreqDevF1Enable>
OFF |
 
 ON
Disable or enable limits for current, average, maximum, and minimum results (4 values)
*RST:
OFF (all values)
Firmware/Software: 
V3.5.70
Options: 
R&S CMW-KM721
Top