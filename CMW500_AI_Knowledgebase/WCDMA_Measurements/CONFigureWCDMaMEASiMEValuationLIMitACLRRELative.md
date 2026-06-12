# CONFigureWCDMaMEASiMEValuationLIMitACLRRELative

Module: WCDMA Measurements
Source: f5bc2f84d7f942ae.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum)
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:ACLR:RELative
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:ACLR:RELative 
<ChannelFirst>, <ChannelSecond>
Defines upper limits for the ACLR in channels one and two relative to the carrier power. Relative limits are only evaluated when the absolute limit is exceeded (
CONFigure:
​
WCDMa:
​
MEAS<i>:
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
For single uplink carrier: ±5 MHz from the center frequency
For dual uplink carrier: ±7.5 MHz from the center frequency of both carriers
Range: 
-80 dB  to  0 dB
*RST:
-32.2 dB
Default unit: 
dB
Additional OFF | ON disables/enables the limit check using the previous/default limit values
<ChannelSecond>
For single uplink carrier: ±10 MHz from the center frequency
For dual uplink carrier: ±12.5 MHz from the center frequency of both carriers
Range: 
-80 dB  to  0 dB
*RST:
-42.2 dB
Default unit: 
dB
Additional OFF | ON disables/enables the limit check using the previous/default limit values
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.0.4
Top