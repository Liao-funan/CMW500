# FETChWLANMEASiMEValuationTRACeTSMaskMASK

Module: WLAN Measurements
Source: 71283cd43e724171.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limit Lines
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MASK?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MASK? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MASK? 
[<start>, <count>[, <decimation>]]
Return the power values (Y-values) of the transmit spectrum mask limit line trace, for SISO measurements and bandwidths with one segment.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Return values: 
<Reliability>
"Reliability Indicator"
<SpecTraceMask>
Comma-separated list of power values, trace from left to right
Default unit: 
dB
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