# SOURceLTESIGNiCELLSTATeALL

Module: LTE Signaling
Source: 83979aa6cc814974.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
General Commands
 > 
SOURce:LTE:SIGN<i>:CELL:STATe:ALL?
SOURce:LTE:SIGN<i>:CELL:STATe:ALL? 
Returns detailed information about the "LTE Signaling" generator state.
Return values: 
<MainState>
OFF |
 
 ON |
 
 RFHandover
OFF:
 generator switched off
ON:
 generator switched on
RFHandover:
 ready to receive a handover from another signaling application
<SyncState>
PENDing |
 
 ADJusted
PENDing:
 generator turned on (off) but signal not yet (still) available
ADJusted:
 physical output signal corresponds to main generator state
Example: 
See 
"Attaching the UE and Activating SCCs"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V3.0.10: RFHandover added
Manual operation: 
See 
"ON | OFF (key) / LTE Signaling (softkey)"
Top