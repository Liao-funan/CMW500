# E-HICH Tests

Module: WCDMA Signaling
Source: 0c79e65dd017429c.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
E-HICH Tests
E-HICH Tests
The E-HICH measurement provided by the WCDMA signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WCDMa:SIGN:EHICh:...
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:SIGN:EHICh:...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:SIGN:EHICh
 and retrieve the results using 
FETCh:WCDMa:SIGN:EHICh:...?
.
The examples in this section focus on commands directly related to the E-HICH measurement. For general configuration of the signaling application, refer to 
"Signaling Application"
.
Contents
Configuring the E-HICH Measurement
Setting Up an HSPA Connection
Performing an E-HICH Measurement
Top