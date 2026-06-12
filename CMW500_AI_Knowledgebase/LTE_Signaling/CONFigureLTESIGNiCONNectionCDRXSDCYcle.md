# CONFigureLTESIGNiCONNectionCDRXSDCYcle

Module: LTE Signaling
Source: ef6edb4e647240c8.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Connected DRX Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection:CDRX:SDCYcle
CONFigure:LTE:SIGN<i>:CONNection:CDRX:SDCYcle 
<Cycle>
Configures the duration of one short DRX cycle. The long DRX cycle duration must be divisible by the short DRX cycle duration.
Parameters:
<Cycle>
SF2 |
 
 SF4 |
 
 SF5 |
 
 SF8 |
 
 SF10 |
 
 SF16 |
 
 SF20 |
 
 SF32 |
 
 SF40 |
 
 SF64 |
 
 SF80 |
 
 SF128 |
 
 SF160 |
 
 SF256 |
 
 SF320 |
 
 SF512 |
 
 SF640
SFn means n subframes
If a query returns NAV, short cycles are disabled.
*RST:
SF2
Example: 
See 
"Configuring Connected DRX"
Firmware/Software: 
V3.2.20, V3.7.10 SF4
Manual operation: 
See 
"Short DRX Cycle"
Top