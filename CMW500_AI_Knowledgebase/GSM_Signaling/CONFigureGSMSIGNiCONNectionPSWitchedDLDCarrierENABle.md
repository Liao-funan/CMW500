# CONFigureGSMSIGNiCONNectionPSWitchedDLDCarrierENABle

Module: GSM Signaling
Source: d35e35363.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
PS Connections
 > 
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:DLDCarrier:ENABle
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:DLDCarrier:ENABle 
<Enable>
Enables or disables the downlink dual carrier mode. In this mode, the R&S
 
CMW uses two radio frequency channels to assign resources to the mobile station; see 3GPP TS 44.060.
Some settings can be configured individually per carrier. The related commands distinguish the two carriers via the mnemonics 
CARRier1
 and 
CARRier2
. See e.g. 
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
CHANnel:
​
TCH[:
​
CARRier<c>]
.
Parameters:
<Enable>
OFF |
 
 ON
*RST:
OFF
Example: 
See 
"Configuring PS Connection Settings"
Firmware/Software: 
V2.0.20
Options: 
R&S CMW-KS201
Manual operation: 
See 
"DL Dual Carrier"
Top