# FETChWCDMaSIGNiHCQICARRiercMSFRames

Module: WCDMA Signaling
Source: 1b96818a9d724275.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA CQI Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HCQI:CARRier<c>:MSFRames?
FETCh:WCDMa:SIGN<i>:HCQI:CARRier<c>:MSFRames? 
READ:WCDMa:SIGN<i>:HCQI:CARRier<c>:MSFRames? 
Returns the number of subframes measured during the second and third stage of HSDPA CQI measurement to calculate BLER and DTX. As indicated in the parameter descriptions below, each test case provides valid results for a subset of the parameters only. For the other parameters NCAP is returned.
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<MedianCQIM1>
The number of subframes with ACK and NACK responses measured at median CQI - 1 in the third stage of measurement
(AWGN test case only)
Range: 
0  to  1E+6
<MedianCQI>
The number of subframes with ACK and NACK responses measured at median CQI in the second stage of measurement
(AWGN and fading test cases)
Range: 
0  to  1E+6
<MedianCQIP2>
The number of subframes with ACK and NACK responses measured at median CQI + 2 in the third stage of measurement
(AWGN test case only)
Range: 
0  to  1E+6
<MedianCQIP3>
The number of subframes with ACK and NACK responses measured at median CQI + 3 in the second stage of measurement
(Fading test case only)
Range: 
0  to  1E+6
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