# CONFigureWCDMaSIGNiCONNectionTMODeRMCUCRC

Module: WCDMA Signaling
Source: 586715f9756d4916.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Test Mode Connection Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:RMC:UCRC
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:RMC:UCRC 
<Enable>
Enables or disables the uplink cyclic redundancy check (CRC) for loop mode 2. This setting is only relevant when an RMC with symmetric DL/UL data rate is used.
The setting is separate for normal signaling and reduce signaling mode. First enable or disable reduced signaling mode (see 
"Cell Setup"
) and afterwards configure the "Loop Mode 2 Sym. UL CRC".
Parameters:
<Enable>
OFF |
 
 ON
*RST:
OFF
Example: 
See 
"Configuring Connection Types"
Firmware/Software: 
V3.0.20
Manual operation: 
See 
"Loop Mode 2 Sym. UL CRC"
Top