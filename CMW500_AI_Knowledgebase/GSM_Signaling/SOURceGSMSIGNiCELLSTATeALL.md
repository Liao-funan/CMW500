# SOURceGSMSIGNiCELLSTATeALL

Module: GSM Signaling
Source: d35e19624.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SOURce:GSM:SIGN<i>:CELL:STATe:ALL?
SOURce:GSM:SIGN<i>:CELL:STATe:ALL? 
Returns detailed information about the "GSM Signaling" generator state.
Return values: 
<MainState>
OFF |
 
 ON |
 
 RFHandover
OFF:
 generator switched off
ON:
 generator has been turned on
RFHandover:
 ready to receive a handover from another signaling application
<SyncState>
PENDing |
 
 ADJusted
PENDing:
 the generator has been turned on (off) but the signal is not yet (still) available
ADJusted:
 the physical output signal corresponds to the main generator state
Example: 
See 
"Switching On the Cell Signal and the MS"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V3.0.10: RFHandover added
Manual operation: 
See 
"ON | OFF (key) / GSM Signaling (softkey)"
Top