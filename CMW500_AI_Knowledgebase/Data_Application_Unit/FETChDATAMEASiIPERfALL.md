# FETChDATAMEASiIPERfALL

Module: Data Application Unit
Source: 78b27e98fa71461a.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Iperf Measurement
 > 
FETCh:DATA:MEAS<i>:IPERf:ALL?
FETCh:DATA:MEAS<i>:IPERf:ALL? 
Queries all client and server results of the iperf measurement.
For each server/client instance five results are returned, from instance 1 to instance 8:
<Reliability>, {<ServerCounter>, <ClientCounter>, <UpBandwidth>, <PackErrRate>, <DownBandwidth>}
instance 1
, {...}
instance 2
, ..., {...}
instance 8
Iperf results are often queried within a loop, to monitor the results over some time. Iperf delivers new results once per second. If your loop is faster, several consecutive queries deliver the same results. Use the <ServerCounter> and <ClientCounter> to identify redundant results and discard them.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ServerResultCounter>
Counter for server results
The first result delivered by iperf is labeled 0, the second result 1, and so on.
<ClientResultCounter>
Counter for client results
The first result delivered by iperf is labeled 0, the second result 1, and so on.
<UpBandwidth>
Uplink throughput, determined for active server instances
Default unit: 
bit/s
<PackErrRate>
Percentage of lost packets, determined for active server instances with protocol type UDP
Range: 
0 %  to  100 %
Default unit: 
%
<DownBandwidth>
Downlink throughput, determined for active client instances
Default unit: 
bit/s
Example: 
See 
"Performing an Iperf Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"Results"
Top