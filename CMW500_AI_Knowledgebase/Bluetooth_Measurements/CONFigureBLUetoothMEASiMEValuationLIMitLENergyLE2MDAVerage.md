# CONFigureBLUetoothMEASiMEValuationLIMitLENergyLE2MDAVerage

Module: Bluetooth Measurements
Source: dc0d204fa50d42b5.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:DAVerage
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:DAVerage 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF1Enable>(4)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:DMINimum 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF1Enable>(4)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:DMAXimum 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF1Enable>(4)
Defines the lower and upper Δf1 frequency deviation limits for LE 2M PHY. The mnemonics 
DAVerage
, 
DMINimum
, 
DMAXimum
 distinguish average, minimum and maximum frequency deviations.
Parameters:
<FreqDevF1Lower>
Range: 
0 Hz  to  900E+3 Hz
*RST:
450E+3 Hz
<FreqDevF1Upper>
Range: 
0 Hz  to  900E+3 Hz
*RST:
550E+3 Hz
<FreqDevF1Enable>
OFF |
 
 ON
Disable or enable limits for current, average, maximum, and minimum results (4 values)
*RST:
OFF, for all Δf1avg limits: ON
Firmware/Software: 
V3.5.70
Options: 
R&S CMW-KM721
Top