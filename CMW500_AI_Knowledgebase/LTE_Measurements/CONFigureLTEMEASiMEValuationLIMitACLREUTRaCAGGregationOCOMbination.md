# CONFigureLTEMEASiMEValuationLIMitACLREUTRaCAGGregationOCOMbination

Module: LTE Measurements
Source: f22a8122f40d4a59.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum, with Carrier Aggregation)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:ACLR:EUTRa:CAGGregation:OCOMbination
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:ACLR:EUTRa:CAGGregation:OCOMbination 
<RelativeLevel>, <AbsoluteLevel>
Defines relative and absolute limits for the ACLR measured in an adjacent E-UTRA channel.
The settings apply to all channel bandwidth combinations that are not supported by 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
ACLR:
​
EUTRa:
​
CAGGregation:
​
CBANdwidth<Band1>:
​
CBANdwidth<Band2>
.
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
V3.2.70
Options: 
R&S CMW-KM502/-KM552 for FDD/TDD
Top