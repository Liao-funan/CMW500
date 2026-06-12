# CONFigureLTESIGNiCONNection[PCC]STYPe

Module: LTE Signaling
Source: 39e0f2f3fea4401b.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Connection Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:STYPe
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:STYPe 
<Type>[, <CQIMode>]
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:STYPe 
<Type>[, <CQIMode>]
Selects the scheduling type.
Suffix: 
<c>
1..7
Parameters:
<Type>
RMC |
 
 UDCHannels |
 
 UDTTibased |
 
 CQI |
 
 SPS |
 
 EMAMode |
 
 EMCSched
RMC
: 3GPP-compliant reference measurement channel
UDCHannels
: user-defined channel
UDTTibased
: user-defined channel configurable per TTI
CQI
: CQI channel, as specified by next parameter
SPS
: semi-persistent scheduling (only PCC, not SCC)
EMAMode
: eMTC auto mode
EMCSched
: eMTC compact scheduling
*RST:
RMC
<CQIMode>
TTIBased |
 
 FWB |
 
 FPMI |
 
 FCPRi |
 
 FCRI |
 
 FPRI
Only relevant for <Type> = CQI
TTIBased
: fixed CQI
FWB
: follow wideband CQI
FPMI
: follow wideband PMI
FCPRi
: follow wideband CQI-PMI-RI
FCRI
: follow wideband CQI-RI
FPRI
: follow wideband PMI-RI
*RST:
TTIB
Example: 
See 
"Configuring General Connection Settings Part 2"
Firmware/Software: 
V3.0.10, V3.0.50 <CQIMode>, V3.2.50 SCC command
V3.2.80 SPS, FPMI, FCPRi and FCRI
V3.5.10 FPRI
V3.7.20 EMAMode, EMCSched
Options: 
R&S CMW-KS510 for UDCH, UDTT, SPS, CQI-TTIB
R&S CMW-KS510/-KS512 (without CA/with CA) for other CQI-...
R&S CMW-KS590 for EMAMode, EMCSched
Manual operation: 
See 
"Scheduling Type"
Top