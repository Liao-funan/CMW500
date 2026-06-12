# SENSeDATAMEASiIPReplayINFofile

Module: Data Application Unit
Source: db38b2995b0f48ca.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Replay
 > 
File Information
 > 
SENSe:DATA:MEAS<i>:IPReplay:INFofile?
SENSe:DATA:MEAS<i>:IPReplay:INFofile? 
<FileName>
Queries information about a selected file in the playlist.
If the file has not yet been analyzed and the measurement state is RUN, the command triggers file analysis. The analysis takes some time. Repeat the command until the analysis results are available.
Query parameters: 
<FileName>
File name as a string. Specify the file name with extension but without path, for example "myfile.pcap".
Return values: 
<NumberOfPackets>
Number of IP packets in the file
<FileSize>
Default unit: 
byte
<Bitrate>
Default unit: 
bit/s
<Duration>
Default unit: 
s
<Type>
String indicating the file type and information about the capturing application
<Encapsulation>
"Raw IP"
: file contains raw IP traffic
"Ethernet"
: file contains IP traffic plus Ethernet headers
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