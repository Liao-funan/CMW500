# Sending a Cell Broadcast Message

Module: GSM Signaling
Source: 1e4ab09ac2544d84.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Sending a Cell Broadcast Message
Sending a Cell Broadcast Message
// ***************************************************************************** 
// Enable CBS.
// *****************************************************************************
CONFigure:GSM:SIGN:CBS:CBCH:ENABle ON
// ***************************************************************************** 
// Enable DRX for CBS, configure length and offset
// for the CB message broadcast. 
// *****************************************************************************
CONFigure:GSM:SIGN:CBS:DRX:ENABle ON
CONFigure:GSM:SIGN:CBS:DRX:LENGth 64
CONFigure:GSM:SIGN:CBS:DRX:OFFSet 32
// ***************************************************************************** 
// Configure CB message: enable it, set ID type, and query ID. 
// Set serial no. and English coding. Edit a message content.
// ***************************************************************************** 
CONFigure:GSM:SIGN:CBS:MESSage:ENABle ON
CONFigure:GSM:SIGN:CBS:MESSage:IDTYpe APResidential
CONFigure:GSM:SIGN:CBS:MESSage:ID?
CONFigure:GSM:SIGN:CBS:MESSage:SERial 4370
CONFigure:GSM:SIGN:CBS:MESSage:DCSCheme 1
CONFigure:GSM:SIGN:CBS:MESSage:DATA 'Hello there.'
Top