# Configuring UE Measurement Report Settings

Module: WCDMA Signaling
Source: b68d766021564ae6.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configuring UE Measurement Report Settings
Configuring UE Measurement Report Settings
// *****************************************************************************
// Enable UE measurement report, set interval between two report messages,
// and enable the evaluation of all information elements for current cell,
// carier 2, and WCDMA, GSM, and LTE neighbor cells.
// *****************************************************************************
CONFigure:WCDMa:SIGN:UEReport:ENABle ON
CONFigure:WCDMa:SIGN:UEReport:RINTerval 5
CONFigure:WCDMa:SIGN:UEReport:CCELl:ENABle ON,ON,ON,ON,ON,ON
CONFigure:WCDMa:SIGN:UEReport:NCELl:ENABle ON,ON,ON,ON,ON
CONFigure:WCDMa:SIGN:UEReport:NCELl:WCDMa:ENABle ON, ON, ON, ON, ON
CONFigure:WCDMa:SIGN:UEReport:NCELl:GSM:ENABle ON, ON
CONFigure:WCDMa:SIGN:UEReport:NCELl:LTE:ENABle ON, ON
Top