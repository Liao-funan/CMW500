# CONFigureAUDioWAViPLAYbackDESTination

Module: Audio Measurements
Source: 1810e03de97e4968.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Waveform Playback
 > 
Playback Settings
 > 
CONFigure:AUDio:WAV<i>:PLAYback:DESTination
CONFigure:AUDio:WAV<i>:PLAYback:DESTination 
<PlayDestination>[, <Master>]
Selects a destination for the generated audio signal.
Parameters:
<PlayDestination>
ANALog |
 
 DIGital |
 
 SPEech
ANALog
The signal is routed to the AF OUT connectors.
DIGital
The signal is routed to the SPDIF OUT connector.
SPEech
The signal is routed to an internal speech encoder.
<Master>
String parameter selecting the master application for the destination SPEech
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
"Playing a Waveform File"
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Destination"
Top