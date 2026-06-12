# Monitoring DNS Requests

Module: Data Application Unit
Source: 30b2707990da4ae5.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Measurements
 > 
Monitoring DNS Requests
Monitoring DNS Requests
// *****************************************************************************
// Specify the maximum number of DNS requests in the result list.
// *****************************************************************************
CONFigure:DATA:MEAS:DNSRequests:MICount 900
// *****************************************************************************
// Start monitoring.
// *****************************************************************************
INIT:DATA:MEAS:DNSRequests
// ***************************************************************************** 
// Wait until at least 10 requests have been monitored.
// ***************************************************************************** 
WHILE SENSe:DATA:MEAS:DNSRequests:RCOunt? < 10
// ***************************************************************************** 
// Query information about the already monitored DNS requests.
// You can repeat this command any time to query updated results.
// ***************************************************************************** 
SENSe:DATA:MEAS:DNSRequests?
Top