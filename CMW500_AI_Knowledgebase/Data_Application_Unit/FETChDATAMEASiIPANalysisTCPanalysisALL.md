# FETChDATAMEASiIPANalysisTCPanalysisALL

Module: Data Application Unit
Source: 65f07fb43b824546.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
TCP Analysis Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:TCPanalysis:ALL?
FETCh:DATA:MEAS<i>:IPANalysis:TCPanalysis:ALL? 
Queries the threshold check and throughput results for all connections.
After the reliability indicator, 13 results are returned for each connection (flow):
<Reliability>, {<FlowID>, <ThDown>, <TCPWSDown>, <RetrDown>, <OverhDown>, <ThUp>, <TCPWSUp>, <RetrUp>, <OverhUp>, <Destination>, <RTTStatus>, <PKTSizeUL>, <PKTSizeDL>}
connection 1
, {...}
connection 2
, ...
Return values: 
<Reliability>
See 
"Reliability Indicator"
<FlowID>
Flow ID of the connection
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
<RTTStatus>
OK |
 
 NOK
Threshold check result for round-trip time
<PKTSizeUL>
Layer 3 uplink packet size
Default unit: 
byte
<PKTSizeDL>
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