# CONFigureLTESIGNiCONNection[PCC]SPSSINTerval

Module: LTE Signaling
Source: 83794c909d204de5.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
SPS Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:SPS:SINTerval
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:SPS:SINTerval 
<Interval>
Configures the subframe periodicity n for the scheduling type SPS. The UE is granted the configured RB allocation in every n
th
 subframe.
For TDD, the selected value is internally rounded down to a multiple of 10. Example: S128 means every 120
th
 subframe.
Parameters:
<Interval>
S10 |
 
 S20 |
 
 S32 |
 
 S40 |
 
 S64 |
 
 S80 |
 
 S128 |
 
 S160 |
 
 S320 |
 
 S640
Every 10
th
 subframe to every 640
th
 subframe
*RST:
S20
Example: 
See 
"Configuring SPS"
Firmware/Software: 
V3.2.80
V3.2.82: changed *RST value
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Interval"
Top