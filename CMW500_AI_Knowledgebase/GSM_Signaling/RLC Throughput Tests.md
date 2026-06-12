# RLC Throughput Tests

Module: GSM Signaling
Source: f889b13eaa77465d.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
RLC Throughput Tests
RLC Throughput Tests
The "RLC Throughput" measurement provided by the GSM signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:GSM:SIGN:THRoughput:...
After a 
*RST
, the measurement is switched off. Use 
READ:GSM:SIGN:THRoughput:...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:GSM:SIGN:THRoughput
 and retrieve the results using 
FETCh:GSM:SIGN:THRoughput:...?
.
The examples in this section focus on commands directly related to the RLC throughput measurement. For general configuration of the signaling application, refer to 
"General Configuration"
.
Contents
Configuring the RLC Throughput Measurement
Setting Up a Data Connection
Performing an RLC Throughput Measurement
Top