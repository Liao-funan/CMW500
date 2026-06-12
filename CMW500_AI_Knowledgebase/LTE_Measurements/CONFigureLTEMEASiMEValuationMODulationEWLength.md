# CONFigureLTEMEASiMEValuationMODulationEWLength

Module: LTE Measurements
Source: d7342691e14356.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:MODulation:EWLength
CONFigure:LTE:MEAS<i>:MEValuation:MODulation:EWLength 
<CPnormB014>, <CPnormB030>, <CPnormB050>, <CPnormB100>, <CPnormB150>, <CPnormB200>, <CPextB014>, <CPextB030>, <CPextB050>, <CPextB100>, <CPextB150>, <CPextB200>
Specifies the EVM window length in samples for all channel bandwidths, depending on the cyclic prefix (CP) type.
Parameters:
<CPnormB014>
Length for normal CP, BW = 1.4 MHz
Range: 
1  to  9
*RST:
5
<CPnormB030>
Length for normal CP, BW = 3 MHz
Range: 
1  to  18
*RST:
12
<CPnormB050>
Length for normal CP, BW = 5 MHz
Range: 
1  to  36
*RST:
32
<CPnormB100>
Length for normal CP, BW = 10 MHz
Range: 
1  to  72
*RST:
66
<CPnormB150>
Length for normal CP, BW = 15 MHz
Range: 
1  to  108
*RST:
102
<CPnormB200>
Length for normal CP, BW = 20 MHz
Range: 
1  to  144
*RST:
136
<CPextB014>
Length for extended CP, BW = 1.4 MHz
Range: 
1  to  32
*RST:
28
<CPextB030>
Length for extended CP, BW = 3 MHz
Range: 
1  to  64
*RST:
58
<CPextB050>
Length for extended CP, BW = 5 MHz
Range: 
1  to  128
*RST:
124
<CPextB100>
Length for extended CP, BW = 10 MHz
Range: 
1  to  256
*RST:
250
<CPextB150>
Length for extended CP, BW = 15 MHz
Range: 
1  to  384
*RST:
374
<CPextB200>
Length for extended CP, BW = 20 MHz
Range: 
1  to  512
*RST:
504
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"EVM Window Length"
Top