# HSDPA ACK Tests

Module: WCDMA Signaling
Source: 9cb56f22d49544a4.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
HSDPA ACK Tests
HSDPA ACK Tests
The "HSDPA ACK" measurement provided by the WCDMA signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WCDMa:SIGN:HACK:...
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:SIGN:HACK:...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:SIGN:HACK
 and retrieve the results using 
FETCh:WCDMa:SIGN:HACK:...?
.
The examples in this section focus on commands directly related to the HSDPA ACK measurement. For general configuration of the signaling application, refer to 
"Signaling Application"
.
Contents
Configuring the HSDPA ACK Measurement
Setting Up an HSDPA Connection
Performing an HSDPA ACK Measurement
Top