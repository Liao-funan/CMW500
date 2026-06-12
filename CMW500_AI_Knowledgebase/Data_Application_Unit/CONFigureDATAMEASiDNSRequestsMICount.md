# CONFigureDATAMEASiDNSRequestsMICount

Module: Data Application Unit
Source: 1e6c5e5c478b453d.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
DNS Requests Measurement
 > 
CONFigure:DATA:MEAS<i>:DNSRequests:MICount
CONFigure:DATA:MEAS<i>:DNSRequests:MICount 
<MaxIndexCount>
Specifies the maximum length of the result list for DNS requests measurements. The result list is stored in a ring buffer. When it is full, the first result line is deleted whenever a new result line is added to the end.
Parameters:
<MaxIndexCount>
Maximum number of DNS requests in the result list
Range: 
1  to  1000
*RST:
1000
Example: 
See 
"Monitoring DNS Requests"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Settings"
Top