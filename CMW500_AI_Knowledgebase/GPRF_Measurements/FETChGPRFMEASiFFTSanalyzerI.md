# FETChGPRFMEASiFFTSanalyzerI

Module: GPRF Measurements
Source: 0cc13e096cca405c.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
FFT Spectrum Analyzer Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:FFTSanalyzer:I?
FETCh:GPRF:MEAS<i>:FFTSanalyzer:I? 
FETCh:GPRF:MEAS<i>:FFTSanalyzer:Q? 
READ:GPRF:MEAS<i>:FFTSanalyzer:I? 
READ:GPRF:MEAS<i>:FFTSanalyzer:Q? 
Returns the measured normalized I and Q amplitudes in the time domain.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Amplitude_1> ... <Amplitude_n>
Comma-separated list of n normalized I or Q amplitudes, where n is given by the FFT length, see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
FFTSanalyzer:
​
FFTLength
.
Range: 
-2 to 2
Example: 
See 
"Single-Shot and Continuous Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Top