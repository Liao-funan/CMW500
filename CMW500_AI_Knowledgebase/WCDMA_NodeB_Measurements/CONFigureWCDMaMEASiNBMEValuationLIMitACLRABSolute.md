# CONFigureWCDMaMEASiNBMEValuationLIMitACLRABSolute

Module: WCDMA NodeB Measurements
Source: 8f77f637fb6c4fe7.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum)
 > 
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:LIMit:ACLR:ABSolute
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:LIMit:ACLR:ABSolute 
<Limit3M84>
Defines an absolute upper limit for the ACLR. If the absolute upper limit is exceeded, relative limits are evaluated (
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
NB:
​
MEValuation:
​
LIMit:
​
ACLR:
​
RELative
).
Parameters:
<Limit3M84>
Range: 
-80 dBm  to  33 dBm
*RST:
-50 dBm, ON
Default unit: 
dBm
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Limits"
Top