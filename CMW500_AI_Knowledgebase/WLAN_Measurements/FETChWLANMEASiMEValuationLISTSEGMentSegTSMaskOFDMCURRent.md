# FETChWLANMEASiMEValuationLISTSEGMentSegTSMaskOFDMCURRent

Module: WLAN Measurements
Source: 48842bde1c6e4cbb.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:OFDM:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:OFDM:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:OFDM:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:OFDM:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:NSISo:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:NSISo:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:TSMask:NSISo:MAXimum? 
Return limit line margin results (OFDM signal) for segment <Seg> in list mode.
Use the 
OFDM
 commands for 802.11a/g OFDM signals and the 
NSISo
 commands for 802.11n signals. A positive result indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Suffix: 
<Seg>
1..100
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatExpired>
Reached statistical length in bursts
Range: 
0  to  1000
<4_Margin_AB> <5_Margin_BC> <6_Margin_CD> <7_Margin_DE> <8_Margin_ED> <9_Margin_DC> <10_Margin_CB> <11_Margin_BA>
One margin value per spectrum mask area
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<12_OutOfTol>
Out of tolerance result
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Using WLAN List Mode"
Usage: 
Query only
Firmware/Software: 
V3.2.10
Options: 
R&S CMW-KM012
Top