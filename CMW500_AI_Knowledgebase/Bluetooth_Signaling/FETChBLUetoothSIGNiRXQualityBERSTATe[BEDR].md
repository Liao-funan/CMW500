# FETChBLUetoothSIGNiRXQualityBERSTATe[BEDR]

Module: Bluetooth Signaling
Source: 0c3180ee01ea4b35.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
BER / PER   Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:BLUetooth:SIGN<i>:RXQuality:BER:STATe[:BEDR]?
FETCh:BLUetooth:SIGN<i>:RXQuality:BER:STATe[:BEDR]? 
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
"Performing a BER/PER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.30
Options: 
R&S CMW-KS610
Manual operation: 
See 
"RX Quality / BER Search / PER Search (Softkey)"
Top