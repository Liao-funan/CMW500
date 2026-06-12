# CONFigureWCDMaMEASiNBMEValuationLIMitACLRRELative

Module: WCDMA NodeB Measurements
Source: 230891aa49104357.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum)
 > 
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:LIMit:ACLR:RELative
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:LIMit:ACLR:RELative 
<ChannelFirst>, <ChannelSecond>
Defines upper limits for the ACLR in channels 1 (at ±5 MHz from the carrier) and 2 (at ±10 MHz from the carrier) relative to the carrier power. Relative limits are only evaluated when the absolute limit is exceeded (
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
ABSolute
).
Parameters:
<ChannelFirst>
Range: 
-80 dB  to  0 dB
*RST:
-45 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<ChannelSecond>
Range: 
-80 dB  to  0 dB
*RST:
-50 dB, ON
Default unit: 
dB
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