# FETChWLANMEASiMEValuationLISTTSMaskDSSSCURRent

Module: WLAN Measurements
Source: f68686796df44182.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments)
 > 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:TSMask:DSSS:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:TSMask:DSSS:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:TSMask:DSSS:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:TSMask:DSSS:MAXimum? 
Return limit line margin results (DSSS signal) in list mode.
A positive result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
The values listed below in curly brackets {} are returned for each active segment: {...}
seg 1
, {...}
seg 2
, ..., {...}
seg n
. The number of active segments n is determined by 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
COUNt
.
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
{<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatExpired>
Reached statistical length in bursts
Range: 
0  to  1000
<4_Margin_AB> <5_Margin_CD> <6_Margin_DC> <7_Margin_BA>
One margin value per spectrum mask area
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<8_OutOfTol>}
Out of tolerance result
Range: 
0 %  to  100 %
Default unit: 
%
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
Options: 
R&S CMW-KM012
Top