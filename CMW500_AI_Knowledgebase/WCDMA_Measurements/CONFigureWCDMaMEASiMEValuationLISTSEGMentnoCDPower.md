# CONFigureWCDMaMEASiMEValuationLISTSEGMentnoCDPower

Module: WCDMA Measurements
Source: db54303093704e94.htm

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
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:CDPower
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:CDPower 
<ModStatistics>, <EnableCDP>, <EnableCDE>[, <EnablePCDE>]
Defines the statistical length for the 
AVERage
, 
MINimum
, 
MAXimum
 and 
SDEViation
 calculation and enables the calculation of the different code domain results in segment no. <no>; see 
"Multi-Evaluation List Mode"
.
The statistical length for CDP, CDE, PCDE and modulation results is identical (see also 
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
MODulation
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
<EnableCDP>
OFF |
 
 ON
OFF:
 Disable measurement
ON:
 Enable measurement of code domain power
*RST:
OFF
<EnableCDE>
OFF |
 
 ON
Disable or enable measurement of code domain error
*RST:
OFF
<EnablePCDE>
OFF |
 
 ON
Disable or enable measurement of peak code domain error
*RST:
OFF
Example: 
See 
"Using WCDMA List Mode"
Firmware/Software: 
V1.0.5.3 (PCDE V1.0.15.0)
V3.2.10: increased number of segments
Options: 
R&S CMW-KM012
Top