# FETChDATAMEASiIPANalysisIPConnectALL

Module: Data Application Unit
Source: 386f1042a7bf4883.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
IP Connectivity Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPConnect:ALL?
FETCh:DATA:MEAS<i>:IPANalysis:IPConnect:ALL? 
Queries the "IP Connectivity" results for all connections.
After the reliability indicator, results are returned per connection (flow):
<Reliability>, {<FlowID>, <ConnStatus>, <LST>, <SysClock>, <Protocol>, <DPIProtocol>, <IPAddrSource>, <IPPortSource>, <IPAddrDest>, <IPPortDest>, <OverhDown>, <OverhUp>, <AvgPSDown>, <AvgPSUp>, <App>, <Country>}
conn 1
, {...}
conn 2
, ...
Return values: 
<Reliability>
See 
"Reliability Indicator"
<FlowID>
Flow ID of the connection
<ConnStatus>
OPEN |
 
 CLOSed
Connection status
<LST>
Local system time, incremented every ms
The clock starts when the instrument is switched on.
<SysClock>
System clock in units of 10 ns
When 1 ms is reached (100*10 ns), the clock is reset to 0 and the local system time is incremented.
Range: 
0  to  99
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
V3.2.11, V3.2.40 added <LST> and <SysClock>
V3.7.20 added <App> and <Country>
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Results"
Top