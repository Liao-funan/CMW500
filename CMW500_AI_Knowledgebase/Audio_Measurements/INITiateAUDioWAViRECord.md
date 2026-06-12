# INITiateAUDioWAViRECord

Module: Audio Measurements
Source: e979b60abc204adb.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Waveform Recording
 > 
Recording Control and States
 > 
INITiate:AUDio:WAV<i>:RECord
INITiate:AUDio:WAV<i>:RECord
STOP:AUDio:WAV<i>:RECord
ABORt:AUDio:WAV<i>:RECord
Starts, stops, or aborts the recording:
INITiate...
 starts or continues the recording. The state switches to "RUN".
STOP...
 pauses the recording. The state switches to "RDY". The resources remain allocated.
ABORt...
 stops the recording and writes the waveform file. The state switches to "OFF". Allocated resources are released.
See also: 
"Measurement Control"
Example: 
See 
"Recording a Waveform File"
Usage: 
Event
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Record softkey"
Top