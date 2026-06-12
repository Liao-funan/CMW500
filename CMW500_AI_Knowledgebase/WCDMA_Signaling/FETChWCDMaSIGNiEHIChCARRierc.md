# FETChWCDMaSIGNiEHIChCARRierc

Module: WCDMA Signaling
Source: 50ef1b70ccbb4285.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
E-HICH Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:EHICh:CARRier<c>?
FETCh:WCDMa:SIGN<i>:EHICh:CARRier<c>? 
READ:WCDMa:SIGN<i>:EHICh:CARRier<c>? 
Return all single value results of the E-HICH measurement per carrier.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<c>
1..*
Carrier in uplink
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_MeasFrames>
Number of already measured HSUPA subframes
Range: 
0  to  1E+6
<3_FalseRX>
Number of transmissions that the UE received incorrectly
Range: 
0  to  1E+6
<4_CorrectRX>
Number of transmissions that the UE received correctly
Range: 
0  to  1E+6
<5_AllValidRX>
Number of transmissions that the UE received correctly or incorrectly
For all three "RX" results, the first new data block after a complete retransmission cycle is not counted as a test sample.
Range: 
0  to  1E+6
<6_FalseRatio>
Ratio of <3_FalseRX> to <5_AllValidRX>
Range: 
0 %  to  100 %
Default unit: 
%
<7_CorrectCRC>
Number of transmissions with correct CRC
Range: 
0  to  1E+6
<8_ErrorCRC>
Number of transmissions with incorrect CRC
Range: 
0  to  1E+6
<9_BLER>
Block error rate resulting from CRC results
Range: 
0 %  to  100 %
Default unit: 
%
<10_ThrptCurrent>
Current throughput
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<11_ThrptMaxPos>
Current throughput if there would be no CRC errors
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<12_ThrptMaxExp>
Expected maximum reachable throughput
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<13_ThrptAverage>
Average throughput
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<14_ThrptMaximum>
Maximum throughput since the start of the measurement
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<15_ThrptMinimum>
Minimum throughput since the start of the measurement
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
Example: 
See 
"Performing an E-HICH Measurement"
Usage: 
Query only
Firmware/Software: 
V3.0.20
V3.2.10: added <ThrptAverage>
V3.2.60: commands renamed (
CARRier<c>
 added),
Added <ThrptMaximum>, <ThrptMinimum>
Options: 
R&S CMW-KS401
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top