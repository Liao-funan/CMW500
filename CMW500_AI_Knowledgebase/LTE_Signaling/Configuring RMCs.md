# Configuring RMCs

Module: LTE Signaling
Source: 1443d5b6c2d849e2.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring RMCs
Configuring RMCs
The following commands configure the PCC. To configure the SCC number <n>, substitute 
:PCC:
 by 
:SCC<n>:
.
// *****************************************************************************
// Define 3GPP-compliant RMCs with contiguous allocation:
// Select scheduling type, configure DL RMC with 50 RBs and 16-QAM modulation,
// UL RMC with 12 RBs and QPSK modulation. The transport block size index
// is selected automatically.
// Configure the upper end of the cell bandwidth as RB position (not really
// relevant for DL - the 50 RBs use the entire bandwidth).
// Select version 1 of ambiguous RMCs.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:STYPe RMC
CONFigure:LTE:SIGN:CONNection:PCC:MCLuster:UL OFF
CONFigure:LTE:SIGN:CONNection:PCC:RMC:DL N50,Q16,KEEP
CONFigure:LTE:SIGN:CONNection:PCC:RMC:RBPosition:DL HIGH
CONFigure:LTE:SIGN:CONNection:PCC:RMC:UL N12,QPSK,KEEP
CONFigure:LTE:SIGN:CONNection:PCC:RMC:RBPosition:UL HIGH
CONFigure:LTE:SIGN:CONNection:PCC:RMC:VERSion:DL 1
// *****************************************************************************
// Define the same RMC for the second MIMO downlink stream.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:RMC:DL2 N50,Q16,KEEP
CONFigure:LTE:SIGN:CONNection:PCC:RMC:RBPosition:DL2 HIGH
CONFigure:LTE:SIGN:CONNection:PCC:RMC:VERSion:DL2 1
// *****************************************************************************
// Instead of configuring the same settings for stream 1 and stream 2, you can
// apply the stream 1 settings to all streams and skip the "DL2" commands.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:DLEQual ON
// *****************************************************************************
// Configure an UL RMC with multi-cluster allocation instead of
// contiguous allocation.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:MCLuster:UL ON
CONFigure:LTE:SIGN:CONNection:PCC:RMC:MCLuster:UL N3,P0,N42,P6,Q16,T11
Top