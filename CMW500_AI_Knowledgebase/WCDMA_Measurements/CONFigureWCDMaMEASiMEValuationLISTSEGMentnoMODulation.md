# CONFigureWCDMaMEASiMEValuationLISTSEGMentnoMODulation

Module: WCDMA Measurements
Source: 80fe2e6c0cc549e7.htm

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
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation 
<ModStatistics>, <EnableUEpower>, <EnableEVM>, <EnableMagError>, <EnablePhaseErr>, <EnableFreqError>, <EnableIQ>
Defines the statistical length for the 
AVERage
, 
MAXimum
, and 
SDEViation
 calculation and enables the calculation of the different modulation results in segment no. <no>; see 
"Multi-Evaluation List Mode"
.
The statistical length for CDP, CDE and modulation results is identical (see also 
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
CDPower
).
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
<ModStatistics>
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
<EnableUEpower>
OFF |
 
 ON
OFF:
 Disable measurement
ON:
 Enable measurement of UE power
*RST:
OFF
<EnableEVM>
OFF |
 
 ON
Disable or enable measurement of EVM
*RST:
OFF
<EnableMagError>
OFF |
 
 ON
Disable or enable measurement of magnitude error
*RST:
OFF
<EnablePhaseErr>
OFF |
 
 ON
Disable or enable measurement of phase error
*RST:
OFF
<EnableFreqError>
OFF |
 
 ON
Disable or enable measurement of frequency error
*RST:
OFF
<EnableIQ>
OFF |
 
 ON
Disable or enable measurement of I/Q origin offset and imbalance
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