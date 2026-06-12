# SENSeDATAMEASiDNSRequests

Module: Data Application Unit
Source: eae083a0d1fe4895.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
DNS Requests Measurement
 > 
SENSe:DATA:MEAS<i>:DNSRequests?
SENSe:DATA:MEAS<i>:DNSRequests? 
Queries information about the monitored DNS requests.
After the reliability indicator, four results are returned for each DNS request:
<Reliability>, {<ClientIP>, <URL>, <IP>, <Timestamp>}
request 1
, {...}
request 2
, ...
To query the number of monitored requests, see 
SENSe:
​
DATA:
​
MEAS<i>:
​
DNSRequests:
​
RCOunt?
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ClientIP>
String indicating the IP address of the client (DUT) that has sent the DNS request
<URL>
String indicating the domain or application to be resolved
<IP>
String indicating the IP address or domain returned as answer to the DNS request
<Timestamp>
Timestamp as string in the format 
'hh:mm:ss'
Example: 
See 
"Monitoring DNS Requests"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Results"
Top