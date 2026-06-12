# FETChDATAMEASiIPANalysisDPCPDPConnection

Module: Data Application Unit
Source: b7f6f7eedc41426d.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Data Pie Charts Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:DPCP:DPConnection?
FETCh:DATA:MEAS<i>:IPANalysis:DPCP:DPConnection? 
Queries the "Data per Connection" results.
After the reliability indicator, three results are returned for each connection:
<Reliability>, {<RemDestination>, <ConnData>, <ConnPercent>}
conn 1
, {...}
conn 2
, ...
Return values: 
<Reliability>
See 
"Reliability Indicator"
<RemDestination>
IP address of the remote destination as string
<ConnData>
Data transported via the connection, as absolute number
Default unit: 
byte
<ConnPercent>
Data transported via the connection, as percentage of total transported data
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.2.11
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Data Per Connection"
Top