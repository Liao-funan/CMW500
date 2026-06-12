# CONFigureLTEMEASiMEValuationLIMitACLREUTRaCBANdwidthBand

Module: LTE Measurements
Source: 63c834c7aa1a4e02.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:ACLR:EUTRa:CBANdwidth<Band>
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:ACLR:EUTRa:CBANdwidth<Band> 
<RelativeLevel>, <AbsoluteLevel>
Defines relative and absolute limits for the ACLR measured in an adjacent E-UTRA channel. The settings are defined separately for each channel bandwidth.
Suffix: 
<Band>
14, 30, 50, 100, 150, 200
Channel bandwidth in 0.1 MHz
Parameters:
<RelativeLevel>
Range: 
-256 dB  to  256 dB
*RST:
29.2 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<AbsoluteLevel>
Range: 
-256 dBm  to  256 dBm
*RST:
-50 dBm, ON
Default unit: 
dBm
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.10.1
Top