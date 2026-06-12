# CONFigureWCDMaSIGNiDLENHancedDPCHLSEQuenceSTATe

Module: WCDMA Signaling
Source: 10fbf60f979244c6.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
DPCH / F-DPCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:ENHanced:DPCH:LSEQuence:STATe?
CONFigure:WCDMa:SIGN<i>:DL:ENHanced:DPCH:LSEQuence:STATe? 
Queries the generator status of DPCH level transitions for "WCDMA Out-Of-Sync Handling Measurement".
Return values: 
<State>
IDLE |
 
 RUNNing |
 
 FAILed |
 
 SCONflict |
 
 SCHanged
IDLE
: test procedure has not started yet
RUNNing
: test procedure is in progress without errors
FAILed
: test procedure failed
SCONflict
: settings are inappropriate for the setup
SCHanged
: relevant settings changed after setup execution
Example: 
See 
"Configuring Physical Channel DL Settings"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Manual operation: 
See 
"Level Sequence"
Top