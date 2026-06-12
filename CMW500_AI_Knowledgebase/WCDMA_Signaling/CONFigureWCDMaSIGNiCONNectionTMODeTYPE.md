# CONFigureWCDMaSIGNiCONNectionTMODeTYPE

Module: WCDMA Signaling
Source: ddca6cfb6e054a27.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Test Mode Connection Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:TYPE
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:TYPE 
<Type>
Selects the test mode connection type.
Parameters:
<Type>
RMC |
 
 HSPA |
 
 RHSPa |
 
 FACH |
 
 BTFD
RMC
: RMC in CS or PS domain
HSPA
: HSPA in PS domain
RHSPa
: RMC plus HSPA
FACH
: test using CELL_FACH state in CS domain
BTFD
: test using blind transport format detection
*RST:
RMC
Example: 
See 
"Configuring Connection Types"
Firmware/Software: 
V3.0.20
V3.2.10: added "FACH"
V3.5.30: added "BTFD"
Options: 
R&S CMW-KS401 for HSPA, RHSPa, BTFD
Manual operation: 
See 
"Type"
Top