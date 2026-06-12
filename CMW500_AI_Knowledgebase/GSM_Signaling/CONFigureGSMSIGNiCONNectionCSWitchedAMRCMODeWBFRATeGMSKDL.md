# CONFigureGSMSIGNiCONNectionCSWitchedAMRCMODeWBFRATeGMSKDL

Module: GSM Signaling
Source: 5eab1f61b4604ca8.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
AMR Configuration
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:CMODe:WB:FRATe:GMSK:DL
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:CMODe:WB:FRATe:GMSK:DL 
<CodecMode>
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:CMODe:WB:FRATe:GMSK:UL 
<CodecMode>
Select the codec modes to be used by the R&S
 
CMW (downlink) and the MS (uplink) for the full-rate wideband AMR codec (GMSK modulation).
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
GMSK
.
Parameters:
<CodecMode>
Range: 
1  to  3 (if all codec modes are active, otherwise less)
*RST:
3
Additional parameters OFF (ON) disables (enables) codec mode.
Example: 
See 
"Configuring AMR Settings"
Firmware/Software: 
V2.1.25
Top