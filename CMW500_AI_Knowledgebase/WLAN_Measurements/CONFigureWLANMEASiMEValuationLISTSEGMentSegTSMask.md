# CONFigureWLANMEASiMEValuationLISTSEGMentSegTSMask

Module: WLAN Measurements
Source: 01707a9f6fdd4faa.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask
CONFigure:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask 
<Statistics>, <TSMEnable>
Defines the statistical length for 
AVERage
 and 
MAXimum
 calculation and enables the calculation of the transmit spectrum mask results in segment <Seg>; see 
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
<TSMEnable>
OFF |
 
 ON
OFF
: Disable measurement
ON
: Enable measurement
*RST:
OFF
Example: 
See 
"Using WLAN List Mode"
Firmware/Software: 
V1.0.15.20
Options: 
R&S CMW-KM012
Top