# FETChWCDMaMEASiMEValuationLISTSEGMentnoUEPowerCURRent

Module: WCDMA Measurements
Source: be0a4ac6d4414032.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:UEPower:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:UEPower:CURRent? 
Returns the UE power vs. slot results for segment <no> in list mode.
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<ReturnCode>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<UEpower>
User equipment power, one value per slot. The list contains results for the indicated segment <no>.
If another measurement has been enabled for a segment, but the UE power vs. slot measurement is disabled, NCAP is returned.
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Using WCDMA List Mode"
Usage: 
Query only
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KM012
Top