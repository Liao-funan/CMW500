# CONFigureGSMSIGNiBANDBCCH

Module: GSM Signaling
Source: 425d8aff4f2e4e6a.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:GSM:SIGN<i>:BAND:BCCH
CONFigure:GSM:SIGN<i>:BAND:BCCH 
<Band>
Selects the GSM band used for the BCCH and initially also for the TCH. The TCH band can be changed via a handover.
To check the current TCH band, see 
SENSe:
​
GSM:
​
SIGN<i>:
​
BAND:
​
TCH?
.
Parameters:
<Band>
G085 |
 
 G09 |
 
 G18 |
 
 G19
GSM 850, GSM 900, GSM 1800, GSM 1900 bands
*RST:
G09
Example: 
See 
"Configuring BCCH, TCH and PDCH"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Band"
Top