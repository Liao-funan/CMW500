# CONFigureLTEMEASiMEValuationLIMitACLRUTRAnoCAGGregationCBANdwidthBand1CBANdwidthBand2

Module: LTE Measurements
Source: 3c4075adcc094051.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:ACLR:UTRA<no>:CAGGregation:CBANdwidth<Band1>:CBANdwidth<Band2>
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:ACLR:UTRA<no>:CAGGregation:CBANdwidth<Band1>:CBANdwidth<Band2> 
<RelativeLevel>, <AbsoluteLevel>
Defines relative and absolute limits for the ACLR measured in the first or second adjacent UTRA channel, depending on <no>.
The settings are defined separately for each channel bandwidth combination of the aggregated channels.
Suffix: 
<no>
1..2
Selects first or second adjacent UTRA channel
<Band1>
150, 200
First channel bandwidth in 0.1 MHz
<Band2>
50, 100, 150, 200
Second channel bandwidth in 0.1 MHz
For <Band1> = 150, only <Band2> = 150 is allowed
For <Band1> = 200, all <Band2> values are allowed
Parameters:
<RelativeLevel>
Range: 
-256 dB  to  256 dB
*RST:
32.2 dB (<no> = 1) / 35.2 dB (<no> = 2)
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<AbsoluteLevel>
Range: 
-256 dBm  to  256 dBm
*RST:
-50 dBm
Default unit: 
dBm
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.2.70, V3.5.50 <Band2> = 50
Options: 
R&S CMW-KM502/-KM552 for FDD/TDD
Top