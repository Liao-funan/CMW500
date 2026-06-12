# FETChGPRFMEASiFFTSanalyzerPOWerCURRent

Module: GPRF Measurements
Source: 8f33c176b6334e87.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
FFT Spectrum Analyzer Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:FFTSanalyzer:POWer:CURRent?
FETCh:GPRF:MEAS<i>:FFTSanalyzer:POWer:CURRent? 
FETCh:GPRF:MEAS<i>:FFTSanalyzer:POWer:MINimum? 
FETCh:GPRF:MEAS<i>:FFTSanalyzer:POWer:MAXimum? 
FETCh:GPRF:MEAS<i>:FFTSanalyzer:POWer:AVERage? 
READ:GPRF:MEAS<i>:FFTSanalyzer:POWer:CURRent? 
READ:GPRF:MEAS<i>:FFTSanalyzer:POWer:MINimum? 
READ:GPRF:MEAS<i>:FFTSanalyzer:POWer:MAXimum? 
READ:GPRF:MEAS<i>:FFTSanalyzer:POWer:AVERage? 
Returns the FFT spectrum analyzer traces across the selected frequency span (see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
FFTSanalyzer:
​
FSPan
). The results of the current, average, minimum and maximum traces can be retrieved.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Power1> ... <Power801>
Frequency-dependent power values. Each of the traces contains 801 values, irrespective of the frequency span.
Range: 
-100.0 dBm  to  57.0 dBm
Default unit: 
dBm
Example: 
See 
"Single-Shot and Continuous Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Top