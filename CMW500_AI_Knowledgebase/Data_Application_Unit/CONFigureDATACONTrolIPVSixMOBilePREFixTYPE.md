# CONFigureDATACONTrolIPVSixMOBilePREFixTYPE

Module: Data Application Unit
Source: f343cf4ca7a04598.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IPv6  Settings
 > 
CONFigure:DATA:CONTrol:IPVSix:MOBile:PREFix:TYPE
CONFigure:DATA:CONTrol:IPVSix:MOBile:PREFix:TYPE 
<PrefixType>
Selects the method to be used to define the IPv6 prefix pool for DUTs.
This setting is only relevant for test setups with connected external network. It is ignored for a standalone test setup (
AUTO
 set via 
CONFigure:
​
DATA:
​
CONTrol:
​
IPVSix:
​
ADDRess:
​
TYPE
).
Parameters:
<PrefixType>
STATic |
 
 DHCP
STATic
: static IP configuration
DHCP
: DHCP prefix delegation
*RST:
STAT
Example: 
See 
"Configuring IPv6 Settings"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Mobile IPv6 Prefix Configuration"
Top