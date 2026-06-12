# FETChWLANMEASiMEValuationTRACeTSMaskCURRent

Module: WLAN Measurements
Source: 6e40121edda04499.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MINimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MINimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MAXimum? 
[<start>, <count>[, <decimation>]]
Return the values of the transmit spectrum mask traces for SISO measurements and bandwidths with one segment.
The results of the current, average, minimum and maximum traces can be retrieved.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
For 802.11p signals, use 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
MEValuation:
​
TSMask:
​
MSELection
 to switch between relative and absolute values.
Return values: 
<Reliability>
"Reliability Indicator"
<Values>
Comma-separated list of power values, trace from left to right
Range: 
-90 dB to 10 dB (relative) or -120 dBm to 25 dBm (absolute)
Default unit: 
dB (relative) or dBm (absolute)
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SISO)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0, V3.2.11 subarrays
V3.2.40 absolute traces for 802.11p
V3.5.121 MINimum commands
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top