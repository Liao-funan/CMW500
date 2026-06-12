# FETChBLUetoothSIGNiRXQualitySEARchPERSTATe

Module: Bluetooth Signaling
Source: e0edfa95da624f0a.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
BER Search / PER   Search Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:STATe?
FETCh:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
See also: 
"Measurement Control"
Return values: 
<MeasStatus>
OFF |
 
 RDY |
 
 RUN
OFF:
 measurement switched off, no resources allocated, no results available (when entered after 
ABORt...
)
RDY:
 measurement has been terminated, valid results can be available
RUN:
 measurement running (after 
INITiate..., READ...
), synchronization pending or adjusted, resources active or queued
Example: 
See 
"Performing a BER/PER Search Measurement"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS611
Manual operation: 
See 
"RX Quality / BER Search / PER Search (Softkey)"
Top