# FETChLTEMEASiMEValuationLISTSEGMentnoACLRCURRent

Module: LTE Measurements
Source: d8b85e9bf9164e3e.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:AVERage? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:AVERage? 
Return ACLR single value results for segment <no> in list mode.
The values described below are returned by 
FETCh
 commands. The first four values (reliability to out-of-tolerance result) are also returned by 
CALCulate
 commands. The remaining values returned by 
CALCulate
 commands are limit check results, one value for each result listed below.
Suffix: 
<no>
1..1000
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatistExpired>
Reached statistical length in slots
Range: 
0  to  1000
<4_OutOfTol>
Percentage of measured subframes with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<5_UTRA2neg> <6_UTRA1neg>
ACLR for the second and first adjacent UTRA channels below the carrier frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<7_EUTRAneg>
ACLR for the first adjacent E-UTRA channel below the carrier frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<8_EUTRA>
Power in the allocated E-UTRA channel
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<9_EUTRApos>
ACLR for the first adjacent E-UTRA channel above the carrier frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<10_UTRA1pos> <11_UTRA2pos>
ACLR for the first and second adjacent UTRA channels above the carrier frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.10
V2.0.20: CALCulate commands
V2.1.25: increased maximum number of segments to 250
V2.1.30: increased maximum number of segments to 512
V3.0.50: increased maximum number of segments to 1000
Options: 
R&S CMW-KM012
Top