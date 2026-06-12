# FETChLTEMEASiMEValuationLISTSEGMentnoPMONitorRMS

Module: LTE Measurements
Source: fd56757180a64b61.htm

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
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:PMONitor:RMS?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:PMONitor:RMS? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:PMONitor:PEAK? 
Return the power monitor results for segment <no> in list mode. The commands return one power result for each subframe of the segment for the measured carrier. The power values are RMS averaged over the subframe or represent the peak value within the subframe.
To configure the number of subframes within the segment see 
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
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<Power_1> ... <Power_n>
Comma-separated list of power values, one value per subframe, from first to last subframe of the segment
For an inactive segment only one INV is returned, independent of the number of configured subframes.
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
V2.0.20
V2.1.25: increased maximum number of segments to 250
V2.1.30: increased maximum number of segments to 512
V3.0.50: increased maximum number of segments to 1000
Options: 
R&S CMW-KM012
Top