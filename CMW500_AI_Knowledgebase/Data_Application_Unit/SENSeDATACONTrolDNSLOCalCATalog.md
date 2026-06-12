# SENSeDATACONTrolDNSLOCalCATalog

Module: Data Application Unit
Source: 1aa4b1d1ea6e48ef.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
DNS Server Settings
 > 
SENSe:DATA:CONTrol:DNS:LOCal:CATalog?
SENSe:DATA:CONTrol:DNS:LOCal:CATalog? 
Queries the entries of the local DNS server database for type A or type AAAA DNS queries.
The two values listed below are returned for each database entry: {<Url>, <IP>}
entry 0
, {<Url>, <IP>}
entry 1
, ...
Return values: 
<Url>
String specifying the URL of a domain
<IP>
Assigned IPv4 address or IPv6 address as string
Example: 
See 
"Configuring DNS Server Settings"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Internal DNS entries"
Top