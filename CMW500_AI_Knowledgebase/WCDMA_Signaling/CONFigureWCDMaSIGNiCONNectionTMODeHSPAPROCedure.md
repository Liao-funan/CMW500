# CONFigureWCDMaSIGNiCONNectionTMODeHSPAPROCedure

Module: WCDMA Signaling
Source: b83698bac56345c1.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Test Mode Connection Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:HSPA:PROCedure
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:HSPA:PROCedure 
<Procedure>
Selects whether an HSPA test mode connection is set up automatically when a test mode connection is established, or can be set up manually later on.
Parameters:
<Procedure>
CSPS |
 
 CSOPs
CSPS
: Establish both an RMC connection in the CS domain and an HSPA test mode connection in the PS domain.
CSOPs
: Establish only an RMC connection in the CS domain. You can trigger an HSPA connection setup manually later on if desired.
*RST:
CSPS
Example: 
See 
"Configuring Connection Types"
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Test Mode Procedure"
Top