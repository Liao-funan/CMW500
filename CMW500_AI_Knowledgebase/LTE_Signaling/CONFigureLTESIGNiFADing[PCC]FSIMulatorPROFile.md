# CONFigureLTESIGNiFADing[PCC]FSIMulatorPROFile

Module: LTE Signaling
Source: 5f3fdcb3ae8f4b6f.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Internal Fading
 > 
Fading Simulator
 > 
CONFigure:LTE:SIGN<i>:FADing[:PCC]:FSIMulator:PROFile
CONFigure:LTE:SIGN<i>:FADing[:PCC]:FSIMulator:PROFile 
<Profile>
CONFigure:LTE:SIGN<i>:FADing:SCC<c>:FSIMulator:PROFile 
<Profile>
Selects a propagation condition profile for extended fading.
Suffix: 
<c>
1..7
Parameters:
<Profile>
EP5Low |
 
 EP5Medium |
 
 EP5High |
 
 EV5Low |
 
 EV5Medium |
 
 EV5High |
 
 EV7Low |
 
 EV7Medium |
 
 EV7High |
 
 ET7Low |
 
 ET7Medium |
 
 ET7High |
 
 ET3Low |
 
 ET3Medium |
 
 ET3High |
 
 HSTRain |
 
 HST |
 
 CTESt |
 
 ETL30 |
 
 ETM30 |
 
 ETH30 |
 
 EVL200 |
 
 EVM200 |
 
 EVH200
EP5Low | EP5Medium | EP5High
EPA, 5 Hz Doppler, low/medium/high correlation
ETL30 | ETM30 | ETH30
ETU, 30 Hz Doppler, low/medium/high correlation
ET7Low | ET7Medium | ET7High
ETU, 70 Hz Doppler, low/medium/high correlation
ET3Low | ET3Medium | ET3High
ETU, 300 Hz Doppler, low/medium/high correlation
EV5Low | EV5Medium | EV5High
EVA, 5 Hz Doppler, low/medium/high correlation
EV7Low | EV7Medium | EV7High
EVA, 70 Hz Doppler, low/medium/high correlation
EVL200 | EVM200 | EVH200
EVA, 200 Hz Doppler, low/medium/high correlation
HSTRain | HST
High-speed train scenario (both values have the same effect)
CTESt
Multi-path profile for CQI tests
*RST:
EP5Low
Example: 
See 
"Configuring Internal Fading"
Firmware/Software: 
V3.5.10
V3.5.30: EVL200, EVM200, EVH200
Options: 
See relevant fading scenario
Manual operation: 
See 
"Profile"
Top