# CONFigureDATACONTrolDNSPRIMarySTYPe

Module: Data Application Unit
Source: 54783b4c0e924adc.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
DNS Server Settings
 > 
CONFigure:DATA:CONTrol:DNS:PRIMary:STYPe
CONFigure:DATA:CONTrol:DNS:PRIMary:STYPe 
<SType>
CONFigure:DATA:CONTrol:DNS:SECondary:STYPe 
<SType>
Select the primary and secondary DNS server type.
Parameters:
<SType>
NONE |
 
 INTernal |
 
 IAForeign |
 
 FOReign
NONE
: no DNS server address sent to the DUT
INTernal
: use local DNS server
IAForeign
: use local DNS server, if no entry found then foreign DNS server
FOReign
: use foreign DNS server
*RST:
primary INT, secondary NONE
Example: 
See 
"Configuring DNS Server Settings"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"DNS Server Info for the mobile"
Top