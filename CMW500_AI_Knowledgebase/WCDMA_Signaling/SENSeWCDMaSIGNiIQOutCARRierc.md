# SENSeWCDMaSIGNiIQOutCARRierc

Module: WCDMA Signaling
Source: 90ba9c8e7c2d4496.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
SENSe:WCDMa:SIGN<i>:IQOut:CARRier<c>?
SENSe:WCDMa:SIGN<i>:IQOut:CARRier<c>? 
Queries properties of the baseband signal at the I/Q output.
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<SampleRate>
M100
Fixed value, indicating a sample rate of 100 Msps (100 MHz)
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
V3.0.10
Manual operation: 
See 
"Sample Rate (Out / In)"
Top