# General Configuration

Module: WLAN Signaling
Source: 5c429a3ac87c4f71.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
General Configuration
General Configuration
The WLAN signaling application is programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:WLAN:SIGN:...
.
After a 
*RST
, the application is switched off.
To activate the signal transmission, use 
SOURce:WLAN:SIGN:STATe ON
. 
*OPC?
 ensures that the signal is available at the selected RF output before the next command line is executed.
Top