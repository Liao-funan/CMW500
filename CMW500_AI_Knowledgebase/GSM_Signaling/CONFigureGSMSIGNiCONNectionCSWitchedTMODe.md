# CONFigureGSMSIGNiCONNectionCSWitchedTMODe

Module: GSM Signaling
Source: 3770d4e65a384122.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
CS Connections (General Parameters)
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:TMODe
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:TMODe 
<Mode>
Selects the speech channel coding for circuit switched connections.
Parameters:
<Mode>
FV1 |
 
 FV2 |
 
 HV1 |
 
 ANFG |
 
 ANHG |
 
 ANH8 |
 
 AWFG |
 
 AWF8 |
 
 AWH8
FV1
: full-rate version 1 speech codec
FV2
: full-rate version 2 speech codec
HV1
: half-rate version 1 speech codec
ANFG
: AMR narrowband full-rate GMSK codec
ANHG
: AMR narrowband half-rate GMSK codec
ANH8
: AMR narrowband half-rate 8PSK codec
AWFG
: AMR wideband full-rate GMSK codec
AWF8
: AMR wideband full-rate 8PSK codec
AWH8
: AMR wideband half-rate 8PSK codec
*RST:
FV1
Example: 
See 
"Configuring General CS Connection Settings"
Firmware/Software: 
V1.0.15.0
V2.0.10: added values FV2, HV1, ANFG, ANHG
V2.1.25 added value AWFG
V2.1.60: added values ANH8, AWF8, AWH8
Manual operation: 
See 
"Traffic Mode"
Top