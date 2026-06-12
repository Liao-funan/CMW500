# FETChINTermediateGSMSIGNiBERCSWitchedMBEP

Module: GSM Signaling
Source: 6830d654f0e1421a.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER CS Measurement
 > 
Measurement Results
 > 
FETCh:INTermediate:GSM:SIGN<i>:BER:CSWitched:MBEP?
FETCh:INTermediate:GSM:SIGN<i>:BER:CSWitched:MBEP? 
Returns the intermediate results of the BER CS measurement in mean BEP and signal quality mode. As indicated in the parameter descriptions below, each measure mode provides valid results for a subset of the parameters only. For the other parameters INV is returned.
Results return as follows:
<Reliability>, <NumberOfResults>, {<SegReliability>, <RXQualityFull>, <RXQualitySub>, <MeanBEP>, <CV_BEP>, <NumberOfBlocks>, <TDMA_FrameNr>, <BER>}
segment 1
, {...}
seg. 2
, ..., {...}
<NumberOfResults>
For the details of measure modes and results, see 
"BER CS Measurement"
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
<RXQualityFull>
RX quality full as dimensionless index measured over the full set of TDMA frames
Range: 
0  to  7
<RXQualitySub>
RX quality sub as dimensionless index measured in a subset of 4 SACCH frames
Range: 
0  to  7
<MeanBEP>
Mean BEP as dimensionless index
Range: 
0  to  31
<CV_BEP>
Coefficient of variation of BEP as dimensionless index
Range: 
0  to  7
<NumberOfBlocks>
Number of already correctly decoded blocks
Range: 
0  to  24
<TDMA_FrameNr>
Current TDMA frame number
Range: 
0  to  2715647
<BER>
BER result (for mean BEP and signal quality mode)
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Measuring in Mean BEP Mode"
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