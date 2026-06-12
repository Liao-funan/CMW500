# CONFigureWCDMaSIGNiHCQILIMitAWGNDTX

Module: WCDMA Signaling
Source: 9cd1b0fbda6946d4.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA CQI Measurement
 > 
Measurement Settings
 > 
CONFigure:WCDMa:SIGN<i>:HCQI:LIMit:AWGN:DTX
CONFigure:WCDMa:SIGN<i>:HCQI:LIMit:AWGN:DTX 
<MedianM1>, <Median0>, <MedianP2>
Defines the maximum percentage of HSDPA subframes that the UE answers with DTX during AWGN test case.
Parameters:
<MedianM1>
Limit for the values acquired at median CQI - 1
Range: 
0 %  to  100 %
*RST:
10 %
Additional OFF | ON disables | enables the limit check
<Median0>
Limit for the values acquired at median CQI
Range: 
0 %  to  100 %
*RST:
10 %
Additional OFF | ON disables | enables the limit check
<MedianP2>
Limit for the values acquired at median CQI + 2
Range: 
0 %  to  100 %
*RST:
10 %
Additional OFF | ON disables | enables the limit check
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