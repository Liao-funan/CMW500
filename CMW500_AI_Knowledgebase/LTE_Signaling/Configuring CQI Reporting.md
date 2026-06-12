# Configuring CQI Reporting

Module: LTE Signaling
Source: 8d13ab54718d4bf1.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring CQI Reporting
Configuring CQI Reporting
// *****************************************************************************
// Enable periodic CQI reporting, set the CSI reporting mode,
// allow simultaneous ACK/NACK and CQI transmission,
// enable PMI/RI reporting and set the cqi-pmi-ConfigIndex for PCC
// and SCC1. Query the reporting period and reporting offset
// resulting for the active duplex mode. 
// *****************************************************************************
CONFigure:LTE:SIGN:CQIReporting:ENABle PER
CONFigure:LTE:SIGN:CQIReporting:CSIRmode S2
CONFigure:LTE:SIGN:CQIReporting:SANCqi ON
CONFigure:LTE:SIGN:CQIReporting:PRIReporting:ENABle ON
CONFigure:LTE:SIGN:CQIReporting:PCC:CINDex:FDD 17
CONFigure:LTE:SIGN:CQIReporting:SCC:CINDex:FDD 13
CONFigure:LTE:SIGN:CQIReporting:PCC:CINDex:TDD 17
CONFigure:LTE:SIGN:CQIReporting:SCC:CINDex:TDD 13
CONFigure:LTE:SIGN:CQIReporting:SCC:CINDex:LAA 13
SENSe:LTE:SIGN:CQIReporting:PCC:RPERiod?
SENSe:LTE:SIGN:CQIReporting:PCC:ROFFset?
SENSe:LTE:SIGN:CQIReporting:SCC:RPERiod?
SENSe:LTE:SIGN:CQIReporting:SCC:ROFFset?
Top