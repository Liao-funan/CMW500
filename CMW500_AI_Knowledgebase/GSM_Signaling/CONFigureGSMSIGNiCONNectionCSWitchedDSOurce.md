# CONFigureGSMSIGNiCONNectionCSWitchedDSOurce

Module: GSM Signaling
Source: 2eab8a157a674a4f.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
CS Connections (General Parameters)
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:DSOurce
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:DSOurce 
<Mode>
Selects how the R&S
 
CMW transmits data on its CS DL traffic channel.
ECHO is incompatible with an enabled test loop (see 
CONFigure:
​
GSM:
​
SIGN<i>:
​
CONNection:
​
CSWitched:
​
LOOP
).
Parameters:
<Mode>
ECHO |
 
 PR9 |
 
 PR11 |
 
 PR15 |
 
 PR16 |
 
 SP1
ECHO
: loop-back of UL speech data after a fixed delay
PR9
: PRBS 2E9-1
PR11
: PRBS 2E11-1
PR15
: PRBS 2E15-1
PR16
: PRBS 2E16-1
SP1
: speech connection with codec board
*RST:
ECHO
Example: 
See 
"Configuring General CS Connection Settings"
Firmware/Software: 
V2.1.60
V3.2.20: added SP1, SP2
V3.5.20: removed SP2
Manual operation: 
See 
"Data Source"
Top