# FETChWLANMEASiMEValuationTRACeTSMaskMASKMIMOnSEGMentseg

Module: WLAN Measurements
Source: 42f19c752fae45e0.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limit Lines
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MASK:MIMO<n>:SEGMent<seg>?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MASK:MIMO<n>:SEGMent<seg>? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:TSMask:MASK:MIMO<n>:SEGMent<seg>? 
[<start>, <count>[, <decimation>]]
Return the power values (Y-values) of the transmit spectrum mask limit line trace for segment <seg> and antenna/stream number <n>, for MIMO measurements and bandwidths with two segments.
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
<SpecTraceMask>
Comma-separated list of power values, trace from left to right
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