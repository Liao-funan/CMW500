# CONFigureLTEMEASiMEValuationLIMitACLRUTRAnoCBANdwidthBand

Module: LTE Measurements
Source: 2d53d6a176cd427a.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum, No Carrier Aggregation)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:ACLR:UTRA<no>:CBANdwidth<Band>
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:ACLR:UTRA<no>:CBANdwidth<Band> 
<RelativeLevel>, <AbsoluteLevel>
Defines relative and absolute limits for the ACLR measured in the first or second adjacent UTRA channel, depending on <no>. The settings are defined separately for each channel bandwidth.
Suffix: 
<Band>
14, 30, 50, 100, 150, 200
Channel bandwidth in 0.1 MHz
<no>
1..2
Selects first or second adjacent UTRA channel
Parameters:
<RelativeLevel>
Range: 
-256 dB  to  256 dB
*RST:
32.2 dB (<no> = 1) / 35.2 dB (<no> = 2, OFF for <Band> = 14 | 30)
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<AbsoluteLevel>
Range: 
-256 dBm  to  256 dBm
*RST:
-50 dBm (OFF for <no> = 2 and <Band> = 14 | 30)
Default unit: 
dBm
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.10.1
Top