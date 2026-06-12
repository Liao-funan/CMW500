# Specifying General Settings

Module: LTE Signaling
Source: 1800476f220c43b8.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Specifying General Settings
Specifying General Settings
// *****************************************************************************
// Select duplex mode FDD for all carriers and automatic SCC activation mode.
// Activate the uplink for SCC1.
// *****************************************************************************
CONFigure:LTE:SIGN:DMODe:UCSPecific OFF
CONFigure:LTE:SIGN:DMODe FDD
CONFigure:LTE:SIGN:SCC:AMODe AUTO
CONFigure:LTE:SIGN:SCC:UUL ON
// *****************************************************************************
// Define the time delay to be compensated in output and input paths.
// *****************************************************************************
CONFigure:LTE:SIGN:RFSettings:EDC:OUTPut 5E-9
CONFigure:LTE:SIGN:RFSettings:EDC:INPut 5E-9
// *****************************************************************************
// Select manual expected nominal power mode and specify the expected power,
// the user margin and the mixer level offset for the PCC.
// Configure the SCC1.
// *****************************************************************************
CONFigure:LTE:SIGN:RFSettings:PCC:ENPMode MANual
CONFigure:LTE:SIGN:RFSettings:PCC:ENPower -25
CONFigure:LTE:SIGN:RFSettings:PCC:UMARgin 3
CONFigure:LTE:SIGN:RFSettings:PCC:MLOFfset 1
CONFigure:LTE:SIGN:RFSettings:SCC:ENPMode MANual
CONFigure:LTE:SIGN:RFSettings:SCC:ENPower -25
CONFigure:LTE:SIGN:RFSettings:SCC:UMARgin 3
CONFigure:LTE:SIGN:RFSettings:SCC:MLOFfset 1
Top