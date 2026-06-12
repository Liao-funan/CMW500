# FETChWLANMEASiMEValuationTRACeTSMaskFREQuency

Module: WLAN Measurements
Source: 80a0d2eca09b4377.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limit Lines
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:FREQuency?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:FREQuency? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:FREQuency? 
[<start>, <count>[, <decimation>]]
Return the frequency values (X-values) of the transmit spectrum mask limit line trace, for SISO and MIMO, bandwidths with one or two segments.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Return values: 
<Reliability>
"Reliability Indicator"
<SpecTraceFreq>
Comma-separated list of values, trace from left to right
0 Hz corresponds to the center of the channel, for 80+80 MHz signals to the center of the left segment.
Default unit: 
Hz
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SISO)"
Usage: 
Query only
Firmware/Software: 
V3.5.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top