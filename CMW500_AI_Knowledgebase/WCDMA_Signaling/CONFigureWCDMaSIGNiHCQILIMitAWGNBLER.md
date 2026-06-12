# CONFigureWCDMaSIGNiHCQILIMitAWGNBLER

Module: WCDMA Signaling
Source: aa1c6bb5c3bd4acf.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA CQI Measurement
 > 
Measurement Settings
 > 
CONFigure:WCDMa:SIGN<i>:HCQI:LIMit:AWGN:BLER
CONFigure:WCDMa:SIGN<i>:HCQI:LIMit:AWGN:BLER 
<MedianM1>, <Median0>, <MedianP2>
Defines BLER limit for AWGN test case.
Parameters:
<MedianM1>
Upper limit for the values acquired at median CQI - 1. This limit applies if BLER at median CQI is above the limit <Median0>.
Range: 
0 %  to  100 %
*RST:
10 %
Default unit: 
%
<Median0>
Limit for the values acquired at median CQI
Range: 
0 %  to  100 %
*RST:
10 %
Default unit: 
%
<MedianP2>
Lower limit for the values acquired at median CQI + 2. This limit applies if BLER at median CQI is below the limit <Median0>.
Range: 
0 %  to  100 %
*RST:
10 %
Default unit: 
%
Example: 
See 
"Configuring the HSDPA CQI Measurement"
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS411
Manual operation: 
See 
"BLER"
Top