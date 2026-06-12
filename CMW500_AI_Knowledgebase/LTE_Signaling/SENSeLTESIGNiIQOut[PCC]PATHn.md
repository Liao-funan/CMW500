# SENSeLTESIGNiIQOut[PCC]PATHn

Module: LTE Signaling
Source: 0997ef5ba7eb42b0.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
SENSe:LTE:SIGN<i>:IQOut[:PCC]:PATH<n>?
SENSe:LTE:SIGN<i>:IQOut[:PCC]:PATH<n>? 
SENSe:LTE:SIGN<i>:IQOut:SCC<c>:PATH<n>? 
Queries properties of the baseband signal at the I/Q output for DL path number <n>.
Suffix: 
<n>
1..2
<c>
1..4
Return values: 
<SampleRate>
M100
Fixed value, indicating a sample rate of 100 Msamples/s (100 MHz)
<PEP>
Peak envelope power of the baseband signal
Range: 
-60 dBFS  to  0 dBFS
Default unit: 
dBFS
<CrestFactor>
Crest factor of the baseband signal
Range: 
0 dB  to  60 dB
Default unit: 
dB
Example: 
See 
"Configuring the I/Q Settings"
Usage: 
Query only
Firmware/Software: 
V3.0.10, SCC command V3.2.70
Manual operation: 
See 
"Sample Rate (Out / In)"
Top