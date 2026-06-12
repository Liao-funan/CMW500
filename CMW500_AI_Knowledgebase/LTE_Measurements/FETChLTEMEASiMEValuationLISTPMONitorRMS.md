# FETChLTEMEASiMEValuationLISTPMONitorRMS

Module: LTE Measurements
Source: ba4d40b25ab84509.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:PMONitor:RMS?
FETCh:LTE:MEAS<i>:MEValuation:LIST:PMONitor:RMS? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:PMONitor:PEAK? 
Return the power monitor results for all measured segments in list mode. The commands return one power result per subframe for the measured carrier. The power values are RMS averaged over the subframe or represent the peak value within the subframe.
Related commands:
To query the result list structure. Where are the power results related to a certain subframe:
FETCh:
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
PMONitor:
​
ARRay:
​
STARt?
FETCh:
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
PMONitor:
​
ARRay:
​
LENGth?
To configure which segments are measured:
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
LRANge
To configure the number of subframes within a segment:
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
To enable the calculation of the results:
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
PMONitor
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<Power_1> ... <Power_n>
Comma-separated list of power values, one value per subframe, from first subframe of first measured segment to last subframe of last measured segment
For an inactive segment only one INV is returned, independent of the number of configured subframes.
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Retrieving Single Results for All Segments"
Usage: 
Query only
Firmware/Software: 
V2.0.20
Options: 
R&S CMW-KM012
Top