# SENSeGSMSIGNiMSSinfoAMRCMODeNBHRATeEPSKDL

Module: GSM Signaling
Source: a62459c1a7384563.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
AMR Configuration
 > 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:NB:HRATe:EPSK:DL?
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:NB:HRATe:EPSK:DL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:NB:HRATe:EPSK:UL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:WB:FRATe:EPSK:DL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:WB:FRATe:EPSK:UL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:WB:HRATe:EPSK:DL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:WB:HRATe:EPSK:UL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:NB:FRATe:GMSK:DL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:NB:FRATe:GMSK:UL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:NB:HRATe:GMSK:DL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:NB:HRATe:GMSK:UL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:WB:FRATe:GMSK:DL? 
SENSe:GSM:SIGN<i>:MSSinfo:AMR:CMODe:WB:FRATe:GMSK:UL? 
Query the DL AMR codec mode requested by the MS (
:DL
) and the actual UL codec mode used by the MS (
:UL
). Separate commands are available for the half-rate (HRATe) and full-rate (FRATe) narrowband (NB) and wideband (WB) AMR codecs, for GMSK and 8PSK modulation.
For the modes used in downlink and requested for uplink, refer to the 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:AMR:CMODe:...
 commands.
Return values: 
<CodecMode>
Range: 
1 to 4 (1 to 3 for WB:FRATe:GMSK and WB:HRATe:EPSK)
Example: 
See 
"Configuring AMR Settings"
Usage: 
Query only
Firmware/Software: 
V2.0.10
V2.1.25: AMR-WB codec commands added
V2.1.60: EPSK commands added
Top