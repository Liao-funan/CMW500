# CONFigureLTESIGNiCELLPRAChNRPReambles

Module: LTE Signaling
Source: b4770fe2dbdb42f2.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Physical Cell Setup
 > 
PRACH Settings
 > 
CONFigure:LTE:SIGN<i>:CELL:PRACh:NRPReambles
CONFigure:LTE:SIGN<i>:CELL:PRACh:NRPReambles 
<Enable>
Selects whether the application ignores received preambles or not.
Parameters:
<Enable>
OFF |
 
 ON |
 
 NIPReambles
OFF
: respond to received preambles
ON
: ignore received preambles
NIPReambles
: ignore a configured number of preambles, then respond to subsequent preambles - for configuration see 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL:
​
PRACh:
​
NIPRach
, only allowed for power ramping step size 0 dB
*RST:
OFF
Example: 
See 
"Configuring Physical Cell Setup"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"No Response to Preambles, # Ignored Preambles"
Top