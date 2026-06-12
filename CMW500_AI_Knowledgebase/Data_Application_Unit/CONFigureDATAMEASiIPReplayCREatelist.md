# CONFigureDATAMEASiIPReplayCREatelist

Module: Data Application Unit
Source: 19179640f9154825.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Replay
 > 
Playlist Configuration and Control
 > 
CONFigure:DATA:MEAS<i>:IPReplay:CREatelist
CONFigure:DATA:MEAS<i>:IPReplay:CREatelist 
<FileName>[, <Iteration>, <NetworkInterface>]
Adds a single file to the playlist (measurement must be OFF).
A query returns all files in the playlist as follows:
{<FileName>, <Iteration>, <NetworkInterface>}
file 1
, {...}
file 2
, ..., {...}
file n
To query a list of all files in the 
ip_replay
 directory, see 
FETCh:
​
DATA:
​
MEAS<i>:
​
IPReplay:
​
FILelist?
.
Parameters:
<FileName>
File name as a string. Specify the file name with extension but without path, for example "myfile.pcap".
<Iteration>
Specifies how often the file is replayed
Range: 
0  to  10E+3
*RST:
1
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