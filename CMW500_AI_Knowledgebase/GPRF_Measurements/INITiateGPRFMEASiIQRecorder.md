# INITiateGPRFMEASiIQRecorder

Module: GPRF Measurements
Source: c64acbcd23a641e1.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q Recorder Commands
 > 
Measurement Control and States
 > 
INITiate:GPRF:MEAS<i>:IQRecorder
INITiate:GPRF:MEAS<i>:IQRecorder 
[<SaveToIQFile>]
STOP:GPRF:MEAS<i>:IQRecorder
ABORt:GPRF:MEAS<i>:IQRecorder
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
Parameters:
<SaveToIQFile>
OFF |
 
 ON |
 
 ONLY
Optional parameter, selecting whether the results are written to an I/Q file, to the memory or both.
For file selection, see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
IQRecorder:
​
IQFile
.
OFF
The results are only stored in the memory.
ON
The results are stored in the memory and in the file.
ONLY
The results are only stored in the file.
*RST:
OFF
Example: 
See 
"Performing a Single-Shot Measurement"
Usage: 
Event
Firmware/Software: 
V1.0.4.11
V3.5.90: added ONLY
Manual operation: 
See 
"IQ Recorder (Softkey)"
Top