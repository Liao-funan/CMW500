# FETChWLANMEASiMEValuationTRACeTSMaskMIMOnSEGMentsegCURRent

Module: WLAN Measurements
Source: f90b7f74bd8c4642.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:SEGMent<seg>:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:SEGMent<seg>:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:SEGMent<seg>:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:SEGMent<seg>:MINimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:SEGMent<seg>:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:SEGMent<seg>:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:SEGMent<seg>:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:SEGMent<seg>:MINimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MIMO<n>:SEGMent<seg>:MAXimum? 
[<start>, <count>[, <decimation>]]
Return the values of the transmit spectrum mask traces for segment <seg> and antenna/stream number <n>, for MIMO measurements and bandwidths with two segments.
The results of the current, average, minimum and maximum traces can be retrieved.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Suffix: 
<n>
1..8
<seg>
1..2
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
"Performing Single-Shot Measurements (OFDM, SMIMO, 80+80 MHz)"
Usage: 
Query only
Firmware/Software: 
V3.5.121
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top