# FETChGPRFMEASiFFTSanalyzerPEAKsCURRent

Module: GPRF Measurements
Source: 6cdac2d1026f49b9.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
FFT Spectrum Analyzer Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:FFTSanalyzer:PEAKs:CURRent?
FETCh:GPRF:MEAS<i>:FFTSanalyzer:PEAKs:CURRent? 
FETCh:GPRF:MEAS<i>:FFTSanalyzer:PEAKs:AVERage? 
READ:GPRF:MEAS<i>:FFTSanalyzer:PEAKs:CURRent? 
READ:GPRF:MEAS<i>:FFTSanalyzer:PEAKs:AVERage? 
Returns the results of the peak search. Separate commands retrieve current and average values.
There are results for search range no. 0 to 4:
<Reliability>, <Frequency0>, <Power0>, ..., <Frequency4>, <Power4>
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Frequency>
The range depends on the search range settings, see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
FFTSanalyzer:
​
PSEarch
.
Default unit: 
Hz
<Power>
Range: 
-100 dBm  to  57 dBm
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