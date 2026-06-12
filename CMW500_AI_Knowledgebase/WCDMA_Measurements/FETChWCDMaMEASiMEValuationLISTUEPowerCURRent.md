# FETChWCDMaMEASiMEValuationLISTUEPowerCURRent

Module: WCDMA Measurements
Source: d5028154e44198.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, Result Groups)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:UEPower:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:UEPower:CURRent? 
Returns the UE power vs. slot results in list mode.
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
{<UEpower_1> ... <UEpower_m>}
User equipment power, one value per slot. The list contains results for all active segments (segments for which any measurement has been enabled).
If another measurement has been enabled for a segment, but the UE power vs. slot measurement is disabled, NCAPs are returned for that segment.
Example: segment 1 with 10 slots active, segment 2 with 50 slots inactive, segment 3 with 12 slots active. 22 power results are returned.
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
V1.0.10.1
Options: 
R&S CMW-KM012
Top