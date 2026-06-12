# RLC Throughput Tests

Module: LTE Signaling
Source: 85d2886b939242b9.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
RLC Throughput Tests
RLC Throughput Tests
The RLC throughput measurement provided by the LTE signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:LTE:SIGN:THRoughput:...
After a 
*RST
, the measurement is switched off.
You can start the measurement using 
INIT:LTE:SIGN:THRoughput
 and retrieve the results using 
FETCh:LTE:SIGN:THRoughput:...?
.
The examples in this section focus on commands directly related to the RLC throughput measurement. For general configuration of the signaling application, refer to 
"General Configuration"
.
Contents
Configuring an RLC Throughput Measurement
Setting Up a Data Connection
Performing an RLC Throughput Measurement
Top