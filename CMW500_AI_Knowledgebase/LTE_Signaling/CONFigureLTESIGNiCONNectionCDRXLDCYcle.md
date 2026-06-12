# CONFigureLTESIGNiCONNectionCDRXLDCYcle

Module: LTE Signaling
Source: e0d06882bbd94be6.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Connected DRX Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection:CDRX:LDCYcle
CONFigure:LTE:SIGN<i>:CONNection:CDRX:LDCYcle 
<Cycle>
Configures the duration of one long DRX cycle. If short DRX cycles are enabled, the long DRX cycle duration must be divisible by the short DRX cycle duration.
Parameters:
<Cycle>
SF10 |
 
 SF20 |
 
 SF32 |
 
 SF40 |
 
 SF60 |
 
 SF64 |
 
 SF70 |
 
 SF80 |
 
 SF128 |
 
 SF160 |
 
 SF256 |
 
 SF320 |
 
 SF512 |
 
 SF640 |
 
 SF1024 |
 
 SF1280 |
 
 SF2048 |
 
 SF2560 |
 
 SF5120 |
 
 SF10240
SFn means n subframes
*RST:
SF40
Example: 
See 
"Configuring Connected DRX"
Firmware/Software: 
V3.2.20
V3.7.10: SF60, SF70, SF5120, SF10240
Options: 
R&S CMW-KS590 for SF5120, SF10240
Manual operation: 
See 
"Long DRX Cycle"
Top