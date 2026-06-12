# TRIGgerGPRFMEASiFFTSanalyzerOSSTop

Module: GPRF Measurements
Source: 0469b9acd3ca47ee.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
FFT Spectrum Analyzer Commands
 > 
Trigger Settings
 > 
TRIGger:GPRF:MEAS<i>:FFTSanalyzer:OSSTop
TRIGger:GPRF:MEAS<i>:FFTSanalyzer:OSSTop 
<OffsetStart>, <OffsetStop>
Defines the start and stop time for the variable trigger offset, see 
TRIGger:
​
GPRF:
​
MEAS<i>:
​
FFTSanalyzer:
​
OMODe
.
Parameters:
<OffsetStart>
Must be smaller than the stop value.
Range: 
-0.15 s  to  0.15 s
*RST:
0 s
Default unit: 
s
<OffsetStop>
Must be larger than the start value.
Range: 
-0.15 s  to  0.15 s
*RST:
1E-3 s
Default unit: 
s
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Trigger Offset"
Top