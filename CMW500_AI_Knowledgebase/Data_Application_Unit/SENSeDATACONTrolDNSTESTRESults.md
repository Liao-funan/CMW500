# SENSeDATACONTrolDNSTESTRESults

Module: Data Application Unit
Source: d1970112e19170.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
DNS Server Settings
 > 
SENSe:DATA:CONTrol:DNS:TEST:RESults?
SENSe:DATA:CONTrol:DNS:TEST:RESults? 
Queries the results of a foreign DNS server test.
NONE indicates that no result is available (e.g. no test started yet).
"Successful query" means that the domain could be resolved and the DNS server has returned an IP address.
Return values: 
<V4SAvailable>
NONE |
 
 SUCCeded |
 
 FAILed
Indicates whether the server was reachable via its IPv4 address
<V4AResRec>
NONE |
 
 SUCCeded |
 
 FAILed
Indicates whether a query type A, sent to the IPv4 address was successful
<V44AResRec>
NONE |
 
 SUCCeded |
 
 FAILed
Indicates whether a query type AAAA, sent to the IPv4 address was successful
<V6SAvailable>
NONE |
 
 SUCCeded |
 
 FAILed
Indicates whether the server was reachable via its IPv6 address
<V6AResRec>
NONE |
 
 SUCCeded |
 
 FAILed
Indicates whether a query type A, sent to the IPv6 address was successful
<V64AResRec>
NONE |
 
 SUCCeded |
 
 FAILed
Indicates whether a query type AAAA, sent to the IPv6 address was successful
Example: 
See 
"Configuring DNS Server Settings"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Test Primary Foreign DNS Server (softkey)"
Top