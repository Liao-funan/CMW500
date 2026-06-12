# Configuring User-Defined Channels

Module: LTE Signaling
Source: b70a8b625aa24318.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring User-Defined Channels
Configuring User-Defined Channels
// *****************************************************************************
// Specify user-defined channels: Select scheduling type,
// configure DL PCC channel with 15 RBs starting with RB number 12,
// 64-QAM modulation, TBS index 26. UL channel with 12 RBs starting with
// RB number 21, QPSK modulation, TBS index 19.
// Query the resulting maximum expected throughput and the code rate.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:STYPe UDCHannels
CONFigure:LTE:SIGN:CONNection:PCC:UDCHannels:DL1 15,12,Q64,26
CONFigure:LTE:SIGN:CONNection:PCC:UDCHannels:UL 12,21,QPSK,9
SENSe:LTE:SIGN:CONNection:ETHRoughput:UL:PCC?
SENSe:LTE:SIGN:CONNection:ETHRoughput:DL:PCC:STReam1?
SENSe:LTE:SIGN:CONNection:PCC:UDCHannels:UL:CRATe:ALL?
SENSe:LTE:SIGN:CONNection:PCC:UDCHannels:DL1:CRATe:ALL?
// *****************************************************************************
// Define the same user-defined channel for the second MIMO downlink stream.
// Query the resulting maximum expected throughput for that stream and for
// both PCC downlink streams together. Query the code rate.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:UDCHannels:DL2 15,12,Q64,26
SENSe:LTE:SIGN:CONNection:ETHRoughput:DL:PCC:STReam2?
SENSe:LTE:SIGN:CONNection:ETHRoughput:DL:PCC?
SENSe:LTE:SIGN:CONNection:PCC:UDCHannels:DL2:CRATe:ALL?
// *****************************************************************************
// Configure the same user-defined channel for the SCC1.
// Query the code rates for the streams.
// Query the maximum expected throughput for each SCC1 stream, for the sum of
// the SCC1 DL streams and for the sum of all PCC and SCC DL streams.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:SCC:STYPe UDCHannels
CONFigure:LTE:SIGN:CONNection:SCC:UDCHannels:DL1 15,12,Q64,26
CONFigure:LTE:SIGN:CONNection:SCC:UDCHannels:DL2 15,12,Q64,26
CONFigure:LTE:SIGN:CONNection:SCC:UDCHannels:UL 12,21,QPSK,9
SENSe:LTE:SIGN:CONNection:SCC:UDCHannels:DL1:CRATe:ALL?
SENSe:LTE:SIGN:CONNection:SCC:UDCHannels:DL2:CRATe:ALL?
SENSe:LTE:SIGN:CONNection:SCC:UDCHannels:UL:CRATe:ALL?
SENSe:LTE:SIGN:CONNection:ETHRoughput:UL:SCC?
SENSe:LTE:SIGN:CONNection:ETHRoughput:DL:SCC:STReam1?
SENSe:LTE:SIGN:CONNection:ETHRoughput:DL:SCC:STReam2?
SENSe:LTE:SIGN:CONNection:ETHRoughput:DL:SCC?
SENSe:LTE:SIGN:CONNection:ETHRoughput:DL:ALL?
// *****************************************************************************
// Instead of configuring the same settings for stream 1 and stream 2, you can
// apply the stream 1 settings to all streams and skip the "DL2" commands.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:DLEQual ON
CONFigure:LTE:SIGN:CONNection:SCC:DLEQual ON
// *****************************************************************************
// Configure a PCC user-defined channel with multi-cluster allocation instead of
// contiguous allocation.
// *****************************************************************************
CONF:LTE:SIGN:CONNection:PCC:MCLuster:UL ON
CONF:LTE:SIGN:CONNection:PCC:UDCHannels:MCLuster:UL 6,21,9,30,QPSK,9
CONF:LTE:SIGN:CONNection:PCC:MCLuster:DL ON
CONF:LTE:SIGN:CONNection:PCC:UDCHannels:MCLuster:DL #B11100011100011111,Q64,26
Top