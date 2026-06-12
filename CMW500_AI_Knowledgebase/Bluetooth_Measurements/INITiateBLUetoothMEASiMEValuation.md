# INITiateBLUetoothMEASiMEValuation

Module: Bluetooth Measurements
Source: 9c83a847a41e46c1.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:BLUetooth:MEAS<i>:MEValuation
INITiate:BLUetooth:MEAS<i>:MEValuation
STOP:BLUetooth:MEAS<i>:MEValuation
ABORt:BLUetooth:MEAS<i>:MEValuation
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
"Performing Single Shot Measurements"
Usage: 
Event
Firmware/Software: 
V1.0.10.1
Top