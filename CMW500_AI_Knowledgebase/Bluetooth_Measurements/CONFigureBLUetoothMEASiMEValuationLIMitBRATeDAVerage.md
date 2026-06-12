# CONFigureBLUetoothMEASiMEValuationLIMitBRATeDAVerage

Module: Bluetooth Measurements
Source: 625f3ebda5be4c7e.htm

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
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:BRATe:DAVerage
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:BRATe:DAVerage 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF2Lower>, <FreqDevF2Upper>, <FreqDevF1Enable>(4), <FreqDevF2Enable>(4)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:BRATe:DMINimum 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF2Lower>, <FreqDevF2Upper>, <FreqDevF1Enable>(4), <FreqDevF2Enable>(4)
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:BRATe:DMAXimum 
<FreqDevF1Lower>, <FreqDevF1Upper>, <FreqDevF2Lower>, <FreqDevF2Upper>, <FreqDevF1Enable>(4), <FreqDevF2Enable>(4)
Defines the lower and upper frequency deviation limits for BR bursts. The mnemonics 
DAVerage
, 
DMAXimum
, 
DMINimum
 distinguish average, maximum, and minimum frequency deviations.
Parameters:
<FreqDevF1Lower>
Range: 
0 Hz  to  500E+3 Hz
*RST:
140E+3 Hz
<FreqDevF1Upper>
Range: 
0 Hz  to  500E+3 Hz
*RST:
175E+3 Hz
<FreqDevF2Lower>
Range: 
0 Hz  to  500E+3 Hz
*RST:
115E+3 Hz
<FreqDevF2Upper>
Range: 
0 Hz  to  500E+3 Hz
*RST:
175E+3 Hz
<FreqDevF1Enable>
OFF |
 
 ON
Disable or enable limits for current, average, maximum, and minimum results (4 values)
*RST:
ON for all Δf1avg limits, OFF otherwise
<FreqDevF2Enable>
OFF |
 
 ON
Disable or enable limits for current, average, maximum, and minimum results (4 values)
*RST:
OFF (all values)
Example: 
See 
"Limit Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"BR"
Top