# CONFigureWCDMaSIGNiBERSCONdition

Module: WCDMA Signaling
Source: d5027101e69916.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
BER Measurement
 > 
Measurement Settings
 > 
CONFigure:WCDMa:SIGN<i>:BER:SCONdition
CONFigure:WCDMa:SIGN<i>:BER:SCONdition 
<StopCondition>
Qualifies whether the measurement is stopped after a failed limit check or continued. 
SLFail
 means that the measurement is stopped and reaches the 
RDY
 state when one of the results exceeds the limits.
Parameters:
<StopCondition>
NONE |
 
 SLFail
NONE
: Continue measurement irrespective of the limit check
SLFail
: Stop measurement on limit failure
*RST:
NONE
Example: 
See 
"Configuring the BER Measurement"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Stop Condition"
Top