# CONFigureWCDMaSIGNiULCARRiercTPCTPOWer

Module: WCDMA Measurements
Source: 3861e147ef2d4a58.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for General Measurement Settings
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
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"UL Target Power"
V3.5.20: command renamed (
CARRier<c>
 added)
Top