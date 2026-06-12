# CONFigureLTESIGNi[PCC]EMTCPDSChBMRCE

Module: LTE Signaling
Source: 8fada6ae9cfa4a15.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
eMTC Settings
 > 
Repetition Settings
 > 
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:PDSCh:B:MRCE
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:PDSCh:B:MRCE 
<MaxRep>
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:PUSCh:B:MRCE 
<MaxRepetitions>
Configures the maximum number of PDSCH or PUSCH repetitions for CE mode B.
Parameters:
<MaxRepetitions>
NCON |
 
 MR192 |
 
 MR256 |
 
 MR384 |
 
 MR512 |
 
 MR768 |
 
 MR1024 |
 
 MR1536 |
 
 MR2048
Not configured (omit field), 192, 256, ..., 2048
*RST:
NCON
Example: 
See 
"Configuring eMTC Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS590
Manual operation: 
See 
"Max Repetitions CE Mode B"
Top