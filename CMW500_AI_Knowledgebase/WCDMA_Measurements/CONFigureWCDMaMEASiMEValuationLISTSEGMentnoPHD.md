# CONFigureWCDMaMEASiMEValuationLISTSEGMentnoPHD

Module: WCDMA Measurements
Source: 926c04f183a24f5d.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:PHD
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:PHD 
<EnablePhD>
Enables the calculation of the phase discontinuity vs. slot results in segment no. <no>; see 
"Multi-Evaluation List Mode"
.
Suffix: 
<no>
1..1000
The segment number must not exceed the total number of segments measured (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
COUNt
).
Parameters:
<EnablePhD>
OFF |
 
 ON
OFF:
 Disable measurement
ON:
 Enable measurement of phase discontinuity
*RST:
OFF
Example: 
See 
"Using WCDMA List Mode"
Firmware/Software: 
V3.0.20
V3.2.10: increased number of segments
Options: 
R&S CMW-KM012
Top