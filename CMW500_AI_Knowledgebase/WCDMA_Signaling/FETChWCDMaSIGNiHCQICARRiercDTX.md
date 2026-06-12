# FETChWCDMaSIGNiHCQICARRiercDTX

Module: WCDMA Signaling
Source: dbadec7b46b64281.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA CQI Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HCQI:CARRier<c>:DTX?
FETCh:WCDMa:SIGN<i>:HCQI:CARRier<c>:DTX? 
READ:WCDMa:SIGN<i>:HCQI:CARRier<c>:DTX? 
Returns the DTX results of the second and third stage of HSDPA CQI measurement. As indicated in the parameter descriptions below, each test case provides valid results for a subset of the parameters only. For the other parameters NCAP is returned.
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<MedianCQIM1>
Percentage of DTX responses measured at median CQI - 1 in the third stage of measurement
(AWGN test case only)
Additional parameter: On|Off enables/disables the DTX statistics
Range: 
0 %  to  100 %
Default unit: 
%
<MedianCQI>
Percentage of DTX responses measured at median CQI in the second stage of measurement
(AWGN and fading test cases)
Additional parameter: On|Off enables/disables the DTX statistics
Range: 
0 %  to  100 %
Default unit: 
%
<MedianCQIP2>
Percentage of DTX responses measured at median CQI + 2 in the third stage of measurement
(AWGN test case only)
Additional parameter: On|Off enables/disables the DTX statistics
Range: 
0 %  to  100 %
Default unit: 
%
<MedianCQIP3>
Percentage of DTX responses measured at median CQI + 3 in the second stage of measurement
(Fading test case only)
Additional parameter: On|Off enables/disables the DTX statistics
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