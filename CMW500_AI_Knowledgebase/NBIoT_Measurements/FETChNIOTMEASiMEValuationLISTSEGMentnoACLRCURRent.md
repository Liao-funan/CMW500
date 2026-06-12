# FETChNIOTMEASiMEValuationLISTSEGMentnoACLRCURRent

Module: NBIoT Measurements
Source: 5944f4702942413e.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR:AVERage? 
Return ACLR single value results for segment <no> in list mode.
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<StatistExpired>
Reached statistical length in slots
Range: 
0  to  1000
<OutOfTolerance>
Percentage of measured slots with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<UTRAneg>
ACLR for the adjacent UTRA channel with lower frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<GSMneg>
ACLR for the adjacent GSM channel with lower frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<NBNIOT>
Power in the NB-IoT channel
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<GSMpos>
ACLR for the adjacent GSM channel with higher frequency
Range: 
0 dB  to  100 dB
Default unit: 
dB
<UTRApos>
ACLR for the adjacent UTRA channel with higher frequency
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
V3.7.20
Options: 
R&S CMW-KM012
Top