# BLER Tests

Module: LTE Signaling
Source: 5145480c85634266.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
BLER Tests
BLER Tests
The BLER measurement provided by the LTE signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:LTE:SIGN:EBLer:...
After a 
*RST
, the measurement is switched off.
You can start the measurement using 
INIT:LTE:SIGN:EBLer
 and retrieve the results using 
FETCh
 commands.
The examples in this section focus on commands directly related to the BLER measurement. For general configuration of the signaling application and setting up the connection, refer to 
"General Configuration"
.
Contents
Configuring a BLER Measurement
Performing a Confidence BLER Measurement
Performing a Continuous BLER Measurement
Performing a Single-Shot BLER Measurement
Top