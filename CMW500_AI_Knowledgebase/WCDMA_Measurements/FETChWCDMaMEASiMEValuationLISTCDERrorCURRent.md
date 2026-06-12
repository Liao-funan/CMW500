# FETChWCDMaMEASiMEValuationLISTCDERrorCURRent

Module: WCDMA Measurements
Source: 70406b6567fb4aa1.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, Result Groups)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:SDEViation? 
Return the RMS CDE vs. slot results in list mode.
The values listed below in curly brackets {} are returned for the segments {...}
seg 1
, {...}
seg 2
, ..., {...}
seg n
, with n determined by 
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
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
{<2_ReturnCode>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_DPCCH> <4_DPDCH> <5_HSDPCCH> <6_EDPCCH> <7_EDPDCH1> <8_EDPDCH2> <9_EDPDCH3> <10_EDPDCH4>}
RMS CDE values for the indicated channels
Range: 
-100 dB to 0 dB (SDEViation 0 dB to 50 dB)
Default unit: 
dB
Example: 
See 
"Using WCDMA List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.5.3
Options: 
R&S CMW-KM012
R&S CMW-KM401 for HS-DPCCH, E-DPCCH, E-DPDCH
Top