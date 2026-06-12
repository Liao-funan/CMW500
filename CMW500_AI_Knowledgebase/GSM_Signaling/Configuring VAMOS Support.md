# Configuring VAMOS Support

Module: GSM Signaling
Source: 096109f14b374fc0.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring VAMOS Support
Configuring VAMOS Support
// *****************************************************************************
// Set the VAMOS support level that is required from the mobile.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:VAMos:MSLevel VAM1
// *****************************************************************************
// Perform all VAMOS settings:
// - VAMOS subchannel = 0
// - TSC for active subchannel = 0
// - TSC set for active subchannel = 1
// - TSC for other (virtual) subchannel = 0
// - TSC set for other (virtual) subchannel = 2
// - Subchannel power imbalance ratio = 0 dB
// - VAMOS profile = "Two active VAMOS users"
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:VAMos 0,0,1,0,2,0,TUS
// *****************************************************************************
// Enable VAMOS.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:VAMos:ENABle ON
Top