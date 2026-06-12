# CONFigureWCDMaSIGNiULTPCSetPCONfigDHIB

Module: WCDMA Signaling
Source: 8693faf0783e479f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Uplink Settings
 > 
TX Power Control Settings
 > 
CONFigure:WCDMa:SIGN<i>:UL:TPCSet:PCONfig:DHIB
CONFigure:WCDMa:SIGN<i>:UL:TPCSet:PCONfig:DHIB 
<Config>, <Repetition>
Defines the beginning of the pattern and the number of times the pattern has to be repeated for "DC HSPA In-Band Emission".
Parameters:
<Config>
UD |
 
 DU
UD
: pattern for the carrier 1 starts: 11 (up), carrier 2: 00 (down)
DU
: carrier 1 starts: 00 (down), carrier 2: 11 (up)
*RST:
UD
<Repetition>
The number of times the pattern is repeated for each carrier.
Range: 
1  to  20
*RST:
20
Example: 
See 
"Configuring and Executing a TPC Setup"
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS405
Manual operation: 
See 
"TPC Setup"
Top