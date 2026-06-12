# CONFigureLTEMEASiENBMEValuationLIMitACLRUTRACBANdwidthBand

Module: LTE eNodeB Measurements
Source: 654ab266089345df.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum)
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:ACLR:UTRA:CBANdwidth<Band>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:ACLR:UTRA:CBANdwidth<Band> 
<RelativeLevel>, <AbsoluteLevel>
Defines relative and absolute limits for the ACLR measured in adjacent UTRA channels. The settings are defined separately for each channel bandwidth.
Suffix: 
<Band>
14, 30, 50, 100, 150, 200
Channel bandwidth in 0.1 MHz
Parameters:
<RelativeLevel>
Range: 
-256 dB  to  256 dB
*RST:
44.2 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables the limit check)
<AbsoluteLevel>
Range: 
-256 dBm/MHz  to  256 dBm/MHz
*RST:
-50 dBm/MHz, ON
Default unit: 
dBm/MHz
Additional parameters: OFF | ON (disables | enables the limit check)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.0.20
Top