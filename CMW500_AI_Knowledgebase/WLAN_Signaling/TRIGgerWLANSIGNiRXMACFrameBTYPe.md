# TRIGgerWLANSIGNiRXMACFrameBTYPe

Module: WLAN Signaling
Source: e1840d1df2744cae.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Trigger Settings
 > 
TRIGger:WLAN:SIGN<i>:RX:MACFrame:BTYPe
TRIGger:WLAN:SIGN<i>:RX:MACFrame:BTYPe 
<Type>
Defines for which bursts a trigger pulse is generated for the RX frame trigger signal.
Note that the trigger pulse is generated only for bursts matching the specified trigger bandwidth and trigger rate, see:
TRIGger:
​
WLAN:
​
SIGN<i>:
​
RX:
​
MACFrame:
​
BW
TRIGger:
​
WLAN:
​
SIGN<i>:
​
RX:
​
MACFrame:
​
RATE
Parameters:
<Type>
ABURsts |
 
 OBURsts |
 
 DCBursts |
 
 NHTBursts |
 
 HTBursts |
 
 VHTBursts |
 
 HESBursts
ABURsts
All received bursts result in an RX frame trigger pulse.
OBURsts
Only OFDM bursts with the configured minimum length result in an RX frame trigger pulse.
DCBursts
Only DSSS/CCK bursts with the configured minimum length result in an RX frame trigger pulse.
NHTBursts
Only non-HT bursts with the configured minimum length result in an RX frame trigger pulse.
HTBursts
Only HT bursts with the configured minimum length result in an RX frame trigger pulse.
VHTBursts
Only VHT bursts with the configured minimum length result in an RX frame trigger pulse.
HESBursts
Only HE SU bursts with the configured minimum length result in an RX frame trigger pulse.
*RST:
ABUR
Example: 
See 
"Configuring Trigger Signals"
Firmware/Software: 
V3.2.11, V3.7.30: added NHTBursts, HTBursts, VHTBursts, HESBursts
Options: 
An SUA required for NHTBursts, HTBursts, VHTBursts, HESBursts
Manual operation: 
See 
"Trigger Mode"
Top