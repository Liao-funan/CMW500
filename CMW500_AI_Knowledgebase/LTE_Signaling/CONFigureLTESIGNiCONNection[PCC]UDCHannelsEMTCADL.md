# CONFigureLTESIGNiCONNection[PCC]UDCHannelsEMTCADL

Module: LTE Signaling
Source: 4abbe0037f514157.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings (No LAA)
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:EMTC:A:DL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:EMTC:A:DL 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
Configures a user-defined downlink channel for eMTC, CE mode A. The ranges have dependencies described in the background information, see 
Table "eMTC user-defined channel settings"
.
Parameters:
<NumberRB>
Number of allocated resource blocks
Range: 
0  to  4
*RST:
4
<StartRB>
Range: 
0  to  4
*RST:
0
<Modulation>
QPSK |
 
 Q16
Modulation type QPSK | 16-QAM
*RST:
QPSK
<TransBlockSizeIdx>
Range: 
0  to  14
*RST:
5
Example: 
See 
"Configuring eMTC Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS510, R&S CMW-KS590
Manual operation: 
See 
"# Resource Blocks, Start Resource Block"
Top