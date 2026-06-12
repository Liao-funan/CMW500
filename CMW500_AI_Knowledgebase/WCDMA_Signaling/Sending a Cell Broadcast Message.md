# Sending a Cell Broadcast Message

Module: WCDMA Signaling
Source: b7e82bf7af334fa6.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Sending a Cell Broadcast Message
Sending a Cell Broadcast Message
// ***************************************************************************** 
// Enable CBS, configure period, and frame offset of CTCH allocation.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CBS:CTCH:ENABle ON
CONFigure:WCDMa:SIGN:CBS:CTCH:PERiod 8
CONFigure:WCDMa:SIGN:CBS:CTCH:FOFFset 7
// ***************************************************************************** 
// Enable DRX for CBS, configure period, length, and offset
// for the CB message broadcast. Let fill empty blocks with
// scheduling message.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CBS:DRX:ENABle ON
CONFigure:WCDMa:SIGN:CBS:DRX:PERiod 256
CONFigure:WCDMa:SIGN:CBS:DRX:LENGth 64
CONFigure:WCDMa:SIGN:CBS:DRX:OFFSet 32
CONFigure:WCDMa:SIGN:CBS:DRX:FEMPty ON
// ***************************************************************************** 
// Configure CB message: enable it, set ID type, and query ID. Set serial no,
// English coding, and category. Edit a CB content. Set the message 
// repetition period to 500 ms and language. Query the CB coding group.
// ***************************************************************************** 
CONFigure:WCDMa:SIGN:CBS:MESSage:ENABle ON
CONFigure:WCDMa:SIGN:CBS:MESSage:IDTYpe TSUN
CONFigure:WCDMa:SIGN:CBS:MESSage:ID?
CONFigure:WCDMa:SIGN:CBS:MESSage:SERial 4370
CONFigure:WCDMa:SIGN:CBS:MESSage:CATegory BACK
CONFigure:WCDMa:SIGN:CBS:MESSage:SOURce INT
CONFigure:WCDMa:SIGN:CBS:MESSage:DATA 'EAST COAST TSUNAMI WARNING!'
CONFigure:WCDMa:SIGN:CBS:MESSage:PERiod 500
CONFigure:WCDMa:SIGN:CBS:MESSage:LANGuage 1
CONFigure:WCDMa:SIGN:CBS:MESSage:CGRoup?
// ***************************************************************************** 
// Enable ETWS alert and the warning popup on display. 
// ***************************************************************************** 
CONFigure:WCDMa:SIGN:CBS:MESSage:ETWS:ALERt ON
CONFigure:WCDMa:SIGN:CBS:MESSage:ETWS:POPup ON
// ***************************************************************************** 
// Configure CB message from a file: set data source to file, specify
// file, check the CB content.
// ***************************************************************************** 
CONFigure:WCDMa:SIGN:CBS:MESSage:SOURce FILE
CONFigure:WCDMa:SIGN:CBS:MESSage:FILE 'rx_001.cbs'
CONFigure:WCDMa:SIGN:CBS:MESSage:FILE:INFO?
Top