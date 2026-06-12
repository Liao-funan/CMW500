# Configuring the IQ Settings

Module: WCDMA Signaling
Source: 1a897f859c7249de.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configuring the I/Q Settings
Configuring the I/Q Settings
// ***************************************************************************** 
// Query the properties of the outgoing baseband signal, required to configure
// the baseband input of the external fader. Configure the baseband input
// according to the baseband output of the external fader.
// ***************************************************************************** 
SENSe:WCDMa:SIGN:IQOut:CARRier1?
SENSe:WCDMa:SIGN:IQOut:CARRier2?
CONFigure:WCDMa:SIGN:IQIN:CARRier1 -30, -20
CONFigure:WCDMa:SIGN:IQIN:CARRier2 -30, -20
Top