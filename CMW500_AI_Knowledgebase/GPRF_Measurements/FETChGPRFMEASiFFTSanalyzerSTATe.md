# FETChGPRFMEASiFFTSanalyzerSTATe

Module: GPRF Measurements
Source: 48214b5bad5c4237.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
FFT Spectrum Analyzer Commands
 > 
Measurement Control and States
 > 
FETCh:GPRF:MEAS<i>:FFTSanalyzer:STATe?
FETCh:GPRF:MEAS<i>:FFTSanalyzer:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
See also: 
"Measurement Control"
Return values: 
<MeasState>
OFF |
 
 RUN |
 
 RDY
OFF:
 measurement off, no resources allocated, no results
RUN:
 measurement running, synchronization pending or adjusted, resources active or queued
RDY:
 measurement finished
*RST:
OFF
Example: 
See 
"Single-Shot and Continuous Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"FFT (Softkey)"
Top