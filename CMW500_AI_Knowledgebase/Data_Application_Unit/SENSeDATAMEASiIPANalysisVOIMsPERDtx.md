# SENSeDATAMEASiIPANalysisVOIMsPERDtx

Module: Data Application Unit
Source: 4c9ecc0e8739443f.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Voice over IMS Results
 > 
SENSe:DATA:MEAS<i>:IPANalysis:VOIMs:PERDtx?
SENSe:DATA:MEAS<i>:IPANalysis:VOIMs:PERDtx? 
<ConID>
Queries the packets measurement results for a selected voice over IMS call.
To get a list of all calls and their IDs, use 
FETCh:
​
DATA:
​
MEAS<i>:
​
IPANalysis:
​
VOIMs:
​
ALL?
.
Query parameters: 
<ConID>
Selects the call for which the results are queried
Return values: 
<PacketLossUp>
Packet loss rate in the uplink
Range: 
0 %  to  100 %
Default unit: 
%
<PacketLossDown>
Packet loss rate in the downlink
Range: 
0 %  to  100 %
Default unit: 
%
<DTXUp>
Discontinuous transmission rate in the uplink
Range: 
0 %  to  100 %
Default unit: 
%
<DTXDown>
Discontinuous transmission rate in the downlink
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
V3.2.40
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Packets Meas tab (lower part)"
Top