# CONFigureLTESIGNiCONNection[PCC]UDCHannelsEMTCAUL

Module: LTE Signaling
Source: 18d2a6510706497c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings (No LAA)
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:EMTC:A:UL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:EMTC:A:UL 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
Configures a user-defined uplink channel for eMTC, CE mode A. The ranges have dependencies described in the background information, see 
Table "eMTC user-defined channel settings"
.
Parameters:
<NumberRB>
Number of allocated resource blocks
Range: 
0  to  6
*RST:
6
<StartRB>
Range: 
0  to  6
*RST:
0
<Modulation>
QPSK |
 
 Q16
Modulation type QPSK | 16-QAM
*RST:
QPSK
<TransBlockSizeIdx>
Transport block size index
Range: 
0  to  14
*RST:
6
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