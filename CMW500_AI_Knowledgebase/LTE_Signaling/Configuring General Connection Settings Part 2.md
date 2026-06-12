# Configuring General Connection Settings Part 2

Module: LTE Signaling
Source: a42d324e7ed04cf6.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring General Connection Settings Part 2
Configuring General Connection Settings Part 2
// *****************************************************************************
// Disable UE TX antenna selection and TTI bundling,
// use redirection for intra-LTE handover,
// do not accept multiple default bearer requests,
// disable timing advance control.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:UETSelection OFF
CONFigure:LTE:SIGN:CONNection:TTIBundling OFF
CONFigure:LTE:SIGN:CONNection:OBCHange REDirection
CONFigure:LTE:SIGN:CONNection:FCHange REDirection
CONFigure:LTE:SIGN:CONNection:AMDBearer OFF
CONFigure:LTE:SIGN:CONNection:TAControl OFF
// *****************************************************************************
// Enable header compression with profile 2 and 4.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:ROHC:ENABle ON
CONFigure:LTE:SIGN:CONNection:ROHC:EFOR VVB
CONFigure:LTE:SIGN:CONNection:ROHC:PROFiles OFF, ON, ON
// *****************************************************************************
// Set and query number of PDCCH symbols.
// Set PDCCH C-RNTI aggregation levels. Query all used aggregation levels.
// For PCC and SCC1.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:PDCCh:SYMBol P3
SENSe:LTE:SIGN:CONNection:PCC:PDCCh:PSYMbols?
CONFigure:LTE:SIGN:CONNection:PCC:PDCCh:ALEVel AUTO
SENSe:LTE:SIGN:CONNection:PCC:PDCCh:ALEVel?
CONFigure:LTE:SIGN:CONNection:SCC:PDCCh:SYMBol P3
SENSe:LTE:SIGN:CONNection:SCC:PDCCh:PSYMbols?
CONFigure:LTE:SIGN:CONNection:SCC:PDCCh:ALEVel AUTO
SENSe:LTE:SIGN:CONNection:SCC:PDCCh:ALEVel?
// *****************************************************************************
// Set the PUCCH format for carrier aggregation.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PUCCh:FFCA F3
// *****************************************************************************
// Configure GSM, WCDMA and TD-SCDMA target for MO CSFB.
// Activate the GSM target.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:CSFB:GSM G09, 1000, G18
CONFigure:LTE:SIGN:CONNection:CSFB:WCDMa OB1, 10600
CONFigure:LTE:SIGN:CONNection:CSFB:TDSCdma OB1, 9500
CONFigure:LTE:SIGN:CONNection:CSFB:DESTination GSM
// *****************************************************************************
// Configure list of requested frequency bands for UE capability report.
// *****************************************************************************
CONFigure:LTE:SIGN:UECapability:RFBands:ALL ON,OB5,ON,OB6,OFF,OB1,OFF,OB1,
    OFF,OB1,ON,OB13,ON,OB14,OFF,OB1,OFF,OB1,OFF,OB1,OFF,OB1,OFF,OB1,OFF,
    OB1,OFF,OB1,OFF,OB1,OFF,OB1
// *****************************************************************************
// Select user-defined channels as scheduling type for PCC and SCC1.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:STYPe UDCH
CONFigure:LTE:SIGN:CONNection:SCC:STYPe UDCH
Top