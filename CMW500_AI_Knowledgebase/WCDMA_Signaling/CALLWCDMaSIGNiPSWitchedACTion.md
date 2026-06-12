# CALLWCDMaSIGNiPSWitchedACTion

Module: WCDMA Signaling
Source: 490d6fc587c8464f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
CALL:WCDMa:SIGN<i>:PSWitched:ACTion
CALL:WCDMa:SIGN<i>:PSWitched:ACTion 
<PSAction>
Controls the PS connection state. As a prerequisite for setup of a test mode connection in the PS domain, a test mode connection must be set up in the CS domain, see 
CALL:
​
WCDMa:
​
SIGN<i>:
​
CSWitched:
​
ACTion
.
Setting parameters: 
<PSAction>
CONNect |
 
 DISConnect |
 
 HANDover |
 
 ACONnect
CONNect
: initiate the setup of a mobile terminated HSDPA or HSPA test mode connection
DISConnect
: release the test mode connection
HANDover
: execute the handover
ACONnect
: add PS connection to established CS connection (only for test mode connection type RMC + HSPA)
Example: 
See 
"Performing an Inter-RAT Handover"
Usage: 
Event
Firmware/Software: 
V2.1.20, V3.2.60: added HANDover, V3.7.20: added ACONnect
Manual operation: 
See 
"Connection Control Hotkeys"
Top