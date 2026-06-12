# CONFigureGSMSIGNiCONNectionCSWitchedAMRCMODeNBHRATeGMSKDL

Module: GSM Signaling
Source: 1938b53d71194579.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
AMR Configuration
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:CMODe:NB:HRATe:GMSK:DL
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:CMODe:NB:HRATe:GMSK:DL 
<CodecMode>
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:CMODe:NB:HRATe:GMSK:UL 
<CodecMode>
Select the codec modes to be used by the R&S
 
CMW (downlink) and the MS (uplink) for the half-rate narrowband AMR codec (GMSK modulation).
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
NB:
​
HRATe:
​
GMSK
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
V2.0.10
Top