# SENSeWCDMaSIGNiUESinfoDINFo

Module: WCDMA Signaling
Source: 5e36dab671b34342.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Info
 > 
SENSe:WCDMa:SIGN<i>:UESinfo:DINFo?
SENSe:WCDMa:SIGN<i>:UESinfo:DINFo? 
Queries the demodulation info provided by the demodulator stage of the instrument while it perceives an uplink signal.
Information about cell two are relevant only if the dual carrier HSPA scenario is active.
Return values: 
<CMWDemodInfo>
"Uplink Power Underflow"
: the UL signal power is too low
"Uplink Power in Range"
: the UL signal power is in range
"Uplink Power Overflow"
: the UL signal power is too high
<PowerC1>
UFL |
 
 OK |
 
 OFL
Cell 1 information:
UFL
: the UL signal power is too low
OK
: the UL signal power is in range
OFL
: the UL signal power is too high
<SyncC1>
NOSYnc |
 
 OK
Cell 1 information:
NOSYnc
: synchronization to the uplink signal failed
OK
: successful synchronization to the uplink signal
<PowerC2>
UFL |
 
 OK |
 
 OFL
Cell 2 information:
UFL
: the UL signal power is too low
OK
: the UL signal power is in range
OFL
: the UL signal power is too high
<SyncC2>
NOSYnc |
 
 OK
Cell 2 information:
NOSYnc
: synchronization to the uplink signal failed
OK
: successful synchronization to the uplink signal
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V2.1.20: added <Power> and <Sync>
V3.2.60: added <PowerC2> and <SyncC2>
Manual operation: 
See 
"CMW Demod. Info"
Top