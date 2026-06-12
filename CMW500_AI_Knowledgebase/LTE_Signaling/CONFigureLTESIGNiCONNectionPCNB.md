# CONFigureLTESIGNiCONNectionPCNB

Module: LTE Signaling
Source: 68b7e18510ba474d.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Connection Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection:PCNB
CONFigure:LTE:SIGN<i>:CONNection:PCNB 
<Value>
Configures the field "nB" in the "PCCH-Config" in system information block 2.
Parameters:
<Value>
NB4T |
 
 NB2T |
 
 NBT |
 
 NBT2 |
 
 NBT4 |
 
 NBT8 |
 
 NBT16 |
 
 NBT32 |
 
 NBT64 |
 
 NBT128 |
 
 NBT256
4T, 2T, T, T/2, T/4, T/8, T/16, T/32, T/64, T/128, T/256
The values NBT64, NBT128 and NBT256 are only allowed for eMTC.
And they are only allowed, if the default paging cycle has the same or a greater value. Example: NBT64 needs cycle 
≥
 P064.
*RST:
NBT2
Example: 
See 
"Configuring General Connection Settings Part 1"
Firmware/Software: 
V3.7.10, V3.7.20 added NBT64 | NBT128 | NBT256
Manual operation: 
See 
"PCCH-Config nB"
Top