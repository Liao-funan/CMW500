# CONFigureWCDMaSIGNiCONNectionTMODeHSPADATA

Module: WCDMA Signaling
Source: 9f8b559269a548c9.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Test Mode Connection Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:HSPA:DATA
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:HSPA:DATA 
<Pattern>
Selects the bit pattern to be transmitted as user information on the HS-DSCH.
Besides "All 0", "All 1" and "Alternating 0101...", pseudo-random bit sequences of variable length are available.
Parameters:
<Pattern>
ALL0 |
 
 ALL1 |
 
 ALTernating |
 
 PRBS9 |
 
 PRBS11 |
 
 PRBS13 |
 
 PRBS15
*RST:
PRBS9
Example: 
See 
"Configuring Connection Types"
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Data Pattern"
Top