# CONFigureDATAMEASiIPReplayITERation

Module: Data Application Unit
Source: 1ab8cce7d14d40cf.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Replay
 > 
Playlist Configuration and Control
 > 
CONFigure:DATA:MEAS<i>:IPReplay:ITERation
CONFigure:DATA:MEAS<i>:IPReplay:ITERation 
<FileName>, <Iteration>
Specifies how often a selected file in the playlist is replayed.
A query returns all files in the playlist as follows:
{<FileName>, <Iteration>}
file 1
, {...}
file 2
, ..., {...}
file n
Parameters:
<FileName>
File name as a string. Specify the file name with extension but without path, for example "myfile.pcap".
<Iteration>
Specifies how often the file is replayed
Range: 
0  to  10E+3
*RST:
1
Example: 
See 
"Performing IP Replay"
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"Edit Playlist (hotkey)"
Top