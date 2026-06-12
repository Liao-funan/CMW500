# CONFigureLTESIGNiCONNection[PCC]NENBantennas

Module: LTE Signaling
Source: bddcbb4acd2b4d23.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General MIMO Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:NENBantennas
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:NENBantennas 
<Antennas>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:NENBantennas 
<Antennas>
Selects the number of downlink TX antennas for transmission mode 1 to 6. The value must be compatible to the active scenario and transmission mode, see 
Table "Transmission scheme overview"
.
Suffix: 
<c>
1..7
Parameters:
<Antennas>
ONE |
 
 TWO |
 
 FOUR
*RST:
ONE
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.0.50, SCC command V3.2.50
Options: 
TWO (2x2): R&S CMW-KS520
FOUR (4x2): R&S CMW-KS521
FOUR (4x4): R&S CMW-KS540
Manual operation: 
See 
"Antenna Configuration"
Top