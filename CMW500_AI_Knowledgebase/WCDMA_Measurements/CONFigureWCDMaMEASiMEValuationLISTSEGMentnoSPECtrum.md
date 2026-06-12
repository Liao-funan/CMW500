# CONFigureWCDMaMEASiMEValuationLISTSEGMentnoSPECtrum

Module: WCDMA Measurements
Source: 8d67ab48002c482c.htm

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
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:SPECtrum
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:SPECtrum 
<SpecStatistics>, <EnableACLR>, <EnableEMask>, <EnableOBW>
Defines the statistical length for the 
AVERage
 and 
MAXimum
 calculation and enables the calculation of the different spectrum results in segment no. <no>; see 
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
<SpecStatistics>
The statistical length is limited by the length of the segment (see 
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
SEGMent<no>:
​
SETup
).
Range: 
1  to  1000
*RST:
10
<EnableACLR>
OFF |
 
 ON
OFF:
 Disable measurement
ON:
 Enable measurement of ACLR
*RST:
OFF
<EnableEMask>
OFF |
 
 ON
Disable or enable measurement of spectrum emission mask
*RST:
OFF
<EnableOBW>
OFF |
 
 ON
Disable or enable measurement of occupied bandwidth
*RST:
OFF
Example: 
See 
"Using WCDMA List Mode"
Firmware/Software: 
V1.0.5.3
V3.2.10: increased number of segments
Options: 
R&S CMW-KM012
Top