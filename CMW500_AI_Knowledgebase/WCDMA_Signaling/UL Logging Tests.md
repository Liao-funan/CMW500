# UL Logging Tests

Module: WCDMA Signaling
Source: b7666e3f85924b63.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
UL Logging Tests
UL Logging Tests
The UL logging measurement provided by the WCDMA signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WCDMa:SIGN:ULLogging:...
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:SIGN:ULLogging:...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:SIGN:ULLogging
 and retrieve the results using 
FETCh:WCDMa:SIGN:ULLogging:...?
.
The examples in this section focus on commands directly related to the UL logging measurement. For general configuration of the signaling application, refer to 
"Signaling Application"
.
Contents
Configuring the UL Logging Measurement
Setting Up an HSPA Connection
Performing a UL Logging Measurement
Top