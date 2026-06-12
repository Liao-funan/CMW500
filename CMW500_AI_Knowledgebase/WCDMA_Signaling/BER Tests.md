# BER Tests

Module: WCDMA Signaling
Source: f4fc2bfb68804c77.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
BER Tests
BER Tests
The BER measurement provided by the WCDMA signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WCDMa:SIGN:BER:...
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:SIGN:BER?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:SIGN:BER
 and retrieve the results using 
FETCh:WCDMa:SIGN:BER?
.
The examples in this section focus on commands directly related to the BER measurement. For general configuration of the signaling application, refer to 
"Signaling Application"
.
Contents
Configuring the BER Measurement
Setting Up the RMC Connection
Performing a BER Measurement
Top