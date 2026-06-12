# CONFigureLTEMEASiMEValuationULDL

Module: LTE Measurements
Source: e1e30752d72d4105.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:LTE:MEAS<i>:MEValuation:ULDL
CONFigure:LTE:MEAS<i>:MEValuation:ULDL 
<UplinkDownlink>
Selects an uplink-downlink configuration, defining the combination of uplink, downlink and special subframes within a radio frame. This parameter is only relevant for frame structure "Type 2" (
CONFigure:
​
LTE:
​
MEAS<i>:
​
FSTRucture?
).
The uplink-downlink configurations are defined in 3GPP TS 36.211, chapter 4, "Frame Structure".
For the combined signal path scenario, use 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL[:
​
PCC]:
​
ULDL
.
Parameters:
<UplinkDownlink>
Range: 
0  to  6
*RST:
0
Example: 
See 
"Specifying Required Settings"
Firmware/Software: 
V1.0.10.1
Options: 
R&S CMW-KM550
Manual operation: 
See 
"Uplink Downlink"
Top