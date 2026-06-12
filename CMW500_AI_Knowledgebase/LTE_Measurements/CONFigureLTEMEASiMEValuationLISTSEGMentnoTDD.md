# CONFigureLTEMEASiMEValuationLISTSEGMentnoTDD

Module: LTE Measurements
Source: 858da3035a3444a9.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:TDD
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:TDD 
<UplinkDownlink>, <SpecialSubframe>
Defines segment settings only relevant for the duplex mode TDD.
For general segment configuration, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
SETup
.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<UplinkDownlink>
Uplink-downlink configuration, defining the combination of uplink, downlink and special subframes within a radio frame
Range: 
0  to  6
*RST:
0
<SpecialSubframe>
Special subframe configuration, defining the inner structure of special subframes
Range: 
0  to  8
*RST:
0
Firmware/Software: 
V2.0.10
Options: 
R&S CMW-KM012
Top