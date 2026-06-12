# TRIGgerWLANSIGNiRXMACFrameMLENgth

Module: WLAN Signaling
Source: 3d3df95ec0b94858.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Trigger Settings
 > 
TRIGger:WLAN:SIGN<i>:RX:MACFrame:MLENgth
TRIGger:WLAN:SIGN<i>:RX:MACFrame:MLENgth 
<Mode>[, <Length>]
Defines the minimum length for the RX frame trigger modes 
OBURsts
 and 
DCBursts
, see 
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
BTYPe
.
Parameters:
<Mode>
DEFault |
 
 UDEFined
DEFault
: automatically calculated value
UDEFined
: configured <Length>
*RST:
DEF
<Length>
Minimum number of symbols or bytes for UDEFined mode
Range: 
16 to 1500, for R&S
 
CMW with TRX160: 1 to 1500
*RST:
299
Example: 
See 
"Configuring Trigger Signals"
Firmware/Software: 
V3.2.70
V3.7.20 and V3.7.30: length range extended for R&S
 
CMW with TRX160
Manual operation: 
See 
"Min Length: Bytes or Symbols"
Top