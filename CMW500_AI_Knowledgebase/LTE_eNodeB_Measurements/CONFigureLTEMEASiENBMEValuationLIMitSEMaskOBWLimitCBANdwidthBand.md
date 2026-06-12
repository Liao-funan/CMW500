# CONFigureLTEMEASiENBMEValuationLIMitSEMaskOBWLimitCBANdwidthBand

Module: LTE eNodeB Measurements
Source: 0600c20b047e4e7c.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum)
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:SEMask:OBWLimit:CBANdwidth<Band>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:SEMask:OBWLimit:CBANdwidth<Band> 
<OBWlimit>
Defines an upper limit for the occupied bandwidth, depending on the channel bandwidth.
Suffix: 
<Band>
14, 30, 50, 100, 150, 200
Channel bandwidth in 0.1 MHz
Parameters:
<OBWlimit>
Range: 
0 MHz  to  40 MHz
*RST:
Equals the channel bandwidth, ON
Default unit: 
Hz
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.0.20
Top