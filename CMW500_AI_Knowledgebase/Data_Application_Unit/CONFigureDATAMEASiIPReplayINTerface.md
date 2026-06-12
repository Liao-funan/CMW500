# CONFigureDATAMEASiIPReplayINTerface

Module: Data Application Unit
Source: 88a04841b26143b1.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Replay
 > 
Playlist Configuration and Control
 > 
CONFigure:DATA:MEAS<i>:IPReplay:INTerface
CONFigure:DATA:MEAS<i>:IPReplay:INTerface 
<FileName>, <NetworkInterface>
Specifies the network interface for a selected file in the playlist.
A query returns all files in the playlist as follows:
{<FileName>, <NetworkInterface>}
file 1
, {...}
file 2
, ..., {...}
file n
Setting parameters: 
<FileName>
File name as a string. Specify the file name with extension but without path, for example "myfile.pcap".
<NetworkInterface>
LANDau |
 
 IP |
 
 MULTicast
LANDau
: IP traffic to the LAN DAU connector
IP
: IP unicast traffic to the DUT
MULTicast
: IP multicast traffic to the DUT
*RST:
MULT
Example: 
See 
"Performing IP Replay"
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"Edit Playlist (hotkey)"
Top