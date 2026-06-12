# SENSeDATACONTrolEPDGCONNectionsIMSISuffixAPN

Module: Data Application Unit
Source: c17a449f03434662.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
ePDG Service
 > 
Service Control and Information
 > 
SENSe:DATA:CONTrol:EPDG:CONNections:IMSI<Suffix>:APN?
SENSe:DATA:CONTrol:EPDG:CONNections:IMSI<Suffix>:APN? 
Queries the connection list for a selected IMSI.
The list contains 15 connections. If there are fewer connections, the remaining entries are filled with INV. Three parameters are returned for each of the 15 connections:
{<Name>, <IPv4>, <IPv6>}
conn 1
, {...}
conn 2
, ..., {...}
conn 15
Suffix: 
<Suffix>
1..10
Selects the IMSI via its index
Return values: 
<Name>
Access point name (APN) as string
<IPv4>
IPv4 address as string
<IPv6>
IPv6 address as string
Usage: 
Query only
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Connection information"
Top