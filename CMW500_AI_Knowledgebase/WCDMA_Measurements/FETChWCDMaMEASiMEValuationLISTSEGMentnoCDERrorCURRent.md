# FETChWCDMaMEASiMEValuationLISTSEGMentnoCDERrorCURRent

Module: WCDMA Measurements
Source: 098e10ce49734657.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:CDERror:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:CDERror:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:CDERror:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:CDERror:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:CDERror:SDEViation? 
Returns the RMS CDE vs. slot results for segment <no> in list mode.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<no>
1..1000
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_ReturnCode>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_DPCCH> <4_DPDCH> <5_HSDPCCH> <6_EDPCCH> <7_EDPDCH1> <8_EDPDCH2> <9_EDPDCH3> <10_EDPDCH4>
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
V3.2.10: increased number of segments
Options: 
R&S CMW-KM012
R&S CMW-KM401 for HS-DPCCH, E-DPCCH, E-DPDCH
Top