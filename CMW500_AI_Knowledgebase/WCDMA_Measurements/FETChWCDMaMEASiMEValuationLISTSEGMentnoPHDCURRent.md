# FETChWCDMaMEASiMEValuationLISTSEGMentnoPHDCURRent

Module: WCDMA Measurements
Source: 7c8cdf32797b4a89.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:PHD:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:PHD:CURRent? 
Returns the phase discontinuity vs. slot results for segment <no> in list mode.
Each value indicates the phase discontinuity at the boundary between the slot and the previous slot. If the slot or the previous slot is not measured, NCAP is returned.
Suffix: 
<no>
1..1000
Return values: 
<Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<ReturnCode>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<PhD>
Comma-separated list of phase discontinuity results, one value per slot. The list contains results for the indicated segment <no>.
If another measurement has been enabled for a segment, but the phase discontinuity measurement is disabled, NCAPs are returned for that segment.
Range: 
-180 deg  to  180 deg
Default unit: 
deg
Usage: 
Query only
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KM012
Top