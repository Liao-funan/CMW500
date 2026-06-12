# Configuring HARQ

Module: LTE Signaling
Source: 02a72cfaf61a4b05.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring HARQ
Configuring HARQ
// *****************************************************************************
// Configure HARQ for the uplink: enable HARQ, allow 4 transmissions,
// use DCI 0 and PHICH.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:HARQ:UL:ENABle ON
CONFigure:LTE:SIGN:CONNection:HARQ:UL:NHT 4
CONFigure:LTE:SIGN:CONNection:HARQ:UL:DPHich D0PHich
// *****************************************************************************
// Configure HARQ for the downlink: enable HARQ, allow 4 transmissions and
// specify user-defined redundancy version sequence.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:HARQ:DL:ENABle ON
CONFigure:LTE:SIGN:CONNection:HARQ:DL:NHT 4
CONFigure:LTE:SIGN:CONNection:HARQ:DL:RVCSequence UDEF
CONFigure:LTE:SIGN:CONNection:HARQ:DL:UDSequence:LENGth 4
CONFigure:LTE:SIGN:CONNection:HARQ:DL:UDSequence 0,0,2,3
Top