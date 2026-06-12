# RLC Throughput Tests

Module: WCDMA Signaling
Source: 91d601efed4a4ffb.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
RLC Throughput Tests
RLC Throughput Tests
The "RLC Throughput" measurement provided by the WCDMA signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WCDMa:SIGN:THRoughput:...
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:SIGN:THRoughput:...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:SIGN:THRoughput
 and retrieve the results using 
FETCh:WCDMa:SIGN:THRoughput:...?
.
The examples in this section focus on commands directly related to the RLC throughput measurement. For general configuration of the signaling application, refer to 
"Signaling Application"
.
Contents
Configuring the RLC Throughput Measurement
Setting Up a Data Connection
Performing an RLC Throughput Measurement
Top