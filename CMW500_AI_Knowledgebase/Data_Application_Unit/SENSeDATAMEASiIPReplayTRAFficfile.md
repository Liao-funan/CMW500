# SENSeDATAMEASiIPReplayTRAFficfile

Module: Data Application Unit
Source: 7caf12ac58cb41fb.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Replay
 > 
File Information
 > 
SENSe:DATA:MEAS<i>:IPReplay:TRAFficfile?
SENSe:DATA:MEAS<i>:IPReplay:TRAFficfile? 
<FileName>
Queries information about all IP connections contained in a selected file of the playlist.
If the file has not yet been analyzed and the measurement state is RUN, the command triggers file analysis. The analysis takes some time. Repeat the command until the analysis results are available.
The results are returned as follows:
{<L4Protocol>, <NoOfPackets>, ..., <IPDstPort>}
conn 1
, {...}
conn 2
, ...
Query parameters: 
<FileName>
File name as a string. Specify the file name with extension but without path, for example "myfile.pcap".
Return values: 
<L4Protocol>
Layer 4 protocol as string ("TCP", "UDP", ...)
<NoOfPackets>
Number of IP packets for the connection
<IPSrcAddress>
IP address of the connection source as string
<IPSrcPort>
Port number of the connection source
<IPDstAddress>
IP address of the connection destination as string
<IPDstPort>
Port number of the connection destination
Example: 
See 
"Performing IP Replay"
Usage: 
Query only
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"Connection information (lower part of tab)"
Top