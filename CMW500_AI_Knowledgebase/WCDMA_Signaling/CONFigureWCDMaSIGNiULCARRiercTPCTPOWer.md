# CONFigureWCDMaSIGNiULCARRiercTPCTPOWer

Module: WCDMA Signaling
Source: 3861e147ef2d4a58.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Uplink Settings
 > 
TX Power Control Settings
 > 
CONFigure:WCDMa:SIGN<i>:UL:CARRier<c>:TPC:TPOWer
CONFigure:WCDMa:SIGN<i>:UL:CARRier<c>:TPC:TPOWer 
<TargetPower>
Specifies a target power for the target power precondition and for the closed loop setup.
The allowed range depends on the active setup:
0 dBm to 33 dBm for setups "Max. Power E-DCH" and "DC HSPA In-Band Emission"
-50 dBm to 33 dBm for other setups
For the secondary uplink carrier it the target power is calculated as follows:
Target Power (secondary carrier) = Target Power - Target Power Offset
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<TargetPower>
Range: 
depends on active setup, see above
*RST:
-20 dBm
Default unit: 
dBm
Example: 
See 
"Configuring and Executing a TPC Setup"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Target Power"
V3.5.20: command renamed (
CARRier<c>
 added)
Top