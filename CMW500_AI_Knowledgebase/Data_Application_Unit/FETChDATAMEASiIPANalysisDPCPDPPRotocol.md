# FETChDATAMEASiIPANalysisDPCPDPPRotocol

Module: Data Application Unit
Source: ba2e8492d03b4790.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Data Pie Charts Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:DPCP:DPPRotocol?
FETCh:DATA:MEAS<i>:IPANalysis:DPCP:DPPRotocol? 
Queries the "Data per Protocol" results.
After the reliability indicator, three results are returned for each protocol:
<Reliability>, {<Protocol>, <ProtData>, <ProtPercent>}
protocol 1
, {...}
protocol 2
, ...
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Protocol>
Used protocol as string
<ProtData>
Data transported via the protocol, as absolute number
Default unit: 
byte
<ProtPercent>
Data transported via the protocol, as percentage of total transported data
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
"Data Per Protocol"
Top