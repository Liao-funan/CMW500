# CONFigureWLANSIGNiCONNectionAMPDu

Module: WLAN Signaling
Source: 4672d84c5ea74abe.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
A-MPDU Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:AMPDu
CONFigure:WLAN:SIGN<i>:CONNection:AMPDu 
<Enable>, <Multi_TID>, <MaxLength>
Configures aggregate MPDUs (A-MPDU).
Parameters:
<Enable>
DISable |
 
 ENABle
Enables/ disables the A-MPDUs
*RST:
ENAB
<Multi_TID>
DISable |
 
 ENABle
Enables/ disables multi-TID A-MPDU
*RST:
DIS
<MaxLength>
The maximal length of A-MPDU subframe
Range: 
50  to  131.071E+3
*RST:
131.071E+3
Default unit: 
byte
Example: 
See 
"IEEE 802.11ax connection settings"
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"TX Enable"
Top