# CALCulateGSMMEASiMEValuationLISTSMODulationPOFFsetno

Module: GSM Measurements
Source: 7179510c8440483e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SMODulation:POFFset<no>?
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SMODulation:POFFset<no>? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SMODulation:POFFset<no>? 
Return the burst power at the carrier frequency minus/plus a selected frequency offset, for all measured list mode segments of the spectrum due to modulation measurement.
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<no>
1..41
Index selecting one of the configured frequency offsets:
1..20 = minus offset 19 to minus offset 0
21 = carrier frequency, no offset
22..41 = plus offset 0 to plus offset 19
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of values, one per measured segment
Range: 
-100 dB  to  100 dB
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V2.1.60
Options: 
R&S CMW-KM012
Top