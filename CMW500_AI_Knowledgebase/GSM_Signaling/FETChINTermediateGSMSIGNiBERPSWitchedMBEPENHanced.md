# FETChINTermediateGSMSIGNiBERPSWitchedMBEPENHanced

Module: GSM Signaling
Source: 708dd7aa65fc4c94.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER PS Measurement
 > 
Measurement Results
 > 
FETCh:INTermediate:GSM:SIGN<i>:BER:PSWitched:MBEP:ENHanced?
FETCh:INTermediate:GSM:SIGN<i>:BER:PSWitched:MBEP:ENHanced? 
Returns the intermediate results of the BER PS measurement for enhanced mean BEP measurement (TBF level EGPRS2-A) in "Mean BEP" mode.
Results return as follows:
<Reliability>, <NoOfResults>, {<SegReliability>, <MeanBEP_GMSK>, <CV_BEP_GMSK>, <MeanBEP_8PSK>, <CV_BEP_8PSK>, <MeanBEP_QPSK>, <CV_BEP_QPSK>, <MeanBEP_16QAM>, <CV_BEP_16QAM>, <MeanBEP_32QAM>, <CV_BEP_32QAM>, <MBEP_16QAM_HSR>, <CBEP_16QAM_HSR>, <MBEP_32QAM_HSR>, <CBEP_32QAM_HSR>, <TDMA_FrameNr>, <BER>}
segment 1
, {...}
seg. 2
, ..., {...}
<NoOfResults>
For the details of measure modes and results, see 
"BER PS Measurement"
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
Zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_NoOfResults>
Total number of segments to be displayed
Range: 
0  to  10
<3_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see <Reliability> parameter.
<4_MBEP_GMSK>
Mean BEP (GMSK) as dimensionless index
Range: 
0  to  31
<5_CV_BEP_GMSK>
Coefficient of variation of BEP (GMSK) as dimensionless index
Range: 
0  to  7
<6_MBEP_8PSK>
Mean BEP (8PSK) as dimensionless index
Range: 
0  to  31
<7_CV_BEP_8PSK>
Coefficient of variation of BEP (8PSK) as dimensionless index
Range: 
0  to  7
<8_MBEP_QPSK>
Mean BEP (QPSK) as dimensionless index
Range: 
0  to  31
<9_CV_BEP_QPSK>
Coefficient of variation of BEP (QPSK) as dimensionless index
Range: 
0  to  7
<10_MBEP_16Q>
Mean BEP (16-QAM) as dimensionless index
Range: 
0  to  31
<11_CV_BEP_16Q>
Coefficient of variation of BEP (16-QAM) as dimensionless index
Range: 
0  to  7
<12_MBEP_32Q>
Mean BEP (32-QAM) as dimensionless index
Range: 
0  to  31
<13_CV_BEP_32Q>
Coefficient of variation of BEP (32-QAM) as dimensionless index
Range: 
0  to  7
<14_MBEP_16-HSR>
Mean BEP (16-QAM higher symbol rates) as dimensionless index
Range: 
0  to  31
<15_CBEP_16-HSR>
Coefficient of variation of BEP (16-QAM higher symbol rates) as dimensionless index
Range: 
0  to  7
<16_MBEP_32-HSR>
Mean BEP (32-QAM higher symbol rates) as dimensionless index
Range: 
0  to  31
<17_CBEP_32-HSR>
Coefficient of variation of BEP (32-QAM higher symbol rates) as dimensionless index
Range: 
0  to  7
<18_TDMA_Frame>
Current TDMA frame number
Range: 
0  to  2715647
<19_BER>
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
Options: 
R&S CMW-KS201 for EGPRS2-A
Manual operation: 
See 
"Results"
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top