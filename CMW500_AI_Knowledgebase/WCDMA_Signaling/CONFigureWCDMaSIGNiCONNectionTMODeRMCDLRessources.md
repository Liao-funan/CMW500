# CONFigureWCDMaSIGNiCONNectionTMODeRMCDLRessources

Module: WCDMA Signaling
Source: 1958ad8911dc4be1.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Test Mode Connection Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:RMC:DLRessources
CONFigure:WCDMa:SIGN<i>:CONNection:TMODe:RMC:DLRessources 
<FilledBlocks>
Selects the percentage of DL RMC transport blocks that are filled with information bits.
The percentages are rounded, indicated in one-tenth of a percent and correspond to values 1/N, indicating that out of N transport blocks, only one is fully filled with data. (N – 1) blocks are empty.
Example: P0125 = 125 
‰
 = 0.125 = 1/8. Each 8
th
 block is filled.
Parameters:
<FilledBlocks>
P0031 |
 
 P0033 |
 
 P0036 |
 
 P0038 |
 
 P0042 |
 
 P0045 |
 
 P0050 |
 
 P0056 |
 
 P0062 |
 
 P0071 |
 
 P0083 |
 
 P0100 |
 
 P0125 |
 
 P0167 |
 
 P0250 |
 
 P0500 |
 
 P1000
P0031
: 1/32
P0033
: 1/30
P0036
: 1/28
P0038
: 1/26
P0042
: 1/24
P0045
: 1/22
P0050
: 1/20
P0056
: 1/18
P0062
: 1/16
P0071
: 1/14
P0083
: 1/12
P0100
: 1/10
P0125
: 1/8
P0167
: 1/6
P0250
: 1/4
P0500
: 1/2
P1000
: all blocks filled
*RST:
P1000
Example: 
See 
"Configuring Connection Types"
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS410
Manual operation: 
See 
"DL Resource in Use"
Top