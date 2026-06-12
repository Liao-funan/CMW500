# HSDPA CQI Tests

Module: WCDMA Signaling
Source: 0537fe2ec35d41c7.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
HSDPA CQI Tests
HSDPA CQI Tests
The "HSDPA CQI" measurement provided by the WCDMA signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WCDMa:SIGN:HCQI:...
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:SIGN:HCQI:...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:SIGN:HCQI
 and retrieve the results using 
FETCh:WCDMa:SIGN:HCQI:...?
.
The examples in this section focus on commands directly related to the HSDPA CQI measurement. For general configuration of the signaling application, refer to 
"Signaling Application"
.
Contents
Configuring the HSDPA CQI Measurement
Setting Up an HSDPA Connection
Performing an HSDPA CQI Measurement
Top