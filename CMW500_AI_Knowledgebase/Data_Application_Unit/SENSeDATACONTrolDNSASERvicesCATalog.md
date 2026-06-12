# SENSeDATACONTrolDNSASERvicesCATalog

Module: Data Application Unit
Source: bb0dbc02bd104480.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
DNS Server Settings
 > 
SENSe:DATA:CONTrol:DNS:ASERvices:CATalog?
SENSe:DATA:CONTrol:DNS:ASERvices:CATalog? 
Queries the entries of the local DNS server database for type SRV DNS queries.
The four values listed below are returned for each database entry: {<Name>, <Url>, <Protocol>, <Port>}
entry 0
, {...}
entry 1
, ...
Return values: 
<Name>
String specifying the service name
<Url>
String specifying the URL of the domain
<Protocol>
UDP |
 
 TCP
<Port>
Range: 
0  to  65654
Example: 
See 
"Configuring DNS Server Settings"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Application Services"
Top