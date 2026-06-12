# CONFigureGSMSIGNiCONNectionCSWitchedTCHassign

Module: GSM Signaling
Source: 64e394045c5e4f26.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
CS Connections (General Parameters)
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:TCHassign
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:TCHassign 
<TCHassignment>
Specifies when is the traffic channel assigned during connection setup.
Parameters:
<TCHassignment>
VEARly |
 
 EARLy |
 
 LATE |
 
 ON |
 
 OFF
VEARly
: The TCH is assigned very early. Signaling is done via the fast associated control channel (FACCH).
EARLy
: The TCH is assigned early, which means that alerting takes place on the TCH. For call setup to the traffic channel, signaling is done via the standalone dedicated control channel (SDCCH).
LATE
: The traffic channel is assigned late, which means after alerting. For call setup to the traffic channel and alerting, signaling is done via the SDCCH.
OFF (ON)
 disables (enables) the TCH assignment.
*RST:
VEAR
Example: 
See 
"Configuring General CS Connection Settings"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"TCH Assignment"
Top