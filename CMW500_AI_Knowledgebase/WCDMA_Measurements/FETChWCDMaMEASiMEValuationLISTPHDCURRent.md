# FETChWCDMaMEASiMEValuationLISTPHDCURRent

Module: WCDMA Measurements
Source: 403d299c95824630.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PHD:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PHD:CURRent? 
Returns the phase discontinuity vs. slot results in list mode.
Each value indicates the phase discontinuity at the boundary between the slot and the previous slot. If the slot or the previous slot is not measured, NCAP is returned.
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<PhD>
Comma-separated list of phase discontinuity results, one value per slot. The list contains results for all active segments (segments for which any measurement has been enabled).
If another measurement has been enabled for a segment, but the phase discontinuity measurement is disabled, NCAPs are returned for that segment.
Example: segment 1 with 10 slots active, segment 2 with 50 slots inactive, segment 3 with 12 slots active. 22 phase discontinuity results are returned.
Range: 
-180 deg  to  180 deg
Default unit: 
deg
Example: 
See 
"Using WCDMA List Mode"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KM012
Top