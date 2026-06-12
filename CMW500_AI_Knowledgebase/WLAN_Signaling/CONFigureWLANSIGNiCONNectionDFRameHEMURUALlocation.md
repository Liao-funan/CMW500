# CONFigureWLANSIGNiCONNectionDFRameHEMURUALlocation

Module: WLAN Signaling
Source: 54d4965cd1c749cf.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Management and Data Frame Control Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:DFRame:HEMU:RUALlocation
CONFigure:WLAN:SIGN<i>:CONNection:DFRame:HEMU:RUALlocation 
<CH20_Index>, <RU_Index>, <AllocState>
CONFigure:WLAN:SIGN<i>:CONNection:DFRame:HEMU:RUALlocation? 
<CH20_Index>, <RU_Index>
Configures allocations for specified channel and resource unit (RU). Maps a user to the RU, sets the size of allocation.
Parameters:
<AllocState>
OFF |
 
 USR1 |
 
 DMY1 |
 
 DMY2 |
 
 DMY3
User mapping for to the selected RU
Parameters for setting and query: 
<CH20_Index>
CHA1 |
 
 CHA2 |
 
 CHA3 |
 
 CHA4
<RU_Index>
RU1 |
 
 RU2 |
 
 RU3 |
 
 RU4 |
 
 RU5 |
 
 RU6 |
 
 RU7 |
 
 RU8 |
 
 RU9
Resource unit selection
Return values: 
<Size>
T26 |
 
 T52 |
 
 T106 |
 
 T242 |
 
 T484 |
 
 T996 |
 
 T2X9
RU size: 26-, 52-, 106-, 242-, 484, 996-tone RU, 2x996-tone RU
*RST:
T26
Example: 
See 
"IEEE 802.11ax connection settings"
Firmware/Software: 
V3.7.30
Options: 
R&S CMW-KS657
Manual operation: 
See 
"Users and Dummies"
Top