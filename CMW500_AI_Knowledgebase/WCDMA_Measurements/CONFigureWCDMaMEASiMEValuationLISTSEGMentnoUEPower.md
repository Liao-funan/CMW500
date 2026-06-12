# CONFigureWCDMaMEASiMEValuationLISTSEGMentnoUEPower

Module: WCDMA Measurements
Source: 19c5572148a945cf.htm

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
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:UEPower
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:UEPower 
<EnableUEpower>
Enables the calculation of the current UE power vs. slot results in segment no. <no>; see 
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
<EnableUEpower>
OFF |
 
 ON
OFF:
 Disable measurement
ON:
 Enable measurement of UE power
*RST:
OFF
Example: 
See 
"Using WCDMA List Mode"
Firmware/Software: 
V2.1.10
V3.2.10: increased number of segments
Options: 
R&S CMW-KM012
Top