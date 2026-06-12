# CONFigureBLUetoothMEASiMEValuationLIMitLENergyDAVerage

Module: Bluetooth Measurements
Source: 2b431f473fd442e4.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:DAVerage
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:DAVerage 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF1Enable>(4)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:DMINimum 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF1Enable>(4)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:DMAXimum 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF1Enable>(4)
Defines the lower and upper Δf1 frequency deviation limits for LE 1M PHY. The mnemonics 
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
ON for all Δf1avg limits, OFF otherwise
Example: 
See 
"Limit Settings"
Firmware/Software: 
V2.1.20
Options: 
R&S CMW-KM611
Top