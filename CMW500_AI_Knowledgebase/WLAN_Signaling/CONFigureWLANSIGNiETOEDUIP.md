# CONFigureWLANSIGNiETOEDUIP

Module: WLAN Signaling
Source: 72324aaac388423b.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Data End-to-End
 > 
CONFigure:WLAN:SIGN<i>:ETOE:DUIP
CONFigure:WLAN:SIGN<i>:ETOE:DUIP 
<State>, <Octet1>, <Octet2>, <Octet3>, <Octet4>
Allows you to specify the IPv4 address that the DAU assigns to the DUT via DHCP.
Parameters:
<State>
OFF |
 
 ON
Disables/enables the IP address configuration
<Octet1>,<Octet2>, <Octet3>,<Octet4>
Address 
<Octet1>.<Octet2>.<Octet3>.<Octet4>
Range: 
0 to 255
*RST:
100, 100, 100, 10
Example: 
See 
"Configuring DAU Parameters"
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Set DAU DHCP Response IP Address, IP Address (DHCP Response)"
Top