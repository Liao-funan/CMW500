# TRIGgerWLANSIGNiRXMACFrameBW

Module: WLAN Signaling
Source: e213ada31dce419b.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Trigger Settings
 > 
TRIGger:WLAN:SIGN<i>:RX:MACFrame:BW
TRIGger:WLAN:SIGN<i>:RX:MACFrame:BW 
<TriggerBandwidth>
Defines for which bandwidth of received bursts a trigger pulse is generated for the RX frame trigger signal.
Parameters:
<TriggerBandwidth>
BW20 |
 
 BW40 |
 
 BW80 |
 
 BW160 |
 
 ALL |
 
 ON |
 
 OFF
BWx
: RX frame trigger signal generated for the received bursts with the bandwidth of x MHz
ALL
: RX frame trigger signal generated for all bandwidths
ON
: RX frame trigger signal switched on
OFF
: RX frame trigger signal switched off
*RST:
ALL
Default unit: 
s
Example: 
See 
"Configuring Trigger Signals"
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Trigger Bandwidth"
Top