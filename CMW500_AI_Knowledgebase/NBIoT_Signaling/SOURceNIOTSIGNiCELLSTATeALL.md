# SOURceNIOTSIGNiCELLSTATeALL

Module: NBIoT Signaling
Source: 04493e4187bc45ed.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SOURce:NIOT:SIGN<i>:CELL:STATe:ALL?
SOURce:NIOT:SIGN<i>:CELL:STATe:ALL? 
Returns detailed information about the "NB-IoT Signaling" generator state.
Return values: 
<MainState>
OFF |
 
 ON
OFF:
 generator switched off
ON:
 generator switched on
<SyncState>
PENDing |
 
 ADJusted
PENDing:
 generator turned on (off) but signal not yet (still) available
ADJusted:
 physical output signal corresponds to main generator state
Example: 
See 
"Setting Up  a Connection"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"ON | OFF (key) / NB-IoT Signaling (softkey)"
Top