# FETChWCDMaSIGNiHCQICARRiercBLER

Module: WCDMA Signaling
Source: 8dddfb8f6c7a4cf1.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA CQI Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HCQI:CARRier<c>:BLER?
FETCh:WCDMa:SIGN<i>:HCQI:CARRier<c>:BLER? 
READ:WCDMa:SIGN<i>:HCQI:CARRier<c>:BLER? 
Returns the BLER results of the second and third stage of HSDPA CQI measurement. As indicated in the parameter descriptions below, each test case provides valid results for a subset of the parameters only. For the other parameters NCAP is returned.
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<MedianCQIM1>
Block error rate measured at median CQI - 1 in the third stage of measurement
(AWGN test case only)
Range: 
0 %  to  100 %
Default unit: 
%
<MedianCQI>
Block error rate measured at median CQI in the second stage of measurement
(AWGN and fading test cases)
Range: 
0 %  to  100 %
Default unit: 
%
<MedianCQIP2>
Block error rate measured at median CQI + 2 in the third stage of measurement
(AWGN test case only)
Range: 
0 %  to  100 %
Default unit: 
%
<MedianCQIP3>
Block error rate measured at median CQI + 3 in the second stage of measurement
(Fading test case only)
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing an HSDPA CQI Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS411
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
Top