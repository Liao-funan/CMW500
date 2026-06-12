# E-RGCH Tests

Module: WCDMA Signaling
Source: c65f709b1b084939.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
E-RGCH Tests
E-RGCH Tests
The E-RGCH measurement provided by the WCDMA signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WCDMa:SIGN:ERGCh:...
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:SIGN:ERGCh:...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:SIGN:ERGCh
 and retrieve the results using 
FETCh:WCDMa:SIGN:ERGCh:...?
.
The examples in this section focus on commands directly related to the E-RGCH measurement. For general configuration of the signaling application, refer to 
"Signaling Application"
.
Contents
Configuring the E-RGCH Measurement
Setting Up an HSPA Connection
Performing an E-RGCH Measurement
Top