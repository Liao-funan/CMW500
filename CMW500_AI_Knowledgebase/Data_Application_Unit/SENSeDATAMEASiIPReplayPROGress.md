# SENSeDATAMEASiIPReplayPROGress

Module: Data Application Unit
Source: a678735a901f46ea.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Replay
 > 
Playlist Configuration and Control
 > 
SENSe:DATA:MEAS<i>:IPReplay:PROGress?
SENSe:DATA:MEAS<i>:IPReplay:PROGress? 
Queries the replay progress for all files in the playlist.
The results are returned as follows:
{<FileName>, <Progress>}
file 1
, {...}
file 2
, ..., {...}
file n
Return values: 
<FileName>
File name as a string
<Progress>
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing IP Replay"
Usage: 
Query only
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"Playlist (upper part of tab)"
Top