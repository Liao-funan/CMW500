# FETChWCDMaSIGNiHCQICARRierc

Module: WCDMA Signaling
Source: 5d09dcf5fab34e36.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA CQI Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:HCQI:CARRier<c>?
FETCh:WCDMa:SIGN<i>:HCQI:CARRier<c>? 
READ:WCDMa:SIGN<i>:HCQI:CARRier<c>? 
Returns the results of the first stage of HSDPA CQI measurement per carrier.
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<MedianCQI>
Middle of the CQI distribution reported in the first measurement stage
Range: 
0 to 30
<MeasSubframes>
Total number of measured HSDPA subframes in stage one
Range: 
0  to  1E+6
<CQIinRange>
Percentage of the CQI values reported within the interval [median CQI - 2, median CQI + 2]
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