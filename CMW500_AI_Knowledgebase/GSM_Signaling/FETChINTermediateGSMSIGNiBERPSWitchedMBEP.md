# FETChINTermediateGSMSIGNiBERPSWitchedMBEP

Module: GSM Signaling
Source: 82cb432842bc431f.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER PS Measurement
 > 
Measurement Results
 > 
FETCh:INTermediate:GSM:SIGN<i>:BER:PSWitched:MBEP?
FETCh:INTermediate:GSM:SIGN<i>:BER:PSWitched:MBEP? 
Returns the intermediate results of the BER PS measurement for mean BEP measurement (TBF level EGPRS) in "Mean BEP" mode.
Results return as follows:
<Reliability>, <NumberOfResults>, {<SegReliability>, <MeanBEP_GMSK>, <CV_BEP_GMSK>, <MeanBEP_8PSK>, <CV_BEP_8PSK>, <TDMA_FrameNr>, <BER>}
segment 1
, {...}
seg. 2
, ..., {...}
<NumberOfResults>
For the details of measure modes and results, see 
"BER PS Measurement"
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
Zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<NumberOfResults>
Total number of segments to be displayed
Range: 
0  to  10
<SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see <Reliability> parameter.
<MeanBEP_GMSK>
Mean BEP (GMSK) as dimensionless index
Range: 
0  to  31
<CV_BEP_GMSK>
Coefficient of variation of BEP (GMSK) as dimensionless index
Range: 
0  to  7
<MeanBEP_8PSK>
Mean BEP (8PSK) as dimensionless index
Range: 
0  to  31
<CV_BEP_8PSK>
Coefficient of variation of BEP (8PSK) as dimensionless index
Range: 
0  to  7
<TDMA_FrameNr>
Current TDMA frame number
Range: 
0  to  2715647
<BER>
Overall BER result from the start of the measurement
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"BER PS Tests"
Usage: 
Query only
Firmware/Software: 
V3.2.30
Manual operation: 
See 
"Results"
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top