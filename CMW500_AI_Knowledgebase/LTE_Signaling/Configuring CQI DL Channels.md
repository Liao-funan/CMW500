# Configuring CQI DL Channels

Module: LTE Signaling
Source: 8b1b78645c6b4102.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring CQI DL Channels
Configuring CQI DL Channels
The following commands configure the PCC. To configure the SCC number <n>, substitute 
:PCC:
 by 
:SCC<n>:
.
// *****************************************************************************
// Use tables with 256-QAM.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:QAM256:DL ON
// *****************************************************************************
// Fixed CQI downlink channels: Select scheduling type.
// Configure subframe number 3 and 4, both PCC DL streams.
// For uplink, see TTI-based user-defined channels.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:STYPe CQI, TTIBased
CONFigure:LTE:SIGN:CONNection:PCC:FCTTibased:DL1 3,15,12,10
CONFigure:LTE:SIGN:CONNection:PCC:FCTTibased:DL1 4,15,12,10
CONFigure:LTE:SIGN:CONNection:PCC:FCTTibased:DL2 3,15,12,10
CONFigure:LTE:SIGN:CONNection:PCC:FCTTibased:DL2 4,15,12,10
// *****************************************************************************
// Fixed CQI downlink channels - configure all subframes for PCC DL stream 1:
// decreasing number of RBs (50 to 3 for subframe 0 to 9),
// position approximately in middle of bandwidth (start RB = 0 to 24),
// CQI index from 15 to 6.
// Configure the same settings for DL stream 2.
// *****************************************************************************
CONF:LTE:SIGN:CONN:PCC:FCTT:DL1:ALL 50,48,45,39,33,27,21,15,9,3,0,0,3,6,9,12,15,
    18,21,24,15,14,13,12,11,10,9,8,7,6
CONF:LTE:SIGN:CONN:PCC:FCTT:DL2:ALL 50,48,45,39,33,27,21,15,9,3,0,0,3,6,9,12,15,
    18,21,24,15,14,13,12,11,10,9,8,7,6
// *****************************************************************************
// Instead of configuring the same settings for stream 1 and stream 2, you can
// apply the stream 1 settings to all streams and skip the "DL2" commands.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:DLEQual ON
// *****************************************************************************
// Follow WB CQI PCC downlink channels: Select scheduling type.
// Configure the global settings, including user-defined mapping tables.
// Contiguous RB allocation and alternatively multi-cluster DL allocation.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:STYPe CQI,FWB
CONFigure:LTE:SIGN:CONNection:PCC:FWBCqi:DL:STTI ON,ON,ON,ON,ON,OFF,ON,ON,ON,ON
CONFigure:LTE:SIGN:CONNection:PCC:FWBCqi:DL 50,0,UDEF    //or multi-cluster:
CONFigure:LTE:SIGN:CONNection:PCC:FWBCqi:MCLuster:DL #B10101101011010111,UDEF
CONF:LTE:SIGN:CONN:PCC:FWBC:DL:MCST:UDEF 0,1,2,3,6,7,9,13,14,16,19,22,24,27,27
CONF:LTE:SIGN:CONN:PCC:FWBCqi:DL:MCSTable:CSIRs:UDEFined
    0,1,3,5,7,10,12,14,17,19,21,22,24,25,25
CONF:LTE:SIGN:CONN:PCC:FWBCqi:DL:MCSTable:SSUBframe:UDEFined
    0,1,3,5,7,10,12,14,17,19,21,22,24,25,25
// *****************************************************************************
// Follow WB PMI PCC downlink channels: Select scheduling type.
// Configure the scheduling.
// Contiguous RB allocation and alternatively multi-cluster DL allocation.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:STYPe CQI,FPMI ON,ON,ON,ON,ON,ON,ON,ON,ON,ON
CONFigure:LTE:SIGN:CONNection:PCC:FPMI:DL:STTI 
CONFigure:LTE:SIGN:CONNection:PCC:FPMI:DL 50,0,Q16,11    //or multi-cluster:
CONFigure:LTE:SIGN:CONNection:PCC:FPMI:MCLuster:DL #B10101101011010111,Q16,11
// *****************************************************************************
// Follow WB PMI-RI PCC downlink channels: Select scheduling type.
// Configure the RB allocation.
// Contiguous RB allocation and alternatively multi-cluster DL allocation.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:STYPe CQI,FPRI
CONFigure:LTE:SIGN:CONNection:PCC:FPRI:DL:STTI ON,ON,ON,ON,ON,ON,ON,ON,ON,ON
CONFigure:LTE:SIGN:CONNection:PCC:FPRI:DL 50,0,Q16,11    //or multi-cluster:
CONFigure:LTE:SIGN:CONNection:PCC:FPRI:MCLuster:DL #B10101101011010111,Q16,11
// *****************************************************************************
// Follow WB CQI-RI PCC downlink channels: Select scheduling type.
// Configure the global settings, including user-defined mapping tables.
// Contiguous RB allocation and alternatively multi-cluster DL allocation.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:STYPe CQI,FCRI
CONFigure:LTE:SIGN:CONNection:PCC:FCRI:DL:STTI ON,ON,ON,ON,ON,OFF,ON,ON,ON,ON
CONFigure:LTE:SIGN:CONNection:PCC:FCRI:DL 50,0,UDEF    //or multi-cluster:
CONFigure:LTE:SIGN:CONNection:PCC:FCRI:MCLuster:DL #B10101101011010111,UDEF
CONF:LTE:SIGN:CONN:PCC:FCRI:DL:MCST:UDEF 0,1,2,3,6,7,9,13,14,16,19,22,24,27,28
CONF:LTE:SIGN:CONN:PCC:FCRI:DL:MCSTable:SSUBframe:UDEFined
    0,1,2,3,6,7,9,13,14,16,19,22,24,27,28
// *****************************************************************************
// Follow WB CQI-PMI-RI PCC downlink channels: Select scheduling type.
// Configure the global settings, including user-defined mapping tables.
// Contiguous RB allocation and alternatively multi-cluster DL allocation.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:STYPe CQI,FCPRi
CONFigure:LTE:SIGN:CONNection:PCC:FCPRi:DL:STTI ON,ON,ON,ON,ON,OFF,ON,ON,ON,ON
CONFigure:LTE:SIGN:CONNection:PCC:FCPRi:DL 50,0,UDEF    //or multi-cluster:
CONFigure:LTE:SIGN:CONNection:PCC:FCPRi:MCLuster:DL #B10101101011010111,UDEF
CONF:LTE:SIGN:CONN:PCC:FCPRi:DL:MCST:UDEF 0,1,2,3,6,7,9,13,14,16,19,22,24,27,28
CONF:LTE:SIGN:CONN:PCC:FCPRi:DL:MCST:CSIRs:UDEFined
    0,1,3,5,7,10,12,14,17,19,21,22,24,25,25
CONF:LTE:SIGN:CONN:PCC:FCPRi:DL:MCST:SSUBframe:UDEFined
    0,1,2,3,6,7,9,13,14,16,19,22,24,27,28
Top