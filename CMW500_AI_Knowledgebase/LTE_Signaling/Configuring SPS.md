# Configuring SPS

Module: LTE Signaling
Source: 976cd90f0516464f.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring SPS
Configuring SPS
// *****************************************************************************
// Select the scheduling type and configure twoIntervalsConfig for TDD.
// Configure the periodicity, DL RB allocation and UL RB allocation.
// Query the resulting code rates and expected throughput.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:STYPe SPS
CONFigure:LTE:SIGN:CONNection:PCC:SPS:TIConfig ON
CONFigure:LTE:SIGN:CONNection:PCC:SPS:SINTerval S20
CONFigure:LTE:SIGN:CONNection:PCC:SPS:DL 10,20,QPSK,9
CONFigure:LTE:SIGN:CONNection:PCC:SPS:UL 10,20,QPSK,9
SENSe:LTE:SIGN:CONNection:PCC:SPS:DL:CRATe:ALL?
SENSe:LTE:SIGN:CONNection:PCC:SPS:UL:CRATe:ALL?
SENSe:LTE:SIGN:CONNection:ETHRoughput:DL:ALL?
SENSe:LTE:SIGN:CONNection:ETHRoughput:UL?
Top