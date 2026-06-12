# PER Measurements

Module: WLAN Signaling
Source: 5e97a6dbc79d477d.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
PER Measurements
PER Measurements
The PER measurement provided by the WLAN signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WLAN:SIGN:PER:...
After a 
*RST
, the measurement is switched off.
You can start the measurement using 
INIT:WLAN:SIGN:PER
 and retrieve the results using 
FETCh
 commands.
The examples in this section focus on commands directly related to the PER measurement. For general configuration of the signaling application and setting up the connection, refer to 
"General Configuration"
.
Contents
Configuring a PER Measurement
Running a PER Measurement
Top