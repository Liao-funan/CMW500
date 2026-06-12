# FETChBLUetoothSIGNiRXQualityPERSTATe

Module: Bluetooth Signaling
Source: 9ac2fc6017ce4b01.htm

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
FETCh:BLUetooth:SIGN<i>:RXQuality:PER:STATe?
FETCh:BLUetooth:SIGN<i>:RXQuality:PER:STATe? 
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
V3.2.70
Options: 
R&S CMW-KS611
Manual operation: 
See 
"RX Quality / BER Search / PER Search (Softkey)"
Top