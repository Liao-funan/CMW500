# SOURceGPRFGENiARBLOFFset

Module: GPRF Generator
Source: 93a945e8b9a24ff9.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Settings
 > 
SOURce:GPRF:GEN<i>:ARB:LOFFset?
SOURce:GPRF:GEN<i>:ARB:LOFFset? 
Queries the level offset (peak to average ratio, PAR) of the loaded waveform file. The PAR is equal to the absolute value of the difference between the "RMS Offset" and the "Peak Offset" defined in WinIQSIM2 (crest factor).
Note:
 If a multi-segment waveform file is loaded, this command returns the PAR in the last segment. Use 
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
PAR?
 to query the PAR values of the individual segments.
Return values: 
<LevelOffset>
PAR value; see above
Default unit: 
dB
Example: 
See 
"Using the Arbitrary Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Baseband Configuration > ARB > ARB File"
Top