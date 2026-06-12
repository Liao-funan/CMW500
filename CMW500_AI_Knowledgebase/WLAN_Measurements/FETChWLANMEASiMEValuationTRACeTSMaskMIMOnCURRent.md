# FETChWLANMEASiMEValuationTRACeTSMaskMIMOnCURRent

Module: WLAN Measurements
Source: 46a49237fa4f4fbb.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:MINimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:MINimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:MAXimum? 
[<start>, <count>[, <decimation>]]
Return the values of the transmit spectrum mask traces for MIMO measurements, antenna/stream number <n>, bandwidths with one segment.
The results of the current, average, minimum and maximum traces can be retrieved.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Suffix: 
<n>
1..8
Return values: 
<Reliability>
"Reliability Indicator"
<Values>
Comma-separated list of power values, trace from left to right
Range: 
-90 dB  to  10 dB
Default unit: 
dB
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