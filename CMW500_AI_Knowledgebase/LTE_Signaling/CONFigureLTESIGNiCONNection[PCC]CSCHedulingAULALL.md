# CONFigureLTESIGNiCONNection[PCC]CSCHedulingAULALL

Module: LTE Signaling
Source: 61b79778ed14489c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
eMTC Compact Scheduling Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:CSCHeduling:A:UL:ALL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:CSCHeduling:A:UL:ALL 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
Configures eMTC compact scheduling, uplink, for CE mode A.
The indicated input ranges list all possible values. The ranges have dependencies described in the background information, see 
Table "eMTC compact scheduling settings"
.
Parameters:
<NumberRB>
Number of allocated resource blocks
Range: 
0  to  6
*RST:
6
<StartRB>
Position of first resource block
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
R&S CMW-KS590
Manual operation: 
See 
"# Resource Blocks ... Transport Block Size"
Top