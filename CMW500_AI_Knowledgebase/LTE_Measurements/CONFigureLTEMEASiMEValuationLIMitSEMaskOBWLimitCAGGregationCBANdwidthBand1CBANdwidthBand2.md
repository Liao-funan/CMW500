# CONFigureLTEMEASiMEValuationLIMitSEMaskOBWLimitCAGGregationCBANdwidthBand1CBANdwidthBand2

Module: LTE Measurements
Source: cda09c55e45b46f5.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:SEMask:OBWLimit:CAGGregation:CBANdwidth<Band1>:CBANdwidth<Band2>
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:SEMask:OBWLimit:CAGGregation:CBANdwidth<Band1>:CBANdwidth<Band2> 
<OBWlimit>
Defines an upper limit for the occupied bandwidth, depending on the channel bandwidth combination of the aggregated channels.
Suffix: 
<Band1>
150, 200
First channel bandwidth in 0.1 MHz
<Band2>
50, 100, 150, 200
Second channel bandwidth in 0.1 MHz
For <Band1> = 150, only <Band2> = 150 is allowed
For <Band1> = 200, all <Band2> values are allowed
Parameters:
<OBWlimit>
Range: 
0 MHz  to  40 MHz
*RST:
Depends on the channel bandwidths
Default unit: 
Hz
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.2.70, V3.5.50 <Band2> = 50
Options: 
R&S CMW-KM502/-KM552 for FDD/TDD
Top