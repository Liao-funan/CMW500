# CONFigureLTEMEASiPRAChMODulationEWLength

Module: LTE Measurements
Source: d7342691e54653.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Modulation Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:PRACh:MODulation:EWLength
CONFigure:LTE:MEAS<i>:PRACh:MODulation:EWLength 
<LengthFormat0>, <LengthFormat1>, <LengthFormat2>, <LengthFormat3>, <LengthFormat4>
Specifies the EVM window length in samples for all preamble formats.
Parameters:
<LengthFormat0>
Length for preamble format 0
Range: 
1  to  3168
*RST:
3072
<LengthFormat1>
Length for preamble format 1
Range: 
1  to  21024
*RST:
20928
<LengthFormat2>
Length for preamble format 2
Range: 
1  to  6240
*RST:
6144
<LengthFormat3>
Length for preamble format 3
Range: 
1  to  21024
*RST:
20928
<LengthFormat4>
Length for preamble format 4
Range: 
1  to  448
*RST:
432
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V2.0.10
V2.0.20: *RST values modified
Manual operation: 
See 
"EVM Window Length"
Top