# CONFigureAUDioWAViRECordSOURce

Module: Audio Measurements
Source: f03fb986ab504c9f.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Waveform Recording
 > 
Recording Settings
 > 
CONFigure:AUDio:WAV<i>:RECord:SOURce
CONFigure:AUDio:WAV<i>:RECord:SOURce 
<RecSource>[, <Master>]
Selects a source for the audio signal to be recorded.
Parameters:
<RecSource>
ANALog |
 
 DIGital |
 
 SPEech
ANALog
The signal from the two AF IN connectors is recorded.
DIGital
The signal from the SPDIF IN connector is recorded.
SPEech
The signal from the internal speech decoder is recorded.
<Master>
String parameter selecting the master application for the source SPEech
To query a list of possible values, use 
ROUTe:
​
AUDio<i>:
​
SCENario:
​
CATalog:
​
MASTer?
.
Example: 
See 
"Recording a Waveform File"
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Source"
Top