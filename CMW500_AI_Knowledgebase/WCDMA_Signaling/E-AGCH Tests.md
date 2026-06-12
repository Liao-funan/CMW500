# E-AGCH Tests

Module: WCDMA Signaling
Source: 2333be82a29141bf.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
E-AGCH Tests
E-AGCH Tests
The E-AGCH measurement provided by the WCDMA signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WCDMa:SIGN:EAGCh:...
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:SIGN:EAGCh:...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:SIGN:EAGCh
 and retrieve the results using 
FETCh:WCDMa:SIGN:EAGCh:...?
.
The examples in this section focus on commands directly related to the E-AGCH measurement. For general configuration of the signaling application, refer to 
"Signaling Application"
.
Contents
Configuring the E-AGCH Measurement
Setting Up an HSPA Connection
Performing an E-AGCH Measurement
Top