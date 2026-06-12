# SENSeGSMSIGNiIQOutPATHn

Module: GSM Signaling
Source: 73c9605434b94db8.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
SENSe:GSM:SIGN<i>:IQOut:PATH<n>?
SENSe:GSM:SIGN<i>:IQOut:PATH<n>? 
Queries properties of the baseband signal at the I/Q output.
Suffix: 
<n>
1..2
Selects the path to be queried
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
15 dB
Default unit: 
dB
Example: 
See 
"Configuring the I/Q Settings"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Manual operation: 
See 
"Sample Rate (Out / In)"
Top