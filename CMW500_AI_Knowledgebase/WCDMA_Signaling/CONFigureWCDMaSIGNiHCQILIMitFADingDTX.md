# CONFigureWCDMaSIGNiHCQILIMitFADingDTX

Module: WCDMA Signaling
Source: 0553950dc860446c.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA CQI Measurement
 > 
Measurement Settings
 > 
CONFigure:WCDMa:SIGN<i>:HCQI:LIMit:FADing:DTX
CONFigure:WCDMa:SIGN<i>:HCQI:LIMit:FADing:DTX 
<Median0>, <MedianP3>
Defines the maximum percentage of HSDPA subframes that the UE answers with DTX during fading test case.
Parameters:
<Median0>
Limit for the values acquired at median CQI
Range: 
0 %  to  100 %
*RST:
10 %
Additional parameters: OFF | ON (disables | enables the limit check)
<MedianP3>
Limit for the values acquired at median CQI + 3
Range: 
0 %  to  100 %
*RST:
10 %
Additional parameters: OFF | ON (disables | enables the limit check)
Example: 
See 
"Configuring the HSDPA CQI Measurement"
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS411
Manual operation: 
See 
"DTX Rate"
Top