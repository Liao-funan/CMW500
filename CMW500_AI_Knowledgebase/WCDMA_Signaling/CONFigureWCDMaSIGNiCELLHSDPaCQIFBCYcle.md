# CONFigureWCDMaSIGNiCELLHSDPaCQIFBCYcle

Module: WCDMA Signaling
Source: b33e21f67b1d4a86.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA Settings
 > 
Miscellaneous Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:HSDPa:CQI:FBCYcle
CONFigure:WCDMa:SIGN<i>:CELL:HSDPa:CQI:FBCYcle 
<FeedbackCycle>
Specifies the time after which the UE sends a new CQI value on the HS-DPCCH (CQI feedback cycle).
The CQI transmission can also be disabled completely.
Parameters:
<FeedbackCycle>
Range: 
2 ms  to  160 ms
*RST:
4 ms
Default unit: 
s
Additional parameters: OFF | ON (disables | enables CQI transmission)
Example: 
See 
"Configuring HSDPA Settings"
Firmware/Software: 
V2.1.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"CQI Feedback Cycle, CQI Repetition Factor"
Top