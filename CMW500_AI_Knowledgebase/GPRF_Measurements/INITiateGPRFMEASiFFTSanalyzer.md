# INITiateGPRFMEASiFFTSanalyzer

Module: GPRF Measurements
Source: 43fd7d37f7524a6e.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
FFT Spectrum Analyzer Commands
 > 
Measurement Control and States
 > 
INITiate:GPRF:MEAS<i>:FFTSanalyzer
INITiate:GPRF:MEAS<i>:FFTSanalyzer
STOP:GPRF:MEAS<i>:FFTSanalyzer
ABORt:GPRF:MEAS<i>:FFTSanalyzer
Starts, stops, or aborts the measurement:
INITiate...
 starts or restarts the measurement. The measurement enters the "RUN" state.
STOP...
 halts the measurement immediately. The measurement enters the "RDY" state. Measurement results are kept. The resources remain allocated to the measurement.
ABORt...
 halts the measurement immediately. The measurement enters the "OFF" state. All measurement values are set to NAV. Allocated resources are released.
Use 
FETCh...STATe?
 to query the current measurement state.
See also: 
"Measurement Control"
Example: 
See 
"Single-Shot and Continuous Measurements"
Usage: 
Event
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"FFT (Softkey)"
Top