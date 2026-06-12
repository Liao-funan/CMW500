# FETChWLANMEASiMEValuationTSMaskOBWMIMOn

Module: WLAN Measurements
Source: 72451388a5434b4c.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum OBW Results
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:OBW:MIMO<n>?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:OBW:MIMO<n>? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:OBW:MIMO<n>? 
Return the OBW results for MIMO measurements, antenna/stream number <n>, bandwidths with one segment.
Suffix: 
<n>
1..8
Return values: 
<Reliability>
"Reliability Indicator"
<OBWCur>
Current OBW value
Default unit: 
Hz
<OBWAvg>
Average OBW value
Default unit: 
Hz
<OBWMax>
Maximum OBW value
Default unit: 
Hz
<OBWStdDev>
Standard deviation OBW value
Default unit: 
Hz
<OBWleft>
Lower edge frequency of OBW
Default unit: 
Hz
<OBWright>
Upper edge frequency of OBW
Default unit: 
Hz
Example: 
See 
"Performing Single-Shot Measurements (OFDM, CMIMO)"
Usage: 
Query only
Firmware/Software: 
V3.5.121
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top