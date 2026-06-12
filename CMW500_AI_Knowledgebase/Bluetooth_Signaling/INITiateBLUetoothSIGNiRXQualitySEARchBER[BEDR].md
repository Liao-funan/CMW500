# INITiateBLUetoothSIGNiRXQualitySEARchBER[BEDR]

Module: Bluetooth Signaling
Source: cebe493f733b4297.htm

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
INITiate:BLUetooth:SIGN<i>:RXQuality:SEARch:BER[:BEDR]
INITiate:BLUetooth:SIGN<i>:RXQuality:SEARch:BER[:BEDR]
STOP:BLUetooth:SIGN<i>:RXQuality:SEARch:BER[:BEDR]
ABORt:BLUetooth:SIGN<i>:RXQuality:SEARch:BER[:BEDR]
Starts, stops, or aborts the measurement:
INITiate...
 starts or restarts the measurement. The measurement enters the "RUN" state.
STOP...
 halts the measurement immediately. The measurement enters the "RDY" state. Measurement results are kept. The resources remain allocated to the measurement.
ABORt...
 halts the measurement immediately. The measurement enters the "OFF" state. All measurement values are set to NAV. Allocated resources are released.
Use 
FETCh...STATe?
 to query the current measurement state.
See also: 
"Measurement Control"
Example: 
See 
"Performing a BER/PER Search Measurement"
Usage: 
Event
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS610
Manual operation: 
See 
"RX Quality / BER Search / PER Search (Softkey)"
Top