# FETChWCDMaMEASiMEValuationLISTSEGMentnoPCDECURRent

Module: WCDMA Measurements
Source: eb7f6268cbe3448e.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:PCDE:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:PCDE:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:PCDE:MAXimum? 
Returns the peak code domain error (PCDE) results for segment <no> in list mode.
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<ReturnCode>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<PCDError>
Peak code domain error
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<PCDE_Phase>
IPHase |
 
 QPHase
Phase where the peak code domain error was measured
IPHase
: I-Signal
QPHase
: Q-Signal
<PCDE_CodeNo>
Code number for which the PCDE was measured
Range: 
0  to  255
Example: 
See 
"Using WCDMA List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V3.2.10: increased number of segments
Options: 
R&S CMW-KM012
Top