# CONFigureBLUetoothMEASiMEValuationLISTSEGMentnoRESults

Module: Bluetooth Measurements
Source: 76c21c9d4c074266.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:RESults
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:RESults 
<EnableModScalar>, <EnablePowScalar>, <EnableSpecOBW>, <EnableSpecACP>, <EnableSpecGACP>
Enables or disables the evaluation of the particular measurement type in the segment.
Suffix: 
<no>
1..48
Segment number
Parameters:
<EnableModScalar>
OFF |
 
 ON
Enable/disable statistical modulation results
*RST:
OFF
<EnablePowScalar>
OFF |
 
 ON
Enable/disable statistical power results
*RST:
OFF
<EnableSpecOBW>
OFF |
 
 ON
Enable/disable the spectrum 20 dB bandwidth results (BR)
*RST:
OFF
<EnableSpecACP>
OFF |
 
 ON
Enable/disable the spectrum ACP results (BR, LE)
*RST:
OFF
<EnableSpecGACP>
OFF |
 
 ON
Enable/disable the spectrum gated ACP results (EDR)
*RST:
OFF
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.2.50
Options: 
R&S CMW-KM012
Top