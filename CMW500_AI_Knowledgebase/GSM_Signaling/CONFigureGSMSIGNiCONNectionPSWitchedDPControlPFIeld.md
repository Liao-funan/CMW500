# CONFigureGSMSIGNiCONNectionPSWitchedDPControlPFIeld

Module: GSM Signaling
Source: 70ee2ea552f34b54.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
PS Connections
 > 
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:DPControl:PFIeld
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:DPControl:PFIeld 
<PRfield>
Indicates the power level reduction of the current RLC block.
Parameters:
<PRfield>
DB0 |
 
 DB3 |
 
 DB7 |
 
 NUSable
DB0
: 0 dB to 3 dB (excluded) less than BCCH level - P0
DB3
: 3 dB to 7dB (excluded) less than BCCH level - P0
DB7
: 7 dB to 10 dB less than BCCH level - P0
NUSable
: not usable - MS has to ignore PR field
*RST:
NUS
Example: 
See 
"Configuring PS Connection Settings"
Firmware/Software: 
V3.2.30
Manual operation: 
See 
"PR Field"
Top