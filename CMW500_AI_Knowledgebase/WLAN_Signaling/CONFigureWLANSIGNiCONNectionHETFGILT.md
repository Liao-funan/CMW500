# CONFigureWLANSIGNiCONNectionHETFGILT

Module: WLAN Signaling
Source: fae645a151bf4047.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Trigger Frame Control Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:HETF:GILT
CONFigure:WLAN:SIGN<i>:CONNection:HETF:GILT 
<GI_LTF>
Specifies the guard interval and LTF type of the HE TB PPDU.
Parameters:
<GI_LTF>
L116 |
 
 L216 |
 
 L432
LTF type and corresponding GI:
L116
: 1x LTF + 1.6 µs GI
L216
: 2x LTF + 1.6 µs GI
L432
: 4x LTF + 3.2 µs GI
*RST:
L116
Example: 
See 
"IEEE 802.11ax connection settings"
Firmware/Software: 
V3.7.30
Options: 
R&S CMW-KS657
Manual operation: 
See 
"GI and LTF"
Top