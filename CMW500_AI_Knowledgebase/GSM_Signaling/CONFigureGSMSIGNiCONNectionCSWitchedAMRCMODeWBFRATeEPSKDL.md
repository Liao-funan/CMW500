# CONFigureGSMSIGNiCONNectionCSWitchedAMRCMODeWBFRATeEPSKDL

Module: GSM Signaling
Source: f5ea70f9065d4902.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
AMR Configuration
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:CMODe:WB:FRATe:EPSK:DL
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:CMODe:WB:FRATe:EPSK:DL 
<CodecMode>
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:CMODe:WB:FRATe:EPSK:UL 
<CodecMode>
Select the codec modes to be used by the R&S
 
CMW (downlink) and the MS (uplink) for the full-rate wideband AMR codec (8PSK modulation).
Only active codec modes can be selected. For configuration and activation/deactivation of the codec modes, see 
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
AMR:
​
RSET:
​
WB:
​
FRATe:
​
EPSK
.
Parameters:
<CodecMode>
Range: 
1  to  4 (if all codec modes are active, otherwise less)
*RST:
3
Additional parameters OFF (ON) disables (enables) codec mode.
Example: 
See 
"Configuring AMR Settings"
Firmware/Software: 
V2.1.60
Top