# Configuring General Connection Settings Part 1

Module: LTE Signaling
Source: e9ea90ae3a91410e.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring General Connection Settings Part 1
Configuring General Connection Settings Part 1
// *****************************************************************************
// Enable the easy mode and group hopping. Configure the UE category manually.
// Allow UE category 0. Signal IMS emergency call support.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:EASY:BFBW ON
CONFigure:LTE:SIGN:CONNection:GHOPping ON
CONFigure:LTE:SIGN:CONNection:UECategory:MANual 5
CONFigure:LTE:SIGN:CONNection:UECategory:REPorted OFF
CONFigure:LTE:SIGN:CONNection:UECategory:CZALlowed ON
CONFigure:LTE:SIGN:CONNection:IEMergency ON
// *****************************************************************************
// Allow power saving mode. Configure nB. Select default paging cycle,
// additional spectrum emission requirements and filter coefficient.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PSMallowed ON
CONFigure:LTE:SIGN:CONNection:PCNB NBT
CONFigure:LTE:SIGN:CONNection:DPCYcle P128
CONFigure:LTE:SIGN:CONNection:ASEMission NS02
CONFigure:LTE:SIGN:CONNection:SCC:ASEMission:CAGGregation NS03
CONFigure:LTE:SIGN:CONNection:FCOefficient FC4
// *****************************************************************************
// Set connection type and request test mode.
// Query default bearer RLC mode, allowed IP versions, APN and QCI.
// Configure SIB reconfiguration. Disable keeping the RRC connection with a
// timeout of 20 s.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:CTYPe TEST
CONFigure:LTE:SIGN:CONNection:TMODe ON
CONFigure:LTE:SIGN:CONNection:RLCMode?
CONFigure:LTE:SIGN:CONNection:IPVersion?
CONFigure:LTE:SIGN:CONNection:APN?
CONFigure:LTE:SIGN:CONNection:QCI?
CONFigure:LTE:SIGN:CONNection:SIBReconfig RRCReconfig
CONFigure:LTE:SIGN:CONNection:KRRC OFF
CONFigure:LTE:SIGN:CONNection:RITimer 20
// *****************************************************************************
// Enable usage of external DAU and specify network segment and network ID
// of instrument with external DAU.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:EDAU:ENABle ON
CONFigure:LTE:SIGN:CONNection:EDAU:NSEGment A
CONFigure:LTE:SIGN:CONNection:EDAU:NID 5
// *****************************************************************************
// Activate DL padding and insert 10% transport block errors.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:DLPadding ON
CONFigure:LTE:SIGN:CONNection:DLEinsertion 10
Top