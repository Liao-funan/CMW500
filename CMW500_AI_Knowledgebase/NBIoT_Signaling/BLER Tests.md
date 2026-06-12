# BLER Tests

Module: NBIoT Signaling
Source: 2e8e0743ff2c49ca.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
BLER Tests
BLER Tests
The BLER measurement provided by the NB-IoT signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:NIOT:SIGN:BLER:...
After a 
*RST
, the measurement is switched off.
You can start the measurement using 
INIT:NIOT:SIGN:BLER
 and retrieve the results using 
FETCh
 commands.
The examples in this section focus on commands directly related to the BLER measurement. For general configuration of the signaling application and setting up the connection, refer to 
"General Configuration"
.
Contents
Configuring a BLER Measurement
Running a BLER Measurement
Top