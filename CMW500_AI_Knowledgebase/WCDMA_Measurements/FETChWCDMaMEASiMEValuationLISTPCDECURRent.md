# FETChWCDMaMEASiMEValuationLISTPCDECURRent

Module: WCDMA Measurements
Source: 326be377d93c46a7.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PCDE:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PCDE:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PCDE:MAXimum? 
Return the peak code domain error (PCDE) results in list mode.
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
<3_PCDError>
Peak code domain error
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<4_PCDE_Phase>
IPHase |
 
 QPHase
Phase where the peak code domain error was measured
IPHase
: I-Signal
QPHase
: Q-Signal
<5_PCDE_CodeNo>}
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
Options: 
R&S CMW-KM012
Top