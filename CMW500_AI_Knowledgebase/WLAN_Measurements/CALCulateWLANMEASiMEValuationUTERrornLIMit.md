# CALCulateWLANMEASiMEValuationUTERrornLIMit

Module: WLAN Measurements
Source: 70d1cbefcf264144.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Unused Tone Error  Margin Values
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:LIMit?
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:LIMit? 
FETCh:WLAN:MEAS<i>:MEValuation:UTERror<n>:LIMit? 
READ:WLAN:MEAS<i>:MEValuation:UTERror<n>:LIMit? 
Displays unused tone error limit line.
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
<UTE_LimitLine>
Comma-separated list of unused tone error limits, one value per 26-tone RU (from left to right)
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
Top