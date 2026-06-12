# CALCulateWLANMEASiMEValuationUTERrornMARGinCURRent

Module: WLAN Measurements
Source: 94c36b2faaef4647.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Unused Tone Error  Margin Values
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:UTERror<n>:MARGin:MAXimum? 
Returns the margin values of the unused tone error measurement for the current, average, minimum and maximum traces.
A positive margin indicates a violation of the unused tone error limit line. The respective trace value is located above the upper limit line.
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
<UTE_Margin>
Comma-separated list of margins to the unused tone error limits, one value per each 26-tone RU. The total number of RUs depends on the bandwidth, see table below.
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