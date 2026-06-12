# FETChLTEMEASiMEValuationLISTSEGMentnoPOWerCURRent

Module: LTE Measurements
Source: a92ebd3abeb04cec.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:MINimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:MAXimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:POWer:SDEViation? 
Return total TX power results for segment <no> in list mode.
To enable the calculation of the results, see 
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
POWer
.
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<StatistExpired>
Reached statistical length in subframes
Range: 
0  to  1000
<OutOfTolerance>
Percentage of measured subframes with failed limit check
Range: 
0 %  to  100 %
<TXpower>
Total TX power of all component carriers
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KM012
Top