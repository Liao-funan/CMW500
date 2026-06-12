# CONFigureWLANMEASiMEValuationLISTSEGMentSegMODulation

Module: WLAN Measurements
Source: 0e8d5153dd4942e5.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation
CONFigure:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation 
<Statistics>, <EVMEnable>
Defines the statistical length for 
AVERage
, 
MAXimum
 and 
SDEViation
 calculation and enables the calculation of the different modulation results in segment no. <Seg>; see 
"Multi-Evaluation List Mode"
.
Suffix: 
<Seg>
1..100
The segment number must not exceed the total number of segments measured (see 
CONFigure:
​
WLAN:
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
<Statistics>
The statistical length is limited by the length of the segment (see 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<Seg>:
​
SETup
).
Range: 
1  to  1000
*RST:
1
<EVMEnable>
OFF |
 
 ON
OFF:
 Disable measurement
ON:
 Enable measurement
*RST:
ON
Example: 
See 
"Using WLAN List Mode"
Firmware/Software: 
V1.0.10.50
Options: 
R&S CMW-KM012
Top