# SENSeDATAMEASiIPANalysisTCPanalysisFLOWid

Module: Data Application Unit
Source: e0faed7ca3084d3c.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
TCP Analysis Settings and Results
 > 
SENSe:DATA:MEAS<i>:IPANalysis:TCPanalysis:FLOWid?
SENSe:DATA:MEAS<i>:IPANalysis:TCPanalysis:FLOWid? 
<FlowID>
Queries the threshold check and throughput results for a specific connection, selected via its flow ID.
Query parameters: 
<FlowID>
Selects the connection for which information is queried
Return values: 
<ThDown>
Throughput in downlink direction
Default unit: 
bit/s
<TCPWSDown>
OK |
 
 FULL
Threshold check result for downlink TCP window size
<RetrDown>
OK |
 
 NOK
Threshold check result for downlink retransmissions
<OverhDown>
OK |
 
 NOK
Only for backward compatibility - no longer used
<ThUp>
Throughput in uplink direction
Default unit: 
bit/s
<TCPWSUp>
OK |
 
 FULL
Threshold check result for uplink TCP window size
<RetrUp>
OK |
 
 NOK
Threshold check result for uplink retransmissions
<OverhUp>
OK |
 
 NOK
Only for backward compatibility - no longer used
<Destination>
Destination address as string
<RTT>
OK |
 
 NOK
Threshold check result for round-trip time
<PKTsizeUP>
Layer 3 uplink packet size
Default unit: 
byte
<PktSizeDL>
Layer 3 downlink packet size
Default unit: 
byte
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.2.11, V3.5.50 appended <Destination> ...
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Result overview (upper part)"
Top