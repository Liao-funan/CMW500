# SOURceGPRFGENiARBPOFFset

Module: GPRF Generator
Source: d35e6098.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Settings
 > 
SOURce:GPRF:GEN<i>:ARB:POFFset?
SOURce:GPRF:GEN<i>:ARB:POFFset? 
Queries the peak offset of the loaded waveform file.
Note:
 If a multi-segment waveform file is loaded, this command returns the peak offset in the last segment. Use 
SOURce:
​
GPRF:
​
GEN<i>:
​
ARB:
​
MSEGment:
​
POFFset?
 to query the peak offset values of the individual segments.
Return values: 
<PeakOffset>
Offset value as specified in WinIQSIM2
Default unit: 
dB
Example: 
See 
"Using the Arbitrary Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Baseband Configuration > ARB > ARB File"
Top