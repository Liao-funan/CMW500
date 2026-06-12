# INITiateBLUetoothMEASiRXQuality

Module: Bluetooth Measurements
Source: cd8838c3c68d461c.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Rx Measurement
 > 
Measurement Control and States
 > 
INITiate:BLUetooth:MEAS<i>:RXQuality
INITiate:BLUetooth:MEAS<i>:RXQuality
STOP:BLUetooth:MEAS<i>:RXQuality
ABORt:BLUetooth:MEAS<i>:RXQuality
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
"Performing an Rx Measurement"
Usage: 
Event
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KD611
Top