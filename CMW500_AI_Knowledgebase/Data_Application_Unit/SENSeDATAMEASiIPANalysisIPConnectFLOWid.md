# SENSeDATAMEASiIPANalysisIPConnectFLOWid

Module: Data Application Unit
Source: 342193790da64505.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
IP Connectivity Settings and Results
 > 
SENSe:DATA:MEAS<i>:IPANalysis:IPConnect:FLOWid?
SENSe:DATA:MEAS<i>:IPANalysis:IPConnect:FLOWid? 
<FlowID>
Queries the "IP Connectivity" results for a specific connection, selected via its flow ID.
Query parameters: 
<FlowID>
Selects the connection for which information is queried
Return values: 
<ConnStatus>
OPEN |
 
 CLOSed
Connection status
<Protocol>
Layer 4 protocol as string ("TCP", "UDP", ...)
<DPIProtocol>
Layer 7 protocol as string ("HTTP", "FTP", ...)
<IPAddrSource>
IP address of the connection source as string
<IPPortSource>
Port number of the connection source
Range: 
0  to  65654
<IPAddrDest>
IP address of the connection destination as string
<IPPortDest>
Port number of the connection destination
Range: 
0  to  65654
<OverhDown>
Downlink overhead as percentage of the packet
Range: 
0 %  to  100 %
Default unit: 
%
<OverhUp>
Uplink overhead as percentage of the packet
Range: 
0 %  to  100 %
Default unit: 
%
<AvgPSDown>
Average downlink packet size
Range: 
0 bytes  to  65535 bytes
Default unit: 
bytes
<AvgPSUp>
Average uplink packet size
Range: 
0 bytes  to  65535 bytes
Default unit: 
bytes
<App>
Application name as string
<Country>
Country of the destination as string (two-letter country code)
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.2.11, V3.7.20 added <App> and <Country>
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Results"
Top