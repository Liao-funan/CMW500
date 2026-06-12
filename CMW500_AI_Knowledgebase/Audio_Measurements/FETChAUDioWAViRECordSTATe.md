# FETChAUDioWAViRECordSTATe

Module: Audio Measurements
Source: 10ee284b5f8b4521.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Waveform Recording
 > 
Recording Control and States
 > 
FETCh:AUDio:WAV<i>:RECord:STATe?
FETCh:AUDio:WAV<i>:RECord:STATe? 
Queries the main recording state. Use 
FETCh:...:STATe:ALL?
 to query the main state plus substates. Use 
INITiate..., STOP..., ABORt...
 to change the state.
Return values: 
<MeasState>
OFF |
 
 RUN |
 
 RDY
OFF:
 recording off
RUN:
 recording running
RDY:
 recording paused
*RST:
OFF
Example: 
See 
"Recording a Waveform File"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Record softkey"
Top