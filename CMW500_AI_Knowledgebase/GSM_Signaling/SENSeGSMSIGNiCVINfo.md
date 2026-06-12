# SENSeGSMSIGNiCVINfo

Module: GSM Signaling
Source: 6754c787a10640cf.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
CMW Voice Info
 > 
SENSe:GSM:SIGN<i>:CVINfo?
SENSe:GSM:SIGN<i>:CVINfo? 
Displays the time delay of the voice connection.
Return values: 
<LoopbackDelay>
Time delay measured during the loopback connection
Range: 
0 s to 10 s
Increment: 
10E-3 s
Default unit: 
s
<DLEncoderDelay>
Encoder time delay in downlink measured during the connection to the speech codec board
Range: 
0 s to 10 s
Increment: 
10E-3 s
Default unit: 
s
<ULDecoderDelay>
Decoder time delay in uplink measured during the connection to the speech codec board
Range: 
0 s to 10 s
Increment: 
10E-3 s
Default unit: 
s
Example: 
See 
"Setting Up a CS Connection"
Usage: 
Query only
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Loopback Delay"
Top