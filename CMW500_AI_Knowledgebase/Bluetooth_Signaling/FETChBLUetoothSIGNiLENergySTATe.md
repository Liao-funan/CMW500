# FETChBLUetoothSIGNiLENergySTATe

Module: Bluetooth Signaling
Source: 2a5f4e3ca9aa407c.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
FETCh:BLUetooth:SIGN<i>:LENergy:STATe?
FETCh:BLUetooth:SIGN<i>:LENergy:STATe? 
Returns the signaling state of the R&S
 
CMW for LE connections.
Return values: 
<State>
IDLE |
 
 OFF |
 
 SPCM |
 
 STCM |
 
 CMR |
 
 STTX |
 
 TXRunning |
 
 SPTX |
 
 STRX |
 
 RXRunning |
 
 SPRX |
 
 RCOM
IDLE
: Connected in direct test mode, no active test running
OFF
: Not connected in direct test mode
SPCM
: Stopping communication test
STCM
: Starting communication test
CMR
: Communication test running
STTX
: Starting TX test
TXRunning
: TX test running
SPTX
: Stopping TX test
STRX
: Starting RX test
RXRunning
: RX test running
SPRX
: Stopping RX test
RCOM
: Refreshing COM port list
Example: 
See 
"Direct test mode"
Usage: 
Query only
Firmware/Software: 
V3.2.70
Options: 
R&S CMW-KS611
Manual operation: 
See 
"Connection Status"
Top