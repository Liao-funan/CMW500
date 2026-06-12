# SENSeDATAMEASiIPANalysisTCPanalysisDETails

Module: Data Application Unit
Source: 9999a597fe154e63.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
TCP Analysis Settings and Results
 > 
SENSe:DATA:MEAS<i>:IPANalysis:TCPanalysis:DETails?
SENSe:DATA:MEAS<i>:IPANalysis:TCPanalysis:DETails? 
<FlowID>
Queries the "TCP Analysis" details for a specific connection, selected via its flow ID.
Query parameters: 
<FlowID>
Selects the connection for which information is queried
Return values: 
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
<CurrTCPWSDown>
Measured downlink TCP window size
Default unit: 
byte
<MaxTCPWSDown>
Negotiated maximum downlink TCP window size
Default unit: 
byte
<RetrDown>
Downlink retransmission rate
Range: 
0 %  to  100 %
Default unit: 
%
<OverhDown>
Only for backward compatibility - no longer used
Range: 
0 %  to  100 %
Default unit: 
%
<CurrTCPWSUp>
Measured uplink TCP window size
Default unit: 
byte
<MaxTCPWSUp>
Negotiated maximum uplink TCP window size
Default unit: 
byte
<RetrUp>
Uplink retransmission rate
Range: 
0 %  to  100 %
Default unit: 
%
<OverhUp>
Only for backward compatibility - no longer used
Range: 
0 %  to  100 %
Default unit: 
%
<RTT>
Round-trip time
Default unit: 
ms
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.2.11, V3.5.50 added <RTT>
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Result details (lower part)"
Top