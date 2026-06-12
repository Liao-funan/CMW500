# SOURceWLANSIGNiSTATeALL

Module: WLAN Signaling
Source: 949d0dd9decb4e17.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Signaling Control and States
 > 
SOURce:WLAN:SIGN<i>:STATe:ALL?
SOURce:WLAN:SIGN<i>:STATe:ALL? 
Returns detailed information about the WLAN signaling generator state.
Return values: 
<MainState>
OFF |
 
 ON
<SyncState>
PENDing |
 
 ADJusted
PENDing:
 The generator has been turned on (off) but the signal is not yet (still) available.
ADJusted:
 The physical output signal corresponds to the main generator state.
Example: 
See 
"Associating the DUT"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"ON | OFF (key) / WLAN Signaling (softkey)"
Top