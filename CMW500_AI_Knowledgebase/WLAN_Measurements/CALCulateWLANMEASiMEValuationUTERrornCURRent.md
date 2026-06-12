# CALCulateWLANMEASiMEValuationUTERrornCURRent

Module: WLAN Measurements
Source: fa6d6a9c0ae34bd7.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Unused Tone Error Traces
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:UTERror<n>:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:UTERror<n>:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:UTERror<n>:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:UTERror<n>:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:UTERror<n>:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:UTERror<n>:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:UTERror<n>:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:UTERror<n>:MAXimum? 
Return the values of the unused tone error traces according to standard 802.11ax. The results of the current, average, minimum and maximum traces can be retrieved.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<n>
1..8
Antenna
Return values: 
<Reliability>
"Reliability Indicator"
<UTE_Yvals>
Comma-separated list of unused tone error results, one value per each 26-tone RU. The total number of RUs depends on the bandwidth, see table below.
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SISO)"
.
Usage: 
Query only
Firmware/Software: 
V3.7.21
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Channel bandwidth in MHz
20
40
80
160
Total No. of RUs
9
18
37
74
Top