# Configuring Connected DRX

Module: LTE Signaling
Source: 3b13255f98524010.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Connected DRX
Configuring Connected DRX
// *****************************************************************************
// Enable connected DRX with user-defined settings.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:CDRX:ENABle UDEF
CONFigure:LTE:SIGN:CONNection:CDRX:ODTimer PSF3
CONFigure:LTE:SIGN:CONNection:CDRX:ITIMer PSF80
CONFigure:LTE:SIGN:CONNection:CDRX:RTIMer PSF8
CONFigure:LTE:SIGN:CONNection:CDRX:LDCYcle SF80
CONFigure:LTE:SIGN:CONNection:CDRX:SOFFset 10
CONFigure:LTE:SIGN:CONNection:CDRX:SCENable ON
CONFigure:LTE:SIGN:CONNection:CDRX:SDCYcle SF5
CONFigure:LTE:SIGN:CONNection:CDRX:SCTimer 5
// *****************************************************************************
// Configure UL dynamic scheduling.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:CDRX:UDSCheduling ON
CONFigure:LTE:SIGN:CONNection:CDRX:IUGMcsidx 10
CONFigure:LTE:SIGN:CONNection:CDRX:IUGNrb 20
// *****************************************************************************
// Configure PUCCH resources for scheduling requests.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:SRPRindex 50
CONFigure:LTE:SIGN:CONNection:SRCindex 35
Top