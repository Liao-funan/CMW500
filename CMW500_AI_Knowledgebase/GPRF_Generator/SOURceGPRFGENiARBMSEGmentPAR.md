# SOURceGPRFGENiARBMSEGmentPAR

Module: GPRF Generator
Source: a253517ebccc429e.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Settings
 > 
SOURce:GPRF:GEN<i>:ARB:MSEGment:PAR?
SOURce:GPRF:GEN<i>:ARB:MSEGment:PAR? 
Queries the level offset (peak to average ratio, PAR) of all segments in the loaded multisegment waveform file. The PAR is equal to the absolute value of the difference between the "RMS Offset" and the "Peak Offset" defined in WinIQSIM2 (crest factor).
Return values: 
<PAR>
Comma-separated list of all PAR values, one value for each segment
Default unit: 
dB
Example: 
See 
"Using the Arbitrary Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
Manual operation: 
See 
"Baseband Configuration > ARB > ARB File"
Top