# SENSeWCDMaSIGNiCELLCONFig

Module: WCDMA Signaling
Source: 4b5c6fe6f9bd4b7d.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SENSe:WCDMa:SIGN<i>:CELL:CONFig?
SENSe:WCDMa:SIGN<i>:CELL:CONFig? 
Returns information corresponding to the gray/green icons displayed behind the cell state in the "Connection Status" area of the main view.
The icons indicate the type of a PS connection.
Return values: 
<Config>
WCDMa |
 
 HSDPa |
 
 HSPLus |
 
 DCHS |
 
 HSPA |
 
 HDUPlus |
 
 DDUPlus |
 
 DHDU |
 
 3CHS |
 
 3DUPlus |
 
 3HDU
WCDMa
: R99 signal, no HSPA test mode
HSDPa
: HSDPA
HSPLus
: HSDPA+
DCHS
: dual carrier HSDPA+
HSPA
: HSDPA and HSUPA
HDUPlus
: HSDPA+ and HSUPA
DDUPlus
: dual carrier HSDPA+ and single carrier HSUPA
DHDU
: dual carrier HSDPA+ and dual carrier HSUPA
3CHS
: three carrier HSDPA+
3DUPlus
: three carrier HSDPA+ and single carrier HSUPA
3HDU
: three carrier HSDPA+ and dual carrier HSUPA
Example: 
See 
"Setting Up an HSPA Connection (Signaling)"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V2.1.30: added DCHS
V3.0.20: added HSPA, HDUPlus and DDUPlus
V3.2.60: added DHDU
V3.5.20: added 3CHS, 3DUPlus, 3HDU
Manual operation: 
See 
"Cell"
Top