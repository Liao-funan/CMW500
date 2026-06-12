# INITiateWCDMaMEASiOLPControl

Module: WCDMA Measurements
Source: 3e9d39eb2b2e460d.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA DPCCH Open Loop Power Measurement
 > 
Command Reference
 > 
DPCCH Open Loop Power Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:WCDMa:MEAS<i>:OLPControl
INITiate:WCDMa:MEAS<i>:OLPControl
STOP:WCDMa:MEAS<i>:OLPControl
ABORt:WCDMa:MEAS<i>:OLPControl
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
"Performing Measurements"
Usage: 
Event
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"DPCCH OLP (Softkey)"
Top