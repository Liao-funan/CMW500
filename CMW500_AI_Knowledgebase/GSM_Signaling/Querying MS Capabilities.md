# Querying MS Capabilities

Module: GSM Signaling
Source: 9b3f52d0c7dc41c4.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Querying MS Capabilities
Querying MS Capabilities
// ***************************************************************************** 
// Ask for the bands supported by the MS.
// ***************************************************************************** 
SENSe:GSM:SIGN:MSSinfo:BANDs?
// ***************************************************************************** 
// Ask for the supported GPRS/EGPRS multislot classes    
// in single and dual transfer mode.
// ***************************************************************************** 
SENSe:GSM:SIGN:MSSinfo:MSCLass:GPRS?
SENSe:GSM:SIGN:MSSinfo:MSCLass:EGPRs?
SENSe:GSM:SIGN:MSSinfo:MSCLass:DGPRs?
SENSe:GSM:SIGN:MSSinfo:MSCLass:DEGPrs?
// ***************************************************************************** 
// Query support of extended dynamic allocation.
// ***************************************************************************** 
SENSe:GSM:SIGN:MSSinfo:EDALlocation?
// ***************************************************************************** 
// Query the supported codec list.
// *****************************************************************************
SENSe:GSM:SIGN:MSSinfo:CODec:GSM?
SENSe:GSM:SIGN:MSSinfo:CODec:UMTS?
// ***************************************************************************** 
// Query the VAMOS and tighter capabilities of the MS.
// *****************************************************************************
SENSe:GSM:SIGN:MSSinfo:VAMos:LEVel?
SENSe:GSM:SIGN:MSSinfo:TCAPability:SSCHannels?
SENSe:GSM:SIGN:MSSinfo:TCAPability:GEGPrs?
SENSe:GSM:SIGN:MSSinfo:TCAPability:ETWO?
Top