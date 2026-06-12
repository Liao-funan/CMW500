# Configuring the Cell Broadcast Service

Module: LTE Signaling
Source: cd0accc8a1b14ed7.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring the Cell Broadcast Service
Configuring the Cell Broadcast Service
// *****************************************************************************
// Set the message type. Query the resulting message ID and configure the
// serial number.
// *****************************************************************************
CONFigure:LTE:SIGN:CBS:MESSage:IDTYpe AAMB
CONFigure:LTE:SIGN:CBS:MESSage:ID?
CONFigure:LTE:SIGN:CBS:MESSage:SERial PLMN, 1, OFF, 0
// *****************************************************************************
// Select the data source, enter the message text, query the coding group and
// set the language.
// *****************************************************************************
CONFigure:LTE:SIGN:CBS:MESSage:SOURce INTernal
CONFigure:LTE:SIGN:CBS:MESSage:DATA "Warning! This is a test!"
CONFigure:LTE:SIGN:CBS:MESSage:CGRoup?
CONFigure:LTE:SIGN:CBS:MESSage:LANGuage 1,"English"
// *****************************************************************************
// Configure ETWS-specific settings.
// *****************************************************************************
CONFigure:LTE:SIGN:CBS:MESSage:ETWS:ALERt ON
CONFigure:LTE:SIGN:CBS:MESSage:ETWS:POPup ON
// *****************************************************************************
// Enable cell broadcast messages.
// *****************************************************************************
CONFigure:LTE:SIGN:CBS:MESSage:ENABle ON
Top